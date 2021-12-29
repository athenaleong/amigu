import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
    Text,
    Flex,
    Button
} from 'native-base';
import TreasureBubble from './TreasureBubble';

const TreasureBox = (props) => {

    const [newest, setNewest] = useState([])
    const {data, onPress} = props;

    useLayoutEffect(() => {
        console.log(data)
        const newestId = data.collected.slice(-2)
        const temp = []
        data.idToInfo.forEach(item => {
            if (newestId.includes(item.id)) {
                temp.push(item)
            }
        })
        setNewest(temp)
    }, [])

    return (
        <Flex
            direction='column'
            p='4'
        >
            <Flex
                direction='row'
                justify='space-between'
                align='center'
            >
                <Text color='black' variant='title'>{data.type}</Text>
                <Text color='black' variant='subtitle'>{data.collected.length} / {data.idToInfo.length} </Text>
                <Button onPress={onPress}>View Collection</Button>
            </Flex>

            <Flex
                direction='row'
                justify='flex-start'       
            >
                {newest.map((item, idx) => {
                    return (
                        <TreasureBubble data={item} display={true} key={idx}/>
                    )
                })}
            </Flex>



        </Flex>
    )
}

export default TreasureBox