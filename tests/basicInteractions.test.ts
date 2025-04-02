import { expect, test } from "@playwright/test";

test("Interactions", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );

  const messageInput = page.locator("input#user-message");
  await messageInput.scrollIntoViewIfNeeded();
  await expect(messageInput).toHaveAttribute(
    "placeholder",
    "Please enter your Message"
  );
  await messageInput.fill("Anil");
  console.log(await messageInput.inputValue());
  await expect(messageInput).toHaveValue("Anil");
});
test("Sum", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  const sumValue1 = page.locator("#sum1");
  const sumValue2 = page.locator("#sum2");
  const getValuesBtn = page.getByRole("button", { name: "Get Sum" });
  const firstValue = 43;
  const secondValue = 43;
  await sumValue1.fill(firstValue.toString());
  await sumValue2.fill(secondValue.toString());
  await getValuesBtn.click();
  await expect(page.locator("#addmessage")).toHaveText(firstValue + "");
});
test.only("Checkbox interactions", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  const singleCheckbox = page.locator("#isAgeSelected");
  await expect(singleCheckbox).not.toBeChecked();
  await singleCheckbox.check();
  await expect(singleCheckbox).toBeChecked();
});
