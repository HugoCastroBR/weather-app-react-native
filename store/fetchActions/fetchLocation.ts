import { GEO_LOCATION_API_KEY } from "react-native-dotenv"
import api from "../../services/api"
import { placeType } from "../../types"
import { SetLocation } from "../actions"




export const searchCity = (city:string) => {
    const cityClean = city.replace(' ','%2C%20')
    
    // return (dispatch:any) => {
    //     api.get(`&q=${cityClean}`)
    //     .then((res) => {
    //         console.log(res)
    //     })
    //     .catch(console.log)
    // }

    return (dispatch:any) => {
        api.get(`/json?key=${GEO_LOCATION_API_KEY}&q=${cityClean}`)
        .then((res) => {
            const data = res.data.results[0]
            const city = data.components[data.components['_type']] === undefined ? data.components.town : data.components[data.components['_type']]
            let results:placeType = {
                city ,
                country: data.components.country,
                state: data.components.state,
                long: `${data.geometry.lng}`,
                lat: `${data.geometry.lat}`,
                state_code: data.components.state_code
            }
            dispatch(SetLocation(results))
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
}


export const getCityByCoords = (lat:string,long:string) => {

    return (dispatch:any) => {
        api.get(`/json?q=${lat}+${long}&key=${GEO_LOCATION_API_KEY}`)
        .then((res) => {
            const data = res.data.results[0]
            const city = data.components[data.components['_type']] === undefined ? data.components.town : data.components[data.components['_type']]
            let results:placeType = {
                city ,
                country: data.components.country,
                state: data.components.state,
                long: `${data.geometry.lng}`,
                lat: `${data.geometry.lat}`,
                state_code: data.components.state_code
            }
            dispatch(SetLocation(results))
            
        })
        .catch((err) => {
            console.log(err)
        })
    }




    
}