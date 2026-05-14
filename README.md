# AI-Memo Project 🚀

> Un ecosistema Fullstack moderno para la gestión inteligente de notas, potenciado por IA y diseñado con arquitectura de alto rendimiento.

Este proyecto es un monorepo que integra un **Frontend** reactivo y un **Backend** de alta velocidad, enfocado en demostrar buenas prácticas de desarrollo, seguridad y despliegue continuo.

---

## 🛠️ Tecnologías

### Monorepo Management
- **PNPM Workspaces:** Gestión eficiente de paquetes y scripts unificados.
- **Git Flow:** Metodología de ramas para un ciclo de vida de software ordenado.

### [Frontend](./frontend)
- **React + Vite:** Interfaz de usuario rápida y optimizada.
- **Tailwind CSS:** Diseño moderno, responsivo y utilitario.
- **Firebase Hosting:** Despliegue global con SSL automático.

### [Backend](./backend)
- **Fastify:** Framework de Node.js de alto rendimiento enfocado en baja sobrecarga.
- **TypeScript:** Tipado fuerte para un código más seguro y mantenible.
- **Google Gemini API (Pro):** Integración de IA para clasificación y análisis automático de notas.
- **Firebase Admin SDK:** Gestión segura de **Firestore** y autenticación.

---

## 🏗️ Arquitectura del Proyecto

El proyecto está estructurado como un **Monorepo** para mantener la cohesión entre el cliente y el servidor:

```text
ai-memo-project/
├── frontend/     # Aplicación React (Vite)
├── backend/      # API REST (Fastify + TS)
├── package.json  # Scripts unificados de la raíz
└── pnpm-workspace.yaml