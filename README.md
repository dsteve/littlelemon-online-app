# Coursera Meta Frontend developer Certification / Capstone project / Little lemon online app

This project intends to validates the use of html, css, javascript in a limited test application.
https://www.coursera.org/learn/meta-front-end-developer-capstone



# Use of Vite as the project build tooling

The project uses Vite with plugin-react as the UI component framework and plugin-tailwindcss as the CSS framework.

Vite has been preferred to Webpack as integration with Tailwind is more straightforward.

[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

```
npm create vite@latest little-lemon-online-app --template react
```

```
npm install tailwindcss @tailwindcss/vite
```

Add the @tailwindcss/vite plugin to the Vite configuration, vite.config.js
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

# Configuration of VS Code

- Install the Tailwind CSS IntelliSense plugin

- Add the tailwindcss plugin to prettier in order to improve the sorting of tailwindcss classes.

    1/ Install prettier-plugin-tailwindcss as a dev-dependency
  ```
  npm install -D prettier prettier-plugin-tailwindcss
  ```
  2/ Add the plugin to the Prettier configuration (.prettierrc)
  ```
  // .prettierrc
  {
    "plugins": ["prettier-plugin-tailwindcss"]
  }
  ```
From more details, see https://github.com/tailwindlabs/prettier-plugin-tailwindcss

# Project source code structure

Use of alias-based absolute import available with Vite.
Option to setup aliases in Vite configuration file vite.config.js

```
import path from "path";
import { fileURLToPath } from "url";
// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

    resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
          "@components": path.resolve(__dirname, "src/components"),
          "@assets": path.resolve(__dirname, "src/assets"),
          "@utils": path.resolve(__dirname, "src/utils"),
        }
    }

```

In root directory src:

- index.css is used to specify the application theme in Tailwind CSS.

- app.jsx defines the common page structure with the Header and Footer components and the available routes.

- The components directory contains all shared components. A component including its own unshared components also contains a components directory.

To be completed.

