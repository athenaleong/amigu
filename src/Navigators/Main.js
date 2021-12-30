import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ParentContainer from '@/Containers/ParentContainer'
import PrepareContainer from '@/Containers/PrepareContainer';
import QuestionContainer from '@/Containers/QuestionContainer';
import StatsContainer from '@/Containers/StatsContainer';
import TreasureContainer from '@/Containers/TreasureContainer';
import PetContainer from '@/Containers/PetContainer';
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
            <Tab.Screen name="Parent" component={ParentContainer} />
            <Tab.Screen name="Pet" component={PetContainer}/>
            <Tab.Screen name="Stats" component={StatsContainer} />
        </Tab.Navigator>
    )
}

export default MainNavigator