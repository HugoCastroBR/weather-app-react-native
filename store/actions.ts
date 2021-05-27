import { ThemeActions } from "."
import { placeType } from "../types"
import { LocationActions } from './index';

export const SetDarkMode = (dark:boolean) => {
    return ThemeActions.SET_DARK_THEME(dark)
}

//  Locations 

export const SetLocation = (location:placeType) => {
    console.log("executando ?")
    console.log(":",location)
    return LocationActions.SET_PLACE(location)
}