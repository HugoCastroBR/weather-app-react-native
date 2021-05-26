import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './routes/Home';
import TabComponent from './components/tab/index';
import store from './store';
import { Provider } from 'react-redux';






export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
      <TabComponent/>   
    </NavigationContainer>
    </Provider>
    
    
  )
}




