import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Checkbox } from "../ui/checkbox"
import { SearchProductType } from "@/pages/SearchPage"
import { Separator } from "../ui/separator"
import { Card } from "../ui/card"
import { Slider } from "../ui/slider"
import { cn } from "@/lib/utils"
import { SlidersHorizontal } from "lucide-react"

type Props = {
    searchState: SearchProductType,
    onCategoryChange: (value: string) => void,
    onSizeChange: (value: string) => void,
    onPriceChange: (value: number[]) => void
}
const Category = [
    { name: "Clothes", value: "clothes" },
    { name: "Shoes", value: "shoes" },
    { name: "Jeweleries", value: "jeweleries" },
    { name: "Other Accessories", value: "other-accessories" },
]
const sizes = [
    { name: "S", value: "s" },
    { name: "M", value: "m" },
    { name: "L", value: "l" },
    { name: "XL", value: "xl" },
    { name: "2XL", value: "2xl" },
]

export function MobileSideBar({ onCategoryChange, onSizeChange, onPriceChange, searchState}:Props) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
            <SlidersHorizontal className="w-5 h-5" />
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Search Filter</DrawerTitle>
                    </DrawerHeader>
                    <div className="w-full flex flex-col gap-7 py-10 px-5">
                        {/**Category */}
                        <div>
                            <span className=" text-[14px] font-medium text-Neutral-B900">Category</span>
                            <div className="pt-4">
                                {
                                    Category.map((category, index) => (
                                        <div key={index} className="flex flex-col py-2 gap-2">
                                            <div className="flex items-center gap-2">
                                                <Checkbox
                                                    checked={category.value === searchState.category}
                                                    onCheckedChange={() => onCategoryChange(category.value)} />
                                                <span className=" text-Neutral-B600 text-[14px] font-normal">
                                                    {category.name}
                                                </span>
                                            </div>
                                            <Separator />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/**Size */}
                        <div>
                            <span className=" text-[14px] font-medium text-Neutral-B900 ">Size</span>
                            <div className="flex gap-2 cursor-pointer pt-4">
                                {
                                    sizes.map((size, index) => (
                                        <Card key={index}
                                            className={cn(`p-3 text-[12px] text-Neutral-B900 font-medium flex-wrap`, {
                                                "border-2 border-Neutral-B900": searchState.size === size.value
                                            })} onClick={() => onSizeChange(size.value)}>
                                            {size.name}
                                        </Card>
                                    ))
                                }
                            </div>
                        </div>

                        {/**price */}
                        <div>
                            <span className=" text-[14px] font-medium text-Neutral-B900 ">Price</span>
                            <div className="flex gap-2 cursor-pointer pt-4">
                                <Slider defaultValue={[1000]} max={1000} step={1}
                                    onValueChange={(value: number[]) => onPriceChange(value)} />
                            </div>
                        </div>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}