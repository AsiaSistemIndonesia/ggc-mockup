# GGC Stockfile — AI Project Context

> This document is the primary project context for AI coding agents working on the GGC Stockfile project.
>
> AI agents MUST read this file before making architectural, authentication, PWA, IndexedDB, RBAC, routing, or UI changes.
>
> The existing source code is the source of truth for implementation details.
> This document provides project context, architectural constraints, conventions, and implementation direction.

---

# 1. Project Overview

## Project Name

GGC Stockfile

## Project Type

Logistics and Stockpile Management Application.

The application is designed to support logistics, stockpile, inbound, outbound, procurement, stock card, reporting, and administrative workflows.

The project is currently being developed as a frontend-first Progressive Web Application (PWA) demo.

---

# 2. Current Development Objective

The current priority is to build a functional frontend prototype with:

- GGC UI/mockup
- Login
- Authentication
- RBAC
- PWA behavior
- Online/offline status
- IndexedDB
- Offline session restoration
- Offline-first foundation

The current implementation is still a DEMO.

There is currently no production backend and no production database.

Mock data is stored in JSON files.

Do NOT introduce a real backend or database unless explicitly requested.

---

# 3. Technology Stack

The expected frontend stack is:

- Next.js
- React
- TypeScript
- Tailwind CSS
- PWA
- IndexedDB
- Dexie.js where appropriate

Use the versions already present in `package.json`.

Do NOT upgrade major dependencies unless explicitly requested.

Do NOT introduce another frontend framework.

---

# 4. Source of Truth

When implementing functionality, use the existing repository as the primary source of truth.

Priority order:

1. Existing source code
2. Existing JSON/mock data
3. Existing routing structure
4. Existing components
5. Existing project documentation
6. This CLAUDE.md
7. General assumptions

Do NOT invent structures that already exist.

Before creating a new:

- provider
- hook
- service
- repository
- database abstraction
- JSON dataset
- RBAC system
- authentication system
- connectivity manager

search the repository first.

If an equivalent implementation already exists, extend or reuse it.

---

# 5. UI / Mockup Rules

The existing GGC mockup is extremely important.

The UI must remain faithful to the approved mockup.

When implementing functionality:

DO NOT unnecessarily redesign:

- layout
- spacing
- typography
- colors
- cards
- buttons
- navigation
- sidebar
- mobile navigation
- login page
- dashboard
- tables
- forms
- headers
- icons

Functional changes should be integrated into the existing UI.

Do NOT replace the mockup with a generic dashboard.

Do NOT create generic placeholder layouts if an existing mockup already exists.

---

# 6. Responsive / Mobile Requirements

The application is a PWA.

Desktop and mobile layouts are both required.

Mobile UI must follow the existing approved mockup.

Do NOT simply shrink the desktop UI.

Mobile navigation, cards, forms, tables, headers, and interactions should follow the existing mobile design.

The application is expected to run on smartphones through a browser/PWA installation.

---

# 7. PWA Architecture

The PWA has two major offline layers.

## Layer 1 — Application Shell

Handled by:

Service Worker

- Cache Storage

Responsible for making the application itself available offline.

Examples:

- HTML/navigation shell
- JavaScript
- CSS
- icons
- static assets
- other resources required to boot the application

The Service Worker is NOT responsible for authentication.

---

## Layer 2 — Local Application Data

Handled by:

IndexedDB

Responsible for:

- authentication session
- user profile
- application state
- future offline business data
- future sync queue

Conceptually:

```text
PWA
│
├── Service Worker
│   └── Cache Storage
│       └── Application Shell
│
└── IndexedDB
    ├── auth_session
    ├── user_profile
    ├── app_state
    └── sync_queue (future)
```
