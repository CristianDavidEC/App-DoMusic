import * as React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Button,
  AsyncStorage,
  View
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenPublicaciones from "./app/screens/Publicaciones";
import ScreenMain from "./app/screens/Main";
import LoginScreen from "./app/screens/security/Login";
import RegisterScreen from "./app/screens/perfiles/Register";
import ContactoScreen from "./app/screens/perfiles/contacto";

import { Icon, ButtonGroup } from 'react-native-elements'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Main"
        component={ScreenMain}
        options={{
          title: 'DoMusic',
          headerStyle: {
            backgroundColor: '#092740',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Publicaciones"
        component={ScreenPublicaciones}
        options={{
          title: 'Publicaciones',
          headerStyle: {
            backgroundColor: '#092740',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Inicio de sesión',
          headerStyle: {
            backgroundColor: '#092740',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Regístrate',
          headerStyle: {
            backgroundColor: '#092740',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Contacto"
        component={ContactoScreen}
        options={{
          title: 'Contáctanos',
          headerStyle: {
            backgroundColor: '#092740',
          },
          headerTintColor: '#fff',
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );

  
}
