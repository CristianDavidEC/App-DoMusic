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
                    <Icon
                        name='compact-disc'
                        type='font-awesome-5'
                        color='#092740'
                        size={50}
                    />
                    <Text style={styles.carga}>
                        Cargando Publicaciones... Espera un momento.
                    </Text>
                    <Image
                        style={styles.gif}
                        source={{
                            width: "100%",
                            height: "50%",
                            uri: 'https://thumbs.gfycat.com/AcclaimedHeartfeltGoat-size_restricted.gif',
                        }}
                    />
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
                                            width: '100%',
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
        margin: '1%',
        width: '96%',
        backgroundColor: '#e7ecf1',
        marginBottom: '4%',
    },

    publiTitulo: {
        fontSize: 22,
        color: "black",
        fontWeight: "bold",
        marginTop: '1%',
        marginBottom: '2%'
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
        marginTop: '30%',
        padding: 20
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
        marginBottom: '2%'
    },

    texto: {
        marginLeft: '2%',
        marginRight: '2%',
        borderBottomWidth: 1,
        borderBottomColor: "#CCD1D1"

    },

    button: {
        alignItems: "center",
        backgroundColor: "rgba(rgba(33, 45, 97 ,0.7))",
        width: "20%",
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
        justifyContent: "space-between"
    },

    conten: {
        color: '#3C4752',
        fontSize: 18,
        marginBottom: 5
    },

    fecha: {
        color: '#3C4752',
        fontSize: 10,
        marginBottom: 5
    },

    carga: {
        textAlign: "center",
        fontSize: 22,
        color: "#092740",
        fontWeight: "bold",
        marginBottom: '10%'
    },

    gif: {
        borderRadius: 20,
    }
});