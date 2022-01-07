import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';



const Theme = extendTheme({
    components: {
        Text:{
            variants: {
                title: {
                    fontWeight:"bold",
                    fontSize:[24, 36, 48, 60, 72],
                    textAlign:"center",
                    fontFamily:"BalooDa2_800ExtraBold",
                },
                subtitle: {
                    fontWeight:"medium",
                    fontSize:"sm",
                    textAlign:"center",
                    fontFamily:"BalooDa2_800ExtraBold",
                },
                subtitleL: {
                    fontWeight:"medium",
                    fontSize:[12, 16, 20, 24, 28],
                    textAlign:"center",
                    fontFamily:"BalooDa2_800ExtraBold",
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