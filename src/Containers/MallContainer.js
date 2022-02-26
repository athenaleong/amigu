import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
    Text,
    Flex,
    Image,
    Button,
} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';
import Background from '@/Assets/background/background.png'
import ModalView from "@/Components/Modal/ModalView";
import useModal from "@/Hooks/useModal";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import {getData, getMultiple} from '@/Services/AsyncStorage';
import TreasureBox from "@/Components/Treasure/TreasureBox";
import {TopBar} from '@/Components/TopBar'
import { LeftBar } from '@/Components/LeftBar';
import { navigate } from '@/Navigators/utils';


const MallContainer = (props) => {

    const [modalState, isModal, showModal, hideModal] = useModal()
    const [treasureData, setTreasureData] = useState([])

    const treasureOnPress = (idx) => {
        console.log('hey')
        navigate(['FishStore', 'FishStore', 'FishStore'][idx], treasureData[idx]);
    }

    useLayoutEffect(() => {
        (async() => {
            //Get Treasure Data from backend
            showModal('loading')
            const res = await axios.get('https://tweeby-backend.herokuapp.com/allTreasures');
            const payload = res.data.payload;
            console.log(payload)

            //Update Treasure Data with `collected` field 
            const collectedTreasure = await getData('@frontend:treasureCollection');
            const newPayload = []
            
            payload.forEach((item, idx) => {
                if (item.type in collectedTreasure) {
                    console.log(item.type)
                    newPayload.push({...item, 'collected': collectedTreasure[item.type]})
                }
            })

            setTreasureData(newPayload);
            hideModal()

        })();
    }, [])

    return (
        <>
        <ModalView visible={isModal} state={modalState}/>
        <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
            <SafeAreaView>
                <Flex  w="100%" h="100%">
                    <Text color="black" variant='title'>Mall</Text>
                    <Flex direction='row' justify='center' align='center' h='100%'>
                    {
                        treasureData.map((item, idx) => {
                            return (
                                <Button onPress={() => treasureOnPress(idx)} key={idx} >{item.type}</Button>    
                            )
                        })
                    }
                    </Flex>
                </Flex>
                <TopBar leftItems={['home']} rightItems={['fish']}/>
            </SafeAreaView>
            
        </ImageBackground>
        </>
    )


}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
})

export default MallContainer;
