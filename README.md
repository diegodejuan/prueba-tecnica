# Prueba técnica — Proyecto Playwright

Este repositorio contiene una configuración mínima para ejecutar tests con Playwright.

## Contenido
- `package.json` — manifiesto del proyecto (scripts y dependencias).
- `playwright.config.ts` — configuración de Playwright.
- `tests/` — carpeta con tests de ejemplo (por ejemplo `tests/example.spec.ts`).
- `.github/workflows/playwright.yml` — workflow de GitHub Actions para ejecutar tests en CI.

## Requisitos
- Node.js 18+ (recomendado).
- npm (viene con Node.js) o pnpm/yarn si prefieres.
- Conexión a Internet para descargar dependencias y navegadores de Playwright.

## Instalación
Desde la raíz del proyecto:

```bash
# Instala dependencias
npm install

# Instala los navegadores y herramientas requeridas por Playwright
npx playwright install --with-deps
```

En Windows (WSL o Git Bash), los mismos comandos funcionan en la mayoría de los casos.

## Ejecutar los tests
- Ejecutar todos los tests:

```bash
npx playwright test
```

- Ejecutar un test específico (por ejemplo `tests/customer.spec.ts`):

```bash
npx playwright test tests/customer.spec.ts
```

- Ejecutar con un solo worker (forzar ejecución secuencial):

```bash
npx playwright test --workers=1
# o
npx playwright test -w 1
```

- Ejecutar con un script npm (opcional):

Añade en `package.json`:

```json
"scripts": {
  "test": "playwright test"
}
```

Luego:

```bash
npm test
```

## GitHub Actions (CI) y ejecución programada
El workflow `/.github/workflows/playwright.yml` está configurado para ejecutar los tests en cada `push`/`pull_request` y también puede programarse con `cron`.

- Para ejecutar los tests diariamente a las 03:00 (UTC), el workflow incluye:

```yaml
on:
  schedule:
    - cron: '0 3 * * *'
  workflow_dispatch: {}
```

Ten en cuenta que GitHub Actions usa UTC; ajusta la hora si quieres tu huso horario local.
