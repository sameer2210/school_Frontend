This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
school-frontend/  # Root project directory (replace with your actual project name)
├── app/          # App router directory for pages and layouts
│   ├── addSchool/
│   │   └── page.tsx  # Form page for adding schools (using react-hook-form and Yup validation)
│   ├── showSchools/
│   │   └── page.tsx  # Page to fetch and display schools in a grid (e-commerce style)
│   ├── globals.css   # Global styles (including Tailwind imports)
│   ├── layout.tsx    # Root layout with header and navigation
│   └── page.tsx      # Home page (welcome screen with links)
├── public/       # Static assets (e.g., images, favicons; add if needed for custom assets)
│   └── favicon.ico  # Default favicon (optional)
├── node_modules/ # Installed dependencies (git-ignored)
├── .gitignore    # Git ignore file (standard Next.js)
├── next-env.d.ts # TypeScript declarations for Next.js
├── package-lock.json  # Or yarn.lock if using Yarn
├── package.json  # Dependencies and scripts
├── postcss.config.js  # PostCSS config for Tailwind
├── README.md     # Project documentation (optional)
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json # TypeScript compiler options