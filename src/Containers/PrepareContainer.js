import React, {useState, useEffect, useLayoutEffect} from "react";
import {
    Text,
    Flex,
    ScrollView,
    Button
} from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionBubble from "@/Components/QuestionBubble";
import AddQuestionBubble from "@/Components/AddQuestionBubble";

//Note: send current stats to backend, backend does magic and figure out which quesiton,save in json file frontend 
import * as data from '@/Assets/Question.json'
import { navigateGoBack } from "@/Navigators/utils";
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";
import { navigate } from "@/Navigators/utils";
import { getData, storeData } from "@/Services/AsyncStorage";



const PrepareContainer = (props) => {


    const {route} = props
    const {params} = route

    //Update Draft Questions with newly selected Questions
    useEffect(() => {
        if (params){
            setDraftQuestions([...draftQuestions, params]) 
        }
    }, [params])


    useLayoutEffect(() => {
        (async() => {
            const newQuesitons = await getData('@frontend:newQuesitons')
            setQuestions(newQuesitons)
            setDraftQuestions(newQuesitons)
        })();
    }, [])

    const [edit, setEdit] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [draftQuestions, setDraftQuestions] = useState([]);

    
    const onPress = () => {
        navigateGoBack()
    }
    const editOnPress = () => {
        setEdit(!edit)
    }

    const deleteOnPress = (currIndx) => {
        console.log(currIndx + ' pressed')
        let newQ = [...draftQuestions]
        newQ.splice(currIndx, 1)
        setDraftQuestions(newQ)
    }

    const cancelOnPress = () => {
        setDraftQuestions(questions)
        setEdit(false)
    }

    const saveOnPress = async() => {
        setQuestions(draftQuestions)
        console.log(questions)
        //WRITE TO Asyncstorage
        await storeData('@frontend:newQuesitons', draftQuestions)
        setEdit(false)
    }

    const addOnPress = () => {
        navigate('Question')
    }


    const renderEdit = ({item, drag, index}) => {
        //TODO: deleteOnPress does not work on Apple
        return (
            <ScaleDecorator>
                <TouchableOpacity 
                    onLongPress={drag}
                    disabled={!edit}>
                    <QuestionBubble 
                        color={"teal.400"} 
                        question={item.content} 
                        category={item.category}
                        edit={edit}
                        deleteOnPress={() => deleteOnPress(index)}
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
                            <AddQuestionBubble onPress={addOnPress}/>
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