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
        },
        Image: {
            variants: {
                sm : {
                    size: '300',
                },
                md : {
                    size: '400',
                },
                lg: {
                    size: '500',
                },
                xl: {
                    size: '600',
                },
                xxl: {
                    size: '700',
                }
                
            }
        }

    }
})

export default Theme