import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConfigScreen from '../../routes/Config';
import Home from '../../routes/Home';
import SearchScreen from '../../routes/Search';
import { styles } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabComponent = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: styles.tabContainerStyle
            }}
        >
            <Tab.Screen name="Search" component={SearchScreen} options={{

                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name="search" size={36} color={focused ? "#cc2211" : "gray"} />
                        
                    </View>
                )
            }} />

            <Tab.Screen name="Home" component={Home} options={{

                tabBarIcon: ({ focused }) => (
                    <View>
                        <MaterialCommunityIcons name="weather-cloudy" size={40} color={focused ? "#cc2211" : "gray"}/>
                    </View>
                )
            }} />
            <Tab.Screen name="Config" component={ConfigScreen} options={{

                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name="settings-outline" size={40} color={focused ? "#cc2211" : "gray"} />
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}




export default TabComponent;