import CreateProductForm from "@/Form/CreateProduct"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { useCreateProductRequest } from "@/api/adminProduct"



const AddProduct = () => {
  const {CreateProduct,isLoading} = useCreateProductRequest()
  return (
    <Card>
        <CardHeader>
            <CardTitle className="text-[18px] text-Neutral-B900">
               Add Product
            </CardTitle>
            <CardContent>
                <div className="mt-5">
                   <CreateProductForm onSave={CreateProduct} isloading={isLoading}/>
                </div>
            </CardContent>
        </CardHeader>
    </Card>
  )
}

export default AddProduct