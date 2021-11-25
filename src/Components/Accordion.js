import React, {useEffect, useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {
    Text,
    Flex
} from 'native-base'
import * as data from '@/Assets/Bank'
import { TouchableOpacity } from 'react-native';

const AccordionView = () => {
    const [activeSections, setActiveSections]= useState([])
    const category = data.questions

    const sectionOnPress = (category) => {
        if (activeSections.includes(category)) {
            console.log('a')
            const index = activeSections.indexOf(category);
            if (index > -1) {
                const temp = [...activeSections]
                temp.splice(index, 1)
                setActiveSections(temp)
            }
        } else{
            console.log('b')
            setActiveSections([...activeSections, category])
        }
    }

    return (
        <Flex direction='column'>
            {
                category.map((e, index1) => {
                return(
                    <Flex key={index1}>
                        <TouchableOpacity onPress={() => sectionOnPress(index1)}>
                            <Text color='black' variant='title'>
                                {e.category}
                            </Text>
                        </TouchableOpacity>
                        { 
                            activeSections.includes(index1) && e.question.map((q,index2) => {
                                return(
                                    <Flex 
                                        key={String(index1) + '_' + String(index2)}
                                        h ='16'
                                        justify='center'
                                    >
                                        <Text color='black' variant='subtitle'>{q.question}</Text>
                                    </Flex>
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