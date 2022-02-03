import React, {useState, useEffect, useLayoutEffect} from "react";
import {
    Text,
    Flex,
    ScrollView,
    Button,
    VStack,
    IconButton,
    Icon,
    Spacer
} from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionBubble from "@/Components/Question/QuestionBubble";
import AddQuestionBubble from "@/Components/Question/AddQuestionBubble";

//Note: send current stats to backend, backend does magic and figure out which quesiton,save in json file frontend 
import * as data from '@/Assets/Question.json'
import { navigateGoBack } from "@/Navigators/utils";
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Pressable, TouchableOpacity } from "react-native";
import { navigate } from "@/Navigators/utils";
import { getData, storeData } from "@/Services/AsyncStorage";
import { style } from "styled-system";
import {StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

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
            const newQuestions = await getData('@frontend:newQuestions')
            setQuestions(newQuestions)
            setDraftQuestions(newQuestions)
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
        let newQ = [...draftQuestions]
        console.log('deleteOnPress', currIndx, newQ)
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
        await storeData('@frontend:newQuestions', draftQuestions)
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
                    style={styles.rowItem}
                    onLongPress={drag}
                    disabled={!edit}>
                    <QuestionBubble 
                        color={"blue.300"} 
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
                    align="center"
                    width='100%'
                >
                <DraggableFlatList
                    ListHeaderComponent={() => (
                        <>
                        {/* <Button onPress={onPress}>Back</Button> */}
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
                        <Text color='black' variant='title'>
                            Next Adventure
                        </Text>
                        {/* <Text color='black' variant='subtitle'>
                            Questions are curated based on Hugo's age and the focus area you have identified
                        </Text>     */}
                        </> 
                    )}

                    data={draftQuestions}
                    onDragEnd={({data}) => setDraftQuestions(data)}
                    renderItem={renderEdit}
                    keyExtractor={(item, index) => String(index)}
                    nestedScrollEnabled={true}
                    containerStyle={styles.dragList}
                    ListFooterComponent={() =>(
                        <>
                        <Flex direction="column" justify='center' align='center' w='100%' >
                        {!edit &&
                            <Button  onPress={editOnPress} variant='parent' my='6'>Edit</Button>
                        }
                        {edit &&
                        <>
                            <AddQuestionBubble onPress={addOnPress}/>
                            <Flex direction='row' justify='space-evenly' w='80%' my='6'>
                                <Button onPress={cancelOnPress} variant='parent' bg='error.400'>Cancel</Button>
                                <Button onPress={saveOnPress} variant='parent' bg='success.400'>Save</Button>
                            </Flex>
                        </>
                        }
                        </Flex>
                        </>
                    )}
                /> 
            </Flex>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    rowItem: {
      alignItems: "center",
      display:'flex',
      justifyContent: 'center',
    },
    dragList:{
        width:"100%",
    }
  });

export default PrepareContainer