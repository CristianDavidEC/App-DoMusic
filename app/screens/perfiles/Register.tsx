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
    return (
      <ImageBackground source={bgImg} style={styles.backgroundApp}>
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.titleText}>Bienvenido a</Text>
            <View style={styles.iconTitle}>
                <Icon
                name='compact-disc'
                type='font-awesome-5'
                color='white'
                size = {50}
                />
            
                <Text style={styles.titleText}>
                DoMusic</Text>
                </View>
                <Text style={styles.title}>
                Completa el siguiente formulario</Text>

            <View style={styles.iconText}>
                <Icon style={styles.iconMargin}
                name='user'
                type='font-awesome-5'
                color='black'
                
                size = {30}
                /> 
                <TextInput style={styles.textMargin}
                value={this.state.nombre}
                keyboardType="default"
                onChangeText={(nombre) => this.setState({ nombre })}
                placeholder="Nombre"
                placeholderTextColor="gray"
                style={styles.input}
            /></View>

            <View style={styles.iconText}>
                <Icon style={styles.iconMargin}
                name='user'
                type='font-awesome-5'
                color='black'
                size = {30}
                />
                <TextInput
                value={this.state.apellido}
                onChangeText={(apellido) => this.setState({ apellido })}
                placeholder={"Apellido"}
                placeholderTextColor="gray"
                style={styles.input}
            /></View>
            <View style={styles.iconText}>
                <Icon style={styles.iconMargin}
                name='music'
                type='font-awesome-5'
                color='black'
                size = {30}
                />            
                <TextInput
                value={this.state.tipo}
                keyboardType="default"
                onChangeText={(tipo) => this.setState({ tipo })}
                placeholder="Tipo de Musico"
                placeholderTextColor="gray"
                style={styles.input}
            /></View>
            <View style={styles.iconText}>
                <Icon style={styles.iconMargin}
                name='headphones'
                type='font-awesome-5'
                color='black'
                size = {30}
                />        
                <TextInput
                value={this.state.generoMusica}
                onChangeText={(generoMusica) => this.setState({ generoMusica })}
                placeholder={"Genero Musical"}
                placeholderTextColor="gray"
                style={styles.input}
                /></View>
            <View style={styles.iconText}>
                <Icon style={styles.iconMargin}
                name='phone'
                type='font-awesome-5'
                color='black'
                size = {30}
                />        
                <TextInput
                value={this.state.celular}
                keyboardType="phone-pad"
                onChangeText={(celular) => this.setState({ celular })}
                placeholder="Numero Celular"
                placeholderTextColor="gray"
                style={styles.input}
                /></View>
            <View style={styles.iconText}>
                <Icon style={styles.iconMargin}
                name='envelope'
                type='font-awesome-5'
                color='black'
                size = {30}
                />        
                <TextInput
                value={this.state.correo}
                onChangeText={(correo) => this.setState({ correo })}
                placeholder={"Correo Electronico"}
                placeholderTextColor="gray"
                style={styles.input}
                /></View>
            <View style={styles.iconText}>
                <Icon style={styles.iconMargin}
                name='calendar-day'
                type='font-awesome-5'
                color='black'
                size = {30}
                />        
                <TextInput
                value={this.state.fechaNacimiento}
                onChangeText={(fechaNacimiento) => this.setState({ fechaNacimiento })}
                placeholder={"Fecha Nacimiento"}
                placeholderTextColor="gray"
                style={styles.input}
            /></View>
            <View style={styles.iconText}>
                <Icon style={styles.iconMargin}
                name='globe-americas'
                type='font-awesome-5'
                color='black'
                size = {30}
                />        
                <TextInput
                value={this.state.ciudad}
                keyboardType="default"
                onChangeText={(ciudad) => this.setState({ ciudad })}
                placeholder="Pais"
                placeholderTextColor="gray"
                style={styles.input}
            /></View>

            <TouchableOpacity
              style={styles.button}
              onPress={this.onLogin.bind(this)}
            >
              <Text style={styles.buttonText}> Regístrate </Text>
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

  title:{
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    marginBottom: 6,
    marginTop:10,

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
    marginTop:20,
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

  iconText: {
    width:260,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: '6%',
    borderBottomEndRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  
  iconTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },

  iconMargin:{
    marginLeft: '3%',
    marginRight: '3%',
  },

  textMargin: {
  }

});