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

export type order = {
    user:string,
    deliveryDetails:{
    email:string,
    name:string,
    addressLine1:string,
    city:string
 },
 cartItems:[
    {
       id:string,
       title:string,
       quantity:string,
       imageUrl:string,
       price:string
    }
 ],
 totalAmount:number,
 status:string
 createdAt:string
}

export type CreateWishlistRequest = {
    title:string,
    price:number,
    Id:string,
    imageUrl:string
}

export type Wishlist = {
    _id:string,
    title:string,
    price:number,
    Id:string,
    imageUrl:string,
    user:string,
    createAt:string
}