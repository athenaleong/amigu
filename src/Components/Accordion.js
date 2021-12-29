import React, {useEffect, useState} from 'react';
import {
    Text,
    Flex
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
        <Flex direction='column'>
            {
                data.map((item, index1) => {
                return(
                    <Flex key={index1}>
                        <TouchableOpacity onPress={() => sectionOnPress(index1)}>
                            <Text color='black' variant='title'>
                                {item.category}
                            </Text>
                        </TouchableOpacity>
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
                                            bg={'teal.200'}
                                        >
                                            <Text color='black' variant='subtitle'>{q.content}</Text>
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