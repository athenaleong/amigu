import React, {useState, useEffect} from "react";
import {
    Text,
    Flex,
    ScrollView,
    Button
} from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionBubble from "@/Components/QuestionBubble";
import EditQuestionBubble from "@/Components/EditQuestionBubble";

import * as data from '@/Assets/Question.json'
import { navigateGoBack } from "@/Navigators/utils";
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";

const PrepareContainer = (props) => {

    //Progranmmers note, questions is currently not populating. half way through programming for up and down button

    const [edit, setEdit] = useState(false);
    const [questions, setQuestions] = useState(data.question);
    const [draftQuestions, setDraftQuestions] = useState(data.question);

    const onPress = () => {
        navigateGoBack()
    }
    const editOnPress = () => {
        setEdit(!edit)
    }

    // const chevronOnPress = (moveFront, currIndx) => {
    //     if (moveFront) {
    //         const temp = questions[currIndx]
    //         let newQ = [...questions]
    //         newQ.splice(currIndx, 1)
    //         newQ.splice(currIndx - 1, 0, temp)
    //         setQuestions(newQ)
    //     }
    //     else {
    //         const temp = questions[currIndx]
    //         let newQ = [...questions]
    //         newQ.splice(currIndx, 1)
    //         newQ.splice(currIndx + 1, 0, temp)
    //         setQuestions(newQ)
    //     }

    // }

    const renderEdit = ({item, drag}) => {
        return (
            <ScaleDecorator>
                <TouchableOpacity 
                    onLongPress={drag}
                    disabled={!edit}>
                    <QuestionBubble 
                        color={item.color} 
                        question={item.question} 
                        category={item.category}
                        edit={edit}
                    />
               </TouchableOpacity>
            </ScaleDecorator>
        )
    } 


    return (
        <SafeAreaView>
            <Button onPress={onPress}>Test</Button>
            <Flex direction='column' 
                justify="center"
                p='6'
            >
                <Text color='black' variant='title'>
                    Next Adventure
                </Text>
                <Text color='black' variant='subtitle'>
                    Questions are curated based on Hugo's age and the focus area you have identified
                </Text>
                <DraggableFlatList
                    data={draftQuestions}
                    onDragEnd={({data}) => setDraftQuestions(data)}
                    renderItem={renderEdit}
                    keyExtractor={(item, index) => String(index)}
                /> 
                {!edit &&
                    <Button bg="teal.400" onPress={editOnPress}>Edit</Button>
                }
                {edit &&
                    <Flex direction='row' justify='space-evenly'>
                        <Button onPress={editOnPress}>Cancel</Button>
                        <Button>Save</Button>
                    </Flex>
                }

            </Flex>
        </SafeAreaView>
    )

}

export default PrepareContainer