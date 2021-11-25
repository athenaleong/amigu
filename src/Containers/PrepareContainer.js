import React, {useState, useEffect} from "react";
import {
    Text,
    Flex,
    ScrollView,
    Button
} from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionBubble from "@/Components/QuestionBubble";
import AddQuestionBubble from "@/Components/AddQuestionBubble";


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

    const deleteOnPress = (currIndx) => {
        console.log('deletePressed', currIndx)
        let newQ = [...questions]
        newQ.splice(currIndx, 1)
        setDraftQuestions(newQ)
    }

    const cancelOnPress = () => {
        setDraftQuestions(questions)
        setEdit(false)
    }

    const saveOnPress = () => {
        setQuestions(questions)
        //TODO: WRITE TO DB
        setEdit(false)
    }

    const selectQuestion = () => {
        

    }


    const renderEdit = ({item, drag, index}) => {
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
                        deleteOnPress={() => {deleteOnPress(index)}}
                    />
               </TouchableOpacity>
            </ScaleDecorator>
        )
    } 
    return (
        <SafeAreaView>
                <Flex direction='column' 
                    justify="center"
                    p='6'
                    pb='4'
                >
                <DraggableFlatList
                    ListHeaderComponent={() => (
                        <>
                        <Button onPress={onPress}>Back</Button>
                        <Text color='black' variant='title'>
                            Next Adventure
                        </Text>
                        <Text color='black' variant='subtitle'>
                            Questions are curated based on Hugo's age and the focus area you have identified
                        </Text>    
                        </> 
                    )}
                    data={draftQuestions}
                    onDragEnd={({data}) => setDraftQuestions(data)}
                    renderItem={renderEdit}
                    keyExtractor={(item, index) => String(index)}
                    nestedScrollEnabled={true}
                    ListFooterComponent={() =>(
                        <>
                        {!edit &&
                            <Button bg="teal.400" onPress={editOnPress}>Edit</Button>
                        }
                        {edit &&
                        <>
                            <AddQuestionBubble/>
                            <Flex direction='row' justify='space-evenly'>
                                <Button onPress={cancelOnPress}>Cancel</Button>
                                <Button onPress={saveOnPress}>Save</Button>
                            </Flex>
                        </>
                        }
                        </>
                    )}
                /> 
                </Flex>
        </SafeAreaView>
    )

}

export default PrepareContainer