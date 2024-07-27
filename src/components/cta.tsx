'use client'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ButtonAceternity } from "@/components/moving_border";

export default function CallToAction() {


  // const CallToAction = () => {
  return (
    <div id='cta' className="flex items-center flex-col py-4  gap-2 md:flex-row md:gap-8">

      <Link
        className={cn('font-bold  text-center w-fit text-lg p-4',
          // buttonVariants({ size: 'xl' })
        )
        } href='/projects' >Projects</Link>
      <ButtonAceternity
        className="p-4 font-bold text-lg"
      >
        <Link href='#contact'>
          Contact
        </Link>
      </ButtonAceternity>
    </div>
  )
}
