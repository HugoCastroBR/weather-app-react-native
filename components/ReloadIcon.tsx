import React, { useState } from 'react';
import { Easing, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Svg, { Path, G } from 'react-native-svg';
import useWeatherApp from './../hooks/useWeatherApp';


type onPressProp = {
    onPress: () => Promise<void>
}




const ReloadIcon = ({ onPress }: onPressProp) => {


    const { states, dispatch } = useWeatherApp()
    const theme = { ...states.Theme }

    const styles = StyleSheet.create({
        box: {
            width: 'auto'
        }
    })

    const offset = useSharedValue(0);

        const animatedStyles = useAnimatedStyle(() => {
            return {
                transform: [{ translateX: offset.value * 255 }],
            };
        });

    const size = 24
    return (
        <Animated.View style={[styles.box,animatedStyles]}>
            <Svg height={size} width={size} viewBox="0 0 500 500" onPress={onPress} >
                <G id="Solid">
                    <Path
                        strokeWidth="2.5" fill={theme.isDark ? "white" : "#4a4a4a"}
                        d="m464.022 232h-.022a24 24 0 0 0 -23.98 24.021 184.063 184.063 0 0 1 -289.527 150.688c-83.1-58.188-103.369-173.136-45.181-256.237s173.137-103.372 256.237-45.182a184.078 184.078 0 0 1 34.012 30.71h-67.54a24 24 0 0 0 0 48h112a24 24 0 0 0 24-24v-112a24 24 0 0 0 -48 0v39.967a234.175 234.175 0 0 0 -26.94-22 231.982 231.982 0 1 0 -266.119 380.061 230.285 230.285 0 0 0 132.567 42.015 234.971 234.971 0 0 0 40.776-3.585 232.025 232.025 0 0 0 191.716-228.479 24 24 0 0 0 -23.999-23.979z" />
                </G>
            </Svg>
        </Animated.View>
    )
}

export default ReloadIcon;