import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import AttandanceRecords from './src/Screens/AttandanceRecords';
import FeeRecords from './src/Screens/FeeRecords';
import Detail from './src/Screens/Detail';
import Progress from './src/Screens/Progress';


import Poppup from './src/Components/poppus';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';




function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function SettingsScren() {
  // const [first, setfirst] = useState("")

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>tayyab!</Text>
    </View>
  );
}
function Fisrt() {
  // const [first, setfirst] = useState("")

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>fisrt!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();




const App = () => {
  const [first, setfirst] = useState("Student")

  return (
    // <AttandanceRecords />
    // <Poppup />
    // <FeeRecords />



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
  );
};

const styles = StyleSheet.create({});

export default App;








// if (route.name === 'Detail') {
//   iconName = focused
//     ? 'user'
//     : 'user-o';
// } else if (route.name === 'Attendance ') {
//   iconName = focused ? 'alert-circle' : 'airplane-sharp';
// } else if (route.name === 'SettingsScren') {
//   iconName = focused ? 'airplane-sharp' : 'american-football';
// } else if (route.name === 'fisrt') {
//   iconName = focused ? 'aperture' : 'alert-circle';
// }