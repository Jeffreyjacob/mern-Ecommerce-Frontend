import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {
    onChange:(value:string)=>void;
    value:string
}

const category = [
    {name:"Clothes",value:"clothes"},
    {name:"Shoes",value:"shoes"},
    {name:"Jeweleries",value:"jeweleries"},
    {name:"Other Accessories",value:"other-accessories"},
]

const CategorySelect = ({onChange,value}:Props) => {
    return (
        <Select
        value={value}
        onValueChange={(value)=>onChange(value)} >
            <SelectTrigger>
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                {
                    category.map((item,index)=>(
                        <SelectItem key={index} value={item.value}>
                           {item.name}
                        </SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}

export default CategorySelect