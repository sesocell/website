# Systems Engineer Portfolio (TUI Theme)

A minimal, single-page portfolio website built with [Astro](https://astro.build). Designed for a Linux Enthusiast, featuring a monochrome **Text User Interface (TUI)** aesthetic, clean typography, and high performance.

## Features

- **Monochrome TUI Design:** High-contrast black and white theme inspired by terminal interfaces.
- **Typography:** Uses [Monaspace Neon](https://monaspace.githubnext.com/) for a code-native look.
- **Performance:** Static site generation (SSG) with zero runtime JavaScript overhead.
- **Responsive:** Mobile-friendly layout using CSS Grid and Flexbox.
- **Dark/Light Mode:** Strict monochrome palette that adapts to system preferences (or defaults to high contrast).

## Project Structure

```text
/
├── src/
│   ├── pages/
│   │   └── index.astro    # Main single-page layout (Content lives here)
│   └── styles/
│       └── global.css     # Global styles, TUI theme, and CSS variables
├── public/
│   └── favicon.svg        # Custom SVG favicon
├── astro.config.mjs       # Astro configuration
└── package.json           # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18.14.1 or higher)
- npm

### Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Building for Production

Generate the static site in the `dist/` directory:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment (GitHub Pages)

This project is configured to be easily deployed to GitHub Pages.

1. Update `astro.config.mjs` with your GitHub repository details:

```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/YOUR_REPO_NAME',
});
```

2. Push your code to GitHub.
3. Configure GitHub Pages in your repository settings to deploy from a GitHub Actions workflow or the `gh-pages` branch.

## Customization

- **Content:** Edit `src/pages/index.astro` to update your name, bio, projects, and contact links.
- **Theme:** Modify `src/styles/global.css` to tweak the monochrome colors or spacing.
- **Favicon:** The favicon is an SVG file located at `public/favicon.svg`. You can edit the text inside the `<text>` tag to change the monogram.
