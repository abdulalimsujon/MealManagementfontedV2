import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./stateSlice/mealSlice";

export default configureStore({

    reducer:{
        mealInfo:mealSlice


        
    }

})