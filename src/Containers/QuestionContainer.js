import React, {useState} from 'react';
import {
    Text,
    Flex,
    ScrollView,
    Button,
    IconButton,
    Icon
} from 'native-base'
import AccordionView from '@/Components/Accordion';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigateGoBack, navigate } from "@/Navigators/utils";
import { Ionicons } from '@expo/vector-icons';

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
                <Flex>
                    <IconButton
                        icon={<Icon as={Ionicons} name="arrow-back-circle-sharp"/>}
                        onPress={onPress}
                        borderRadius="full"
                        _icon={{
                            color: "gray.500",
                            size: ["xl", "xl","xl","2xl"]
                            }}
                        _pressed={{
                            bg: 'transparent',
                        }}
                        w='70'
                    />
                </Flex>
                <Flex>
                    <AccordionView questionOnPress={questionOnPress} />
                </Flex>
            </ScrollView>
        </SafeAreaView>
    )
}

export default QuestionContainer