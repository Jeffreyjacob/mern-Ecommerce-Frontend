import { Cart } from "@/lib/types";
import { AddCart } from "@/pages/DetailPage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Cart = {
    cart: []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartAction: (state, action: PayloadAction<AddCart>) => {
            const existingCart = state.cart.find((newCart) => newCart.id === action.payload.id)
            if (existingCart) {
                existingCart.quantity += action.payload.quantity
            } else {
                state.cart = [...state.cart, action.payload]
            }

        },
        removeCartAction: (state, action:PayloadAction<AddCart>) => {
            state.cart = state.cart.filter((newCart) => newCart.id !== action.payload.id)
        },
        addIncrement: (state, action: PayloadAction<AddCart>) => {
            const existingItem = state.cart.find((c) => c.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity += 1
            }
        },
        addDecrement:(state, action: PayloadAction<AddCart>) => {
            const existingItem = state.cart.find((c) => c.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity -= 1
            }
        }
    }
})

export const { addCartAction, removeCartAction,addDecrement,addIncrement} = CartSlice.actions;
export default CartSlice.reducer
