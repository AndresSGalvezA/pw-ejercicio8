const { test, expect } = require('@playwright/test');

test('login exitoso', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Correo').fill('demo@demo.com');
  await page.getByLabel('Contraseña').fill('123456');
  await page.getByRole('button', { name: 'Entrar' }).click();

  await expect(page.getByText('Bienvenido Carlos')).toBeVisible();
});

test('login fallido', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Correo').fill('demo@demo.com');
  await page.getByLabel('Contraseña').fill('mala');
  await page.getByRole('button', { name: 'Entrar' }).click();

  await expect(page.getByText('Credenciales inválidas')).toBeVisible();
});