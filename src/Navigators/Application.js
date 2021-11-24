import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import MainNavigator from '@/Navigators/Main'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
    return (
        <View style={{flex:1, backgroundColor: "white"}}>
            <StatusBar/>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Main" component={MainNavigator} />
                    </Stack.Navigator>
                </NavigationContainer>
        </View>
    )
}

export default ApplicationNavigator

