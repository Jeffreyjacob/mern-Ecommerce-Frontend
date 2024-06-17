import { Search } from "lucide-react"
import { Input } from "../ui/input"

const SearchBar = () => {
  return ( 
    <div className="flex gap-2 items-center border-[1px] border-Neutral-B100 rounded-lg p-1 px-3">
        <Search className="w-5 h-5 text-Neutral-B300"/>
        <Input type="text" placeholder="Search Product" 
        className=" border-transparent text-Neutral-B300 shadow-none  focus-visible:ring-0 bg-transparent" />
    </div>
  )
}

export default SearchBar