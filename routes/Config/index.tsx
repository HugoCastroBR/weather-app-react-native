import React from 'react';
import { StyleSheet, Text, View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import ConfigItem from '../../components/ConfigItem';
import { style } from './style';
import useWeatherApp from './../../hooks/useWeatherApp';



const ConfigScreen = () => {

    const {states, dispatch} = useWeatherApp()
    const theme = {...states.Theme}
    
    return(
        <ScrollView contentContainerStyle={{...style.componentContainer,backgroundColor:theme.backgroundColor}}>
            <Text style={{...style.settingsTitle,color:theme.textMainColor}}>
                Settings:
            </Text>
            <ConfigItem/>
        </ScrollView>
    )
}

export default ConfigScreen;