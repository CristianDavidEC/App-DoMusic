import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenPublicaciones from "./app/screens/Publicaciones";
import ScreenMain from "./app/screens/Main";
import LoginScreen from "./app/screens/security/Login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Main" component={ScreenMain} />
        <Stack.Screen name="Publicaciones" component={ScreenPublicaciones} /> 
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Bienvenido a DoMusic.</Text>
      <StatusBar style="auto" />
      <Text style={styles.txt}>Text de otro color</Text>
      <TextInput style={styles.inp}>Escribe tu nomrbe</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  txt:{
    color:'blue',
    fontSize:24,
  },
  inp:{
    width: 100,
    height:50,
    color:'blue',
    backgroundColor:'green',
    borderColor:'black'
  }


}); */
