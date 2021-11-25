import React from "react";
import {
    Text,
    Box
} from 'native-base';

const FocusAreaBubble = (props) => {
        const {text} = props

        return (
            <Box
                bg="teal.300"
                py='2' px='6'
                rounded='full'
                m='1'
            >
                <Text color="white" variant="subtitle">
                    {text}
                </Text>
            </Box>
        )
}

export default FocusAreaBubble