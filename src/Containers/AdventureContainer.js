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
    const initialState = {}

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

    async function nextOnPress() {
        const nextFrameIdx = state.currFrameIdx + 1;
        const nextSceneIdx = state.currSceneIdx + 1;

        if (nextFrameIdx == state.maxFrame) {
            //Show Transition
            showModal('transition');

             //Add current treausre into collected
             if (currScene.treasure) {
                await storeTreasure(currScene.treasureDetail);

            // Add question into usedQuestion
            }

            //
            if (nextSceneIdx == state.maxScene) {
                //Last Frame. Last Scene
                await endAdventure();

            }
            else {
                //Last Frame, Not Last Scene

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

                dispatch({type: 'nextScene'})

                hideModal()
            }
        } else {
            dispatch({type: 'nextFrame'})
        }
    }

    useEffect(() => {
       (async() => {
        showModal('start');
        let newQuestions = await getData('@frontend:newQuestions');
        
        setAllScene(newQuestions);
        //Get a new set of treasures
        const oldTreasure = await getData('@frontend:treasureCollection');
        const payload = {'oldTreasure': oldTreasure, 'length': newQuestions.length / 2};
        const newPayload = await axios.post('https://tweeby-backend.herokuapp.com/newTreasures', payload);
        const newTreasure = newPayload.data['newTreasure'];
        setNewTreasure(newTreasure);

        //Store First Scene into CurrScene
        const firstScene = newQuestions[0];
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

    //Function to create artifical delay, for testing purpose 
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

    async function endAdventure() {
        showModal('end');

        //Save current questions into usedQuestions
        const questionId = AllScene.map(x => x.id);
        let usedQuestion = await getData('@frontend:usedQuestions');
        usedQuestion = usedQuestion.concat(questionId);
        await storeData('@frontend:usedQuestions', usedQuestion);

        //Clear new Questions
        await storeData('@frontend:newQuestions', []);

        hideModal();
        navigateAndSimpleReset('AdventureEnd');
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
