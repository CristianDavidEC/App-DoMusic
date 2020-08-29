import { StatusBar } from 'expo-status-bar';
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


});
