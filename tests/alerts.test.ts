import { test } from "@playwright/test";

test("Alerts", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);
    if (alert.type() === "alert") {
      await alert.accept();
    } else if (alert.type() === "confirm") {
      await alert.accept();
    } else if (alert.type() === "prompt") {
      await alert.accept("Anil");
    }
  });

  await page
    .getByText("JavaScript Alerts")
    .getByRole("button", { name: "Click Me", exact: true })
    .click();
  await page
    .getByText("Confirm box:")
    .getByRole("button", { name: "Click Me", exact: true })
    .click();
  await page
    .getByText("Prompt box:")
    .getByRole("button", { name: "Click Me", exact: true })
    .click();
});
