import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
    Text,
    Flex,
    Button
} from 'native-base';
import TreasureBubble from './TreasureBubble';

const TreasureBox = (props) => {

    const {data, onPress} = props;

    return (
        <Flex
            direction='column'
            p='4'
        >
            <Flex
                direction='row'
                justify='space-evenly'
            >
                <Text color='black' variant='title'>{data.name}</Text>
                <Text color='black' variant='subtitle'>{data.collected.length} / {data.idToInfo.treasure.length} </Text>


                <Button onPress={onPress}>View Collection</Button>
            </Flex>

            <Flex
                direction='column'
                justify='flex-start'       
            >
            </Flex>



        </Flex>
    )
}

export default TreasureBox