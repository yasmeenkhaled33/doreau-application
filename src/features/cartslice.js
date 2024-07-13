import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numshop:0,
}

export const resultSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        num:(state,action)=>{
            state.numshop=state.numshop+1
        },
        del:(state,action)=>{
            state.numshop=state.numshop-1
        }   
    }
})


export const {num,del} =resultSlice.actions
export default resultSlice.reducer