import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import AttandanceRecords from './src/Screens/AttandanceRecords';
import Poppup from './src/Components/poppus';
import FeeRecords from './src/Screens/FeeRecords';
// import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  const [first, setfirst] = useState("Students")

  return (
    // <AttandanceRecords />
    // <Poppup />
    // <FeeRecords />



    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'alert-circle' : 'airplane-sharp';
            } else if (route.name === 'SettingsScren') {
              iconName = focused ? 'airplane-sharp' : 'american-football';
            } else if (route.name === 'fisrt') {
              iconName = focused ? 'aperture' : 'alert-circle';
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >


        {
          first === "Student" ? <Tab.Screen name="fisrt" component={Fisrt} />
            : <Tab.Screen name="Home" component={HomeScreen} />
        }


        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="SettingsScren" component={SettingsScren} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
