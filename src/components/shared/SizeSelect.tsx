import { useState } from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

type Props = {
    onChange: (value: string[]) => void;
}

const sizes = [
    { name: "S", value: "s" },
    { name: "M", value: "m" },
    { name: "L", value: "l" },
    { name: "XL", value: "xl" },
    { name: "2XL", value: "2xl" },
]



const SizeSelect = ({ onChange }: Props) => {
    const [selectSize, setSelectSize] = useState<string[]>([])
    const handleChange = (value: string) => {
        setSelectSize((prevState) => {
            const existingItem = prevState?.find((item) => item === value)
            let updatedState;
            if (existingItem) {
                updatedState = prevState?.filter((item) => item !== existingItem)
            } else {
                updatedState = [...prevState, value]
            }
            onChange(updatedState)
            return updatedState
        })
    }
    console.log(selectSize)
    return (
        <div className="flex gap-2 cursor-pointer">
            {
                sizes.map((size, index) => (
                    <Card key={index}
                        onClick={() => handleChange(size.value)}
                        className={cn(`p-3`,{
                            " border-2 border-Neutral-B900": selectSize.find((item)=>item == size.value)
                        })}>
                        {size.name}
                    </Card>
                ))
            }
        </div>
    )
}

export default SizeSelect