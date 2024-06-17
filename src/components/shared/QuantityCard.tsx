import { Minus, Plus } from "lucide-react"
import { Button } from "../ui/button"

type Props = {
    increment: () => void
    value: number,
    decrement: () => void
}

const QuantityCard = ({ increment, decrement, value }: Props) => {
    return (
        <div className="flex gap-6 px-4 mt-2 items-center justify-between w-fit">
            <Button onClick={decrement} variant="outline">
                <Minus className="w-4 h-4 text-Neutral-B900" />
            </Button>
            <span className=" pointer-events-none">
                {value}
            </span>
            <Button onClick={increment} variant="outline">
                <Plus className="w-4 h-4 text-Neutral-B900" />
            </Button>
        </div>
    )
}

export default QuantityCard