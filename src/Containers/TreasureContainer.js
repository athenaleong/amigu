import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Text,
    Image,
    Flex
} from 'native-base';
import * as mockURL from '@/Assets/Treasure.json'


const TreasureContainer = (props) => {

    //TODO: set selected to be original 
    const [selected, setSelected] = useState();
    const mock = {'dance':['1', '2']};

    return (
        <SafeAreaView>
            <Flex 
                direction='column'
                justify='center'
            >
                <Text color="black" variant='title'>Dance</Text>









            </Flex>
        </SafeAreaView>

    )
}

export default TreasureContainer