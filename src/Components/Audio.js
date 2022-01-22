import React, {useEffect, useState} from 'react';
import { Audio } from 'expo-av';

export const BackgroundMusic = (props) => {
    const [sound, setSound] = useState()

    useEffect(() => {
        (async() => {
            if (!sound) {
                console.log(props.file)
                const initialStatus = {isLooping: true}
                const {sound} = await Audio.Sound.createAsync(
                    require('@/Assets/music/Calm-Forest-Birds.mp3'),
                    initialStatus
                );
                setSound(sound);
                // sound = variable.sound;
    
                // console.log(variable)
    
                console.log('Playing Sound');
                await sound.playAsync(); 
            }
            
        })();

        return () => {
            sound && sound.unloadAsync();
        }
    },[sound])

    return (
        <></>
    )
}

