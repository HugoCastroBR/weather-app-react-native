import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, Text, View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import RecentSearches from '../../components/RecentSearches';
import SearchForm from '../../components/SearchForm';
import { style } from './style';
import useWeatherApp from './../../hooks/useWeatherApp';

const SearchScreen = () => {

    const navigation = useNavigation();

    const {states, dispatch} = useWeatherApp()
    const theme = {...states.Theme}

    return(
        <ScrollView contentContainerStyle={{...style.searchScreenContainer,backgroundColor:theme.backgroundColor}}>
            <SearchForm/>
            {/* <Text>
                SearchScreen
                <Button title="Teste" onPress={() => {
                    navigation.navigate('Home')
                }}/>
            </Text> */}
            <RecentSearches/>
        </ScrollView>
    )
}

export default SearchScreen;