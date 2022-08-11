import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Button } from 'react-native-paper';
import React, { useState } from 'react'
import { Card } from 'react-native-paper'
import Header from '../Components/Header'
import DatePicker from 'react-native-date-picker'
import MosqueImg from '../Components/MosqueImg'
export default function Home() {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <Header headerTitle="Home" />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.topHeadingBOx} >
                        <Text style={styles.Welcome}>Welcome to</Text>
                        <Text style={styles.hidayahAcadmy}>HIDAYAH ACADEMY</Text>
                    </View>
                    {/* Para */}
                    <View style={styles.paraBox} >
                        <Text style={styles.para}>
                            Hidayah Academy is a professional and well disciplined institute of traditional Islamic learning for Dars-e-Nizami.
                            It strikes a good balance between being progressive in its outlook whilst holding fast to traditional Islamic values.
                            Special-care is taken to ensure good tarbiyah and nurturing of students
                        </Text>
                    </View>
                    {/* Jumbo Btn */}
                    <View style={{ marginTop: -5}}>
                        <Button
                            mode="contained"
                            uppercase={false}
                            style={{ borderRadius: 14, paddingVertical: 3,color:'#ffff' }}
                            labelStyle={{ fontSize: 15 }}
                            color='#FFAA1B'>
                            Get Enrolled
                        </Button>
                    </View>
                    {/* MosqueImg */}
                    <View style={{ display: 'flex', justifyContent: 'center', flexDirection: "row" , marginTop:20 }} >
                        <MosqueImg />
                    </View>
                    {/* Boxes 1*/}
                    <View style={{ display: 'flex', marginTop: 6 }}>
                        <View style={styles.flexWrapper}  >
                            <TouchableOpacity style={styles.innerwrapper} >
                                <Image
                                    style={styles.icons}
                                    source={require('../Assets/faculty-01.png')}
                                />
                                <Text style={styles.boxtText} >Faculty</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.innerwrapper} >
                                <Image
                                    style={styles.icons}
                                    source={require('../Assets/Programms.png')}
                                />
                                <Text style={styles.boxtText} >Programms</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.innerwrapper} >
                                <Image
                                    style={styles.icons}
                                    source={require('../Assets/Books.png')}
                                />
                                <Text style={styles.boxtText} >Books</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Boxes 2*/}
                    <View style={{ display: 'flex', marginTop: 10 }}>
                        <View style={styles.flexWrapper}  >
                            <TouchableOpacity style={styles.innerwrapper} >
                                <Image
                                    style={styles.icons}
                                    source={require('../Assets/graduates.png')}
                                />
                                <Text style={styles.boxtText} >Graduates</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.innerwrapper} >
                                <Image
                                    style={styles.icons}
                                    source={require('../Assets/login.png')}
                                />
                                <Text style={styles.boxtText} >Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.innerwrapper} >
                                <Image
                                    style={styles.icons}
                                    source={require('../Assets/contact.png')}
                                />
                                <Text style={styles.boxtText} >COntact Us</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
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
    subContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 8
    },
    Welcome: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: "400"
    },
    hidayahAcadmy: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 5,
        color: '#333c6f',
        fontWeight: "600",
    },
    paraBox: {
        marginTop: 10
    },
    para: {
        textAlign: "justify",
        color: '#656565',
        fontSize: 15,
        lineHeight: 22
    },
    flexWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    innerwrapper: {
        backgroundColor: '#e3e3e3',
        padding: 15,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        width: 110
    },
    icons: {
        width: 55,
        height: 55,
    },
    boxtText: {
        marginTop: 8,
    }


});