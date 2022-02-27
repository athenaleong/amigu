import React, {useLayoutEffect, useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Text,
    Image,
    Flex,
    Box,
    ScrollView,
    Pressable
} from 'native-base';
import * as mockURL from '@/Assets/Treasure.json'
import Question from '@/Assets/question-mark-blue.png'
import TreasureBubble from '../../Components/Treasure/TreasureBubble';
import { ImageBackground, StyleSheet } from 'react-native';
import FishBackground from '@/Assets/background/fish-background.jpeg';
import { TopBar } from '@/Components/TopBar';
import { ImageSizeNum }from '@/Config/penguinConfig.js'
import { margin } from '@/Config/dynamicConfig.js'
import Still from '@/Assets/still.png'

const FishContainer = (props) => {

    //TODO: set selected to be original 
    const [selected, setSelected] = useState(Still);
    const [count, setCount] = useState(1)
    const [collected, setCollected] = useState([])

    //Extract data sent from Pet Containerr
    const {id, idToInfo, type} = props.route.params;

    //Keep tracks of which terasure has been collected
    const data = idToInfo;

    const treasureOnPress = (idx) => {
        if (collected[idx]) {
            setSelected({'uri' : data[idx].gif});
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

    return (
        <Flex 
                direction='row'
                height='100%'
                width='100%'
        >
            <Box height='100%' width={'60%'}>
                <ImageBackground source={FishBackground} resizeMode='cover' style={styles.image}>
                    <Flex direction='column' align='center'>
                            <Text color='white' variant='subtitleXL'>Aquarium</Text>

                        <Image 
                            source={selected} key={count}
                            alt="penguin" size={ImageSizeNum}
                            borderRadius={300}
                            />
                    </Flex>

                </ImageBackground>
            </Box>
            <TopBar leftItems={['treasure']}/>
            <Flex  height='100%' width={'40%'} bg='lightBlue.900'>
                {/* Image rerenders when key field is updated. Could test with memoized*/}
                
                <ScrollView>
                    <Flex m={margin}>
                        <Text variant='title' color='white'> {props.route.params.collected.length} / {collected.length} </Text>
                        <Text variant='subtitleL' color='white'> Friends</Text>
                    </Flex>
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
                                        <TreasureBubble data={item} display={collected[idx]} bg='lightBlue.600' question={Question}/>
                                    </Pressable>
                                )
                            })
                            
                        }
                    </Flex>
                </ScrollView>

            </Flex>
        </Flex>

    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
})

export default FishContainer