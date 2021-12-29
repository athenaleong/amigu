import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import MainNavigator from '@/Navigators/Main'
import { navigationRef } from './utils'
import PrepareContainer from '@/Containers/PrepareContainer'
import QuestionContainer from '@/Containers/QuestionContainer'
import TreasureContainer from '@/Containers/TreasureContainer'
import AdventureContainer from '@/Containers/AdventureContainer'
import EndContainer from '@/Containers/EndContainer'


const Stack = createStackNavigator()


const ApplicationNavigator = () => {
    return (
        <View style={{flex:1, backgroundColor: "white"}}>
            <StatusBar/>
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator screenOptions={{ headerShown: true }}>
                        <Stack.Screen name="Main" component={MainNavigator} />
                        <Stack.Screen  name="Adventure" component={AdventureContainer}/>
                        {/* <Stack.Screen  name="Prepare" component={PrepareContainer}/> */}
                        <Stack.Screen  name="Prepare" component={PrepareContainer}/>
                        <Stack.Screen  name="Question" component={QuestionContainer}/>
                        <Stack.Screen name="Treasure" component={TreasureContainer}/>
                        <Stack.Screen name="AdventureEnd" component={EndContainer}/>
                    </Stack.Navigator>
                </NavigationContainer>
        </View>
    )
}

export default ApplicationNavigator

