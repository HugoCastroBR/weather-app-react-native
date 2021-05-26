import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import useWeatherApp from '../hooks/useWeatherApp';
import RecentSearchItem from './RecentSearchItem';






const RecentSearches = () => {

    const {states, dispatch} = useWeatherApp()
    const theme = {...states.Theme}


    const style = StyleSheet.create({
        componentContainer:{
            minWidth: '90%',
            maxWidth: '90%',
            height: 'auto',
            alignItems: 'flex-start',
            marginTop: 20,
    
        },
        componentTitle:{
            fontSize: 22,
            color: theme.textMainColor
        }
    }
    )

    

    return(
        <ScrollView contentContainerStyle={style.componentContainer}>
            <Text style={style.componentTitle}>Previous searches :</Text>
            <RecentSearchItem/>
            <RecentSearchItem/>
            <RecentSearchItem/>
        </ScrollView>
            

    )
}

export default RecentSearches;