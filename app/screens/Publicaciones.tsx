import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Alert,
    FlatList,
    Image,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";
import { ServiceKeys } from "../../keys";
import { Icon, Card, Button } from 'react-native-elements';

import SessionNavbar from "./security/Navbar";

export default class Publicaciones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            Publicaciones: [],
            url:
                `${ServiceKeys.URL}/publicaciones`,
        };
    }

    componentDidMount = () => {
        this.getPublicaciones();
    };

    getPublicaciones = () => {
        this.setState({ loading: true });
        fetch(this.state.url)
            .then((data) => data.json())
            .then((data) => {
                this.setState({
                    publicaciones: data,
                    loading: false,
                });
            })
            .catch((err) => {
                //console.log(err);
                Alert.alert("Error", "Error loading courses.");
            });
    };

    render() {
        const { navigation } = this.props;
        if (this.state.loading) {
            return (
                <View style={styles.dataViewLoading}>
                    <Text>Cargando Publicaciones... Espera un momento.</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.publicacionesView}>
                    <SessionNavbar navigation={navigation}></SessionNavbar>
                    {/* <Text style={styles.titulo}>Publicaciones</Text> */}
                    <FlatList
                        style={styles.flatList}
                        data={this.state.publicaciones}
                        renderItem={({ item }) => (

                            <View style={styles.publicacionViewContent}>
                               
                                <TouchableHighlight
                                    onPress={() => {
                                        Alert.alert(`Image De la Publicacion: ${item.idPublicacion}`);
                                    }}
                                >
                                    <Image
                                        style={styles.img}
                                        source={{
                                            width: 382,
                                            height: 420,
                                            uri: `${ServiceKeys.URL}/files/2/${item.idPublicacion}`,
                                        }
                                        }
                                    />
                                </TouchableHighlight>
                                <View style={styles.texto}>
                                    <Text style={styles.publiTitulo}>{item.titulo}</Text>
                                    <Text style={styles.conten} numberOfLines={2}>{item.contenido}</Text>
                                    <Text style={styles.fecha}>{item.fecha}</Text>
                                </View>

                                <View style={styles.botones}>
                                    <TouchableOpacity
                                        style={styles.button}>
                                        <View style={styles.view1}>
                                            <Icon
                                                name='star'
                                                type='font-awesome-5'
                                                color='white'
                                                size={25}
                                                style={styles.icono1}
                                            />
                                            <Text style={styles.buttonText}> {item.reacciones} </Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.button}>
                                        <View style={styles.view1}>
                                            <Icon
                                                name='comment-medical'
                                                type='font-awesome-5'
                                                color='white'
                                                size={25}
                                                style={styles.icono1}
                                            />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.button}>
                                        <View style={styles.view1}>
                                            <Icon
                                                name='comments'
                                                type='font-awesome-5'
                                                color='white'
                                                size={25}
                                                style={styles.icono1}
                                            />
                                        </View>
                                    </TouchableOpacity>


                                </View>

                            </View>
                        )}
                    ></FlatList>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    publicacionViewContent: {
        borderColor: "#CCD1D1",
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        width: '98%',
        backgroundColor: '#e7ecf1',
        marginBottom: 15
    },

    publiTitulo: {
        fontSize: 22,
        color: "black",
        fontWeight: "bold",
        marginTop: 3,
        marginBottom: 6
    },

    publicacionesView: {
        alignItems: "center",
        alignContent: "center",
        flex: 1,
        width: '100%',
    },

    dataViewLoading: {
        alignItems: "center",
        alignContent: "center",
        flex: 1,
    },

    flatList: {
        alignContent: "center",
        textAlign: "center",
        alignSelf: "center",
        width: "100%"
    },

    img: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    titulo: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 5
    },

    texto: {
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#CCD1D1"
        
    },

    button: {
        alignItems: "center",
        backgroundColor: "rgba(78, 131, 184 ,0.7)",
        width: 70,
        height: 40,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
    },

    icono1: {
        marginTop: 5
    },

    view1: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 65,
    },

    buttonText: {
        fontSize: 25,
        alignItems: "center",
        justifyContent: "center",
        color: 'white'
    },

    botones: {
        flexDirection: 'row',
        justifyContent:"space-between"
    },

    conten:{
        color: '#3C4752',
        fontSize: 18,
        marginBottom: 5
    },

    fecha:{
        color: '#3C4752',
        fontSize:10,
        marginBottom: 5
    }

});