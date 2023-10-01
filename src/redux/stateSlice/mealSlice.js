import { createSlice } from "@reduxjs/toolkit";



export const mealSliceReducer = createSlice({
    name:"mealInfo",
    initialState:{
        meal: 0,
        balance:0,
       
       

    },
    reducers:{
        addMeal:(state,action)=>{
            state.meal =parseInt(state.meal+ action.payload)
        },

        addBalance:(state,action)=>{
            state.balance = parseInt(state.balance+ action.payload)
        },
        deleteMeal:(state,action)=>{
            state.meal = parseInt(state.meal- action.payload)
        },

       deleteBalance:(state,action)=>{
            state.balance = parseInt(state.balance-action.payload)
        },
      

       
    }
})


export const {addMeal,addBalance,deleteMeal,deleteBalance} =  mealSliceReducer.actions;

export default  mealSliceReducer.reducer;
