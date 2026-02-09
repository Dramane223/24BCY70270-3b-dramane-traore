# Library Management System

A modern Library Management System built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** components.

## 🚀 Live Demo (Vercel)

👉https://24-bcy-70270-3b-dramane-traore.vercel.app

## 📌 Features

* 🔍 Search books by title or author
* ➕ Add new books
* ✏️ Edit existing books
* ❌ Remove books
* ⚡ Real-time UI updates using React hooks

## 🧰 Tech Stack

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* pnpm

## 🛠️ Installation & Run Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
 ├── app/
 │   └── page.tsx
 ├── components/
 │   ├── ui/
 │   │   ├── button.tsx
 │   │   ├── input.tsx
 │   │   └── card.tsx
 │   └── library-button.tsx
 └── lib/
     └── utils.ts
```

## 🧪 How It Works

* **Search**: Filters books by title/author (case-insensitive)
* **Add**: Adds a book using `Date.now()` as unique ID
* **Edit**: Inline edit with Save/Cancel
* **Remove**: Deletes the selected book
* **State**: Managed using `useState` hooks

## 👤 Author

* Dramane Traoré
* UID: 24BCY70270
