import { Search } from "lucide-react"
import { Input } from "../ui/input"

type Props ={
  onChange:(e:string)=>void,
  value:string
}
const SearchBar = ({onChange,value}:Props) => {
  return ( 
    <div className="flex gap-2 items-center border-[1px] border-Neutral-B100 rounded-lg p-1 px-3 w-full">
        <Search className="w-5 h-5 text-Neutral-B300"/>
        <Input type="text" placeholder="Search Product" 
        className=" border-transparent text-Neutral-B300 shadow-none  focus-visible:ring-0" onChange={(e)=>onChange(e.target.value)} value={value} />
    </div>
  )
}

export default SearchBar