import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import MainNavigator from '@/Navigators/Main'
import { navigationRef } from './utils'
import PrepareContainer from '@/Containers/PrepareContainer'


const Stack = createStackNavigator()


const ApplicationNavigator = () => {
    return (
        <View style={{flex:1, backgroundColor: "white"}}>
            <StatusBar/>
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Main" component={MainNavigator} />
                        <Stack.Screen  name="Prepare" component={PrepareContainer}/>
                    </Stack.Navigator>
                </NavigationContainer>
        </View>
    )
}

export default ApplicationNavigator

