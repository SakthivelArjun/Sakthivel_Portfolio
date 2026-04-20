# Sakthivel T | Professional Portfolio

[![Deploy static content to Pages](https://github.com/SakthivelArjun/Sakthivel_Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/SakthivelArjun/Sakthivel_Portfolio/actions/workflows/deploy.yml)

A high-performance, professional portfolio designed with a clean SaaS aesthetic. Built with React, Tailwind CSS v4, and Framer Motion to showcase my work as a Frontend Developer.

**✨ [Live Demo](https://SakthivelArjun.github.io/Sakthivel_Portfolio/)**

---

## Features

- **Professional Aesthetics**: A handcrafted "SaaS Dashboard" look with a focus on typography and space.
- **Dark/Light Mode**: Fully responsive theme switching with system preference detection.
- **Micro-Animations**: Smooth, premium transitions using Framer Motion (circOut curves).
- **Automated Deployment**: CI/CD pipeline integrated with GitHub Actions.
- **Responsive Design**: Optimized for all devices from mobile to large desktop displays.
- **Supabase Integration**: Functional contact form powered by Supabase.

---

## Tech Stack

- **Core**: React 19, Vite
- **Styling**: Tailwind CSS v4 (Alpha/Beta engine)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend/Forms**: Supabase
- **Deployment**: GitHub Pages + Actions

---

## Project Structure

```text
src/
├── assets/          # Images and static media
├── components/      
│   ├── layout/      # Navbar, Footer
│   └── ui/          # Reusable UI elements (ThemeToggle, etc.)
├── constants/       # Global data constants (the source of truth)
├── hooks/           # Custom React hooks (useTheme)
├── sections/        # Main page sections (Hero, Projects, Experience, etc.)
└── utils/           # Utility functions (Supabase client)
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SakthivelArjun/Sakthivel_Portfolio.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## Contact

- **Email**: [sakthiarjun1318@gmail.com](mailto:sakthiarjun1318@gmail.com)
- **LinkedIn**: [SakthivelArjun](https://www.linkedin.com/in/sakthivel-t-6613a3227/)
- **GitHub**: [@SakthivelArjun](https://github.com/SakthivelArjun)

---

Developed with ❤️ by Sakthivel T
