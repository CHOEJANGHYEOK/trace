import AsyncStorage from '@react-native-community/async-storage'
import React, {useEffect} from 'react'
import {View} from 'react-native'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user_id').then(value => {
        navigation.replace(value === null ? 'Signin' : 'TabNavigation')
      })
    }, 1000)
  }, [])

  return <View />
}

export default SplashScreen
