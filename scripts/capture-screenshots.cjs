const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUT_DIR = path.join(__dirname, "..", "public", "projects");

const targets = [
  { slug: "onesign", url: "https://onesigntv.com", ext: "jpg" },
  { slug: "ukilai", url: "https://ukilai.vercel.app", ext: "png" },
  {
    slug: "diagnostic-center",
    url: "https://diagnostic-center-website-omega.vercel.app",
    ext: "jpg",
  },
  { slug: "inventivelab", url: "https://inventivelab.bd", ext: "png" },
  { slug: "viable", url: "https://viable.inventivelab.bd", ext: "png" },
  {
    slug: "pets-delight",
    url: "https://petdelight.inventivelab.bd",
    ext: "png",
  },
  { slug: "chilirig-hero", url: "https://chilirig.vercel.app", ext: "png" },
  {
    slug: "invoice-management",
    url: "https://invoice-management-system-three-chi.vercel.app",
    ext: "png",
  },
  { slug: "bus-mgt-login", url: "https://bus-mgt-system.vercel.app/login", ext: "png" },
  { slug: "auth-basement", url: "https://auth-basement.vercel.app", ext: "png" },
  { slug: "saas-basement", url: "https://saas-basement.vercel.app", ext: "png" },
  { slug: "moneylogger", url: "https://moneylogger.vercel.app", ext: "png" },
  {
    slug: "shahjalal-fabricators",
    url: "https://shahjalal-fabricators.vercel.app",
    ext: "png",
  },
  {
    slug: "quizmaster",
    url: "https://quizmaster-liard-six.vercel.app",
    ext: "png",
  },
  {
    slug: "customecom",
    url: "https://ecommerce-sand-gamma-74.vercel.app/shop",
    ext: "png",
  },
  {
    slug: "krunch-pos",
    url: "https://krunch-xi.vercel.app/pos",
    ext: "png",
  },
];

async function captureOne(browser, { slug, url, ext = "png", waitForImg }) {
  const outPath = path.join(OUT_DIR, `${slug}.${ext}`);
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  try {
    await page.goto(url, {
      waitUntil: waitForImg ? "networkidle" : "domcontentloaded",
      timeout: 120000,
    });
    if (waitForImg) {
      await page.waitForFunction(
        (sel) => {
          const img = document.querySelector(sel);
          return img && img.complete && img.naturalWidth > 200;
        },
        waitForImg,
        { timeout: 90000 },
      );
    }
    await page.waitForTimeout(waitForImg ? 1500 : 2500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.keyboard.press("Escape").catch(() => {});
    await page.screenshot({
      path: outPath,
      type: ext === "jpg" ? "jpeg" : "png",
      quality: ext === "jpg" ? 82 : undefined,
    });
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
    const batchResults = await Promise.all(
      batch.map((t) => captureOne(browser, t)),
    );
    results.push(...batchResults);
  }

  await browser.close();

  const failed = results.filter((r) => !r.ok);
  console.log(
    `\nDone: ${results.length - failed.length}/${results.length} succeeded`,
  );
  if (failed.length) {
    console.log("Failed:", failed.map((f) => f.slug).join(", "));
    process.exitCode = 1;
  }
}

main();
