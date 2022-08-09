import { View, Text, StyleSheet , Image } from 'react-native'
import React from 'react'

export default function MosqueImg() {
    return (
        <View>
            <Image
                style={styles.mosqueImg}
                source={require('../Assets/masjid.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mosqueImg: {
        height:90,
        width:395,
    },
})