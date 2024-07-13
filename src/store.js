import { configureStore } from '@reduxjs/toolkit'
import resulticon from './features/listslice'
import cartshop from "./features/cartslice"
import cartproduct from "./features/productcartslice"
import totalprice from "./features/totalpriceslice"

export const store = configureStore({
    reducer: {
        result:resulticon,
        cart:cartshop,
        cartproduct:cartproduct,
        totalprice:totalprice
    },
  })
  