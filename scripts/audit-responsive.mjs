#!/usr/bin/env node
const target = process.argv[2];

if (!target) {
  console.error("Usage: node scripts/audit-responsive.mjs <url>");
  process.exit(2);
}

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error("Playwright is required. Install it in the project with: npm i -D playwright");
  process.exit(2);
}

const viewports = [
  { name: "mobile-small", width: 375, height: 667 },
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
  { name: "desktop-wide", width: 1440, height: 900 },
];

const browser = await chromium.launch();
const findings = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  await page.goto(target, { waitUntil: "networkidle", timeout: 30000 });
  const result = await page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const horizontalOverflow = Math.max(doc.scrollWidth, body?.scrollWidth ?? 0) > window.innerWidth + 1;
    const clipped = [];
    const selectors = "button, a, input, select, textarea, h1, h2, h3, [role='button'], [role='tab'], [role='menuitem']";
    for (const el of document.querySelectorAll(selectors)) {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) continue;
      const style = getComputedStyle(el);
      if (style.visibility === "hidden" || style.display === "none") continue;
      if (rect.right > window.innerWidth + 1 || rect.left < -1) {
        clipped.push((el.textContent || el.getAttribute("aria-label") || el.tagName).trim().slice(0, 80));
      }
    }
    return {
      horizontalOverflow,
      scrollWidth: Math.max(doc.scrollWidth, body?.scrollWidth ?? 0),
      viewportWidth: window.innerWidth,
      clipped: clipped.slice(0, 10),
      activeLandmarks: {
        main: document.querySelectorAll("main").length,
        nav: document.querySelectorAll("nav").length,
        h1: document.querySelectorAll("h1").length,
      },
    };
  });

  if (result.horizontalOverflow) findings.push(`- warn: ${viewport.name} has horizontal overflow (${result.scrollWidth}px > ${result.viewportWidth}px).`);
  for (const item of result.clipped) findings.push(`- warn: ${viewport.name} element may be clipped horizontally: ${item || "(empty text)"}`);
  if (consoleErrors.length) findings.push(`- info: ${viewport.name} console/page errors: ${consoleErrors.slice(0, 3).join(" | ")}`);
  if (result.activeLandmarks.h1 !== 1) findings.push(`- warn: ${viewport.name} expected one h1, found ${result.activeLandmarks.h1}.`);
  await page.close();
}

await browser.close();

console.log("# Responsive Audit\n");
console.log(`Target: ${target}\n`);
console.log(findings.length ? findings.join("\n") : "- pass: No obvious responsive issues found.");
