import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartItem from "../../types/cartItem";

export interface CartState {
  cart: CartItem[];
}
interface DecreaseQuantityPayload {
    id: number;
}
interface RemoveItemPayload {
    id: number;
}
  

/*
    manage the cart related logic here
    add product
    manage quantity
*/

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] } as CartState,
  reducers: {
    addToCart: (state, action) => {
        const itemInCart = state.cart.find(
          (item) => item.id === action.payload.id
        );
        if (itemInCart) {
          if (itemInCart) {
            itemInCart.quantity++;
          }
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
        }
    },
    decreaseQuantity: (
        state,
        action: PayloadAction<DecreaseQuantityPayload>
      ) => {
        const item = state.cart.find((item) => item.id === action.payload.id);
        if (item && item.quantity !== undefined && item.quantity > 1) {
          item.quantity--;
        }
    },
    removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    reset: () =>{
        return { cart: [] }
    }
  },
});

export default cartSlice;
export const { addToCart, decreaseQuantity ,reset, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
