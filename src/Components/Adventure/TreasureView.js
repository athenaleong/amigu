import React, {useEffect, useState, useReducer} from 'react'
import {
    Flex,
    Text,
    Image,
    Button,
    Spacer,
    Fab,
    Pressable
} from 'native-base'
import Still from '@/Assets/still.png'
import { ImageSize } from '@/Config/penguinConfig.js'
import Question from '@/Assets/question-mark.png'


const TreasureView = (props) => {

    const {petName, detail} = props;
    const [showTreasure, setShowTreasure] = useState(false);

    function onPress() {
        setShowTreasure(true)
        console.log('treasure on pressed')
        console.log(detail)
    }

    return (
        <Flex direction='column' h='100%' w='100%' align='center' justify='center'>
        <Text variant='subtitleXL' color='white'>I made a new friend!</Text>
        {
            !showTreasure &&
            <>
            <Pressable onPress={onPress} w='50%' h='80%'>
                <Flex borderRadius={50} bg='amber.400'  align='center' justify='center'>
                    <Image source={Question} resizeMode='contain' h='80%' alt='reveal for surprise'/>
                </Flex>
            </Pressable>
            </>

        }
        
        {
            showTreasure && <>
            <Flex direction='row'>
                <Image source={Still} variant={ImageSize} alt='penguin'></Image>
                <Image source={{uri: detail.url}} variant={ImageSize} resizeMode='contain' alt='friend'></Image>
            </Flex>
            <Text variant='subtitleL' color='white'> Can you tell who they are?</Text>

            <Fab variant='next' onPress={props.onPress}/>
            </>
        }
        </Flex>
    )
}

export default TreasureView