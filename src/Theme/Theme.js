import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import {margin} from '@/Config/dynamicConfig.js';
import { borderRadius } from 'styled-system';



const Theme = extendTheme({
    colors:{
        beige: {
            100:'#FAF1DC',
            200:'#F3DDB0',
            300:'#F2DBA9',
            400:'#F1D8A4',
            500:'#EDCD89',
            600:'#E9C371',
            700:'#E5B858',
            800:'#E1AE3F',
            900:'#DDA326'
        },

    },
    components: {
        TypeWriter: {
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
                },
                subtitleXL: {
                    fontWeight:"medium",
                    fontSize:[20, 24, 28, 32, 36],
                    textAlign:"center",
                    fontFamily:"BalooDa2_800ExtraBold",
                },
                subtitleLight: {
                    fontWeight:"medium",
                    fontSize:'sm',
                    textAlign:"center",
                    fontFamily:"BalooDa2_500Medium",
                },
                robotoSubtitle:{
                    fontWeight:"medium",
                    fontSize:[12, 16, 20, 24, 28],
                    textAlign:"center",
                },
            }
        },
        FAB: {
            baseStyle: {
                top: margin,
                right: margin
            },
            variants: {
                next : {
                    label: "Next",
                    height: [8, 12, 16],
                    p: margin,
                    width: 120,
                    
                }
            }
        },
        Image: {
            variants: {
                sm : {
                    size: '200',
                },
                md : {
                    size: '300',
                },
                lg: {
                    size: '400',
                },
                xl: {
                    size: '500',
                },
                xxl: {
                    size: '600',
                }
                
            }
        },
        Button: {
            variants: {
                parent: {
                    bg:'lightBlue.400',
                    rounded:24,
                    _text:{
                        fontFamily:"BalooDa2_500Medium",
                        color:"white"
                    },
                    w:'100'
                }
            }
        },
        Input : {
            variants: {
                name: {
                    bg:'white',
                    fontWeight:"bold",
                    fontFamily:"BalooDa2_500Medium",
                    textAlign:'center',
                    rounded:32,
                }
            }
        }

    }
})

export default Theme