import React from 'react'

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin'
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
  getProfile,
} from '@react-native-seoul/kakao-login'
import {SafeAreaView, Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const SigninScreen = ({navigation}) => {
  const handleKakaoLogin = async () => {
    const token = await login()
    const profile = await getProfile()
    console.log(profile)
  }

  const handleGoogleLogin = async () => {
    GoogleSignin.configure({
      webClientId:
        '626063343621-a3pl2sh6hfn8pu890sonog70kcbqickk.apps.googleusercontent.com',
    })
    await GoogleSignin.hasPlayServices()
    const userInfo = await GoogleSignin.signIn()
    AsyncStorage.setItem('user_id', userInfo.user.id)
    AsyncStorage.setItem('login_type', 'Google')
    navigation.replace('TabNavigation')
  }

  return (
    <SafeAreaView>
      <Button title="Kakao Login" onPress={handleKakaoLogin} />
      <GoogleSigninButton onPress={handleGoogleLogin} />
    </SafeAreaView>
  )
}

export default SigninScreen
