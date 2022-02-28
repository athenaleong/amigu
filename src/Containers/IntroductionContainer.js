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
import TransitionScene from '../Components/Modal/TransitionScene';
import { navigateAndSimpleReset } from '@/Navigators/utils';
import SeaBackground from '@/Assets/background/fish-background.jpeg';
import ArcticBackground from '@/Assets/background/arctic-background.jpeg';

import { storeData } from '../Services/AsyncStorage';




const IntroductionContainer = () => {


    const [AllFrame, setAllFrame] = useState(null);
    const [currFrame, setCurrFrame] = useState(0);
    const [currDialogueFrame, setCurrDialogueFrame] = useState(0);
    const [modalState, isModal, showModal, hideModal] = useModal();

    useEffect(() => {
        console.log(frameData.data[0])
        setAllFrame(frameData.data);
    })

    async function nextOnPress() {
        // console.log('apparently you pressed me')
        // console.log(currFrame)
        // console.log(frameData.data.length)
        if (currFrame == frameData.data.length - 1) {
            await endAdventure();
            navigateAndSimpleReset('Pet')
        }
        else {
            setCurrFrame(currFrame + 1);
        }
    }

    //TODO: Put store treasure into a function on its own 

    async function endAdventure() {
        // showModal('loading');

        //Store treasure into treasureCollection
        
        let currTreasure = {'fish': [2011, 2012, 2015]};
        await storeData('@frontend:treasureCollection', currTreasure);
        await storeData('@frontend:numFish', '45');
        await storeData('@frontend:numAdventures', '1');

        // hideModal();

    }

    const imgArray = {'1': AngryPenguin, '2': CheerPenguin, '3': ConfusedPenguin, '4': SmilePenguin, '5': SadPenguin, '6': ThinkingPenguin, "7": WavingPenguin};
    const bgArray = {'1': SeaBackground, '2': ArcticBackground}

    function renderFrame(frame) {
        const frameType = frame.frameType;
        switch (frameType) {
            case 'textInput':
                return <TextInput onPress={nextOnPress} question="What's Your Name?" placeholder='' asyncStorageName='frontend@childName'></TextInput>
            case 'dialogue':
                const chat = frame.chat[currDialogueFrame]
                const petType = frame.petType[currDialogueFrame]
                const length = frame.chat.length
                const bg = frame.bg

                function dialogueOnPress() {
                    if (currDialogueFrame == length - 1) {
                        setCurrDialogueFrame(0);
                        nextOnPress();
                    }
                    else {
                        setCurrDialogueFrame(currDialogueFrame + 1)
                    }
                }
                return <DialogueView chat={chat} petType={imgArray[petType]} onPress={dialogueOnPress} backgroundImage={bgArray[bg]}></DialogueView>
            case 'video':
                return <VideoView onPress={nextOnPress} source={require('/Assets/video/bbc-compressed.mp4')}></VideoView>
            
            case 'experience':
                return <ExperienceView onPress={nextOnPress}/>
            case 'treasure':
                const detail = frame.treasureDetail
                return <TreasureView detail={detail} onPress={nextOnPress}/>
            case 'transition':
                return <TransitionScene onPress={nextOnPress}/>
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