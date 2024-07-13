import { Egg } from '@mui/icons-material'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalprice:0,
}

export const TotalpriceSlice = createSlice({
    name:"price",
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
            const res=parseFloat(action.payload)
            state.totalprice=(Number(state.totalprice)+Number(res))
        },
        removeprice:(state,action)=>{
            const res=parseFloat(action.payload)
            state.totalprice=(Number(state.totalprice)-Number(res))
        }
    }
})


export const {add,removeprice} =TotalpriceSlice.actions
export default TotalpriceSlice.reducer