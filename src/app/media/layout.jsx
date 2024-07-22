"use client"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Toggle from "@/components/uiverse/tab-toggle/Toggle"
import LayoutGrid from "@/components/LayoutGrid"
import Image from "next/image"

export default function MediaLayout({ children }) {



  return (
    <>
      <section id="photoVideoLayout"
        className="max-h-screen overflow-hidden h-screen"

      >
        {children}
      </section>
    </>

  )
} 
