import { StatusBar } from "expo-status-bar";
import React from "react";
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
} from "react-native";

import { Icon } from 'react-native-elements'

import md5 from "md5";
import { ServiceKeys } from "../../../keys";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Constants from 'expo-constants';

const bgImg = require("../../../assets/bg2.jpg");

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    nombre: "",
    apellido: "",
    tipo: "",
    generoMusica: "",
    celular: "",
    correo: "",
    fechaNacimiento: "",
    ciudad: "",
    genero: "Masculino",
    url: `${ServiceKeys.URL}/musico-profesionals`,
  };

  async onLogin() {
    const n = this.state.nombre;
    const a = this.state.apellido;
    const t = this.state.tipo;
    const gM = this.state.generoMusica;
    const cel = this.state.celular;
    const cor = this.state.correo;
    const fN = this.state.fechaNacimiento;
    const c = this.state.ciudad;
    const g = this.state.genero;

    fetch(this.state.url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: n,
        apellido: a,
        tipo: t,
        generoMusica: gM,
        celular: cel,
        correo: cor,
        fechaNacimiento: fN,
        ciudad: c,
        genero: g,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        AsyncStorage.setItem("session", JSON.stringify(data));
        this.props.navigation.push("Login");
      })
      .catch((err) => {
        Alert.alert("App Message", "Invalid data.");
      });
    //Alert.alert("Credentials", `nombreUsuario: ${u} - contrasena: ${p}`);
  }


  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={bgImg} style={styles.backgroundApp}>
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.titleText}>Hi, Welcome To</Text>
            
            <Icon
            name='compact-disc'
            type='font-awesome-5'
            color='white'
            size = {50}
            />
            <Text style={styles.titleText}>
            DoMusic</Text>
            
            <TextInput
              value={this.state.nombre}
              keyboardType="default"
              onChangeText={(nombre) => this.setState({ nombre })}
              placeholder="nombre"
              placeholderTextColor="gray"
              style={styles.input}
            />
            <TextInput
              value={this.state.apellido}
              onChangeText={(apellido) => this.setState({ apellido })}
              placeholder={"apellido"}
              placeholderTextColor="gray"
              style={styles.input}
            />
            <TextInput
              value={this.state.tipo}
              keyboardType="default"
              onChangeText={(tipo) => this.setState({ tipo })}
              placeholder="tipo"
              placeholderTextColor="gray"
              style={styles.input}
            />
            <TextInput
              value={this.state.generoMusica}
              onChangeText={(generoMusica) => this.setState({ generoMusica })}
              placeholder={"generoMusica"}
              placeholderTextColor="gray"
              style={styles.input}
            />
            <TextInput
              value={this.state.celular}
              keyboardType="default"
              onChangeText={(celular) => this.setState({ celular })}
              placeholder="celular"
              placeholderTextColor="gray"
              style={styles.input}
            />
            <TextInput
              value={this.state.correo}
              onChangeText={(correo) => this.setState({ correo })}
              placeholder={"correo"}
              placeholderTextColor="gray"
              style={styles.input}
            />
            <TextInput
              value={this.state.fechaNacimiento}
              onChangeText={(fechaNacimiento) => this.setState({ fechaNacimiento })}
              placeholder={"fechaNacimiento"}
              placeholderTextColor="gray"
              style={styles.input}
            />
            <TextInput
              value={this.state.ciudad}
              keyboardType="default"
              onChangeText={(ciudad) => this.setState({ ciudad })}
              placeholder="ciudad"
              placeholderTextColor="gray"
              style={styles.input}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={this.onLogin.bind(this)}
            >
              <Text style={styles.buttonText}> Registrate! </Text>
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
  },
  scroll:{
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 50,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  button: {
    alignItems: "center",
    backgroundColor: "powderblue",
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#fff",
    marginVertical: 10,
  },
});