import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';
import Poppup from '../Components/poppus';
import MosqueImg from '../Components/MosqueImg';

export default function FeeRecords() {

    const [visible, setVisible] = useState(false);
    const showDialog = () => { setVisible(true) }
    const hideDialog = () => { setVisible(!true) }



    const data = [
        {
            date: "january",
            status: "2,000 Pkr",
        },
        {
            date: "March",
            status: "2,000 Pkr",
        },
        {
            date: "July",
            status: "2,000 Pkr",
        },
    ]

    return (
        <SafeAreaView style={styles.container} >

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
                <Text style={styles.subheading} >Fees Records</Text>
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
                        <Text style={styles.righttBoxText} >
                            Jan 2022
                        </Text>
                    </View>
                </View>
                <View style={styles.flexWrapper} >
                    <View style={styles.textBox} >
                        <Text style={styles.leftBoxText} >Fees</Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.righttBoxText} >
                            2000 Pkr
                        </Text>
                    </View>
                </View >
                <View style={styles.flexWrapper} >
                    <View style={styles.textBox} >
                        <Text style={styles.leftBoxText} >Status</Text>
                    </View>
                    <View style={styles.textBox} >
                        <Text style={styles.righttBoxText} >
                            paid
                        </Text>
                    </View>
                </View >
                <View style={styles.btnBox} >
                    <View>
                        <Text style={styles.textOutstaning} >Total Outstanding</Text>
                        <Text style={styles.pkrText} >6,000 Pkr</Text>
                    </View>
                    <View>
                        <Button
                            mode="contained"
                            uppercase={false}
                            style={{ borderRadius: 6, paddingVertical: 2 }}
                            labelStyle={{ fontSize: 14 }}
                            color='red'
                            onPress={showDialog}
                        >
                            See Detail
                        </Button>
                    </View>
                </View>
            </View>
            <Poppup
                visible={visible}
                hideDialog={hideDialog}
                style={styles.PoppupStyling}
                title="Dues Record"
                data={data}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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
        color: '#243C90',
        fontWeight: '500'
    },
    subheading: {
        fontSize: 20,
        color: '#243C90',
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
        borderColor: "#243C90",
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
        height: 200,
    },

    btnBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20,
        paddingHorizontal: 10
    },
    textOutstaning: {
        fontSize: 16,
        color: "#131313",
    },
    pkrText: {
        color: '#d50000',
        fontSize: 16,
        marginTop: 3,
        fontWeight: '500'

    }


});
