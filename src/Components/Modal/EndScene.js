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

const EndScene = (props) => {

    useEffect(() => {
        // 

    },[])

    return (
    //     <Modal isOpen={true} transparent={false} presentationStyle='fullScreen' > 
    //     <Modal.Content width="100%" height='100%'>
    //       <Modal.Body>
    //           <Text>HELLO</Text>
    //       </Modal.Body>
    //     </Modal.Content>
    //   </Modal>
    <Spinner 
            visible={props.visible} 
            overlayColor='rgba(34, 211, 238, 1)'
            customIndicator={customIndicator()} 
    />
        
    )
}

export default EndScene