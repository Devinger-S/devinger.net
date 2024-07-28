"use client"

export default function MediaLayout({ children }) {
  return (
    <>
      <section id="photoVideoLayout"
        className="max-h-screen bg-background p-2 mt-16  h-screen"

      >
        {/* <div className="h-20">hello</div> */}
        {children}
      </section>
    </>

  )
} 
