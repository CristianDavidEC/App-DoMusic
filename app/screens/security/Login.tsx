import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  View,
  SafeAreaView,
  Button,
  AsyncStorage,
  ScrollView,
} from "react-native";

import md5 from "md5";
import { ServiceKeys } from "../../../keys";
import { Icon, Input } from 'react-native-elements';

const bgImg = require("../../../assets/ini.jpg");

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    nombreUsuario: "",
    contrasena: "",
    url: `${ServiceKeys.URL}/login`,

  };

  async onLogin() {
    const u = this.state.nombreUsuario;
    const p = md5(this.state.contrasena);
    fetch(this.state.url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombreUsuario: u,
        contrasena: p,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        AsyncStorage.setItem("session", JSON.stringify(data));
        if(!data.error){
          this.props.navigation.push("Publicaciones");
        }else{
          Alert.alert("App Message", "Usuario o contraseña inválida");
        }
      })
      .catch((err) => {
        Alert.alert("App Message", "Usuario o contraseña inválida");
      });
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={bgImg} style={styles.backgroundApp}>
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scroll}>

            <View style={styles.head}>
              {/* Titulo de DoMusic */}
              <View style={styles.searchSection}>
                <Icon
                  name='compact-disc'
                  type='font-awesome-5'
                  color='white'
                  size={50}
                  style={styles.iconoSup}
                />
                <Text style={styles.title}>DoMusic</Text>
              </View>

              <Text style={styles.titleText}>Bienvenido</Text>
              <Text style={styles.titleText}>Inicia Sesión</Text>
            </View>


            {/* Elemento de input nombreUsuario */}
            <View style={styles.view}>
              <Icon
                name='user'
                type='font-awesome-5'
                color='#092740'
                size={30}
                style={styles.icono}
              />
              <TextInput
                value={this.state.nombreUsuario}
                keyboardType="default"
                onChangeText={(nombreUsuario) => this.setState({ nombreUsuario })}
                placeholder="Nombre de Usuario"
                placeholderTextColor="black"
                style={styles.input}
              />
            </View>

            {/* Elemento de Input Contraseña */}
            <View style={styles.view}>
              <Icon
                name='lock'
                type='font-awesome-5'
                color='#092740'
                size={30}
                style={styles.icono}
              />
              <TextInput
                value={this.state.contrasena}
                onChangeText={(contrasena) => this.setState({ contrasena })}
                placeholder={"Contraseña"}
                secureTextEntry={true}
                placeholderTextColor="black"
                style={styles.input}
              />
            </View>


            <TouchableOpacity
              style={styles.button}
              onPress={this.onLogin.bind(this)}
            >
              <View style={styles.view1}>
                <Icon
                  name='sign-in-alt'
                  type='font-awesome-5'
                  color='white'
                  size={30}
                  style={styles.icono1}
                />
                <Text style={styles.buttonText}> Ingresar </Text>
              </View>
            </TouchableOpacity>

          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundApp: {
    flex: 1,
    width: "100%",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 0
  },

  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
  },

  titleText: {
    fontSize: 50,
    color: "#fff",
  },

  button: {
    alignItems: "center",
    backgroundColor: "rgba(68, 133, 203 ,0.4)",
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    marginTop: 100,
  },

  buttonText: {
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
    color:'white'
  },

  
  input: {
    width: 300,
    fontSize: 22,
    paddingLeft: 10,
    backgroundColor: "rgba(255, 255, 255, 0)",
    marginVertical: 10,
    display: "flex",
    borderRadius: 10
  },

  iconoSup: {
    marginTop: 10
  },

  icono: {
    marginLeft: 5,
    padding: 5,
    marginTop: 10
  },

  icono1: {
    marginTop:5
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    //backgroundColor: "white",
    marginTop: 25,
    borderRadius: 20,
    height: 65,
  },

  view1: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 65,
  },

  scroll: {
    flexGrow: 1,
    alignItems: "center",
    margin: 0,
  },

  head: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 50
  }
});