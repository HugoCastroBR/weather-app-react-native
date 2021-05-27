import { createSlice } from "@reduxjs/toolkit";
import { placeType } from "../../types";




export const LocationSlice = createSlice({
    name: "locationSlice",
    initialState:{

        place : {
            city: ''
        } as placeType ,
        
        recentSearches : [] as placeType[] ,


        
    },
    
    reducers: {
        SET_PLACE(state,{payload}:{payload:placeType}){
            state.place = payload
            state.recentSearches.unshift(payload)
    }
}
})

