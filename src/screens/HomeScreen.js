import React, {useEffect, useState} from 'react'
import {
  Platform,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import SplashScreen from './SplashScreen'

const requestPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always')
    }
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
    }
  } catch (e) {
    console.log(e)
  }
}

const HomeScreen = () => {
  const [location, setLocation] = useState()

  useEffect(() => {
    requestPermission().then(result => {
      if (result) {
        Geolocation.getCurrentPosition(
          pos => {
            console.log(pos)
            setLocation(pos.coords)
          },
          error => {
            console.log(error)
          },
          {enableHighAccuracy: true, timeout: 10000, maximumAge: 3600},
        )
      }
    })
  }, [])

  if (!location) {
    return <SplashScreen />
  }

  return (
    <MapView
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={[styles.map]}
      showsUserLocation={true}
    />
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})
