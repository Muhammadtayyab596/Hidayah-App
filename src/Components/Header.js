import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

export default function Header(props) {
    const {headerTitle} = props
    return (
        <View style={styles.headerContainer}  >
            <View style={{marginHorizontal:5}} >
                <Octicons name='three-bars' size={25} color="#ffff" />
            </View>
            <View>
                <Text style={{fontSize:17, color:'#ffff' , marginLeft:20}} >{headerTitle}</Text>
            </View>
            <View  >
                <View style={styles.headerright}>
                    <View>
                        <Ionicons name='notifications' size={25} color="#ffff" />
                    </View>
                    <View style={{ marginHorizontal: 10 }} >
                        <FontAwesome name='user-o' size={25} color="#ffff" />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#1F3C90",
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 13,
        paddingBottom:30
    },
    headerright: {
        backgroundColor: "#1F3C90",
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    }
})