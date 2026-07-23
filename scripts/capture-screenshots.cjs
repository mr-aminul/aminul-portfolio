const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUT_DIR = path.join(__dirname, "..", "public", "projects");

const targets = [
  { slug: "onesign", url: "https://onesigntv.com" },
  { slug: "ukilai", url: "https://ukilai.vercel.app" },
  { slug: "diagnostic-center", url: "https://diagnostic-center-website-omega.vercel.app" },
  { slug: "inventivelab", url: "https://inventivelab-website.vercel.app" },
  { slug: "invoice-management", url: "https://invoice-management-system-three-chi.vercel.app" },
  { slug: "auth-basement", url: "https://auth-basement.vercel.app" },
  { slug: "saas-basement", url: "https://saas-basement.vercel.app" },
  { slug: "quizmaster", url: "https://quizmaster-liard-six.vercel.app" },
  { slug: "verdana-plant-shop", url: "https://verdana-plant-shop.vercel.app" },
  { slug: "chilirig", url: "https://chilirig.vercel.app" },
];

async function captureOne(browser, { slug, url }) {
  const outPath = path.join(OUT_DIR, `${slug}.png`);
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(2500);
    await page.keyboard.press("Escape").catch(() => {});
    await page.screenshot({ path: outPath, type: "png" });
    const stats = fs.statSync(outPath);
    console.log(`OK  ${slug} (${Math.round(stats.size / 1024)}kb) ← ${url}`);
    return { slug, ok: true };
  } catch (error) {
    console.error(`FAIL ${slug}: ${error.message}`);
    return { slug, ok: false, error: error.message };
  } finally {
    await context.close();
  }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  const results = [];
  for (let i = 0; i < targets.length; i += 3) {
    const batch = targets.slice(i, i + 3);
    const batchResults = await Promise.all(batch.map((t) => captureOne(browser, t)));
    results.push(...batchResults);
  }

  await browser.close();

  const failed = results.filter((r) => !r.ok);
  console.log(`\nDone: ${results.length - failed.length}/${results.length} succeeded`);
  if (failed.length) {
    console.log("Failed:", failed.map((f) => f.slug).join(", "));
    process.exitCode = 1;
  }
}

main();
