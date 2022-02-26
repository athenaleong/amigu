import React, {useEffect, useState, useReducer} from 'react'
import {
    Flex,
    Text,
    Image,
    Button,
    Spacer,
    Fab,
} from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import Still from '@/Assets/still.png'
import RewardBar from '@/Components/Progress/RewardBar'
import { ImageSize } from '@/Config/penguinConfig.js'



const ExperienceView = (props) => {

    return (
        <SafeAreaView>
            <Flex h='100%' w='100%' direction='column' justify='center' align='center'>
                <Image source={Still} variant={ImageSize} alt='penguin'></Image>
                <RewardBar petName='I' amount='9'/>
                <Fab variant='next' onPress={props.onPress}/>
            </Flex>
        </SafeAreaView>
    )
}

export default ExperienceView
