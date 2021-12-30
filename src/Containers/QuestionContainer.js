import React, {useState} from 'react';
import {
    Text,
    Flex,
    ScrollView,
    Button
} from 'native-base'
import AccordionView from '@/Components/Accordion';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigateGoBack, navigate } from "@/Navigators/utils";

//Parent Facing Container to show all available questions
const QuestionContainer = () => {

    const onPress = () => {
        navigateGoBack()
    }

    const questionOnPress = (q) => {
        navigate('Prepare', q)
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Button onPress={onPress}>Back</Button>
                <Flex>
                    <AccordionView questionOnPress={questionOnPress} />
                </Flex>
            </ScrollView>
        </SafeAreaView>
    )
}

export default QuestionContainer