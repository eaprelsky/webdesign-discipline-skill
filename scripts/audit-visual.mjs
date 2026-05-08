#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const target = process.argv[2];
const outDir = process.argv[3] || "tmp/web-design-visual-audit";

if (!target) {
  console.error("Usage: node scripts/audit-visual.mjs <url> [out-dir]");
  process.exit(2);
}

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error("Playwright is required. Install it in the project with: npm i -D playwright");
  process.exit(2);
}

fs.mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 900 },
];

function overlaps(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

const browser = await chromium.launch();
const findings = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  await page.goto(target, { waitUntil: "networkidle", timeout: 30000 });
  await page.screenshot({ path: path.join(outDir, `${viewport.name}.png`), fullPage: true });

  const result = await page.evaluate(() => {
    const items = [];
    const selector = "h1, h2, h3, p, button, a, input, select, textarea, [role='button'], [role='tab'], .card, [class*='card']";
    for (const el of document.querySelectorAll(selector)) {
      const rect = el.getBoundingClientRect();
      const style = getComputedStyle(el);
      if (!rect.width || !rect.height || style.visibility === "hidden" || style.display === "none") continue;
      if (rect.bottom < 0 || rect.top > window.innerHeight * 2) continue;
      items.push({
        label: (el.textContent || el.getAttribute("aria-label") || el.tagName).trim().slice(0, 80),
        tag: el.tagName.toLowerCase(),
        left: rect.left,
        right: rect.right,
        top: rect.top,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height,
      });
    }
    const tinyText = [];
    for (const el of document.querySelectorAll("p, li, label, button, a, input, textarea, select")) {
      const style = getComputedStyle(el);
      const size = Number.parseFloat(style.fontSize);
      if (size && size < 11) tinyText.push((el.textContent || el.getAttribute("aria-label") || el.tagName).trim().slice(0, 80));
    }
    return { items, tinyText: tinyText.slice(0, 10) };
  });

  for (let i = 0; i < result.items.length; i += 1) {
    for (let j = i + 1; j < result.items.length; j += 1) {
      const a = result.items[i];
      const b = result.items[j];
      if (!overlaps(a, b)) continue;
      const xOverlap = Math.min(a.right, b.right) - Math.max(a.left, b.left);
      const yOverlap = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
      if (xOverlap > 8 && yOverlap > 8) {
        findings.push(`- info: ${viewport.name} possible overlap: "${a.label || a.tag}" with "${b.label || b.tag}".`);
        if (findings.length > 40) break;
      }
    }
    if (findings.length > 40) break;
  }

  for (const item of result.tinyText) findings.push(`- info: ${viewport.name} very small text candidate: ${item || "(empty text)"}`);
  await page.close();
}

await browser.close();

console.log("# Visual Audit\n");
console.log(`Target: ${target}`);
console.log(`Screenshots: ${path.resolve(outDir)}\n`);
console.log(findings.length ? findings.slice(0, 60).join("\n") : "- pass: No obvious visual heuristic issues found.");
