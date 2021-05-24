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