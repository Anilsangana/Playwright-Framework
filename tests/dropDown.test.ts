import { test } from "@playwright/test";

test("Javascript Dropdowns", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.selectOption("#select-demo", {
    label: "Monday",
  });
  await page.selectOption("#multi-select", [
    { label: "Florida" },
    {
      index: 3,
    },
    {
      value: "Ohio",
    },
  ]);
  await page.waitForTimeout(3000);
});

test("Bootstrap dropdowns", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );
  await page.locator("[id=country]+span").click();
  await page
    .locator("#select2-country-results", {
      has: page.locator("li", { hasText: "Australia" }),
    })
    .click();
});
