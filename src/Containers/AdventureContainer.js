import React, {useEffect, useState, useReducer, useLayoutEffect} from 'react'
import {
    Flex,
    Text,
    Image,
    Button
} from 'native-base'
import {getData} from '@/Services/AsyncStorage';
import useModal from '@/Hooks/useModal';
import ModalView from '@/Components/Modal/ModalView';
import Boba from '@/Assets/bubble-tea.png';
import Still from '@/Assets/still.png';
import DialogueView from '../Components/Adventure/DialogueView';
import * as Game from '@/Assets/Game.json';
import axios from "axios";
import { storeData } from '../Services/AsyncStorage';
import { navigateAndSimpleReset } from '@/Navigators/utils';

const AdventureContainer = () => {

    const [currScene, setCurrScene] = useState(null);
    const [AllScene, setAllScene] = useState(null);
    const [modalState, isModal, showModal, hideModal] = useModal();
    const [newTreasure, setNewTreasure] = useState({});


    //Reducer to keep track of Game State 

    const initialState = {
     
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case 'nextScene':
                let maxFrame = currScene.frameType.length
                return {...state, currSceneIdx: state.currSceneIdx + 1, currFrameIdx: 0, maxFrame: maxFrame}
            case 'nextFrame':
                return {...state, currFrameIdx: state.currFrameIdx + 1}
            case 'reset':
                maxFrame = currScene.frameType.length
                return {maxScene: AllScene.length, currSceneIdx: 0, currFrameIdx: 0, maxFrame: maxFrame}
            default:
                throw new Error();
        }
    }

    const imgArray = {'1': Boba, '2': Still};

    //Random time for Transition Screen
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    async function getTreasure(id) {
        const url = `https://tweeby-backend.herokuapp.com/treasureDetail?id=${id}`;
        const response = await axios.get(url);
        return response.data['payload'];
    }

    async function storeTreasure(info) {
        const currTreasure = await getData('@frontend:treasureCollection');
        if (currTreasure[info.type]) {
            currTreasure[info.type].push(info.id);
        } else {
            currTreasure[info.type] = [info.id];
        }
        await storeData('@frontend:treasureCollection', currTreasure);
    }


    async function nextOnPress() {
        console.log(state)
        const nextFrameIdx = state.currFrameIdx + 1;
        const nextSceneIdx = state.currSceneIdx + 1;

        if (nextFrameIdx == state.maxFrame) {
            if (nextSceneIdx == state.maxScene) {
                //Last Scene, Last Frame 
                //Handle Ending Scene NOTE: resetting for testing purpose
                showModal('end');
                // dispatch({type: 'reset'})
                await timeout(200); 
                hideModal();
                navigateAndSimpleReset('AdventureEnd');

            }
            else {
                //Show Transition
                showModal('transition');

                //Add current treausre into collected
                if (currScene.treasure) {
                    await storeTreasure(currScene.treasureDetail);
                }

                //get New Scene
                const newScene = AllScene[nextSceneIdx];
                newScene.frameType.push('experience')

                //If next scene is odd, add treasure into Scene
                if (nextSceneIdx % 2 == 1) {
                    newScene.treasure = newTreasure[(nextSceneIdx - 1)/ 2];
                    const treasureDetail = await getTreasure(newScene.treasure);
                    newScene.treasureDetail = treasureDetail;
                    newScene.frameType.push('treasure')
                }

                //Set New Scene
                setCurrScene(newScene);

                //Populate detail of experience
                dispatch({type: 'nextScene'})

                hideModal()
                //End Transition
            }
        } else {
            dispatch({type: 'nextFrame'})
        }
    }

    useEffect(() => {
       (async() => {
        console.log('hey')
        showModal('start');
        let newQuesitons = await getData('@frontend:newQuesitons');
        setAllScene(newQuesitons);

        //Get a new set of treasures
        const oldTreasure = await getData('@frontend:treasureCollection');
        const payload = {'oldTreasure': oldTreasure, 'length': newQuesitons.length / 2};
        const newPayload = await axios.post('https://tweeby-backend.herokuapp.com/newTreasures', payload);
        const newTreasure = newPayload.data['newTreasure'];
        setNewTreasure(newTreasure);

        //Store First Scene into CurrScene
        const firstScene = newQuesitons[0];
        firstScene.frameType.push('experience');
        setCurrScene(firstScene)

        dispatch({type: 'reset'})
        hideModal();
       })();
    }, [])

    function renderFrame(currFrameIdx) {
        const frameType = currScene.frameType[currFrameIdx];
        switch (frameType) {
            case 'dialogue':
                const chat = currScene.chat[currFrameIdx]
                const petType = currScene.petType[currFrameIdx]
                return <DialogueView chat={chat} petType={imgArray[petType]}></DialogueView>
            case 'experience':
                return <Text>{"WOW! Thank you for letting me know "}</Text>
            case 'treasure':
                const detail = currScene.treasureDetail
                return <Text>You won Prize {detail.id}</Text>
            case 'end':
                return <Text>End</Text>
            default:
                return <Text>Default</Text>
        }
    }


    return (
        <>
        <ModalView visible={isModal} state={modalState}/>
        {currScene && 
            <>
            <Flex h='100%' w='100%' bg='primary.300' justify='space-evenly'>
                <Text> C {state.currSceneIdx}  F {state.currFrameIdx} max Frame {state.maxFrame} max Scene {state.maxScene}</Text>
                {renderFrame(state.currFrameIdx)}
                <Button onPress={nextOnPress}>Next</Button>
                {<Text>{currScene.frameType.length}</Text>}
            </Flex>
            </>
        }
        </>
    )
}

export default AdventureContainer
