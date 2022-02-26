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
import ParentContainer from '@/Containers/ParentContainer'
import PetContainer from '@/Containers/PetContainer'
import StatsContainer from '@/Containers/StatsContainer'
import MallContainer from '@/Containers/MallContainer';
import DanceContainer from '@/Containers/StoreContainer/DanceContainer'
import FishContainer from '@/Containers/StoreContainer/FishContainer'
import FidgetContainer from '@/Containers/StoreContainer/FidgetContainer'
import IntroductionContainer from '@/Containers/IntroductionContainer'

const Stack = createStackNavigator()


const ApplicationNavigator = () => {
    return (
        <View style={{flex:1, backgroundColor: "white"}}>
            <StatusBar/>
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen  name="Intro" component={IntroductionContainer}/>
                        <Stack.Screen  name="Pet" component={PetContainer}/>
                        <Stack.Screen  name="Parent" component={ParentContainer}/>
                        <Stack.Screen  name="Stats" component={StatsContainer}/>
                        <Stack.Screen  name="Adventure" component={AdventureContainer}/>
                        <Stack.Screen  name="Prepare" component={PrepareContainer}/>
                        <Stack.Screen  name="Question" component={QuestionContainer}/>
                        <Stack.Screen name="Treasure" component={TreasureContainer}/>
                        <Stack.Screen name="AdventureEnd" component={EndContainer}/>
                        <Stack.Screen name="Mall" component={MallContainer}/>
                        <Stack.Screen name="DanceStore" component={DanceContainer}/>
                        <Stack.Screen name="FishStore" component={FishContainer}/>
                        <Stack.Screen name="FidgetStore" component={FidgetContainer}/>
                    </Stack.Navigator>
                </NavigationContainer>
        </View>
    )
}

export default ApplicationNavigator

