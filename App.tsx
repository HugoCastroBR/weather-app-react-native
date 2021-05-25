import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './routes/Home';
import TabComponent from './components/tab/index';





export default function App() {
  return (
    <NavigationContainer>
      <TabComponent/>   
    </NavigationContainer>
    
  )
}




