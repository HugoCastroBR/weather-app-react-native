import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: "themeSlice",
    initialState:{
        isDark: false,
        backgroundColor: "#ebebeb",
        textMainColor: "black",
        itemBackGroundColor: "#cccccc"
    },
    reducers: {
        SET_DARK_THEME(state,{payload}:{payload:boolean}){
            if(payload){
                state.isDark = true
                state.backgroundColor = '#333333'
                state.textMainColor = 'white'
                state.itemBackGroundColor = '#777777'
            }else{
                state.isDark = false
                state.backgroundColor = '#ebebeb'
                state.textMainColor = 'black'
                state.itemBackGroundColor = "#cccccc"
            }
        },
    }
})