import { createSlice, current } from "@reduxjs/toolkit";
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
            let newStateRecent = [...current(state).recentSearches]
            newStateRecent = newStateRecent.filter(e => e.city !== payload.city)
            newStateRecent.unshift(payload)
            newStateRecent = newStateRecent.slice(0,3)
            state.recentSearches = newStateRecent

            // state.recentSearches.unshift(payload)
            
        },
        REMOVE_PLACE(state,{payload}:{payload:number}){
            state.recentSearches.splice(payload,1)
        }

        }       
})

