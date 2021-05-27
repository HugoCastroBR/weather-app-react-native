export type weatherType = {
    name: string
    main: {
        temp: number
        feels_like: number
        humidity: number
        pressure: number
    }
    weather: [
        {
            main: string,
            description: string
            icon: string
            
        }
    ]

    wind: {
        speed: number
    }
}

export type placeType = {
    city: string
    state: string
    country: string
    lat: string
    long: string
    state_code: string
}

export type weatherApiInput = {
    latitude: string
    longitude: string
}