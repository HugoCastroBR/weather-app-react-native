import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useWeatherApp from '../hooks/useWeatherApp';




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

    return(
        <View style={style.componentContainer}>
            <Text style={{fontSize:20 , color: theme.textMainColor}}>  
                Type your location here :
            </Text>
            <TextInput style={style.inputStyle} placeholder="Location"/>
            <View style={style.buttonContainer}>

                <TouchableOpacity onPress={console.log} 
                style={style.buttonStyle}>
                    <Text style={{color:'white',fontSize:18}}>
                        Submit
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={console.log} 
                    style={style.buttonStyle}>
                    <Text>
                        <MaterialIcons name="my-location" size={30} color="white" onPress={() => {
                        console.log("get location")
                        }} />
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default SearchForm;