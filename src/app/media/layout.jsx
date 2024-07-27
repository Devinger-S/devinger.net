"use client"

export default function MediaLayout({ children }) {
  return (
    <>
      <section id="photoVideoLayout"
        className="max-h-screen bg-black  h-screen"
      >
        {/* <div className="h-20">hello</div> */}
        {children}
      </section>
    </>

  )
} 
