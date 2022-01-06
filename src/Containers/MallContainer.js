import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
    Text,
    Flex,
    Image,
    Button,
} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';
import Background from '@/Assets/background.png'

const MallContainer = (props) => {
    return (
        <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
            <SafeAreaView>
            </SafeAreaView>
        </ImageBackground>
    )


}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
})

export default MallContainer;
