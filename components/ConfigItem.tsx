import React from 'react';
import { Button, StyleSheet, Text, View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';



export const style = StyleSheet.create({
    configItemStyle:{
        marginTop: 10,
        minWidth: '100%',
        padding: 10,
        borderRadius: 10,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#cccccc',
        alignItems: 'center'
    },
    settingTitle:{
        fontSize: 18,
    }
})

const ConfigItem = () => {
    return(
        <View style={style.configItemStyle}>
            <Text style={style.settingTitle}>
                Dark Mode :
            </Text>
            <Button title="toggle   " onPress={console.log}/>
        </View>
    )
}

export default ConfigItem;