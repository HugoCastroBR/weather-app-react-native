import React, { useState } from 'react';
import { Easing, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import Svg, { Path, G } from 'react-native-svg';
import useWeatherApp from './../hooks/useWeatherApp';
import { AntDesign } from '@expo/vector-icons';

type onPressProp = {
    onPress: () => Promise<void>
}




const ReloadIcon = ({ onPress }: onPressProp) => {


    const { states, dispatch } = useWeatherApp()
    const theme = { ...states.Theme }

    const styles = StyleSheet.create({
        box: {
            width: 22,
            height: 22,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        }
    })

    const rotation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotation.value}deg` }],
        };
    });


    


    const size = 20
    return (
        <Animated.View style={styles.box}>
            <Animated.View style={[styles.box, animatedStyle]}>
            <AntDesign name="reload1" size={size} color="black" onPress={() => {
                rotation.value = withSequence(
                    withTiming((360 * 2), { duration: 10000 }),
                    withTiming(0, { duration: 0 })
                );
                onPress()
            }} />
            </Animated.View>
        </Animated.View>
    )
}

export default ReloadIcon;