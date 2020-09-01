import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Alert, Button, AsyncStorage, SafeAreaView, View } from "react-native";
import { animateScroll as scroll } from "react-scroll";

import { Icon, Input } from 'react-native-elements';

export default class SessionNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoggedIn: false,
    nombre: "",
  };

  async componentDidMount() {
    let session = await AsyncStorage.getItem("session");

    if (session) {
      this.setState({
        isLoggedIn: true,
        nombre: JSON.parse(session).data.nombreUsuario,
      });
    }
  }

  signOut = () => {
    Alert.alert("Cerrar Sessión", "Seguro que deseas salir?", [
      {
        text: "Si",
        onPress: () => {
          AsyncStorage.removeItem("session");
          this.setState({
            isLoggedIn: false,
            nombre: "",
          });
        },
      },
      {
        text: "No",
      },
    ]);
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <View style={styles.cont}>
          <Text
            onPress={this.signOut}
            style={styles.textNav}
          >
            En sesión {this.state.nombre} </Text>
          <Icon
            name='sign-in-alt'
            type='font-awesome-5'
            color='white'
            size={30}
          />
        </View>

      );

    } else {
      return (

        <SafeAreaView style={styles.container}>
          <Button
            title="Iniciar Sesion"
            onPress={() => this.props.navigation.navigate("Login")}
          />
          <Button
            title="Contacto"
            onPress={() => this.props.navigation.navigate("Contacto")}
          />
          <Button
            title="Registrarse"
            onPress={() => this.props.navigation.navigate("Register")}
          />

        </SafeAreaView>
      );
    }

  }
}

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 30,
    zIndex: 1,
  },

  container: {
    alignItems: "center",
  },

  cont: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "100%",
    height: 50,
    backgroundColor: "#2f6997"
  },

  textNav: {
    color: "white",
    fontSize: 20,
    width: "75%",
    textAlign: "center",
    height: 60,
    paddingTop: 12
  }
});