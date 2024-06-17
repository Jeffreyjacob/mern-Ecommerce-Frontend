import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import heroImage from '@/assets/Category Image.png';

const SecondHero = () => {
    return (
        <div className="w-full bg-Neutral-white-W100 py-10">
            <div className=" container flex flex-col-reverse md:flex-row max-w-5xl mx-auto justify-center items-center">
                <div className="flex flex-col w-full md:w-1/2 justify-center md:justify-start max-md:items-center max-md:mt-7">
                   <div className="flex flex-col w-[270px] md:w-[370px]">
                   <span className=" text-[18px] font-bold md:text-[24px] text-Neutral-B900">
                        Browse Our Fashion Paradise!
                    </span>
                    <span className=" text-[14px] font-normal text-Neutral-B500">
                        Step into a world of style and explore our diverse collection of clothing categories.
                    </span>
                   </div>
                    <Button className="flex gap-2 bg-Neutral-B900 text-Neutral-white-W900 w-[183px] mt-7">
                        Start Browsing
                        <MoveRight className="w-4 h-4 text-Neutral-white-W900" />
                    </Button>
                </div>
                
                <div className=" w-full md:w-1/2 flex justify-center md:justify-end">
                   <img src={heroImage} className="h-[230px] w-[230px]"/>
                </div>

            </div>
        </div>
    )
}

export default SecondHero