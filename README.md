# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # AI Portfolio - Zaineb Rahmani

    A bilingual (English/French) portfolio showcasing AI and Data Science projects with a terminal-inspired design.

    ## 🚀 Live Demo

    [View Portfolio](https://zaineb08.github.io/portfolio)

    ## ✨ Features

    - 🌐 Bilingual support (English/French)
    - 💻 Terminal-inspired minimalist design
    - 📱 Fully responsive
    - 🔍 Project filtering by category
    - ⚡ Built with React + Tailwind CSS

    ## 🛠️ Tech Stack

    - React
    - Tailwind CSS
    - Lucide React (icons)
    - Vite

    ## 📦 Quick Start

    ```bash
    # Install dependencies
    npm install

    # Run development server
    npm run dev

    # Build for production
    npm run build

    # Preview production build
    npm run preview
    ```

    ## 🚀 Deploy to GitHub Pages

    ```bash
    # Install gh-pages
    npm install --save-dev gh-pages

    # Add to package.json
    {
      "homepage": "https://yourusername.github.io/portfolio",
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
      }
    }

    # Deploy
    npm run deploy
    ```

    ## 📝 Customization

    Edit the component to update:
    - Personal information (name, email, social links)
    - Projects array
    - Skills categories
    - Language translations

    ## 📄 License

    MIT License - feel free to use this template for your own portfolio!

    ## 📧 Contact

    - Email: zaineb.rah20@gmail.com
    - GitHub: [@Zaineb08](https://github.com/Zaineb08)
    - LinkedIn: [Zaineb Rahmani](https://linkedin.com/in/zaineb-rahmani-07117315b)

    ---

    ⭐ Star this repo if you find it helpful!
````
