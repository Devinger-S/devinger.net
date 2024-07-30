'use client'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ButtonAceternity } from "@/components/moving_border";
import userData from "@/data/siteConf";

export default function CallToAction() {


  // const CallToAction = () => {
  return (
    <div id='cta' className="flex  flex-row items-center mt-10 relative z-10 max-w-screen py-4  gap-2 md:flex-row md:gap-8">


      <Link
        className={cn('font-bold  text-center w-fit text-lg p-4',
          // buttonVariants({ size: 'xl' })
        )
        } href='/projects' >Projects</Link>
      <ButtonAceternity
        as="a"
        href={`mailto:${userData.email}`}
        className="p-4 font-bold text-lg"
      >
        Contact
      </ButtonAceternity>
    </div>
  )
}
