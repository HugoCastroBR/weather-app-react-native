import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location"


const WEATHER_API_KEY =  '2aa16304e45aa620fb5c3a1ea5209f0f'

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainContainer: {
    backgroundColor: '#55f',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '20%',
    paddingLeft: '5%',
    paddingRight: '5%',
  }

});




export default function App() {



  useEffect(() => {
    console.log(WEATHER_API_KEY)
    load()
  },[])

  const [localization, setLocalization] = useState({latitude:0,longitude:0})

  const load = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if(status !== 'granted'){
        alert('Access to localization is needed to run the app!');
        return
      }
    
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      setLocalization({latitude,longitude})


    }catch(err){
      alert(err.message)
    }
  }


  return (
    <View style={styles.pageContainer}>
      <View style={styles.mainContainer}>
        <Text>Latitude: {localization.latitude}</Text>
        <Text>Longitude: {localization.longitude}</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}




