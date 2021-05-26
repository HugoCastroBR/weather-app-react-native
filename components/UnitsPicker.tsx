import { Picker } from '@react-native-community/picker';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import useWeatherApp from '../hooks/useWeatherApp';


const styles = StyleSheet.create({
    unitsSystem: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: -30,
            },
            android: {
                top: 40,
            },
        }),

        left: 20,
        height: 50,
        width: 100,
    },
})

type UnitPickerProps = {
    unit:string
    setUnit:(value:string) => void
}

const UnitsPicker = ({unit,setUnit}:UnitPickerProps) => {

    const {states, dispatch} = useWeatherApp()
    const theme = {...states.Theme}

    return(
        <View
        style={styles.unitsSystem}
        >
            <Picker
                style={{color: theme.textMainColor}}
                onValueChange={value => {
                    if(typeof(value) === 'string'){
                        setUnit(value)
                    }else{
                        console.log("visssh")
                    }
                }}
                selectedValue={unit}
                mode="dropdown"
                itemStyle={{ fontSize: 12 }}
            >
                <Picker.Item label="C°" value="metric" />
                <Picker.Item label="F°" value="imperial" />
            </Picker>
        </View>
    )
}

export default UnitsPicker;