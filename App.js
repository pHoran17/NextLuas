import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';


/*function HomeScreen()
{
  return(
    <View style ={styles.container}>
        <Text>This is the Home Screen</Text>
    </View>
  );
}*/



//Add Screens here for navigation when made
function App() {
  return (
    <NavigationContainer initialRouteName="Home">
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={HomeScreen}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
