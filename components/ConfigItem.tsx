import React from 'react';
import { Button, StyleSheet, Text, View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import { Switch } from 'react-native-paper';
import useWeatherApp from '../hooks/useWeatherApp';
import ToggleTheme from './configs/ToggleTheme';




const ConfigItem = () => {

    const {states, dispatch} = useWeatherApp()
    const theme = {...states.Theme}


    const style = StyleSheet.create({
        configItemStyle:{
            marginTop: 10,
            minWidth: '90%',
            maxWidth: '90%',
            marginLeft: '5%',
            padding: 10,
            borderRadius: 10,
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: theme.itemBackGroundColor,
            alignItems: 'center'
        },
        settingTitle:{
            fontSize: 18,
            color: theme.textMainColor
        }
    })


    return(
        <View style={style.configItemStyle}>
            <Text style={style.settingTitle}>
                Dark Mode :
            </Text>
            <ToggleTheme/>
        </View>
    )
}

export default ConfigItem;