import React from "react";
import {
    Text,
    Flex,
    ScrollView,
    Button
} from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionBubble from "../Components/QuestionBubble";
import * as data from '@/Assets/Question.json'
import { navigateGoBack } from "@/Navigators/utils";
const PrepareContainer = (props) => {

    const questions = data.question;
    const onPress = () =>{
        navigateGoBack()
    }

    return (
        <SafeAreaView>
            <ScrollView>
            <Button onPress={onPress}>Test</Button>
            <Flex direction='column' 
                justify="center"
                p='6'>
                <Text color='black' variant='title'>
                    Next Adventure
                </Text>
                <Text color='black' variant='subtitle'>
                    Questions are curated based on Hugo's age and the focus area you have identified
                </Text>
                {questions.map((q, indx) =>         
                    <QuestionBubble key={indx} color={q.color} question={q.question} category={q.category}/>
                )}
                <Button bg="teal.400">Edit</Button>
            </Flex>
            </ScrollView>
        </SafeAreaView>
    )

}

export default PrepareContainer