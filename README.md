# 3D Developer Portfolio

A modern, immersive, and interactive 3D portfolio website built with **Next.js**, **Three.js**, and **Tailwind CSS**. This project showcases a developer's skills, projects, and experience using cutting-edge web technologies and beautiful 3D visuals.

![Portfolio Preview](./public/desktop_pc/scene.gltf) <!-- Replace with actual screenshot if available -->

## 🚀 Features

-   **3D Hero Section**: A captivating 3D scene (Procedural Sphere or Room Model) that grabs attention immediately.
-   **Interactive Elements**: Users can interact with 3D models using their cursor (rotation, zoom).
-   **Glassmorphism UI**: Modern, sleek, and semi-transparent UI elements for a premium feel.
-   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
-   **Smooth Animations**: Powered by **Framer Motion** for seamless page transitions and element reveals.
-   **Contact Form**: Integrated contact form with 3D visuals.
-   **Project Showcase**: detailed project cards with links to code and live demos.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **3D Library**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
-   **3D Helpers**: [@react-three/drei](https://github.com/pmndrs/drei)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap)
-   **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/3d-portfolio.git
    cd 3d-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📂 Project Structure

```
portfolio/
├── public/              # Static assets (images, 3D models, resume)
├── src/
│   ├── app/             # Next.js App Router pages and layouts
│   │   ├── globals.css  # Global styles and Tailwind directives
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Main landing page
│   ├── components/      # Reusable React components
│   │   ├── canvas/      # 3D Canvas components (HeroCanvas, EarthCanvas, etc.)
│   │   ├── Navbar.tsx   # Navigation bar
│   │   ├── Hero.tsx     # Hero section
│   │   ├── About.tsx    # About/Skills section
│   │   ├── Projects.tsx # Projects showcase
│   │   └── Contact.tsx  # Contact form section
│   ├── constants/       # Configuration data (text, links, project details)
│   ├── utils/           # Utility functions (animations, helpers)
│   └── types/           # TypeScript type definitions
└── ...
```

## 🎨 Customization

### Content
You can easily update the portfolio content by modifying the `src/constants/index.ts` file. This file contains:
-   Navigation links
-   Services/Skills data
-   Experience/Work history
-   Project details (titles, descriptions, tags, images, links)
-   Testimonials
-   Social media links

### 3D Models
To change the 3D models:
1.  Place your `.glb` or `.gltf` files in the `public/3D-Models/` directory.
2.  Update the `useGLTF` hook path in the respective component (e.g., `src/components/canvas/HeroCanvas.tsx`).
3.  Adjust the `scale`, `position`, and `rotation` props in the `<primitive>` component to fit your scene.

### Colors
The color theme is defined in `tailwind.config.ts` and `src/app/globals.css`. You can adjust the primary, secondary, and tertiary colors to match your brand.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
