import React, {useEffect, useState, useReducer} from 'react'
import {
    Flex,
    Text,
    Image,
    Button,
    Spacer,
    Fab
} from 'native-base'

const ExperienceView = (props) => {

    return (
        <>
        <Text>{"WOW! Thank you for letting me know "}</Text>
        <Fab variant='next' onPress={props.onPress}/>
        </>
    )
}

export default ExperienceView
