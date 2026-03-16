# Coursera Meta Frontend developer Certification / Capstone project / Little lemon online app

This project aims to validates the use of html, css, javascript in a limited test application.

https://www.coursera.org/learn/meta-front-end-developer-capstone


# Use of Vite as the project build tooling
The project uses Vite with plugin-react as the UI component framework and plugin-tailwindcss as the CSS framework.

Vite has been preferred to Webpack as integration with Tailwind is more straightforward.

[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

```
npm create vite@latest little-lemon-online-app --template react
```

# Use of vitest as the project's testing framework for vanilla javascript classes
See https://vitest.dev/guide

vitest is nicely integrated with vite and allows using the same dev pipeline for both the app and tests.

```
npm install -D vitest
```
Also add "test" in the scripts section of the package.json file to later run command "npm run test":
```
{
  "scripts": {
    "test": "vitest"
  }
}
``` 
Note: vitest is compatible with running React component's Jest tests as required by the Meta FED Capstone project for unit testing.

# Use of vitest for React custom hooks testing
As React custom hooks must be called inside a component function, an additional library is required to test them.
```
  npm install @testing-library/react
```
If a custom hook interacts with the DOM, additional libraries are required; a DOM emulator like jsdom or happy-dom, and testing matchers extending jest like jest-dom (assertion helper library).
```
 npm install @testing-library/react @testing-library/jest-dom jsdom
```

# Use of vitest for React component testing
Add environment, activate globals and define setupFiles in the test section of the vite.config.js file :
```
  test: {
    environment: "jsdom", // or happy-dom, required for React hooks and React components
    globals: true,
    setupFiles: "./src/setupTests.js", // the standard setup file for vitest.
```
setupTests.js allows to globally setup test files. For React components, it allows to support the import of jest-dom in a test :
```
import "@testing-library/jest-dom"
``` 

Furthermore React component that renders \<Link\> (or useNavigate, NavLink, useLocation, etc.) must be under one of following router in the test calling that component :

- \<MemoryRouter\> (tests)

- \<BrowserRouter\> (app)

- \<RouterProvider\> (data router)

# vitest UI
Install the vitest UI server :
```
npm i -D @vitest/ui
```
Run tests from vitest UI
```
vitest --ui
```
Vist the vitest UI in browser
```
http://localhost:51204/__vitest__/
```

# Use of Tailwind CSS as the project's CSS framework
The Tailwind CSS utility classes and the Tailwind CSS styling philosophy are used for UI design in the project.

The project also imports Tailwind Flowbite and uses the DatePicker and NavBar components provided by Flowbite.

```
npm install tailwindcss @tailwindcss/vite
```

Add the @tailwindcss/vite plugin to the Vite configuration in file vite.config.js
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
# Use of Tailwind Flowbite for a few UI components
The project uses the NavBar and DatePicker components of the Tailwind Flowbite library.

The DatePicker component is designed to be used in a browser context and uses the javascript utility class Date.
However, the little lemon online reservation application operates in the Chicago /America timezone.
Bidirectional date and time conversions are necessary to handle a local date and time passed to or selected in DatePicker as if it were an America/Chicago date and time.

DatePicker features refering to today are also disabled.

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
In root directory src:

## The App entry point

The \<app\> component is defined in the app.jsx file.

The \<app\> component sets the routes to the main features inside the application and calls the corresponding feature pages.

Every feature page is encapsulated into a template <Page> component that consistently set the common format of a page, including the <Header> and <Footer> components.

## The pages directory
The pages directory contains all the feature page components of the little lemon online application:
- \<Home\> in the home directory
- \<AboutUs\> in the about_us directory
- \<Menu\> in the menu directory
- \<Reservation> in the reservation directory
- \<Ordering> in the order directory
- \<Login> in the login directory

and a \<NotFound\> page component for redirecting invalid paths is available in the not_found directory.

If a page component has private sub-components (not shared with other page components), these sub-components are defined in the components subdirectory inside the page component directory.


The Home page and the Reservation page both have components subdirectories.
- Each section of the home page is a sub-component; About, Hero, Highlights and Testimonials.
- The reservation page has two form views as a sub-component; BookingFormView (default reservation form) and CapstoneBookingFormView (according to the Capstone specification).

Both form views of the reservation page share the same business logic provided by the custom hook useReservation(). The reservation directory thus contains a hooks sub-directory.

## The components directory
The components directory contains reusable components sub-directories like accordion, button, cards, footer, header and page.
The Page component defines the structure of any page component in the little lemon online application.

## The utils directory
The utils directory contains plain javascript utility classes or types.

The LocalChicagoDateTime class in the utils directory provides helper methods for handling timezone switch between local timezone dates and times and America/Chicago dates and times.

## The assets directory
The assets directory contains images and icons used by the little lemon online application.

## Paths and aliases
The project defines several alias-based absolute import available with Vite.

Aliases are defined in the Vite configuration file vite.config.js as described below:
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


