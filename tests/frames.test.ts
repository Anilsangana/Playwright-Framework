import test from "@playwright/test";

test("Interact with Iframes", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const noOfFrames = page.frames();

  console.log(`No of frames: ${noOfFrames.length}`);

  const iframe = page.frameLocator("#firstFr");

  await iframe?.locator('input[name="fname"]').fill("Anil");
  await iframe?.locator('input[name="lname"]').fill("Sangana");
  const innerFrame = iframe.frameLocator('iframe[src="innerframe"]');
  await innerFrame.locator('input[name="email"]').scrollIntoViewIfNeeded;
  await innerFrame
    .locator('input[name="email"]')
    .fill("anilsangana4@gmail.com");

  await page.waitForTimeout(3000);
});
