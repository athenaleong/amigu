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

    const chevronOnPress = (moveFront, currIndx) => {
        if (moveFront) {
            const temp = questions[currIndx]
            let newQ = [...questions]
            newQ.splice(currIndx, 1)
            newQ.splice(currIndx - 1, 0, temp)
            setQuestions(newQ)
        }
        else {
            const temp = questions[currIndx]
            let newQ = [...questions]
            newQ.splice(currIndx, 1)
            newQ.splice(currIndx + 1, 0, temp)
            setQuestions(newQ)
        }

    }


    return (
        <SafeAreaView>
            <ScrollView>
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
                {!edit && questions.map((q, indx) =>         
                    <QuestionBubble key={indx} color={q.color} question={q.question} category={q.category}/>
                )}
                {edit && questions.map((q, indx) =>
                    <EditQuestionBubble key={indx} 
                                        color={q.color} 
                                        question={q.question} 
                                        category={q.category}
                                        onPress={moveFront => chevronOnPress(moveFront, indx)}
                    />
                )}
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
            </ScrollView>
        </SafeAreaView>
    )

}

export default PrepareContainer