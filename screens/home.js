import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen'

const Home = ({navigation}) => {

  useEffect(() => {
    SplashScreen.hide();
  },[])
  
  return (
    <View>
      <View className="w-full h-screen bg-[#032e5c] flex justify-center items-center">
        <Text className="text-4xl font-bold text-gray-50">Matrix <Text className="font-light">calculator</Text></Text>
        <Text className="text-sm text-gray-50 my-2">Calculate your every matrix in one place.</Text>
        <TouchableOpacity className="mt-3"
            activeOpacity={0.8}
            onPress={()=> navigation.navigate('Body')}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#16a34a', '#1d4ed8']} className="py-2 px-5 rounded-3xl">
                <Text className="text-lg font-medium text-gray-50">Get Started</Text>
            </LinearGradient>
        </TouchableOpacity>

        {/* <LinearGradient colors={['#1666bb', '#032e5c']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} className="w-full py-4 px-3 flex flex-row items-center justify-between">
            <Text className="text-2xl font-semibold text-gray-50">Matrix</Text>
            <Text className="text-base text-gray-50">About</Text>
        </LinearGradient> */}
    </View>
    </View>
  )
}

export default Home
