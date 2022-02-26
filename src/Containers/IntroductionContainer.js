import React, {useEffect, useState, useReducer, useLayoutEffect} from 'react'
import {
    Flex,
    Text,
    Image,
    Button
} from 'native-base'
import useModal from '@/Hooks/useModal';



import AngryPenguin from '@/Assets/penguin/Angry.png';
import CheerPenguin from '@/Assets/penguin/Cheer.png';
import ConfusedPenguin from '@/Assets/penguin/Confused.png';
import SmilePenguin from '@/Assets/penguin/Smile.png';
import SadPenguin from '@/Assets/penguin/Sad.png';
import ThinkingPenguin from '@/Assets/penguin/Thinking.png';
import WavingPenguin from '@/Assets/wave.gif';

import DialogueView from '@/Components/Adventure/DialogueView';
import ExperienceView from '@/Components/Adventure/ExperienceView';
import TreasureView from '@/Components/Adventure/TreasureView'
import * as frameData from '@/Assets/Introduction.json';
import VideoView from '@/Components/Video/VideoView';
import TextInput from '@/Components/TextInput';
import ModalView from '@/Components/Modal/ModalView';

import ExperienceView from '@/Components/Adventure/ExperienceView';
import TreasureView from '@/Components/Adventure/TreasureView'


const IntroductionContainer = () => {


    const [AllFrame, setAllFrame] = useState(null);
    const [currFrame, setCurrFrame] = useState(0);
    const [currDialogueFrame, setCurrDialogueFrame] = useState(0);
    const [modalState, isModal, showModal, hideModal] = useModal();

    useEffect(() => {
        console.log(frameData.data[0])
        setAllFrame(frameData.data);
    })

    function nextOnPress() {
        console.log('apparently you pressed me')
        setCurrFrame(currFrame + 1);



        //TODO: Add friends and fish at the end 
    }

    const imgArray = {'1': AngryPenguin, '2': CheerPenguin, '3': ConfusedPenguin, '4': SmilePenguin, '5': SadPenguin, '6': ThinkingPenguin, "7": WavingPenguin};

    function renderFrame(frame) {
        const frameType = frame.frameType;
        switch (frameType) {
            case 'dialogue':
                const chat = frame.chat[currDialogueFrame]
                const petType = frame.petType[currDialogueFrame]
                const length = frame.chat.length

                function dialogueOnPress() {
                    if (currDialogueFrame == length - 1) {
                        nextOnPress();
                    }
                    else {
                        setCurrDialogueFrame(currDialogueFrame + 1)
                    }
                }
                return <DialogueView chat={chat} petType={imgArray[petType]} onPress={dialogueOnPress}></DialogueView>
            case 'video':
                return <VideoView onPress={nextOnPress} source={require('/Assets/video/short.mp4')}></VideoView>
            case 'textInput':
                return <TextInput onPress={nextOnPress} question="What's Your Name?" placeholder='' asyncStorageName='frontend@childName'></TextInput>
            case 'experience':
                return <ExperienceView onPress={nextOnPress}/>
            case 'treasure':
                const detail = frame.treasureDetail
                return <TreasureView detail={detail} onPress={nextOnPress}/>
            case 'transition':
                return <ModalView state='transition' />
        }
    }

    return (
        <>
        {AllFrame &&
            <Flex h='100%' w='100%' bg='primary.300'>
                    {renderFrame(AllFrame[currFrame])}
            </Flex>
        }
        </>
    )





}


export default IntroductionContainer