import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    result:"false",
}

export const resultSlice = createSlice({
    name: 'resultvalue',
    initialState:initialState,
    reducers:{
        icon:(state,action)=>{
            state.result=state.result==="false"?"true":"false"
            
        }
    }
})

export const {icon}=resultSlice.actions;
export default resultSlice.reducer;