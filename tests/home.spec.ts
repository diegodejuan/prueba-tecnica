import { test, expect } from '@playwright/test';

test('Título de la página correcto', async ({ page }) => {
  await page.goto('https://demo.guru99.com/V4/');

  //Verifica que el título de la página sea correcto (Guru99 Bank).
  await expect(page).toHaveTitle("Guru99 Bank Home Page");
});


