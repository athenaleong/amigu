import React, {useState, useEffect, useLayoutEffect, Suspense} from "react";
import {
    Text,
    Flex,
    ScrollView,
    Button,
    VStack,
    Image,
    HStack,
    Modal
} from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import {getData, getMultiple} from '@/Services/AsyncStorage';
import TreasureContainer from '@/Containers/TreasureContainer'
import { navigate } from "@/Navigators/utils";
import TreasureBox from "@/Components/Treasure/TreasureBox";
import still from '@/Assets/still.png'
import useModal from "@/Hooks/useModal";
import ModalView from "@/Components/Modal/ModalView";

// Children Facing Container to view Statistics on Pet & Treasure
const StatsContainer = (props) => {

    //TODO: Change to UseReducer or dict instead of multiple useState
    const [treasureData, setTreasureData] = useState([])
    const [childName, setChildName] =  useState('');
    const [parentAddress, setParentAddress] = useState('');
    const [petWeight, setPetWeight] = useState()
    const [petHeight, setPetHeight] = useState()

    const [modalState, isModal, showModal, hideModal] = useModal()


    useLayoutEffect(() => {
        (async() => {
            //Get Treasure Data from backend
            showModal('transition')
            const res = await axios.get('https://tweeby-backend.herokuapp.com/allTreasures');
            const payload = res.data.payload;

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

            //Update Child name and parent address
            const data = await getMultiple(['@frontend:childName', '@frontend:parentAddress', '@frontend:petHeight', '@frontend:petWeight']);
            setChildName(data[0][1]);
            setParentAddress(data[1][1]);
            setPetWeight(data[2][1]);
            setPetHeight(data[3][1]);
            hideModal()

        })();
    }, [])

    const treasureOnPress = (idx) => {
        navigate('Treasure', treasureData[idx]);
    }

    return (
        <>
        <ModalView visible={isModal} state={modalState}/>
        <SafeAreaView>
            <ScrollView>
                <Flex direction='column' align='center' >
                <   Text color="black" variant='title'>{childName} & {parentAddress}</Text>
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
        </>
    )

}

const PlaceHolder = () => {

    useEffect(() => {
        console.log('I am placeholder')
    })
    return (
        <Text>I am loading</Text>
    )
}

export default StatsContainer