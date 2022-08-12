import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

// import AttandanceRecords from './src/Screens/AttandanceRecords';
// import FeeRecords from './src/Screens/FeeRecords';
// import Detail from './src/Screens/Detail';
// import Progress from './src/Screens/Progress';


// import Poppup from './src/Components/poppus';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';

import BottomTabs from './src/Navigation/BottomTabs/BottomTabs';
import Login from './src/Screens/Login';
import Allfaculties from './src/Screens/FacultiesList';
import Practics from './src/Screens/Practics';

// const Tab = createBottomTabNavigator();
const App = () => {
  const [first, setfirst] = useState("Student")

  return (
    // <BottomTabs />
    // <Poppup />
    // <FeeRecords />
    // <Home />
    // <Login />
    // <Allfaculties />
    <Practics />

  );
};


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