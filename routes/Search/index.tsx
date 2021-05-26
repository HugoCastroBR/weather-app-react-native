import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, Text, View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import RecentSearches from '../../components/RecentSearches';
import SearchForm from '../../components/SearchForm';
import { style } from './style';

const SearchScreen = () => {

    const navigation = useNavigation();
    return(
        <ScrollView contentContainerStyle={style.searchScreenContainer}>
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