import React from 'react';
import { Switch } from 'react-native-paper';
import { SetDarkMode } from '../../store/actions';
import useWeatherApp from './../../hooks/useWeatherApp';

const ToggleTheme = () => {

    const {states, dispatch} = useWeatherApp()

    
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return <Switch value={isSwitchOn} onValueChange={() => {
        dispatch(SetDarkMode(!isSwitchOn))
        onToggleSwitch()
        
    }} color="#cc2211"/>;
};

export default ToggleTheme;