import React, { useEffect } from 'react';
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
            marginBottom: 120
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
            {states.Location.recentSearches.map((e,index) => <RecentSearchItem key={index} place={e} id={index}/>)}

        </ScrollView>
            

    )
}

export default RecentSearches;