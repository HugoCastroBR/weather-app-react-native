import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton, Colors } from 'react-native-paper';
import useWeatherApp from '../hooks/useWeatherApp';





const RecentSearchItem = () => {

    const {states, dispatch} = useWeatherApp()
    const theme = {...states.Theme}


    const style = StyleSheet.create({
        recentItemStyle:{
            minWidth: '100%',
            maxWidth: '100%',
            height: 70 ,
            backgroundColor: theme.itemBackGroundColor,
            marginTop: 10,
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16,
        },
        locationContainer: {
            borderLeftColor: "#cc2211",
            paddingLeft: 4,
            borderLeftWidth: 3
        },
        mainText: {
            fontSize: 16,
            color: theme.textMainColor
        }
    }
    )


    return(
        <View style={style.recentItemStyle}>
            <View style={style.locationContainer}>
                <Text style={style.mainText}>Rio de Janeiro </Text>
                <Text style={{color: theme.textMainColor}}>RJ, Brazil</Text>
            </View>
            <IconButton  onPress={console.log} icon="arrow-right" size={30} color="#cc2211"/>
        </View>
            

    )
}

export default RecentSearchItem;