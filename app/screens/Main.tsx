import { StatusBar } from "expo-status-bar";
import React from "react";
import {ServiceKeys} from '../../keys'
import {
    StyleSheet,
    Text,
    View,
    Alert,
    FlatList,
    Image,
    Dimensions,
    TouchableHighlight,
} from "react-native";

import SessionNavbar from "./security/Navbar";

export default class Main extends React.Component {
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
                    <Text>Cargando Publicaicones... En la pagina del Main</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.publicacionesView}>
                    <SessionNavbar navigation={navigation}></SessionNavbar>
                    <Text style={{ color: "orange", fontSize: 25 }}>Todas las Publicaciones en el Main</Text>
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
                                        source={{
                                            width: 200,
                                            height: 150,
                                            uri: `${ServiceKeys.URL}/files/2/${item.idPublicacion}`,
                                        }}
                                    />
                                </TouchableHighlight>
                                <Text style={styles.publi}>{item.titulo}</Text>
                                <Text numberOfLines={1}>{item.contenido}</Text>
                                <Text>Fecha: {item.fecha}</Text>
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
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
    },
    publi: {
        fontSize: 18,
        color: "#ff0000",
    },
    publicacionesView: {
        alignItems: "center",
        alignContent: "center",
        flex: 1,
    },
    dataViewLoading: {
        alignItems: "center",
        alignContent: "center",
        flex: 1,
    },
    button: {
        alignSelf: "center",
        alignContent: "flex-start",
    },
    itemTitle: {
        padding: 10,
        fontSize: 25,
        height: 44,
        fontWeight: "bold",
    },
    flatList: {
        alignContent: "center",
        textAlign: "center",
        alignSelf: "center",
    },
    img: {
        width: 100,
        height: 100,
    },
    separator: {
        height: 4,
        backgroundColor: "black",
        width: Dimensions.get("window").width / 2,
    },
});