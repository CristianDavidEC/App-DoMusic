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
  View,
  AsyncStorage,
} from "react-native";

import { Icon } from 'react-native-elements'

import { ServiceKeys } from "../../../keys";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Constants from 'expo-constants';

const bgImg = require("../../../assets/img2.jpg");

export default class Contacto extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    nombre: "",
    correo: "",
    celular: "",
    asunto: "",
    mensaje: "",
    url: `${ServiceKeys.URL}/contactar`,
  };

  async onLogin() {
    const n = this.state.nombre;
    const c = this.state.correo;
    const cel = this.state.celular;
    const a = this.state.asunto;
    const m = this.state.mensaje;

    fetch(this.state.url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: n,
        correo: c,
        celular: cel,
        asunto: a,
        mensaje: m
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        AsyncStorage.setItem("session", JSON.stringify(data));
        console.log(data)
        if(!data.error){
          this.props.navigation.push("Main");
          Alert.alert("App Message", "Su mensaje se ha enviado con exito, pronto responderemos");
        }else{
          Alert.alert("App Message", "Informacion Invalida");
        }
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

            
            <Text style={styles.titleText1}>Contactar a </Text>
            <View style={styles.iconTitle}>
              <Icon
                name='compact-disc'
                type='font-awesome-5'
                color='white'
                size={50}
              />
              <Text style={styles.titleText}>
                DoMusic</Text>
            </View>

            <View style={styles.iconText}>
              <Icon style={styles.iconMargin}
                name='user'
                type='font-awesome-5'
                color='#092740'
                size={30}
              />
              <TextInput
                value={this.state.nombre}
                keyboardType="default"
                onChangeText={(nombre) => this.setState({ nombre })}
                placeholder="Nombre"
                placeholderTextColor="black"
                style={styles.input}
              /></View>

            <View style={styles.iconText}>
              <Icon style={styles.iconMargin}
                name='envelope'
                type='font-awesome-5'
                color='#092740'
                size={30}
              />
              <TextInput
                value={this.state.correo}
                onChangeText={(correo) => this.setState({ correo })}
                placeholder={"Correo Electrónico"}
                placeholderTextColor="black"
                style={styles.input}
              /></View>

            <View style={styles.iconText}>
              <Icon style={styles.iconMargin}
                name='phone'
                type='font-awesome-5'
                color='#092740'
                size={30}
              />
              <TextInput
                value={this.state.celular}
                keyboardType="phone-pad"
                onChangeText={(celular) => this.setState({ celular })}
                placeholder="Celular"
                placeholderTextColor="black"
                style={styles.input}
              /></View>

            <View style={styles.iconText}>
              <Icon style={styles.iconMargin}
                name='bookmark'
                type='font-awesome-5'
                color='#092740'
                size={30}
              />
              <TextInput
                value={this.state.asunto}
                onChangeText={(asunto) => this.setState({ asunto })}
                placeholder={"Asunto"}
                placeholderTextColor="black"
                style={styles.input}
              /></View>

            <View style={styles.iconText}>
              <Icon style={styles.iconMargin}
                name='pen'
                type='font-awesome-5'
                color='#092740'
                size={30}
              />
              <TextInput
                value={this.state.mensaje}
                keyboardType="default"
                onChangeText={(mensaje) => this.setState({ mensaje })}
                placeholder="Mensaje"
                placeholderTextColor="black"
                style={styles.input}
              /></View>

            <TouchableOpacity
              style={styles.button}
              onPress={this.onLogin.bind(this)}
            >
              <View style={styles.view1}>
                <Icon
                  name='envelope-open-text'
                  type='font-awesome-5'
                  color='white'
                  size={30}
                  style={styles.icono1}
                />

                <Text style={styles.buttonText}> Contactar </Text>
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
  },
  scroll: {
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

  titleText1: {
    fontSize: 50,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    width: '100%',
    marginLeft:'26%',
  },

  title: {
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    marginBottom: 6,
    marginTop: 10,

  },

  button: {
    alignItems: "center",
    backgroundColor: "rgba(68, 133, 203 ,0.4)",
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 50,
  },

  buttonText: {
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
    color:'white'
  },

  view1: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 65,
  },

  icono1: {
    marginTop:5
  },

  input: {
    width: 250,
    fontSize: 20,
    //borderWidth: 1,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0)",
    //backgroundColor: "#fff",
    marginVertical: 10,
  },

  iconText: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    //backgroundColor: '#fff',
    marginTop: '6%',
    borderRadius: 20,
    padding: 5
  },

  iconTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },

  iconMargin: {
    marginLeft: '3%',
    marginRight: '3%',
  },
});