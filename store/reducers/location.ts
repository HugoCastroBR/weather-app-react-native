import { createSlice } from "@reduxjs/toolkit";

export const LocationSlice = createSlice({
    name: "locationSlice",
    initialState:{
        city: ""
    },
    reducers: {
        SET_CITY(state,{payload}:{payload:string}){
            state.city = payload
    }
}
})