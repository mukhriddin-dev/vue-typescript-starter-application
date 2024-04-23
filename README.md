# Vue+TS starter Application

This template should help get you started developing with Vue 3 in Vite.

<img src="./public/readme.png" />

## Folder structure

```
```
└── 📁src
    └── App.vue
    └── 📁assets
        └── base.css
        └── 📁fonts
        └── 📁images
        └── index.ts
        └── logo.svg
        └── main.css
    └── 📁components
        └── 📁__tests__
            └── HelloWorld.spec.ts
        └── 📁containers
            └── index.ts
        └── 📁icons
            └── IconCommunity.vue
            └── IconDocumentation.vue
            └── IconEcosystem.vue
            └── IconSupport.vue
            └── IconTooling.vue
            └── index.ts
        └── index.ts
        └── 📁ui
            └── index.ts
    └── 📁composables
        └── index.ts
    └── 📁constants
        └── index.ts
    └── 📁helpers
        └── index.ts
    └── 📁layouts
        └── 📁auth
            └── index.vue
            └── style.scss
        └── 📁dashboard
            └── index.vue
            └── style.scss
        └── index.ts
    └── main.ts
    └── 📁middleware
        └── index.ts
    └── 📁plugins
        └── index.ts
    └── 📁router
        └── index.ts
    └── 📁services
        └── config.ts
        └── index.ts
        └── 📁post
            └── index.ts
        └── readme.md
    └── 📁stores
        └── counter.ts
        └── index.ts
    └── 📁templates
        └── index.ts
    └── 📁types
        └── 📁enums
            └── index.ts
        └── index.ts
        └── 📁interfaces
            └── index.ts
        └── 📁models
            └── index.ts
        └── 📁types
            └── index.ts
    └── 📁utils
        └── 📁dev-tool
            └── index.vue
        └── index.ts
        └── 📁use-mutation
            └── index.ts
    └── 📁views
        └── 📁home
            └── index.vue
        └── index.ts
```
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
