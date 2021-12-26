import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeContainer from '@/Containers/HomeContainer'
import PrepareContainer from '@/Containers/PrepareContainer';
import QuestionContainer from '@/Containers/QuestionContainer';
import PetContainer from '@/Containers/PetContainer';
import TreasureContainer from '@/Containers/TreasureContainer';
import AdventureContainer  from '@/Containers/AdventureContainer';
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: { 
                    position: 'absolute'
                },
                headerShown: false,
            }}
        >
            <Tab.Screen name="Home" component={HomeContainer} />
            <Tab.Screen name="Pet" component={PetContainer} />
            <Tab.Screen name="Adventure" component={AdventureContainer}/>
        </Tab.Navigator>
    )
}

export default MainNavigator