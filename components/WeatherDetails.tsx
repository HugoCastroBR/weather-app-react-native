import React from 'react';
import { StyleSheet, Text, View } from "react-native"
import { weatherType } from '../types';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import useWeatherApp from '../hooks/useWeatherApp';


const styles = StyleSheet.create({
    detailsContainer: {
        marginTop: 100,
        borderWidth: 0.5,

        borderColor: '#adadad',
        borderRadius: 20,
        width: '94%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        overflow: 'hidden',
        height: 140,
    },
    detailsRow: {
        flexDirection: 'row',
        width: '100%',
        height: '50%',
        overflow: 'hidden',
    },
    detailsItem: {
        width: '50.1%',
        height: '100%',
        borderWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,

        borderColor: '#adadad',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: '80%',
        width: '50%',
        marginLeft: 50,
        marginRight: -2
    },
    textPrimary:{
        fontSize: 16,
    },
    textSecondary: {
        fontSize: 18,
        fontWeight: '700'
    }
})



const WeatherDetails = ({...weather}:weatherType) => {

    const {states, dispatch} = useWeatherApp()
    const theme = {...states.Theme}

    
    return (
        <View style={styles.detailsContainer}>

            <View style={styles.detailsRow}>
                <View style={styles.detailsItem}>
                    <FontAwesome5 name="temperature-low" size={25} color="#cc2211"/>

                    <View style={styles.textContainer}>
                        <Text style={{...styles.textPrimary,color:theme.textMainColor}}>Feels Like:</Text>
                        <Text style={{...styles.textSecondary,color:theme.textMainColor}}>{weather.main.feels_like}°</Text>
                    </View>

                </View>
                <View style={styles.detailsItem}>
                <MaterialCommunityIcons name="water" size={25} color="#cc2211" />

                    <View style={styles.textContainer}>
                        <Text style={{...styles.textPrimary,color: theme.textMainColor}}>Humidity:</Text>
                        <Text style={{...styles.textSecondary,color:theme.textMainColor}}>{weather.main.humidity} %</Text>
                    </View>
                    
                </View>
            </View>

            <View style={styles.detailsRow}>
                <View style={styles.detailsItem}>
                    <MaterialCommunityIcons name="weather-windy" size={25} color="#cc2211" />

                    <View style={styles.textContainer}>
                        <Text style={{...styles.textPrimary,color: theme.textMainColor}}>Wind Speed:</Text>
                        <Text style={{...styles.textSecondary,color:theme.textMainColor}}>{weather.wind.speed} m/s</Text>
                    </View>

                </View>
                <View style={styles.detailsItem}>
                <MaterialIcons name="speed" size={25} color="#cc2211" />

                    <View style={styles.textContainer}>
                        <Text style={{...styles.textPrimary,color: theme.textMainColor}}>Pressure:</Text>
                        <Text style={{...styles.textSecondary,color:theme.textMainColor}}>{weather.main.pressure} hPa</Text>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default WeatherDetails;