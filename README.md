# SaleDisplayWebsite

Lightweight Vite + React + TypeScript frontend for displaying product galleries.

This project is a static frontend (no backend) that loads product images from the `assets/` folder and provides category and product detail pages with image galleries.

**Main features**
- React + TypeScript (Vite)
- Client-side routing with `react-router-dom`
- Image galleries per product (images kept in `assets/<product-folder>`)
- Mobile bottom navigation and responsive footer

## Quick start

Prerequisites: Node.js 16+ (or your preferred LTS)

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open http://localhost:5173 (or the port Vite shows).

## Project structure (key files)
- `index.html` – app entry
- `src/main.tsx` – render + router boot
- `src/App.tsx` – routes and page wrapper
- `src/pages/` – `HomePage`, `CategoryPage`, `ProductDetailPage`, `About`, `Contact`
- `src/components/` – `Header`, `Footer`, `BottomNav`, `ProductCard`, etc.
- `src/constants.ts` – static product & category data used by the UI
- `assets/` – product image folders (e.g. `chaosgf`, `firo`, `goldenfarm`, ...)

## Notes for developers
- Product data is stored in `src/constants.ts`. Each product includes an `images` array that points to the files under `assets/`.
- If you add or rename images, update the corresponding `images` array in `src/constants.ts`.

### Recommended dev dependencies (TypeScript/React types)
Install type declarations to remove JSX/TS warnings:

```bash
npm install -D @types/react @types/react-dom
```

## Common tasks
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## Next improvement ideas
- Add a lightbox/swipe gallery for mobile
- Load product data from a JSON file or headless CMS
- Add cart/wishlist state and persistence

---

If you'd like, I can: update this README with screenshots, add usage examples, or include contribution guidelines — tell me which you'd prefer.
