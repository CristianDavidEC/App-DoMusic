import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Alert, Button, AsyncStorage, SafeAreaView, View, TouchableOpacity } from "react-native";
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

        <View style={styles.container}>

          {/* <View >
            <Icon
              name='sign-in-alt'
              type='font-awesome-5'
              color='white'
              size={30}
            />
            <Button
              color='#092740'
              title="Iniciar Sesion"
              onPress={() => this.props.navigation.navigate("Login")}
            />
          </View>

          <Icon
            name='sign-in-alt'
            type='font-awesome-5'
            color='white'
            size={30}
          />
          <Button
            color='#092740'
            title="Contacto"
            onPress={() => this.props.navigation.navigate("Contacto")}
          />

          <Icon
            name='sign-in-alt'
            type='font-awesome-5'
            color='white'
            size={30}
          />
          <Button
            color='#092740'
            title="Registrarse"
            onPress={() => this.props.navigation.navigate("Register")}
          /> */}

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <View style={styles.view1}>
              <Icon
                name='sign-in-alt'
                type='font-awesome-5'
                color='white'
                size={30}
                style={styles.icono1}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Contacto")}
          >
            <View style={styles.view1}>
              <Icon
                name='envelope-open-text'
                type='font-awesome-5'
                color='white'
                size={30}
                style={styles.icono1}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <View style={styles.view1}>
              <Icon
                name='user-plus'
                type='font-awesome-5'
                color='white'
                size={30}
                style={styles.icono1}
              />
            </View>
          </TouchableOpacity>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#092740",
    width: '100%',
    height: 50,
    padding:5
  },

  view1: {
    flexDirection: 'row',
    justifyContent: 'center',

  },

  icono1: {
    marginTop:5
  },

  cont: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "100%",
    height: 50,
    backgroundColor: "#092740"
  },

  textNav: {
    color: "white",
    fontSize: 20,
    width: "75%",
    textAlign: "center",
    height: 60,
    paddingTop: 12
  },

  button: {
    alignItems: "center",
    backgroundColor: "rgba(57, 86, 115 ,0.4)",
    width: '30%',
    height: 40,
    borderRadius: 10,
    marginLeft:5,
    marginRight:5,
  },
});