import { chromium, test } from "@playwright/test";

test("Login test demo", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page
    .locator('a[data-toggle="dropdown"] > div > span', {
      hasText: "My account",
    })
    .hover();

  await page.click("text=Login");
  await page.fill('[name="email"]', "koushik350@gmail.com");
  await page.fill('[name="password"]', "Pass123$");
  await page.click('[value="Login"]');
  await page.waitForTimeout(5000);
});
