"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import LibraryButton from "@/components/library-button"

type Book = {
  id: number
  title: string
  author: string
}

export default function Home() {
  const [query, setQuery] = useState("")
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [books, setBooks] = useState<Book[]>([
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "The Great Gatsby", author: "S. Scott Fitzgerald" },
  { id: 4, title: "1984", author: "George Orwell" },])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editTitle, setEditTitle] = useState("")
  const [editAuthor, setEditAuthor] = useState("")

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  )

  const handleAdd = () => {
    if (!title || !author) return
    setBooks([{ id: Date.now(), title, author }, ...books])
    setTitle("")
    setAuthor("")
  }

  const handleRemove = (id: number) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  const handleEdit = (book: Book) => {
    setEditingId(book.id)
    setEditTitle(book.title)
    setEditAuthor(book.author)
  }

  const handleSaveEdit = (id: number) => {
    if (!editTitle || !editAuthor) return
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, title: editTitle, author: editAuthor }
          : book
      )
    )
    setEditingId(null)
    setEditTitle("")
    setEditAuthor("")
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditTitle("")
    setEditAuthor("")
  }

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">
        Library Management System
      </h1>

      <Input
        placeholder="Search by title or author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="flex gap-2">
        <Input
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <LibraryButton onClick={handleAdd} variant="add">
          Add Book
        </LibraryButton>
      </div>

      {filteredBooks.length === 0 && (
        <p className="text-center text-gray-500">No books found</p>
      )}

      <div className="space-y-3">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="p-4 flex justify-between items-center">
            {editingId === book.id ? (
              <div className="flex gap-2 w-full">
                <Input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <Input
                  value={editAuthor}
                  onChange={(e) => setEditAuthor(e.target.value)}
                />
                <LibraryButton
                  onClick={() => handleSaveEdit(book.id)}
                  variant="add"
                >
                  Save
                </LibraryButton>
                <LibraryButton onClick={handleCancelEdit} variant="remove">
                  Cancel
                </LibraryButton>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="font-semibold">{book.title}</h2>
                  <p className="text-sm text-gray-600">{book.author}</p>
                </div>
                <div className="flex gap-2">
                  <LibraryButton
                    onClick={() => handleEdit(book)}
                    variant="edit"
                  >
                    Edit
                  </LibraryButton>
                  <LibraryButton
                    onClick={() => handleRemove(book.id)}
                    variant="remove"
                  >
                    Remove
                  </LibraryButton>
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
    </main>
  )
}
