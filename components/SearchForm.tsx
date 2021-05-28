import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useWeatherApp from '../hooks/useWeatherApp';
import { getCityByCoords, searchCity } from './../store/fetchActions/fetchLocation';
import { useNavigation } from '@react-navigation/core';
import * as Location from "expo-location"




const SearchForm = () => {
    const {states, dispatch} = useWeatherApp()
    const theme = {...states.Theme}

    const style = StyleSheet.create({
        componentContainer:{
            width: '90%',
        },
    
        buttonContainer:{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            
            
        },
        buttonStyle:{
            backgroundColor: '#cc2211',
            justifyContent: 'center',
            alignItems: 'center',
            height: 52,
            width: 120,
            fontSize: 20,
            borderRadius: 10
        },
        inputStyle:{
            paddingLeft: 12,
            marginTop: 20,
            borderWidth: 0.8,
            borderColor: 'gray',
            borderRadius: 10,
            height: 46,
            elevation: 0,
            backgroundColor: `${theme.isDark ? '#fff' : `${theme.backgroundColor}`}`
        }
    
    })

    const getLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Access to localization is needed to run the app!');
                return
            }
            const location = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = location.coords;
            dispatch(getCityByCoords(`${latitude}`,`${longitude}`))
        } catch (err) {
            alert(err)
        }
    }


    const [search, setSearch] = useState("")
    const navigation = useNavigation();
    return(
        <View style={style.componentContainer}>
            <Text style={{fontSize:20 , color: theme.textMainColor}}>  
                Type your location here :
            </Text>
            <TextInput style={style.inputStyle} placeholder="Location" onChangeText={(event) => setSearch(event)}/>
            <View style={style.buttonContainer}>

                <TouchableOpacity onPress={() => {
                    dispatch(searchCity(`${search}`))
                    navigation.navigate('Home')
                }} 
                style={style.buttonStyle}>
                    <Text style={{color:'white',fontSize:18}}>
                        Submit
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                            // 
                            getLocation()
                            navigation.navigate('Home')
                        }}
                    style={style.buttonStyle}>
                    <Text>
                        <MaterialIcons name="my-location" size={30} color="white"  />
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default SearchForm;