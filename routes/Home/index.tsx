import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { WEATHER_API_KEY } from 'react-native-dotenv';
import ReloadIcon from '../../components/ReloadIcon';
import UnitsPicker from '../../components/UnitsPicker';
import WeatherDetails from '../../components/WeatherDetails';
import WeatherDisplay from '../../components/WeatherDisplay';
import { weatherType } from '../../types';
import { styles } from './style';
import * as Location from "expo-location"
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import useWeatherApp from './../../hooks/useWeatherApp';


const Home = () => {
    const ApiKey = WEATHER_API_KEY
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`



    const [weather, setWeather] = useState({
        name: "",
        main: { temp: 0, feels_like: 0, humidity: 0, pressure: 0 },
        weather: [{ main: "", description: "", icon: "" }],
        wind: { speed: 0 }
    } as weatherType)

    const [unit, setUnit] = useState('metric')


    useEffect(() => {
        load()
    }, [unit])


    const load = async () => {

        try {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                alert('Access to localization is needed to run the app!');
                return
            }

            const location = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = location.coords;
            const Url = `${baseUrl}lat=${latitude}&lon=${longitude}&units=${unit}&appid=${ApiKey}`

            const res = await fetch(Url)
            const infos = await res.json()

            console.log(infos)

            setWeather(infos)
        } catch (err) {
            alert(err.message)
        }
    }

    
    const {states, dispatch} = useWeatherApp()
    const theme = {...states.Theme}
    return (
        <ScrollView contentContainerStyle={{...styles.pageContainer , backgroundColor:theme.backgroundColor}} >

                <UnitsPicker unit={unit} setUnit={setUnit} />
                <View style={styles.reloadIcon} >
                    <ReloadIcon onPress={load} />
                </View>
                <WeatherDisplay {...weather} />
                <WeatherDetails {...weather} />

        </ScrollView>
        

    );

}
export default Home;