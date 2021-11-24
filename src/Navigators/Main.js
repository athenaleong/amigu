import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeContainer from '@/Containers/HomeContainer'

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
            <Tab.Screen name="Pet" component={HomeContainer} />
        </Tab.Navigator>
    )
}

export default MainNavigator