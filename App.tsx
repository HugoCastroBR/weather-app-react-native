import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, Image, Platform, StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location"
import { weatherType } from './types';
import WeatherDisplay from './components/WeatherDisplay';
import UnitsPicker from './components/UnitsPicker';
import ReloadIcon from './components/ReloadIcon';
import WeatherDetails from './components/WeatherDetails';
import { WEATHER_API_KEY } from 'react-native-dotenv';




const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
  },

  reloadIcon: {
    position: 'absolute',
    ...Platform.select({
      ios: {
          top: -30,
      },
      android: {
          top: 56,
      },
  }),
    right: -40,
    height: 50,
    width: 100,
  }

});



export default function App() {
  
  const ApiKey = WEATHER_API_KEY
  console.log(ApiKey)

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`



  const [weather, setWeather] = useState({
    name: "",
    main: {temp:0,feels_like:0,humidity:0,pressure:0},
    weather: [{main:"",description:"",icon:""}],
    wind: {speed:0}
  } as weatherType)

  const [unit,setUnit] = useState('metric')
  

  useEffect(() => {
    load()
  },[unit])


  const load = async () => {

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if(status !== 'granted'){
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
    }catch(err){
      alert(err.message)
    }
  }


  return (
    <View style={styles.pageContainer}>
      
      <UnitsPicker unit={unit} setUnit={setUnit} />
      <View style={styles.reloadIcon} >
        <ReloadIcon  onPress={load}/>
      </View>
      <WeatherDisplay {...weather} />
      <WeatherDetails {...weather} />
    </View>
  );
}




