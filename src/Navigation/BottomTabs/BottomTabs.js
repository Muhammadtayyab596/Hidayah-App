import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// components
import AttandanceRecords from '../../Screens/AttandanceRecords';
import FeeRecords from '../../Screens/FeeRecords';
import Progress from '../../Screens/Progress';
import Detail from '../../Screens/Detail';

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                sceneAnimationEnabled={true}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#ffff',
                        height: 55,
                        paddingBottom: 5
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Detail') {
                            return (
                                <FontAwesome
                                    name={focused ? 'user-o' : 'user-o'}
                                    size={27}
                                    color={color}
                                    style={{ marginTop: 5, fontWeight: '900' }}
                                />
                            );
                        } else if (route.name === 'Attendance') {
                            return (
                                <Ionicons
                                    name={focused ? 'list' : 'ios-list-outline'}
                                    size={27}
                                    color={color}
                                    style={{ marginTop: 5, fontWeight: '900' }}
                                />
                            );
                        }
                        else if (route.name === 'Fees') {
                            return (
                                <MaterialIcons
                                    name={focused ? 'money' : 'money'}
                                    size={27}
                                    color={color}
                                    style={{ marginTop: 5, fontWeight: '900' }}
                                />
                            );
                        }
                        else if (route.name === 'Progress') {
                            return (
                                <MaterialCommunityIcons
                                    name={focused ? 'progress-pencil' : 'progress-pencil'}
                                    size={27}
                                    color={color}
                                    style={{ marginTop: 5, fontWeight: '900' }}
                                />
                            );
                        }
                    },
                    tabBarActiveTintColor: '#1F3C90',
                    tabBarInactiveTintColor: '#050306',
                })}
            >
                <Tab.Screen name="Detail" component={Detail} />
                <Tab.Screen name="Attendance" component={AttandanceRecords} />
                <Tab.Screen name="Fees" component={FeeRecords} />
                <Tab.Screen name="Progress" component={Progress} />
            </Tab.Navigator>
        </NavigationContainer >
    )
}