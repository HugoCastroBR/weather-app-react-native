import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RecentSearchItem from './RecentSearchItem';




const style = StyleSheet.create({
    componentContainer:{
        minWidth: '90%',
        maxWidth: '90%',
        height: 'auto',
        alignItems: 'flex-start',
        marginTop: 20,

    },
    componentTitle:{
        fontSize: 22
    }
}
)

const RecentSearches = () => {
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