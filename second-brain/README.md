# Second Brain

A local-first desktop productivity application built with Electron, React, TypeScript, and Tailwind CSS.

## Vision

Second Brain is a lightweight personal productivity workspace inspired by:

- Obsidian
- Notion
- Excalidraw

The goal is to create a fast, offline-first desktop app for:

- Notes
- Todos
- Whiteboards
- Workspace organization

without unnecessary cloud complexity or overengineering.

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite

## Desktop

- Electron

## Styling

- Tailwind CSS

## Planned Additions

- React Router
- SQLite
- better-sqlite3
- Fabric.js
- Zustand
- Zod

---

# Project Goals

- Local-first architecture
- Offline support
- Fast startup and responsiveness
- Clean modular structure
- Secure Electron architecture
- Maintainable long-term codebase

---

# Architecture

```txt
root/
│
├── electron/
│   ├── main/
│   ├── preload/
│   └── ipc/
│
├── src/
│   ├── components/
│   ├── features/
│   │   ├── notes/
│   │   ├── todos/
│   │   └── whiteboard/
│   │
│   ├── pages/
│   ├── layouts/
│   ├── hooks/
│   ├── store/
│   ├── services/
│   ├── database/
│   ├── lib/
│   ├── utils/
│   ├── styles/
│   └── types/
│
├── public/
├── assets/
└── docs/
```

---

# Development Phases

## Phase 0 — Foundation

- Electron + React + TypeScript setup
- Tailwind CSS
- ESLint + Prettier
- Hot reload
- Folder architecture

## Phase 1 — Layout System

- Sidebar
- Topbar
- Routing
- Workspace shell

## Phase 2 — Notes MVP

- Create/edit/delete notes
- Autosave
- Local persistence

## Phase 3 — Todos

- Task management
- Filters
- Priority system

## Phase 4 — SQLite Integration

- Database layer
- IPC communication
- Repository abstraction

## Phase 5 — Whiteboard

- Fabric.js canvas system
- Drawing tools
- Persistence

## Phase 6 — Polish

- Themes
- Keyboard shortcuts
- Markdown
- Export/import

---

# Development Philosophy

- Keep the app monolithic initially
- Avoid premature abstraction
- Keep business logic outside UI components
- Build one feature at a time
- Prioritize stability over feature count

---

# Current Status

- Electron-Vite setup  
- React + TypeScript configured  
- Tailwind CSS integrated  
- Project structure initialized  

---

# Run Development Server

```bash
npm install
npm run dev
```

---

# License

MIT