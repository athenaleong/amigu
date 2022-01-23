import React, {useEffect, useState} from 'react';
import {
    Text,
    Flex,
    Pressable
} from 'native-base'
// Pull from backend 
// import * as data from '@/Assets/Bank' 
import axios from "axios";
import { TouchableOpacity } from 'react-native';

const AccordionView = (props) => {
    const {questionOnPress} = props;
    const [activeSections, setActiveSections]= useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        (async() => {
            const res = await axios.get('https://tweeby-backend.herokuapp.com/allQuestions');
            const payload = res.data.payload;
            console.log(payload)
            setData(payload);
        })();
    }, [])

    const sectionOnPress = (category) => {
        if (activeSections.includes(category)) {
            const index = activeSections.indexOf(category);
            if (index > -1) {
                const temp = [...activeSections];
                temp.splice(index, 1);
                setActiveSections(temp);
            }
        } else{
            setActiveSections([...activeSections, category])
        }
    }

    return (
        <Flex direction='column' align='center'>
            {
                data.map((item, index1) => {
                return(
                    <Flex key={index1} w='80%' align='center' m='3'>
                        <Flex bg='blue.300' rounded='30' w='80%' p='3'>
                            <TouchableOpacity onPress={() => sectionOnPress(index1)}>
                                <Text color='blue.500' variant='subtitleXL'>
                                    {item.category}
                                </Text>
                            </TouchableOpacity>
                        </Flex>
                        { 
                            activeSections.includes(index1) && item.questions.map((q,index2) => {
                                return(
                                    <TouchableOpacity 
                                        key={String(index1) + '_' + String(index2)}
                                        onPress={() => questionOnPress(q)}
                                    >
                                        <Flex 
                                            h ='16'
                                            justify='center'
                                            wrap='wrap'
                                            direction='row'
                                            m='3'
                                        >
                                            <Text color='black' variant='robotoSubtitle'>{q.content}</Text>
                                        </Flex>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </Flex>
                )
                })
            }
        </Flex>
    )
}

export default AccordionView