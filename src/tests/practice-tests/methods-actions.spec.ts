import{test, expect} from '@playwright/test';

test('', async({page})=>{

await page.goto("URL"); // Navigate or browse the URL.

await page.locator("").fill("Text"); // Enter text into the field

await page.locator("").pressSequentially("Text"); // Enter text character by character into the field.

    /* Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape, ArrowDown, End, Enter, Home
    Insert, PageDown, PageUp, ArrowRight, ArrowLift, F1, F2, Digit0 - Gigit9, KeyA - KeyZ */
await page.locator("").press("Enter"); // It Accepts logical key names(Keyboard Actions)

await page.locator("").click(); // Single click

await page.locator("").dblclick(); // Double Click

    // Right Click / Context Click
await page.locator("").click({button:'right'});
await page.locator("").click({button:'middle'});
await page.locator("").click({button:'left'});

    // Radio Button or Check Boxes
await page.locator("#terms").check();
await page.locator("#terms").uncheck();

    // Drop Down - By using Visible Text, Value, Index and Label    
await page.locator("#country").selectOption({ label: "India" });
await page.locator("#country").selectOption({ value: "IN" });
await page.locator("#country").selectOption({ index: 2 });
await page.locator("#skills").selectOption(["JavaScript", "Python"]);



    
})