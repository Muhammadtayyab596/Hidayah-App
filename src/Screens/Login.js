import { View, Text, StyleSheet, TouchableOpacity, Image , ScrollView } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import React, { useState } from 'react'
import MosqueImg from '../Components/MosqueImg'
export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.imgbox} >
                <Image
                    style={styles.logoimg}
                    source={require('../Assets/logo.png')}
                />
                {/* <Text style={styles.LoginText} >Login</Text> */}
                <View style={{ marginTop: 30 }} >
                    <MosqueImg />
                </View>
            </View>

            <View style={styles.formConatiner} >
                <TextInput
                    label="Email"
                    mode='outlined'
                    outlineColor="lightgrey"
                    activeOutlineColor="#243C90"
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    mode='outlined'
                    outlineColor="lightgrey"
                    activeOutlineColor="#243C90"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    style={styles.input}
                />

                <View style={{ marginTop: 10 }}>
                    <Button
                        mode="contained"
                        uppercase={false}
                        style={{ borderRadius: 10, paddingVertical: 5, color: '#ffff' }}
                        labelStyle={{ fontSize: 15 }}
                        color='#243C90'>
                        Login
                    </Button>
                </View>

                <TouchableOpacity
                    style={styles.createAccountBox}>
                    <Text style={styles.DontAcountText}>
                        Don't have an acount ?
                    </Text>
                    <Text style={styles.createHere} >
                        Create here
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:20,
        justifyContent:'center'
    },
    imgbox: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    LoginText: {
        fontSize: 25,
        color: '#243C90',
        fontWeight: "500",
        marginTop: 15
    },
    formConatiner: {
        marginVertical: 10
    },
    input: {
        marginVertical: 8
    },
    createAccountBox: {
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
      marginVertical:20
    },
    DontAcountText:{
        fontSize:16
    },
    createHere:{
        fontSize:16,
        color:'#243C90',
        fontWeight:"500",
        marginTop:2

    },
});