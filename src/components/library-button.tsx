import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import React from "react"

type LibraryButtonProps = {
  onClick: () => void
  variant: "add" | "remove" | "edit"
  children: React.ReactNode
}

export default function LibraryButton({
  onClick,
  variant,
  children,
}: LibraryButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "text-white cursor-pointer",
        variant === "add" && "bg-blue-600 hover:bg-blue-700",
        variant === "remove" && "bg-red-600 hover:bg-red-700",
        variant === "edit" && "bg-amber-600 hover:bg-amber-700"
      )}
    >
      {children}
    </Button>
  )
}
