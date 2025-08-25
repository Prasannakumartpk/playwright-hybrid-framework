import { test, expect } from '@playwright/test';

test('Handle dialogs', async ({ page }) => {
  // Listen to the dialog event
  page.on('dialog', async (dialog) => {
    console.log(`Dialog type: ${dialog.type()}`);
    console.log(`Dialog message: ${dialog.message()}`);

    if (dialog.type() === 'prompt') {
      await dialog.accept('Playwright input'); // Provide input for prompt
    } else if (dialog.type() === 'confirm') {
      await dialog.accept(); // Or await dialog.dismiss();
    } else {
      await dialog.accept(); // Alerts can only be accepted
    }
  });

  // Triggering dialogs
  await page.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert');
  // Example trigger: await page.click('#alertButton');
});
