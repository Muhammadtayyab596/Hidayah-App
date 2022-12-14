import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Card } from 'react-native-paper'
import Header from '../Components/Header'
import MosqueImg from '../Components/MosqueImg'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';
export default function Allfaculties() {
    return (
        <View style={styles.MainPage}>
            <Header headerTitle="All Faculties" />

            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.headingcontainer} >
                        <Text style={styles.students} >Faculties</Text>
                        <Text style={styles.list} > List</Text>
                    </View>
                    {/* Line  */}
                    <View style={{ display: 'flex', alignItems: "center" }} >
                        <View style={{ width: 60, height: 4, backgroundColor: '#fcaf17', borderRadius: 10, marginTop: 7 }} />
                    </View>
                    {/* Mosque */}
                    <View style={{ display: 'flex', justifyContent: 'center', flexDirection: "row", marginTop: 10 }} >
                        <MosqueImg />
                    </View>
                    {/* Search Bar */}
                    <View style={styles.searchContainer} >
                        <TextInput style={styles.searchInput} placeholder="Search" />
                        <Text style={styles.searchicon}><Feather name="search" size={20} color="#bdbdbd" /></Text>
                    </View>


                </View>
            </View>
            <View style={styles.listingItems}>
                <ImageBackground
                    source={require('../Assets/watermark3.png')}
                    resizeMode="cover"
                >

                    <View style={styles.listmainConatiner}>
                        <ScrollView>
                            <TouchableOpacity style={styles.listContainer} >
                                <View style={styles.innerConatiner} >
                                    <View style={styles.iconText} >
                                        <View style={styles.iconcircle} >
                                            <Text style={styles.userIcon} ><FontAwesome name="user-o" size={30} /></Text>
                                        </View>
                                        <View style={styles.info} >
                                            <Text style={styles.studentname}  >Ghulam Mustafa</Text>
                                            <Text style={styles.coursname}  >Mon to Wed 06:00PM</Text>

                                        </View>
                                    </View>
                                    <View>
                                        <Text><AntDesign name="right" size={25} color="#fcaf17" /></Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listContainer} >
                                <View style={styles.innerConatiner} >
                                    <View style={styles.iconText} >
                                        <View style={styles.iconcircle} >
                                            <Text style={styles.userIcon} ><FontAwesome name="user-o" size={30} /></Text>
                                        </View>
                                        <View style={styles.info} >
                                            <Text style={styles.studentname}  >Ghulam Mustafa</Text>
                                            <Text style={styles.coursname}  >Mon to Wed 06:00PM</Text>

                                        </View>
                                    </View>
                                    <View>
                                        <Text><AntDesign name="right" size={25} color="#fcaf17" /></Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listContainer} >
                                <View style={styles.innerConatiner} >
                                    <View style={styles.iconText} >
                                        <View style={styles.iconcircle} >
                                            <Text style={styles.userIcon} ><FontAwesome name="user-o" size={30} /></Text>
                                        </View>
                                        <View style={styles.info} >
                                            <Text style={styles.studentname}  >Ghulam Mustafa</Text>
                                            <Text style={styles.coursname}  >Mon to Wed 06:00PM</Text>

                                        </View>
                                    </View>
                                    <View>
                                        <Text><AntDesign name="right" size={25} color="#fcaf17" /></Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listContainer} >
                                <View style={styles.innerConatiner} >
                                    <View style={styles.iconText} >
                                        <View style={styles.iconcircle} >
                                            <Text style={styles.userIcon} ><FontAwesome name="user-o" size={30} /></Text>
                                        </View>
                                        <View style={styles.info} >
                                            <Text style={styles.studentname}  >Ghulam Mustafa</Text>
                                            <Text style={styles.coursname}  >Mon to Wed 06:00PM</Text>

                                        </View>
                                    </View>
                                    <View>
                                        <Text><AntDesign name="right" size={25} color="#fcaf17" /></Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listContainer} >
                                <View style={styles.innerConatiner} >
                                    <View style={styles.iconText} >
                                        <View style={styles.iconcircle} >
                                            <Text style={styles.userIcon} ><FontAwesome name="user-o" size={30} /></Text>
                                        </View>
                                        <View style={styles.info} >
                                            <Text style={styles.studentname}  >Ghulam Mustafa</Text>
                                            <Text style={styles.coursname}  >Mon to Wed 06:00PM</Text>

                                        </View>
                                    </View>
                                    <View>
                                        <Text><AntDesign name="right" size={25} color="#fcaf17" /></Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listContainer} >
                                <View style={styles.innerConatiner} >
                                    <View style={styles.iconText} >
                                        <View style={styles.iconcircle} >
                                            <Text style={styles.userIcon} ><FontAwesome name="user-o" size={30} /></Text>
                                        </View>
                                        <View style={styles.info} >
                                            <Text style={styles.studentname}  >Ghulam Mustafa</Text>
                                            <Text style={styles.coursname}  >Mon to Wed 06:00PM</Text>

                                        </View>
                                    </View>
                                    <View>
                                        <Text><AntDesign name="right" size={25} color="#fcaf17" /></Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listContainer} >
                                <View style={styles.innerConatiner} >
                                    <View style={styles.iconText} >
                                        <View style={styles.iconcircle} >
                                            <Text style={styles.userIcon} ><FontAwesome name="user-o" size={30} /></Text>
                                        </View>
                                        <View style={styles.info} >
                                            <Text style={styles.studentname}  >Ghulam Mustafa</Text>
                                            <Text style={styles.coursname}  >Mon to Wed 06:00PM</Text>

                                        </View>
                                    </View>
                                    <View>
                                        <Text><AntDesign name="right" size={25} color="#fcaf17" /></Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listContainer} >
                                <View style={styles.innerConatiner} >
                                    <View style={styles.iconText} >
                                        <View style={styles.iconcircle} >
                                            <Text style={styles.userIcon} ><FontAwesome name="user-o" size={30} /></Text>
                                        </View>
                                        <View style={styles.info} >
                                            <Text style={styles.studentname}  >Ghulam Mustafa</Text>
                                            <Text style={styles.coursname}  >Mon to Wed 06:00PM</Text>

                                        </View>
                                    </View>
                                    <View>
                                        <Text><AntDesign name="right" size={25} color="#fcaf17" /></Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        position: 'relative',
        top: -14,
        left: 0,
        backgroundColor: '#ffff',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        // height: "100%",
        width: '100%',
    },
    subContainer: {
        marginTop: 15
    },
    headingcontainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    students: {
        fontSize: 25,
        fontWeight: '600',
        color: "#fcaf17",
    },
    list: {
        fontSize: 25,
        fontWeight: '600',
        color: "#1F3C90",
    },
    searchContainer: {
        marginTop: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: 'relative',
        top: 1,
        padding: 12,
        shadowColor: '#ffff',
        elevation: 5,
    },
    searchInput: {
        width: "100%",
        backgroundColor: "#fff",
        paddingVertical: 8,
        borderRadius: 15,
        fontSize: 14,
        paddingHorizontal: 20,
        shadowColor: '#656565',
        elevation: 5,
    },
    searchicon: {
        position: 'absolute',
        bottom: 24,
        right: 35,
    },


    // list Conatiner
    listmainConatiner: {
        width: '90%',
        // display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 12,
    },
    listContainer: {
        borderWidth: 2,
        borderColor: "#1F3C90",
        width: "100%",
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    innerConatiner: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    iconText: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
    },
    studentname: {
        fontSize: 18,
        fontWeight: "500",
        color: "#1F3C90"
    },
    iconcircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        position: 'relative',
        borderWidth: 3,
        borderColor: "#fcaf17",
    },
    info: {
        marginLeft: 10
    },
    userIcon: {
        position: 'absolute',
        top: 6,
        left: 9,
    },
    coursname: {
        color: '#656565',
        fontSize: 10,
    },
    MainPage: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#fff'
    },
    listingItems: {
        flex: 1,
        backgroundColor: '#fff'
    }
});