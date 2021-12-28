import React, {useEffect, useState, useReducer} from 'react'
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

const AdventureContainer = () => {

    let data = Game['data'];

    const [questions, setQuestions] = useState();
    const [modalState, isModal, showModal, hideModal] = useModal();


    //Reducer to keep track of Game State 

    const initialState = {
        currScene : 0,
        currFrame: 0,
        maxScene: data.length,
        maxFrame: data[0].frameType.length
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case 'nextScene':
                let maxFrame = data[state.currScene + 1].frameType.length
                return {...state, currScene: state.currScene + 1, currFrame: 0, maxFrame: maxFrame}
            case 'nextFrame':
                return {...state, currFrame: state.currFrame + 1}
            case 'reset':
                maxFrame = data[0].frameType.length
                const maxScene = data.length
                return {maxScene: maxScene, currScene: 0, currFrame: 0, maxFrame: maxFrame}
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

    async function storeTreasure(detail) {
        const currTreasure = await getData('@frontend:treasureCollection');
        if (currTreasure[detail.type]) {
            currTreasure[detail.type].push(detail.id);
        } else {
            currTreasure[detail.type] = [detail.id];
        }
        await storeData('@frontend:treasureCollection', currTreasure);
    }

    async function nextOnPress() {

        const nextFrame = state.currFrame + 1;
        const nextScene = state.currScene + 1;
        if (nextFrame == state.maxFrame) {
            if (nextScene == state.maxScene) {
                //Last Scene, Last Frame 
                //Handle Ending Scene NOTE: resetting for testing purpose
                dispatch({type: 'reset'}) 
            }
            else {
                //Show Transition
                showModal('transition');

                //Add current prize into collected
                if (data[state.currScene].prize) {
                    await storeTreasure(data[state.currScene].prizeDetail);
                }

                //Populate detail of prize
                if (data[nextScene].prize) {
                    const detail = await(getTreasure(data[nextScene].prize));
                    data[nextScene].prizeDetail = detail;
                    console.log(data[nextScene]);
                }

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
        showModal('start');

        //Currently useless
        const newQuesitons = await getData('@frontend:newQuesitons');
        setQuestions(newQuesitons);

        //Every 2nd Question gets prize, get a new set of treasures
        const oldTreasure = await getData('@frontend:treasureCollection');
        const payload = {'oldTreasure': oldTreasure, 'length': data.length / 2};
        const newPayload = await axios.post('https://tweeby-backend.herokuapp.com/newTreasures', payload);
        const newTreasure = newPayload.data['newTreasure'];


        data.forEach((item, idx) => {

            item.frameType.push('experience');
            
            if (idx % 2 != 0) {
                item.frameType.push('prize');
                item.prize = newTreasure[(idx - 1) / 2] 
            }

        })

        dispatch({type: 'reset'})
        hideModal();
       })();
    }, [])

    function renderFrame(currScene, currFrame) {
        const frameType = data[currScene].frameType[currFrame];
        switch (frameType) {
            case 'dialogue':
                const chat = data[currScene].chat[currFrame]
                const petType = data[currScene].frame[currFrame]
                return <DialogueView chat={chat} petType={imgArray[petType]}></DialogueView>
            case 'experience':
                return <Text>{"WOW! Thank you for letting me know "}</Text>
            case 'prize':
                const detail = data[currScene].prizeDetail
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
        <Flex h='100%' w='100%' bg='primary.300' justify='space-evenly'>
            <Text> C {state.currScene}  F {state.currFrame} max Frame {state.maxFrame} max Scene {state.maxScene} {data[state.currScene].frameType[state.currFrame]}</Text>
            {renderFrame(state.currScene, state.currFrame)}
            <Button onPress={nextOnPress}>Next</Button>
            <Text>{data[0].frameType.length}</Text>
        </Flex>
        </>
    )
}

export default AdventureContainer
