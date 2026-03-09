# Brightora – Creative Agency & Digital Education

A vibrant React + Vite + React Router website for Brightora, a creative agency and digital education brand.

## Tech Stack

- **React 18** – UI library
- **Vite 5** – Build tool and dev server
- **React Router v6** – Client-side routing

## Brand

- **Primary**: `#ff6b35` (energetic orange)
- **Accent**: `#ffd166` (golden yellow)
- **Dark**: `#2d2d2d`
- **Light**: `#f8f9fa`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home – hero, services grid, portfolio, testimonials, newsletter |
| `/about` | Agency story, team, values, awards |
| `/services` | Full services with pricing tiers and process |
| `/contact` | Contact form with FAQ accordion |

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar.jsx     – Fixed responsive navbar
    Footer.jsx     – Multi-column footer
  pages/
    Home.jsx       – Landing page
    About.jsx      – About the agency
    Services.jsx   – Services & pricing
    Contact.jsx    – Contact form & FAQ
  App.jsx          – Router setup
  main.jsx         – Entry point
  index.css        – Global design system
  App.css          – App layout
```
