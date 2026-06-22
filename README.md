# React + TypeScript Live Coding Prep

A collection of frontend interview exercises built with **React**, **TypeScript**, and **Vite**.

The goal of this repository is to practice common live-coding interview questions while following clean coding practices and learning modern frontend testing.

---

## Tech Stack

- React
- TypeScript
- Vite
- Vitest
- React Testing Library (in progress)

---

## Topics Covered

### React Fundamentals

- Controlled components
- Forms
- State management
- Event handling
- Conditional rendering
- Lists & keys
- Component composition

### React Hooks

- useState
- useEffect
- Custom hooks (planned)

### TypeScript

- Type-safe props
- Event typing
- State typing
- Utility types
- Function typing

### Live Coding Challenges

- ✅ Debounced Search
- ✅ Form Validation
- 🔄 Tabs Component
- 🔄 Modal
- 🔄 Accordion
- 🔄 Todo App
- 🔄 Pagination
- 🔄 Infinite Scroll
- 🔄 Drag & Drop
- 🔄 Theme Switcher
- 🔄 Custom Hooks

---

## Testing

Current testing stack:

- Vitest
- React Testing Library (in progress)

Current coverage includes:

- Validation function unit tests
- Edge case testing
- Boundary testing
- Multiple validation scenarios

Example test cases:

- Valid input
- Empty name
- Spaces-only name
- Empty email
- Invalid email
- Short password
- Password boundary conditions
- Multiple invalid fields

---

## Project Structure

```text
src/
│
├── components/
│
├── utils/
│   ├── validateSignupForm.ts
│   └── validateSignupForm.test.ts
│
├── App.tsx
└── main.tsx
```

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Run unit tests:

```bash
npm test
```

---

## Purpose

This repository is intended for interview preparation rather than production development.

The focus is on improving:

- React problem solving
- TypeScript proficiency
- Clean code
- Testing
- Frontend architecture
- Communication during live coding interviews

---

## Current Progress

### Completed

- Debounced Search
- Form Validation
- Validation Unit Tests (Vitest)

### In Progress

- React Testing Library
- Component Testing

### Planned

- Performance optimization
- Async data fetching
- API integration
- Custom hooks
- Advanced React interview questions

---

## Learning Goals

- Write maintainable React applications
- Improve TypeScript confidence
- Learn modern frontend testing
- Prepare for React frontend interviews
- Build reusable UI patterns