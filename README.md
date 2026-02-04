# Retro Computer Personal Website

![Portfolio Preview](https://ibb.co/BHDkJR1W)

A highly interactive, retro-themed personal portfolio website inspired by the aesthetics of old-school computing. This project combines 3D graphics, a functional terminal, and a nostalgic design system to showcase my work as an AI & Cybersecurity Engineer.

## Inspiration & Credits

This project is heavily inspired by and built upon the incredible work of **Ed Hinrichsen**.
Original Project: [retro-computer-website](https://github.com/edhinri/retro-computer-website)
Original Author's Site: [edh.dev](https://edh.dev/)

Huge thanks to Ed for the foundation of this creative exploration!

## Key Features

This version includes several custom enhancements and new features:

-   **Smart Command Terminal**: An advanced terminal that understands both strict system commands (e.g., `menu`, `projects`) and natural language queries (e.g., "show me who you are"). It features instant execution for a snappy feel.
-   **Interactive Resume**: A dedicated, styled section to view my professional history directly within the retro interface.
-   **Refined UI/UX**:
    -   Polished navigation menu with retro-tactile buttons.
    -   Smoother animations and transitions.
    -   High-end retro aesthetic adjustments.
-   **3D Particle Universe**: A stunning background visual effect using Three.js.
-   **Admin Panel**: A functional admin interface for managing content (Work in Progress).
-   **File System**: A traversable virtual file system with markdown rendering support.

## Installation & Setup

Follow these steps to run the project locally on your machine.

### Prerequisites
-   [Node.js](https://nodejs.org/) (installed and configured)

### Steps

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/YuvrajBundela29/Portfolio.git
    cd Portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    Start the local development server (accessible at `http://localhost:5173` by default).
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    To create a production-ready build in the `dist/` directory:
    ```bash
    npm run build
    ```

## Usage

-   **Navigation**: Use the on-screen menu buttons or type commands in the terminal.
-   **Terminal**: Type `help` to see a list of available commands. Try typing natural sentences like "I want to see your projects".
-   **Interaction**: Click and drag to rotate the 3D scene (if applicable in your view mode).

---
*Built with TypeScript, Three.js, and Vite by Yuvraj Singh Bundela.*
