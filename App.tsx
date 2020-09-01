import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenPublicaciones from "./app/screens/Publicaciones";
import ScreenMain from "./app/screens/Main";
import LoginScreen from "./app/screens/security/Login";
import RegisterScreen from "./app/screens/perfiles/Register";
import ContactoScreen from "./app/screens/perfiles/contacto";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Main" component={ScreenMain} />
        <Stack.Screen name="Publicaciones" component={ScreenPublicaciones} /> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Contacto" component={ContactoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
