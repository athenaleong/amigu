import React, {useState, useEffect, useLayoutEffect} from "react";
import {
    Text,
    Flex,
    ScrollView,
    Button,
    VStack,
    Image,
    HStack
} from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import {getData, getMultiple} from '@/Services/AsyncStorage';
import TreasureContainer from '@/Containers/TreasureContainer'
import { navigate } from "@/Navigators/utils";
import TreasureBox from "@/Components/Treasure/TreasureBox";
import still from '@/Assets/still.png'

const PetContainer = (props) => {

    const [treasureData, setTreasureData] = useState([])
    const [childName, setChildName] =  useState('');
    const [parentAddress, setParentAddress] = useState('');
    const [petWeight, setPetWeight] = useState()
    const [petHeight, setPetHeight] = useState()

    useLayoutEffect(() => {
        (async() => {
            //Get Treasure Data from backend
            const res = await axios.get('https://tweeby-backend.herokuapp.com/allTreasures');
            const payload = res.data.payload;

            //Update Treasure Data with `collected` field 
            const collectedTreasure = await getData('@frontend:treasureCollection');
            payload.forEach((item, idx) => {
                if (item.name in collectedTreasure) {
                    item.collected = collectedTreasure[item.name]
                }
            })
            setTreasureData(payload);

            //Update Child name and parent address
            const data = await getMultiple(['@frontend:childName', '@frontend:parentAddress', '@frontend:petHeight', '@frontend:petWeight']);
            setChildName(data[0][1]);
            setParentAddress(data[1][1]);
            setPetWeight(data[2][1]);
            setPetHeight(data[3][1]);
        })();
    }, [])

    const treasureOnPress = (idx) => {
        navigate('Treasure', treasureData[idx]);
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Flex direction='column' align='center' >
                    <Text color="black" variant='title'>{childName} & {parentAddress}</Text>
                    <Image source={still} width={200} height={200} alt='penguin'/>
                    <HStack space='4'>
                        <Text variant='subtitle'>{petWeight}</Text>
                        <Text variant='subtitle'>{petHeight}</Text>

                    </HStack>
                    <Flex>
                        <Text color='black' variant='title'>Discoveries</Text>
                {
                    treasureData.map((item, idx) => {
                        return (
                            <TreasureBox key={idx} data={item} onPress={() => treasureOnPress(idx)} />    
                        )
                    })
                }
                    </Flex>
                </Flex>
            </ScrollView>
        </SafeAreaView> 
    )

}

export default PetContainer