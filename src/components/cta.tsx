 'use client'
import Link from "next/link"
// import ContactForm from "./ContactForm"
 import { DrawerDialog } from "./Drawer"
// import { Drawer2 } from "./Drawer2"
 // import Popover from "./Popover"
 import { Button } from "./ui/button"
 import { buttonVariants } from "./ui/button"
 import { cn } from "@/lib/utils"
 import { ButtonAceternity } from "@/components/moving_border";

 export default function CallToAction() {
   
 
// const CallToAction = () => {
  return (
    <div id='cta' className="flex flex-col py-4  gap-2 md:flex-row md:gap-8">

      <Link 
         className={cn('font-bold  text-center text-lg p-4', 
         // buttonVariants({ size: 'xl' })
         )
      } href='/projects' >Our work</Link>



      <ButtonAceternity
        // borderRadius="1.75rem"
        className="p-4 font-bold text-lg"
      >
         <Link href='#contact'>


         Contact
         </Link>
        {/* <DrawerDialog */}
        {/*    content={<ContactForm />} */}
        {/* > */}


          {/* <Button variant='noHover' size='xl'>Get in touch</Button> */}
        {/* </DrawerDialog > */}
      </ButtonAceternity>
    </div>
  )
}
// export default CallToAction
