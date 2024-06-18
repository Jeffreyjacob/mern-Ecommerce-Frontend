import { AddCart } from "@/pages/DetailPage"


export type user = {
    _id: string
    email: string,
    name: string,
    addressLine1: string,
    city: string,
    country: string
}

export type product = {
    _id:string
    user:string,
    title:string,
    price:string,
    category:string,
    description:string,
    avaliableQuantity:string,
    size:string[],
    AddedToCart:boolean,
    AddedToWishList:boolean,
    imageUrl:string,
    lastUpdate:string
}

export type productData = {
    data:product[],
    pagination:{
        total:number,
        page:number,
        pages:number
    }
}


export type Cart = {
    cart:AddCart[]
}

export type CreateCheckoutRequest = {
    cartItem:{
        id:string,
        title:string,
        quantity:string,
        imageUrl:string,
        price:string
     }[];
     deliveryDetails: {
         email: string;
         name: string;
         addressLine1: string;
         city: string
     },
}