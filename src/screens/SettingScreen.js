import AsyncStorage from '@react-native-community/async-storage'
import {GoogleSignin} from '@react-native-google-signin/google-signin'
import React from 'react'
import {Text, Button, SafeAreaView} from 'react-native'

const SettingScreen = ({navigation}) => {
  const handleLogout = async () => {
    const loginType = AsyncStorage.getItem('login_type')
    if (loginType === 'Google') {
      await GoogleSignin.signOut()
    } else {
    }
    AsyncStorage.removeItem('user_id')
    AsyncStorage.removeItem('login_type')
    navigation.replace('Splash')
  }

  return (
    <SafeAreaView>
      <Text>Setting</Text>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  )
}

export default SettingScreen
