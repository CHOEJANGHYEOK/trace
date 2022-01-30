import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import {createAppContainer} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import SettingScreen from '../screens/SettingScreen'

const Tab = createBottomTabNavigator()

const TabNavigaton = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigaton
