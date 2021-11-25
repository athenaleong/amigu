import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

const Theme = extendTheme({
    components: {
        Text:{
            variants: {
                title: {
                    fontWeight:"bold",
                    fontSize:"2xl",
                    textAlign:"center"
                },
                subtitle: {
                    fontWeight:"medium",
                    fontSize:"sm",
                    textAlign:"center"
                },
                subtitleL: {
                    fontWeight:"medium",
                    fontSize:"lg",
                    textAlign:"center"
                }
            }
        }

    }
})

export default Theme