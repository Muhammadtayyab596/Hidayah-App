import { View, Text, Button  ,  StyleSheet} from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import DatePicker from 'react-native-date-picker'
export default function Detail() {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <Header  headerTitle = "Details" />
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