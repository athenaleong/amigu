import React, {useEffect, useState, useReducer, useLayoutEffect} from 'react'
import {Video, AVPlaybackStatus} from 'expo-av';
import {Flex} from 'native-base';
import useModal from '@/Hooks/useModal';
import {StyleSheet} from 'react-native';

// import PenguinVideo from '@Assets/video/bbc.mp4';
const VideoView = (props) => {
    const video = React.useRef(null);

    const {onPress, source} = props;
    
    function onPlaybackStatusUpdate(status){

        if (status.didJustFinish) {
            onPress();
        }
    }
    return (
        <Flex w='100%' h='100%' bg='black'>
            <Video
                ref={video}
                source={source}
                style={styles.video}
                useNativeControls={false}
                resizeMode="contain"
                shouldPlay
                onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            />

        </Flex>
    )
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: '100%'
    }
})

export default VideoView