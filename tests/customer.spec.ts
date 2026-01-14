import { test, expect } from '@playwright/test';
import { hacerLogin } from '../modules/commons';

let cliente: string;
test.describe.serial('Suite serial', () => {
  test('Dar de alta un nuevo Cliente', async ({ page }) => {
    await hacerLogin(page);

    //Creamos número aleatoria para añadirlo al email, ya que no peude haber clientes con el mismo email
    const min: number = 1000;
    const max: number = 9999;
    const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;

    await page.locator('//a[text()="New Customer"]').click();

    //Rellenamos formulario de alta de cliente
    await page.locator('//input[@name="name"]').fill('Ana Maria');
    await page.locator('//input[@name="rad1"]').nth(1).click();
    await page.locator('#dob').fill('2000-02-02');
    await page.locator('//textarea[@name="addr"]').fill('Calle Mayor 12');
    await page.locator('//input[@name="city"]').fill('Madrid');
    await page.locator('//input[@name="state"]').fill('Spain');
    await page.locator('//input[@name="pinno"]').fill('123456');
    await page.locator('//input[@name="telephoneno"]').fill('665222555');
    await page.locator('//input[@name="emailid"]').fill('prueba' + randomNumber + '@p.com');
    await page.locator('//input[@name="password"]').fill('dfsadr43rwe');

    await page.locator('//input[@name="sub"]').click();

    //Verificamos mensaje de éxito de alta de cliente
    await page.locator('//table[@id="customer"]//p[@class="heading3"]').waitFor();
    await expect(page.locator('//table[@id="customer"]//p[@class="heading3"]'), 'No se encontró el mensaje esperado').toContainText('Customer Registered Successfully!!!');

    cliente = await page.locator('//table[@id="customer"]//td[text()="Customer ID"]/following-sibling::td').innerText();
    console.log("CLIENTE " + cliente);

  });

  test('Eliminar Cliente', async ({ page }) => {
    await hacerLogin(page);

    await page.locator('//a[text()="Delete Customer"]').click();
    await page.locator('//input[@name="cusid"]').fill(cliente);
    await page.locator('//input[@name="AccSubmit"]').click();
    await page.waitForTimeout(20000);
  });

});