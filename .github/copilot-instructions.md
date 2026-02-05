# AI Coding Agent Instructions - RetroSpaceMan Personal Website

## Project Overview
This is a **React + TypeScript personal portfolio website** using Vite as the build tool. It's a static site deployment that showcases projects and contact information for Carlos Leonardo Avila.

**Tech Stack**: React 19, React Router DOM 7, TypeScript 5.9, Vite 7, ESLint 9

## Architecture & Key Patterns

### Routing Structure
- Uses **HashRouter** (not BrowserRouter) in [src/main.tsx](../src/main.tsx) because this deploys to GitHub Pages
- Routes defined in [src/App.tsx](../src/App.tsx) with pages: Home, Projects, About, Contact, Success
- **All new routes must use the hash-based path format** (e.g., `/#/projects`)

### Component Organization
- **Page components** ([src/pages/](../src/pages/)): Full-page views rendered via Routes
- **Shared components** ([src/components/](../src/components/)): Header, Footer, NavBar, ProjectCard
- **Models** ([src/models/](../src/models/)): `ProjectCardModel` - TypeScript class for type-safe project data

### Data Flow Pattern
Projects page displays `ProjectCardModel` instances. The model is a simple class with four properties: `name`, `description`, `url`, `urlLabel`. Always use this model when creating project-related features rather than inline objects.

### Styling Convention
- CSS files colocated in [src/css/](../src/css/) with component-specific stylesheets (e.g., `ProjectCard.tsx` → `ProjectCard.css`)
- BEM or utility-first naming convention not strictly enforced—use descriptive selectors matching component names
- Main styles: [index.css](../src/css/index.css), [App.css](../src/css/App.css)

## Developer Workflows

### Build & Development Commands
```bash
npm run dev      # Start Vite dev server (localhost:5173)
npm run build    # Type-check with tsc, then build for production
npm run lint     # Run ESLint across the project
npm run preview  # Preview production build locally
```

### Type Checking
- **Always run `tsc -b` before building**—it's integrated into the build script
- TypeScript configs: [tsconfig.json](../tsconfig.json) (root), [tsconfig.app.json](../tsconfig.app.json) (app), [tsconfig.node.json](../tsconfig.node.json) (build tools)
- Strict mode is enabled; avoid `any` types

### Deployment
- GitHub Pages hosted at `https://retrospaceman123.github.io`
- HashRouter required because it's deployed to a subdirectory (user.github.io)
- Build artifacts go to `dist/`

## Linting & Code Quality
- **ESLint config**: [eslint.config.js](../eslint.config.js) uses flat config format (ESLint 9+)
- Enabled plugins: `react-hooks`, `react-refresh`, `typescript-eslint`
- Run `npm run lint` before commits; auto-fix available with `eslint . --fix`

## Form Handling
- **Contact form** ([src/pages/Contact.tsx](../src/pages/Contact.tsx)) uses `formsubmit.co` service (external API, no backend needed)
- Redirect on success points to `/#/success` page
- All form fields required; no client-side validation framework (use HTML5 `required` attribute)

## Key Integration Points
1. **React Router**: Manages client-side navigation; use `<Link>` for internal routes
2. **React Compiler**: Babel plugin enabled in [vite.config.ts](../vite.config.ts)—auto-optimizes closures (no special coding needed)
3. **formsubmit.co**: Handles form submissions; no backend deployment required

## Project-Specific Conventions
- **TypeScript over JavaScript**: All source files use `.ts` or `.tsx`
- **Functional components only**: No class components
- **Props interfaces**: Define inline for simple components (like [ProjectCard.tsx](../src/components/ProjectCard.tsx)) or extract to files for complex ones
- **Model classes**: Use when grouping related data (e.g., `ProjectCardModel`)
