import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionIntroduction() {
  return (
    <>
      <Accordion type="multiple" collapsible defaultValue={['item-1']} className="w-full">

        {/* <AccordionItem value="item-1" > */}
        {/*   <AccordionTrigger> */}
        {/*     <h1 className="relative hover:left-2 hover:top-2 px-4  text-4xl md:text-8xl lg:text-9xl font-bold py-2  md:text-left"> */}
        {/*       About me */}
        {/*     </h1> */}
        {/*   </AccordionTrigger> */}
        {/*   <AccordionContent className="text-xl px-4"> */}
        {/*     I'm Devinger, a front-end developer, programmer, and photographer. By day, I work at a company where I primarily build websites using WordPress, helping businesses establish their online presence. By night (and weekends), I dive into photography, capturing stunning product and fashion photos that bring websites to life. */}
        {/**/}
        {/**/}
        {/**/}
        {/*   </AccordionContent> */}
        {/* </AccordionItem> */}
        <AccordionItem value="item-1" className="">
          <AccordionTrigger>
            <h1 className="relative hover:left-2 hover:top-2 px-4  text-4xl md:text-8xl lg:text-9xl font-bold py-2  md:text-left">
              What I do
            </h1>
          </AccordionTrigger>
          <AccordionContent className="text-xl px-4">

            <ul>
              <li><span className="font-bold">Front-End Development: </span><br />I specialize in creating responsive and user-friendly websites. Whether you&apos;re looking for a new site or need to refresh your current one, I&apos;ve got you covered.</li><br />
              <li> <span className="font-bold">Programmer:  </span><br />I bring functionality to your website, ensuring it runs smoothly and efficiently. From custom features to troubleshooting, I handle the technical details so you don’t have to.</li><br />

              <li> <span className="font-bold">Photo/Video  </span><br />Great websites need great visuals. I take professional  photos and videos to ensure your site looks polished and professional.
                Check out my work <a href="/photo-video" className="underline text-blue-500 font-bold">here</a><br />

                Need a bespoke shot? Let&apos;s make it happen.</li><br />
            </ul>


          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="">
          <AccordionTrigger>
            <h1 className="relative hover:left-2 hover:top-2 px-4  text-4xl md:text-8xl lg:text-9xl font-bold py-2  md:text-left">
              About me
            </h1>
          </AccordionTrigger>
          <AccordionContent className="text-xl px-4">
            I'm Devinger, a front-end developer, programmer, and photographer. By day, I work at a company where I primarily build websites using WordPress, helping businesses establish their online presence. By night (and weekends), I dive into photography, capturing stunning product and fashion photos that bring websites to life.



          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="">
          <AccordionTrigger>
            <h1 className="relative hover:left-2 hover:top-2 px-4  text-4xl md:text-8xl lg:text-9xl font-bold py-2  md:text-left">
              About me
            </h1>
          </AccordionTrigger>
          <AccordionContent className="text-xl px-4">
            I'm Devinger, a front-end developer, programmer, and photographer. By day, I work at a company where I primarily build websites using WordPress, helping businesses establish their online presence. By night (and weekends), I dive into photography, capturing stunning product and fashion photos that bring websites to life.



          </AccordionContent>
        </AccordionItem>
        {/* <AccordionItem value="item-2"> */}
        {/*   <AccordionTrigger>Is it styled?</AccordionTrigger> */}
        {/*   <AccordionContent> */}
        {/*     Yes. It comes with default styles that matches the other */}
        {/*     components&apos; aesthetic. */}
        {/*   </AccordionContent> */}
        {/* </AccordionItem> */}
        {/* <AccordionItem value="item-3"> */}
        {/*   <AccordionTrigger>Is it animated?</AccordionTrigger> */}
        {/*   <AccordionContent> */}
        {/*     Yes. It&apos;s animated by default, but you can disable it if you */}
        {/*     prefer. */}
        {/*   </AccordionContent> */}
        {/* </AccordionItem> */}
      </Accordion>

      {/* <Accordion type="single" > */}
      {/*   <AccordionItem value="item-1"> */}
      {/*     <AccordionTrigger>Is it accessible?</AccordionTrigger> */}
      {/*     <AccordionContent> */}
      {/*       Yes. It adheres to the WAI-ARIA design pattern. */}
      {/*     </AccordionContent> */}
      {/*   </AccordionItem> */}
      {/* </Accordion> */}
    </>
  )
}
