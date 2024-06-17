import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react"
import HeroImage from '@/assets/Hero Image.png';

const Hero = () => {
  return (
     <div className=" relative bg-Neutral-white-W100">
     <div className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto container  max-md:py-10 h-full items-center justify-center ">
         <div className="flex flex-col gap-2 w-full md:w-1/2 max-md:mt-5 justify-center items-center">
             <div className="flex flex-col">
                 <span className="text-[26px] lg:text-[32px]  font-semibold tracking-tight">Fresh Arrivals Online</span>
                 <span className="text-[14px] font-normal text-Neutral-B600">Discover Our Newest Collection Today.</span>
             </div>
             <Button className="flex gap-2 bg-Neutral-B900 text-Neutral-white-W900 w-[183px] mt-7">
                 View Collection
                 <MoveRight className="w-4 h-4 text-Neutral-white-W900" />
             </Button>
         </div>
         <div className=" w-full md:w-1/2">
             <AspectRatio ratio={16 / 16} style={{
                 backgroundImage: `url(${HeroImage})`,
                 backgroundSize: "cover"
             }} className=" relative">
                 <div className=" absolute inset-0 w-full flex flex-col justify-end pointer-events-none">
                     <div className="h-1/4 bg-gradient-to-t from-Neutral-white-W100 to-transparent" />
                 </div>
             </AspectRatio>
         </div>
     </div>
 </div>

  )
}

export default Hero