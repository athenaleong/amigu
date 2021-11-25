import React, {useState} from 'react';
import {
    Text,
    Flex,
    ScrollView
} from 'native-base'
import AccordionView from '@/Components/Accordion';
import { SafeAreaView } from 'react-native-safe-area-context';

const QuestionContainer = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <Flex>
                    <AccordionView />
                </Flex>
            </ScrollView>
        </SafeAreaView>
    )
}

export default QuestionContainer