/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from "./src/routes"
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { LoginScreen } from './src/screens/Login';
import { HomeScreen } from './src/screens/Home';
import { DebitsScreen } from './src/screens/Debits';
import { CameraScreen } from './src/screens/Camera';


const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Login}>
        <Stack.Screen name={Routes.Login} component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name={Routes.Home} component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name={Routes.Debits} component={DebitsScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name={Routes.Debits} component={CameraScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
