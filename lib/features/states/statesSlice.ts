'use client'


import { createSlice } from "@reduxjs/toolkit";


export const statesSlice = createSlice({
    name:"states",
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        }
        
    }
})


export const {increment, decrement} = statesSlice.actions;
export default statesSlice.reducer;



// const [value, setvalue] = useState()