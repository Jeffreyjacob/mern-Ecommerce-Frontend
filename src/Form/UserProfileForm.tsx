
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/shared/LoadingButton";
import { useGetUserRequest } from "@/api/userApi";
import { useEffect } from "react";
 
const formSchema = z.object({
  email:z.string().optional(),
  name:z.string().min(2,"Your username must be at least 2 characters"),
  addressLine:z.string().min(1,"addressLine is required"),
  city:z.string().min(1,"city is required"),
  country:z.string().min(1,"country is required")
})

export type UserFormData = z.infer<typeof formSchema>
type Props = {
  onSaVe:(userformData:UserFormData)=>void,
  isloading:boolean,
  buttonText?:string,
}
const UserProfileForm = ({onSaVe,isloading,buttonText="Save Change"}:Props) => {
    const {FetchUser} = useGetUserRequest()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:FetchUser
      })
      useEffect(()=>{
        form.reset(FetchUser)
       },[FetchUser,form])
       const onSubmit = (userFormData:UserFormData)=>{
         onSaVe(userFormData)
       }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} disabled />
              </FormControl>
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="addressLine"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Addressline</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Addressline" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-5">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Enter your city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="Enter your country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
         {
          isloading ? <LoadingButton/>:(
            <Button type="submit">{buttonText}</Button>
          )
         }
      </form>
    </Form>

  )
}

export default UserProfileForm