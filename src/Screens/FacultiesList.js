import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import { Button } from 'react-native-paper';
import React, { useState } from 'react'
import { Card } from 'react-native-paper'
import Header from '../Components/Header'
import DatePicker from 'react-native-date-picker'
import MosqueImg from '../Components/MosqueImg'
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
export default function Allfaculties() {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <Header headerTitle="All Faculties" />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    {/* Heading */}
                    <View style={styles.headingcontainer} >
                        <Text style={styles.students} >Faculties</Text>
                        <Text style={styles.list} > List</Text>
                    </View>
                    {/* Line  */}
                    <View style={{ display: 'flex', alignItems: "center" }} >
                        <View style={{ width: 70, height: 6, backgroundColor: '#fcaf17', borderRadius: 10, marginTop: 7 }} />
                    </View>
                    {/* Mosque */}
                    <View style={{ display: 'flex', justifyContent: 'center', flexDirection: "row", marginTop: 20 }} >
                        <MosqueImg />
                    </View>
                    {/* Search Bar */}
                    <View style={styles.searchContainer} >
                        <TextInput style={styles.searchInput} placeholder="Search" />
                        <Text style={styles.searchicon}><Feather name="search" size={25} color="#656565" /></Text>
                    </View>
                    {/* List */}
                    <ScrollView  >
                        <View style={styles.listmainConatiner}>
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
                                        <Text><FontAwesome name="chevron-right" size={30} color="#333c6f" /></Text>
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
                                        <Text><FontAwesome name="chevron-right" size={30} color="#333c6f" /></Text>
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
                                        <Text><FontAwesome name="chevron-right" size={30} color="#333c6f" /></Text>
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
                                        <Text><FontAwesome name="chevron-right" size={30} color="#333c6f" /></Text>
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
                                        <Text><FontAwesome name="chevron-right" size={30} color="#333c6f" /></Text>
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
                                        <Text><FontAwesome name="chevron-right" size={30} color="#333c6f" /></Text>
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
                                        <Text><FontAwesome name="chevron-right" size={30} color="#333c6f" /></Text>
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
                                        <Text><FontAwesome name="chevron-right" size={30} color="#333c6f" /></Text>
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
                                        <Text><FontAwesome name="chevron-right" size={30} color="#333c6f" /></Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* </View> */}
                    </ScrollView>

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
        marginTop: 15
    },
    headingcontainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    students: {
        fontSize: 30,
        fontWeight: '600',
        color: "#fcaf17",
    },

    list: {
        fontSize: 30,
        fontWeight: '600',
        color: "#333c6f",
    },
    searchContainer: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: 'relative',
        top: 1,
    },

    searchInput: {
        width: 375,
        backgroundColor: "#fafafa",
        borderRadius: 25,
        padding: 12,
        fontSize: 15,
        paddingHorizontal: 20,
        shadowColor: '#656565',
        elevation: 5,
    },
    searchicon: {
        position: 'absolute',
        bottom: 11,
        right: 35,
    },
    // list Conatiner




    listmainConatiner: {
        display: 'flex',
        alignContent: 'center',
        marginLeft: 1,
        top: 1,
    },
    listContainer: {
        borderWidth: 2,
        // borderBottomWidth: 2,
        // borderTopWidth: 2,
        // borderRightWidth: 2,
        // borderLeftWidth: 2,
        borderColor: "#333c6f",
        width: 375,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
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
        fontSize: 20,
        fontWeight: "500"
    },
    iconcircle: {
        width: 55,
        height: 55,
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
        top: 8,
        left: 11,
    },
    coursname: {
        color: '#656565',
        fontSize: 12,

    },
});