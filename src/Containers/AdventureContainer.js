import React, {useEffect, useState, useReducer} from 'react'
import {
    Flex,
    Text,
    Image,
    Button
} from 'native-base'
import {getData} from '@/Services/AsyncStorage';
import useLoading from '@/Hooks/useLoading';
import LoadingView from "@/Components/LoadingView";
import Boba from '@/Assets/bubble-tea.png';
import Still from '@/Assets/still.png';
import DialogueView from '../Components/Adventure/DialogueView';


const AdventureContainer = () => {


    let data = [
        {
          "category": "imagination",
          "chat": ["a", "b"],
          "frameType": ["dialogue", "dialogue"],
          "content": "What do you think grown-ups dont understand?",
          "frame": [1,2],
          "id": 1001,
        },
        {
          "category": "imagination",
          "chat": ["a","b"],
          "frameType": ["dialogue", "dialogue"],
          "content": "What does your inner voice say to you?",
          "frame": [1,2],
          "id": 1002,
        },
        {
          "category": "imagination",
          "chat": ["a","b"],
          "frameType": ["dialogue", "dialogue"],
          "content": "If you could go back in time, what would you do differently?",
          "frame": [1,2],
          "id": 1003,
        }
    ]

    const [questions, setQuestions] = useState();
    const [isLoading, showLoading, hideLoading] = useLoading();

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
                let maxFrame = data[state.currScene + 1].chat.length
                data[state.currScene + 1].frameType.push('prize')
                return {...state, currScene: state.currScene + 1, currFrame: 0, maxFrame: maxFrame}
            case 'nextFrame':
                return {...state, currFrame: state.currFrame + 1}
            case 'reset':
                maxFrame = data[0].chat.length
                return {...state, currScene: 0, currFrame: 0, maxFrame: maxFrame}
            default:
                throw new Error();
        }
    }

    const imgArray = {'1': Boba, '2': Still};

    function nextOnPress() {
        if (state.currFrame + 1 == state.maxFrame) {
            //Handle Prize + Adventure Transition
            if (state.currScene + 1 == state.maxScene) {
                //Handle Ending Scene NOTE: resetting for testing purpose
                dispatch({type: 'reset'}) 
            }
            else {
                //Handle Transition
                
            }
            dispatch({type: 'nextScene'})
        } else {
            dispatch({type: 'nextFrame'})
        }
    }

    useEffect(() => {
       (async() => {
        showLoading();
        const newQuesitons = await getData('@frontend:newQuesitons');
        console.log(newQuesitons);
        setQuestions(newQuesitons);

        data.forEach((item, idx) => {
            item.frameType.push('prize');
        })

        hideLoading();
       })();
    }, [])

    function renderFrame(chat, petType, frameType) {
        switch (frameType) {
            case 'dialogue':
                return <DialogueView chat={chat} petType={imgArray[petType]}></DialogueView>
            case 'transition':
                return <Text>Transition</Text>
            case 'prize':
                return <Text>Prize</Text>
            default:
                return <Text>Default</Text>
        }
    }

    return (
        <>
        <LoadingView loading={isLoading}/>
        <Flex h='100%' w='100%' bg='primary.300' justify='space-evenly'>
            <Text> C {state.currScene}  F {state.currFrame} max Frame {state.maxFrame} max Scene {state.maxScene} {data[state.currScene].frameType[state.currFrame]}</Text>
            {renderFrame(data[state.currScene].chat[state.currFrame], data[state.currScene].frame[state.currFrame], data[state.currScene].frameType[state.currFrame])}
            <Button onPress={nextOnPress}>Next</Button>
        </Flex>
        </>
    )
}

export default AdventureContainer
