import { test, expect } from '@playwright/test';
import { hacerLogin } from '../modules/commons';

test('Título de la página correcto', async ({ page }) => {
  await page.goto('https://demo.guru99.com/V4/');

  //Verifica que el título de la página sea correcto (Guru99 Bank).
  await expect(page).toHaveTitle("Guru99 Bank Home Page");
});

test('Limpiar campos de usuario y password al pulsar RESET', async ({ page }) => {
  await page.goto('https://demo.guru99.com/V4/');

  //Comprueba que el botón reset cumple su cometido.
  await page.locator('input[name=uid]').fill('Texto');
  await page.locator('input[name=password]').fill('Pass');
  
  await page.locator('input[name=btnReset]').click();
  await page.waitForTimeout(10000);
});

test('Hacer LOGIN con credenciales correctas', async ({ page }) => {
  await hacerLogin(page);
});
