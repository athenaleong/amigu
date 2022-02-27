import React, {useEffect, useState} from 'react';

export const BackgroundMusic = (props) => {


    //To Add Background Music, insert these lines

    // const [sound, setSound] = useState(new Audio.Sound());
    // const musicFile = require('@/Assets/music/Cheerful-Whistle-Trim.mp3');
    // <BackgroundMusic file={musicFile} sound={sound}/>


    const {sound, file} = props;

    useEffect(() => {
        (async() => {
            
            console.log(props.file)
            const initialStatus = {isLooping: false}
            await sound.loadAsync(
                file,
                initialStatus
            );
            await sound.playAsync(); 
            
        })();

        return () => {
            // console.log(sound)
            sound &&sound.unloadAsync();
            console.log('IM RETURNING HOHOHO')

        }
    },[])

    return (
        <></>
    )
}

