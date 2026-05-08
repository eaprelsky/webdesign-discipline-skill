#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const target = process.argv[2];

if (!target) {
  console.error("Usage: node scripts/audit-html-css.mjs <html-file-or-url>");
  process.exit(2);
}

const isUrl = /^https?:\/\//i.test(target);

async function readTarget(input) {
  if (isUrl) {
    const response = await fetch(input);
    if (!response.ok) throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
    return { html: await response.text(), baseDir: null };
  }

  const abs = path.resolve(input);
  return { html: fs.readFileSync(abs, "utf8"), baseDir: path.dirname(abs) };
}

function strip(html) {
  return html.replace(/<!--[\s\S]*?-->/g, "").replace(/<script[\s\S]*?<\/script>/gi, "");
}

function count(re, text) {
  return [...text.matchAll(re)].length;
}

function collectCss(html, baseDir) {
  const css = [];
  for (const match of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    css.push({ source: "inline <style>", text: match[1] });
  }
  if (!baseDir) return css;

  for (const match of html.matchAll(/<link\b[^>]*rel=["']?stylesheet["']?[^>]*>/gi)) {
    const href = match[0].match(/\bhref=["']([^"']+)["']/i)?.[1];
    if (!href || /^https?:\/\//i.test(href) || href.startsWith("//")) continue;
    const cssPath = path.resolve(baseDir, href.split(/[?#]/)[0]);
    if (fs.existsSync(cssPath)) css.push({ source: path.relative(baseDir, cssPath), text: fs.readFileSync(cssPath, "utf8") });
  }
  return css;
}

function reportLine(level, message) {
  return `- ${level}: ${message}`;
}

const { html, baseDir } = await readTarget(target);
const clean = strip(html);
const cssFiles = collectCss(clean, baseDir);
const cssText = cssFiles.map((item) => `/* ${item.source} */\n${item.text}`).join("\n");

const findings = [];
const h1Count = count(/<h1\b/gi, clean);
if (h1Count !== 1) findings.push(reportLine("warn", `Expected exactly one h1, found ${h1Count}.`));
if (!/<main\b/i.test(clean)) findings.push(reportLine("warn", "Missing <main> landmark."));
if (!/<nav\b/i.test(clean)) findings.push(reportLine("info", "No <nav> landmark found."));
if (!/<title\b[^>]*>[^<]+<\/title>/i.test(clean)) findings.push(reportLine("warn", "Missing non-empty <title>."));
if (!/<meta\b[^>]*name=["']description["']/i.test(clean)) findings.push(reportLine("info", "Missing meta description."));
if (!/<link\b[^>]*rel=["']canonical["']/i.test(clean)) findings.push(reportLine("info", "Missing canonical link."));

const headingLevels = [...clean.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
for (let i = 1; i < headingLevels.length; i += 1) {
  if (headingLevels[i] - headingLevels[i - 1] > 1) {
    findings.push(reportLine("warn", `Heading order jumps from h${headingLevels[i - 1]} to h${headingLevels[i]}.`));
    break;
  }
}

for (const match of clean.matchAll(/<img\b[^>]*>/gi)) {
  if (!/\balt=["'][^"']*["']/i.test(match[0])) findings.push(reportLine("warn", "Image missing alt attribute."));
}

for (const match of clean.matchAll(/<input\b[^>]*>/gi)) {
  const input = match[0];
  const type = input.match(/\btype=["']?([^"'\s>]+)/i)?.[1]?.toLowerCase() ?? "text";
  if (["hidden", "submit", "button", "reset"].includes(type)) continue;
  const id = input.match(/\bid=["']([^"']+)["']/i)?.[1];
  const hasAria = /\baria-label=|\baria-labelledby=/i.test(input);
  const hasLabel = id ? new RegExp(`<label\\b[^>]*for=["']${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`, "i").test(clean) : false;
  if (!hasAria && !hasLabel) findings.push(reportLine("warn", "Input may be missing an accessible label."));
}

for (const match of clean.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/gi)) {
  const text = match[1].replace(/<[^>]+>/g, "").trim();
  const hasName = text || /\baria-label=|\baria-labelledby=|\btitle=/i.test(match[0]);
  if (!hasName) findings.push(reportLine("warn", "Button may be missing accessible name."));
}

if (/onclick=/i.test(clean) && /<div\b[^>]*onclick=/i.test(clean)) findings.push(reportLine("warn", "Clickable div detected; use button/link semantics where possible."));
if (/font-size\s*:\s*[^;]*vw/i.test(cssText)) findings.push(reportLine("warn", "Viewport-width font sizing detected; prefer type steps and responsive layout."));
if (/\bwidth\s*:\s*100vw\b/i.test(cssText)) findings.push(reportLine("warn", "100vw width detected; can create horizontal overflow with scrollbars."));
if (/(^|[;{}\s])(width|min-width)\s*:\s*[4-9]\d{2,}px/i.test(cssText)) findings.push(reportLine("info", "Large fixed width detected; verify mobile behavior."));
if (/(^|[;{}\s])height\s*:\s*[4-9]\d{2,}px/i.test(cssText)) findings.push(reportLine("info", "Large fixed height detected; verify clipping and responsive behavior."));
if (/outline\s*:\s*none/i.test(cssText) && !/focus-visible/i.test(cssText)) findings.push(reportLine("warn", "outline:none found without focus-visible replacement."));
if (!/prefers-reduced-motion/i.test(cssText) && /animation\s*:|transition\s*:/i.test(cssText)) findings.push(reportLine("info", "Motion detected without prefers-reduced-motion rule."));

// Accessibility: <html lang="..."> required for assistive tech and SEO.
const htmlTagMatch = clean.match(/<html\b[^>]*>/i);
if (htmlTagMatch && !/\blang=["'][^"']+["']/i.test(htmlTagMatch[0])) {
  findings.push(reportLine("warn", "Missing lang attribute on <html>; assistive tech and SEO need it."));
}

// Accessibility: tabindex greater than 0 disrupts natural tab order.
for (const match of clean.matchAll(/\btabindex=["']?(-?\d+)["']?/gi)) {
  const value = Number(match[1]);
  if (value > 0) {
    findings.push(reportLine("warn", `tabindex="${value}" detected; values > 0 break natural tab order.`));
    break;
  }
}

// Accessibility: aria-hidden="true" on focusable element hides it from AT but keeps it in tab order.
const focusableTagPattern = /<(button|a|input|select|textarea)\b[^>]*aria-hidden=["']?true["']?[^>]*>/gi;
if (focusableTagPattern.test(clean)) {
  findings.push(reportLine("warn", "aria-hidden=\"true\" on a focusable element; remove the element from tab order or remove aria-hidden."));
}
const tabbableHidden = /<[^>]+\btabindex=["']?0["']?[^>]*aria-hidden=["']?true["']?/i;
if (tabbableHidden.test(clean)) {
  findings.push(reportLine("warn", "Element with tabindex=\"0\" is also aria-hidden; conflicting state."));
}

// Accessibility: role="button" on non-button must be implemented with keyboard handlers.
for (const match of clean.matchAll(/<(div|span|a)\b[^>]*\brole=["']button["'][^>]*>/gi)) {
  const tag = match[1].toLowerCase();
  if (tag === "a") {
    findings.push(reportLine("info", "<a role=\"button\">; consider <button> if the action does not navigate."));
  } else {
    findings.push(reportLine("warn", `<${tag} role="button">; ensure keyboard handlers (Enter/Space) and focusability or use <button>.`));
  }
}

// Accessibility: form fields with sibling .error/[role="alert"] should reference it via aria-describedby.
const errorAssocChecked = new Set();
for (const match of clean.matchAll(/<(input|select|textarea)\b[^>]*>/gi)) {
  const tag = match[0];
  const id = tag.match(/\bid=["']([^"']+)["']/i)?.[1];
  if (!id || errorAssocChecked.has(id)) continue;
  errorAssocChecked.add(id);
  const hasDescribedBy = /\baria-describedby=/i.test(tag);
  const errorNearby = new RegExp(
    `id=["']${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'][\\s\\S]{0,500}?(class=["'][^"']*error|role=["']alert["'])`,
    "i"
  );
  if (!hasDescribedBy && errorNearby.test(clean)) {
    findings.push(reportLine("info", `Field id="${id}" has nearby error/alert but no aria-describedby; link them for screen readers.`));
  }
}

console.log(`# HTML/CSS Audit\n`);
console.log(`Target: ${target}`);
console.log(`CSS sources: ${cssFiles.map((item) => item.source).join(", ") || "none/local unavailable"}\n`);
console.log(findings.length ? findings.join("\n") : "- pass: No obvious static issues found.");
