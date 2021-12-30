import React, {useEffect} from "react"
import {
  Modal,
  Text,
  Image
} from 'native-base'
import Spinner from 'react-native-loading-spinner-overlay';
import Wave from '@/Assets/wave.gif'

const customIndicator = () => {
    return (
        <Image source={Wave} size='2xl' alt='waving'/>
    )
}

const StartScene = (props) => {

    return (
        <Spinner 
            visible={props.visible} 
            overlayColor='rgba(217, 87, 119, 1)'
            customIndicator={customIndicator()} 
        />
    )
}

export default StartScene