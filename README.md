# Personal Portfolio Website

![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12-111111?logo=framer&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Configured-222222?logo=github&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Configured-00C7B7?logo=netlify&logoColor=white)

This repository contains the source code for a single-page personal portfolio website built to present background, selected work, technical skills, and contact information in a clear and polished format.

## Overview

The site is designed as a modern frontend application rather than a static profile page. It combines strong visual presentation with structured content, using reusable components, animation, and section-based navigation to make the experience easy to explore.

## Key Features

- Single-page layout with dedicated sections for introduction, background, featured projects, technical skills, and contact details
- Scroll-aware navigation and progress feedback for smoother browsing
- Interactive project showcase with expandable detail views and supporting visuals
- Animated UI elements, including text reveals, transitions, and a rotating skills carousel
- Centralized content model in `src/data/portfolio.ts` for maintaining profile text, projects, and timeline details
- Deployment-ready build output with repository configuration for both GitHub Pages and Netlify

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Lucide React

### Tooling and Deployment

- ESLint
- GitHub Actions
- GitHub Pages
- Netlify

## Getting Started

### Prerequisites

- Node.js
- npm

### Run Locally

```bash
npm install
npm run dev
```

Start the local development server, then open `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Runs TypeScript build checks and creates a production build in `dist/` |
| `npm run lint` | Runs ESLint across the project |
| `npm run preview` | Serves the production build locally for review |

## Project Structure

```text
.
├── .github/workflows/    # GitHub Pages deployment workflow
├── public/               # Static public assets
├── src/
│   ├── assets/           # Images and media
│   ├── components/       # Reusable UI sections and interactive elements
│   ├── data/             # Portfolio content and structured page data
│   ├── styles/           # Global and section-specific styles
│   ├── App.tsx           # Main page composition
│   └── main.tsx          # Application entry point
├── netlify.toml          # Netlify build configuration
├── package.json          # Scripts and dependencies
└── vite.config.ts        # Vite configuration
```

## Deployment

Production assets are generated with:

```bash
npm run build
```

This repository includes deployment configuration for:

- GitHub Pages via `.github/workflows/deploy.yml`
- Netlify via `netlify.toml`
