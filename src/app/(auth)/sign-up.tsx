import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {Link} from "expo-router"

const SignUp = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <View>
        <Text>SignUp</Text>
         <Link href="/(auth)/sign-in">Already have an account? Sign In</Link>
      </View>
    </SafeAreaView>
  )
}



export default SignUp