import CategorySelect from "@/components/shared/CategorySelect";
import LoadingButton from "@/components/shared/LoadingButton";
import SizeSelect from "@/components/shared/SizeSelect";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

const formSchema = z.object({
    title: z.string().min(1, "title is required"),
    price:  z.coerce.number({ required_error: "price is requires", invalid_type_error: "must be a valid number" }),
    category: z.string(),
    description: z.string().min(1, "A brief description is required"),
    avaliableQuantity: z.string().min(1, "avaliable quantity is required"),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "image is required" }).optional(),
    size: z.array(z.string()).nonempty({
        message: "Please select a size"
    })
}).refine((data) => data.imageFile || data.imageUrl, {
    message: "Either Imageurl or ImageFile must be Provided", path: ["imageFile"]
})
type Props = {
    onSave:(productFormData:FormData)=>void;
    isloading:boolean;
}
export type CreateProductFormData = z.infer<typeof formSchema>
const CreateProductForm = ({onSave,isloading}:Props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {}
    })
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
        const formData =  new FormData()
        formData.append("title",values.title)
        formData.append("price",values.price.toString())
        formData.append("avaliableQuantity",values.avaliableQuantity)
        formData.append("description",values.description)
        formData.append("category",values.category)
        if(values.imageFile){
           formData.append("imageFile",values.imageFile)
        }
        values.size.forEach((size,index)=>{
            formData.append(`size[${index}]`,size)
        })
        onSave(formData)
        form.reset()
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="w-full grid lg:grid-cols-2 gap-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input placeholder="price" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl className="w-full">
                                <CategorySelect value={field.value} onChange={field.onChange}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="avaliableQuantity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Avaliable Quantity</FormLabel>
                                <FormControl>
                                    <Input placeholder="avaliable quantity" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="imageFile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <Input type="file"
                                    accept=".jpg,jpeg,png"
                                    onChange={
                                        (event)=>field.onChange(event.target.files ? event.target.files[0]:null)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="size"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Size</FormLabel>
                                <FormControl>
                                   <SizeSelect onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                <Textarea placeholder="Type your message here." {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
               {
                isloading ? <LoadingButton/>:(
                    <Button type="submit">Save Product</Button>
                )
               }
            </form>
        </Form>
    )
}

export default CreateProductForm