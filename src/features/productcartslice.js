import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartshop:[],
}


export const cartproSlice = createSlice({
    name:"cartproduct",
    initialState:initialState,
    reducers:{
        push:(state,action)=>{
            state.cartshop.push(action.payload)
        },
        remove:(state,action)=>{
            state.cartshop.pop(action.payload)
        }
    }
})


export const {push,remove} =cartproSlice.actions
export default cartproSlice.reducer