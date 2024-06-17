import { Loader2 } from "lucide-react"
import { Button } from "../ui/button"


const LoadingButton = () => {
  return (
     <Button className="flex" disabled>
        <Loader2 className=" animate-spin"/>
        Loading...
     </Button>
  )
}

export default LoadingButton