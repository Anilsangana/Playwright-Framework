import test, { expect } from "@playwright/test";

test("Interact with multiple tabs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );
  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByRole("link", { name: "  Follow On Twitter " }).click(),
  ]);

  console.log(newWindow.url());

  const [multipleTabs] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator('[id="followboth"]').click(),
  ]);
  const tabs = multipleTabs.context().pages();

  tabs.forEach((tab) => {
    console.log(tab.url());
  });
  for (const element of tabs) {
    if (element.url() === "https://www.facebook.com/lambdatest/") {
      await expect(page.locator('a>[dir="auto"]')).toHaveText(
        "Forgotten password?"
      );
    }
  }
});
