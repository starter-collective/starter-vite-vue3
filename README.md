# Vite + Vue 3 Starter Template

[![Version](https://img.shields.io/github/v/release/starter-collective/starter-vite-vue3?style=flat&label=released&color=%2309090b)](https://github.com/starter-collective/starter-vite-vue3/releases)

Vite + Vue 3 SPA Starter Template, supports I18n, UnoCSS, Axios, File Routing and API auto-import.

- [Live Demo](https://starter-vite-vue3.netlify.app/)
- [Play on Stackblitz](https://stackblitz.com/github/starter-collective/starter-vite-vue3)

## Features

- [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [UnoCSS](https://github.com/antfu/unocss), [Pinia](https://pinia.vuejs.org/), [TypeScript](https://www.typescriptlang.org/) - The latest web develop stack.
- File-based [routing](./src/pages) and [layout](./src/layouts) system, it's automatic.
- [Components](https://github.com/antfu/unplugin-vue-components), [API](https://github.com/antfu/unplugin-auto-import) and `src` directories are auto importing.
- Out-of-the-box network requests, based on [Axios](https://axios-http.com/).
- Use [SVG icons](https://github.com/antfu/unocss/tree/main/packages/preset-icons) from any icon sets with classes.
- [I18n](./locales) ready, and supports automatic import of translated files.
- Unit Testing with [Vitest](https://github.com/vitest-dev/vitest).
- Deploy on [Netlify](https://app.netlify.com/) with zero-config, supports other deployment methods as well.

## Usage

[Create a repo](https://github.com/starter-collective/starter-vite-vue3/generate) from this template on GitHub.

```bash
git clone <git remote url>
```

Install dependencies.

```bash
cd starter-vite-vue3 # Or your project directory

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

Just run and visit http://localhost:9865.

```bash
pnpm dev
```

To build the App, you can run:

```bash
pnpm build
```

You will then see the `dist` folder generated for publishing, which you can preview locally with the following command.

```bash
pnpm preview
```

## Clean Template

If you prefer to do it manually with the cleaner git history:

```bash
npx degit starter-collective/starter-vite-vue3 starter-vite-vue3

cd starter-vite-vue3

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

When you use this template, try follow the checklist to update your info properly:

- [ ] Change the browser title in `src/locales/*.json` and `.env`.
- [ ] Change the favicon and logo icon in `public`.

## License

[MIT License](./LICENSE) © 2024-PRESENT [Kieran Wang](https://github.com/kieranwv/)
