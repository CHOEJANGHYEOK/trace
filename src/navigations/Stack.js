import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen'
import TabNavigation from './Tab'
import SigninScreen from '../screens/SigninScreen'

const Stack = createStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Signin" component={SigninScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation
