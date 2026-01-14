import { Page, expect } from '@playwright/test';

export async function hacerLogin(page : Page){
  await page.goto('https://demo.guru99.com/V4/');

  //Plantea un caso de prueba positivo (credenciales correctas).
  await page.locator('input[name=uid]').fill('mngr651952');
  await page.locator('input[name=password]').fill('zYtabYm');
  
  await page.locator('input[name=btnLogin]').click();
  await expect(page.locator('.heading3 td'), 'No se encontró el mensaje esperado').toContainText('Manger Id : mngr651952');
  

}