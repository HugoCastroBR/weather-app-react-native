import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton, Colors } from 'react-native-paper';
import useWeatherApp from '../hooks/useWeatherApp';
import { RemovePlaceFromRecent, SetLocation } from '../store/actions';
import { searchCity } from '../store/fetchActions/fetchLocation';
import { placeType } from '../types';






const RecentSearchItem = ({ place,id }: { place: placeType, id: number }) => {

    const { states, dispatch } = useWeatherApp()
    const theme = { ...states.Theme }


    const style = StyleSheet.create({
        recentItemStyle: {
            minWidth: '100%',
            maxWidth: '100%',
            height: 70,
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

    const navigation = useNavigation();
    
    return (
        <View style={style.recentItemStyle}>
            <View style={style.locationContainer}>
                <Text style={style.mainText}>{place.city}</Text>
                <Text style={{ color: theme.textMainColor }}>{place.state_code?`${place.state_code}, `:''}{place.country}</Text>
            </View>
            <IconButton  icon="arrow-right" size={30} color="#cc2211" onPress={() => {
                dispatch(RemovePlaceFromRecent(id))
                dispatch(SetLocation(place))
                navigation.navigate('Home')
            }} />
        </View>


    )
}

export default RecentSearchItem;