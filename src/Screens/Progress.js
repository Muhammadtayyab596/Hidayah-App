import { View, Text, Button  ,  StyleSheet} from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'

export default function Progress() {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <Header  headerTitle = "Progress" />
            <View style={styles.container}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 54,
        left: 0,
        backgroundColor: '#ffff',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        height: "100%",
        width: '100%',
    },
});