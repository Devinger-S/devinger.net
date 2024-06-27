
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Toggle from "@/components/uiverse/tab-toggle/Toggle"

export default function MediaLayout({ children }) {

  return (

    <>
      <section id="photoVideoLayout"
        className="min-h-screen"
      >
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2  ">
          <Toggle />
        </div>
        {children}
      </section>
    </>

  )
} 
