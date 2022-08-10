import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Button } from 'react-native-paper';
import Poppup from '../Components/poppus';
import MosqueImg from '../Components/MosqueImg';
import Header from '../Components/Header';

export default function AttandanceRecords() {


    const data = [
        {
            date: "10-09-2022",
            status: "P",
        },
        {
            date: "10-09-2022",
            status: "A",
        },
        {
            date: "10-09-2022",
            status: "L",
        },
        {
            date: "10-09-2022",
            status: "P",
        },
        {
            date: "10-09-2022",
            status: "L",
        },
        {
            date: "10-09-2022",
            status: "P",
        },
        {
            date: "10-09-2022",
            status: "L",
        },
        {
            date: "10-09-2022",
            status: "P",
        },
        {
            date: "10-09-2022",
            status: "L",
        },
        {
            date: "10-09-2022",
            status: "P",
        },
        {
            date: "10-09-2022",
            status: "L",
        },
        {
            date: "10-09-2022",
            status: "P",
        },
        {
            date: "10-09-2022",
            status: "L",
        },
        {
            date: "10-09-2022",
            status: "P",
        },
        {
            date: "10-09-2022",
            status: "L",
        },
        {
            date: "10-09-2022",
            status: "P",
        },
    ]


    const [visible, setVisible] = useState(false);
    const showDialog = () => { setVisible(true) }
    const hideDialog = () => { setVisible(!true) }

    return (
        <SafeAreaView style={styles.container} >
            <Header />
            <View style={styles.TopHeadingText} >
                <View style={styles.circcleBox} >
                    <Text style={styles.userIcons} >
                        <FontAwesome name="user-o" size={27} color="#313d71" />
                    </Text>
                </View>
                <View style={styles.headingBox} >
                    <Text style={styles.mainHaeding} >
                        Rizwan Ali
                    </Text>
                </View>
            </View>
            {/* Line */}
            <View style={{ justifyContent: "center", flexDirection: 'row' }} >
                <View style={{ width: 50, height: 2, backgroundColor: '#ffc400' }} />
            </View>
            {/* Mosque Image */}
            <View style={{ marginTop: 10 }} >
                <MosqueImg />
            </View>
            {/* Sub Heading */}
            <View>
                <Text style={styles.subheading} >Attendance Records</Text>
                {/* Line */}
                <View style={{ justifyContent: "center", flexDirection: 'row' }} >
                    <View style={{ width: 50, height: 2, backgroundColor: '#ffc400' }} />
                </View>
            </View>
            {/* List Section */}
            <View style={styles.infoContainer}  >
                <View style={styles.flexWrapper} >
                    <View style={styles.textBox} >
                        <Text style={styles.leftBoxText} >Role</Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.righttBoxText} >
                            Student
                        </Text>
                    </View>
                </View>
                <View style={styles.flexWrapper} >
                    <View style={styles.textBox}>
                        <Text style={styles.leftBoxText} >Course</Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.righttBoxText} >
                            Dars e Nizami
                        </Text>
                    </View>
                </View>
                <View style={styles.flexWrapper} >
                    <View style={styles.textBox} >
                        <Text style={styles.leftBoxText} >Months</Text>
                    </View>
                    <View style={styles.textBox}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                            <Text style={styles.righttBoxText} >
                                Jan 2022
                            </Text>
                            <AntDesign name="down" size={20} color="#FFAA1B" />
                        </View>
                    </View>
                </View>
                <View style={styles.flexWrapper} >
                    <View style={styles.textBox} >
                        <Text style={styles.leftBoxText} >Presents</Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.righttBoxText} >
                            2
                        </Text>
                    </View>
                </View >
                <View style={styles.flexWrapper} >
                    <View style={styles.textBox} >
                        <Text style={styles.leftBoxText} >Absents</Text>
                    </View>
                    <View style={styles.textBox} >
                        <Text style={styles.righttBoxText} >
                            2
                        </Text>
                    </View>
                </View >
                <View style={styles.flexWrapper} >
                    <View style={styles.textBox} >
                        <Text style={styles.leftBoxText} >Late</Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.righttBoxText} >
                            2
                        </Text>
                    </View>
                </View  >
                {/* Button */}
                <View style={{ marginTop: 15 }}>
                    <Button
                        mode="contained"
                        uppercase={false}
                        style={{ borderRadius: 14, paddingVertical: 3 }}
                        labelStyle={{ fontSize: 15 }}
                        color='#1F3C90'
                        onPress={showDialog}>
                        Show Full Attendance
                    </Button>
                </View>
            </View>
            <Poppup
                visible={visible}
                hideDialog={hideDialog}
                style={styles.PoppupStyling}
                title="Attendance Records"
                data={data}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    TopHeadingText: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    circcleBox: {
        height: 45,
        width: 45,
        borderRadius: 55,
        borderColor: "#ffc400",
        borderWidth: 3,
        position: "relative",
    },
    userIcons: {
        position: 'absolute',
        top: 5,
        left: 8,
    },
    headingBox: {
        marginHorizontal: 8
    },
    mainHaeding: {
        fontSize: 22,
        color: '#1F3C90',
        fontWeight: '500'
    },
    subheading: {
        fontSize: 20,
        color: '#1F3C90',
        fontWeight: '500',
        textAlign: "center",
        marginVertical: 5,

    },
    infoContainer: {
        paddingHorizontal: 20,
    },
    flexWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#1F3C90",
        borderRadius: 8,
        padding: 10,
        paddingHorizontal: 30,
        marginTop: 15,
    },
    leftBoxText: {
        fontSize: 16,
        fontWeight: '500',
        color: "#131313",
    },
    righttBoxText: {
        fontSize: 16,
        fontWeight: '500',
    },
    textBox: {
        width: "50%"
    },
    PoppupStyling: {
        height: 400,
    }
});
