# School Management System

A full-stack web application for managing school information, built with Next.js (Frontend) and deployed on Vercel and Render.

##  Live Demo

- **Frontend (Vercel)**: [school-frontend-ashy.vercel.app](https://school-frontend-ashy.vercel.app)
- **Backend (Render)**: [school-backend-5jnt.onrender.com](https://school-backend-5jnt.onrender.com)

##  Repository Links

- **Frontend**: [https://github.com/sameer2210/school_Frontend](https://github.com/sameer2210/school_Frontend)
- **Backend**: [https://github.com/sameer2210/school_Backend](https://github.com/sameer2210/school_Backend)

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Validation**: Yup
- **Deployment**: Vercel

### Backend
- **Runtime**: Node.js
- **Database**: MongoDB
- **Deployment**: Render

## ✨ Features

- **Add Schools**: Form-based school registration with validation
- **View Schools**: Grid-based display of all schools (e-commerce style layout)
- **Responsive Design**: Mobile-friendly interface
- **Type Safety**: Full TypeScript implementation
- **Form Validation**: Client-side validation using Yup schemas

## 🏗️ Project Structure

```
school-frontend/
├── app/                    # App router directory
│   ├── addSchool/
│   │   └── page.tsx       # Add school form page
│   ├── showSchools/
│   │   └── page.tsx       # Display schools grid
│   ├── globals.css        # Global styles with Tailwind imports
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Home page
├── public/                # Static assets
│   └── favicon.ico
├── .gitignore            # Git ignore rules
├── next-env.d.ts         # Next.js TypeScript declarations
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

##  Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sameer2210/school_Frontend.git
cd school_Frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📱 Application Pages

- **Home Page** (`/`): Welcome screen with navigation links
- **Add School** (`/addSchool`): Form to add new school information
- **Show Schools** (`/showSchools`): Grid view of all registered schools

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### TypeScript
Full TypeScript support with strict type checking enabled in `tsconfig.json`.

##  Deployment

### Frontend (Vercel)
The frontend is automatically deployed to Vercel. Any push to the main branch triggers a new deployment.

### Backend (Render)
The backend API is deployed on Render and handles all database operations.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Sameer**
- GitHub: [@sameer2210](https://github.com/sameer2210)

## 📞 Contact

For any questions or feedback, please feel free to reach out through GitHub issues or contact me directly.

---

⭐ If you found this project helpful, please give it a star on GitHub!