import React, {useEffect, useState, useReducer} from 'react'
import {
    Flex,
    Text,
    Image,
    Button,
    Spacer,
    Fab
} from 'native-base'

const TreasureView = (props) => {

    return (
        <>
        <Text>{"You win treasures!"}</Text>
        <Fab variant='next' onPress={props.onPress}/>
        </>
    )
}

export default TreasureView