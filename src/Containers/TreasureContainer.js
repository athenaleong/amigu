import React, {useLayoutEffect, useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Text,
    Image,
    Flex,
    Spacer,
    ScrollView,
    Pressable
} from 'native-base';
import * as mockURL from '@/Assets/Treasure.json'
import Question from '@/Assets/question-mark.png'
import TreasureBubble from '../Components/Treasure/TreasureBubble';


const TreasureContainer = (props) => {


    //TODO: set selected to be original 
    const [selected, setSelected] = useState({'uri': 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1'});
    const [count, setCount] = useState(1)
    const [collected, setCollected] = useState([])

    //Extract data sent from Pet Container
    const {id, idToInfo, name} = props.route.params;

    //Keep tracks of which terasure has been collected
    const data = idToInfo.treasure;

    const treasureOnPress = (idx) => {
        if (collected[idx]) {
            setSelected({'uri' : mockURL.treasure[idx].gif});
        }
        else {
            setSelected(Question);
        }
        setCount(count + 1);
    }

    useLayoutEffect(() => {
        let tmp = []
        data.forEach((element, idx) => {    
            tmp.push(props.route.params.collected.includes(element.id) ? true : false)
        })
        setCollected(tmp)
    }, [])


    // TODO: check if image renders with actual uri
    return (
        <SafeAreaView>
            <Flex 
                direction='column'
                justify='center'
                align='center'
            >
                <Text color='black' variant='title'>{name.toUpperCase()}</Text>
                {/* Image rerenders when key field is updated */}
                <Image 
                    source={selected} key={count}
                    alt="penguin" size="xl" />
                <ScrollView>
                    <Flex
                        direction="row"
                        justify="center"
                        w="100%"
                        wrap='wrap'

                    > 
                        {
                            data.map((item, idx) => {
                                return (
                                    <Pressable key={idx} onPress={() => treasureOnPress(idx)}>
                                        <TreasureBubble data={item} display={collected[idx]}/>
                                    </Pressable>
                                )
                            })
                            
                        }
                    </Flex>
                </ScrollView>
            </Flex>
        </SafeAreaView>

    )
}

export default TreasureContainer