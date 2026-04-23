"use client"

import type React from "react"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-1 w-full">{children}</div>
    </div>
  )
}
