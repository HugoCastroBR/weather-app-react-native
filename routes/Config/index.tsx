import React from 'react';
import { StyleSheet, Text, View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import ConfigItem from '../../components/ConfigItem';
import { style } from './style';



const ConfigScreen = () => {
    return(
        <ScrollView contentContainerStyle={style.componentContainer}>
            <Text style={style.settingsTitle}>
                Settings:
            </Text>
            <ConfigItem/>
            <ConfigItem/>
            <ConfigItem/>
        </ScrollView>
    )
}

export default ConfigScreen;