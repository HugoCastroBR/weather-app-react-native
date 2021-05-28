import { ThemeActions } from "."
import { placeType } from "../types"
import { LocationActions } from './index';

export const SetDarkMode = (dark:boolean) => {
    return ThemeActions.SET_DARK_THEME(dark)
}

//  Locations 

export const SetLocation = (location:placeType) => {

    return LocationActions.SET_PLACE(location)
}

export const RemovePlaceFromRecent = (id:number) => {
    return LocationActions.REMOVE_PLACE(id)
}