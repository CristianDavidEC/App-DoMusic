import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Alert, Button, AsyncStorage, SafeAreaView } from "react-native";
import { animateScroll as scroll} from "react-scroll";

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
    Alert.alert("Sign out", "Do you want to sign out?", [
      {
        text: "Yes",
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
      return <Text onPress={this.signOut}>In session {this.state.nombre} </Text>;
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
    marginBottom: 50,
    zIndex: 1,
  },

  container: {
    alignItems: "center",
  },
});