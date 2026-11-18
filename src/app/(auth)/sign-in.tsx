import { View, Text, SafeAreaView } from 'react-native';
import React from 'react'
import {Link} from "expo-router"

const SignIn = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <View>
        <Text>SignIn</Text>
         <Link href="/(auth)/sign-up">Create Account</Link>
      </View>
    </SafeAreaView>
  )
}


export default SignIn