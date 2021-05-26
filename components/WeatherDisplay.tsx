import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import useWeatherApp from '../hooks/useWeatherApp';
import { weatherType } from '../types';
import UnitsPicker from './UnitsPicker';



const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 230,
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainInfosText: {
        fontSize: 18,
        textTransform: 'capitalize',

    },
    tempStyle: {
        fontSize: 48,
        color: '#cc2211'
    },
    weatherIcon: {
        width: 120,
        height: 120,
    }
}
)

const WeatherDisplay = ({...weather}:weatherType) => {

    const {states, dispatch} = useWeatherApp()
    const theme = {...states.Theme}


    return (
        <View style={styles.mainContainer}>
            <Text style={{...styles.mainInfosText,color: theme.textMainColor}}>
                {weather.name}
            </Text>
            <Image style={styles.weatherIcon} source={{ uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` }} />
            <Text style={styles.tempStyle}>
                {weather.main.temp.toFixed(1)}°
        </Text>
            <Text style={{...styles.mainInfosText,color: theme.textMainColor}}>
                {weather.weather[0].description}
            </Text>
            <Text style={{...styles.mainInfosText,fontSize: 20, fontWeight:'700',color: theme.textMainColor}} >
                {weather.weather[0].main}
            </Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default WeatherDisplay       