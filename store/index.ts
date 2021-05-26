import { configureStore } from "@reduxjs/toolkit"
import { LocationSlice } from './reducers/location';
import { ThemeSlice } from './reducers/theme';


const store = configureStore({
    reducer:{
        Location: LocationSlice.reducer,
        Theme: ThemeSlice.reducer
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>
export const LocationActions = LocationSlice.actions
export const ThemeActions = ThemeSlice.actions

