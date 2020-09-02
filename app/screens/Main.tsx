import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    Image,
    Alert
} from 'react-native';
import SessionNavbar from "./security/Navbar";
import { Icon, Input } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Bienvenido, acompañanos con tu armonia",
                    imagen: "https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_960_720.jpg"

                },
                {
                    title: "Disfruta tu pasión por la música En cualquier momento y lugar",
                    imagen: "https://cdn.pixabay.com/photo/2016/11/23/00/39/hands-1851500_960_720.jpg"
                },
                {
                    title: "Ábrete camino con tu musica, Demuestra tu talento",
                    imagen: "https://cdn.pixabay.com/photo/2014/11/26/15/20/saxophone-546303_960_720.jpg"

                },
                {
                    title: "Vive la música, disfrútala en compañía",
                    imagen: "https://cdn.pixabay.com/photo/2014/06/21/20/09/violin-374096_960_720.jpg"
                },
                {
                    title: "La musica eres Tu, Sigue tu Arminia",
                    imagen: "https://cdn.pixabay.com/photo/2016/11/19/21/05/bass-guitar-1841186_960_720.jpg"
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={styles.head}>
                <Image
                    style={styles.imagen}
                    source={{
                        width: 360,
                        height: 480,
                        uri: item.imagen,
                    }}
                />

                <View style={styles.searchSection}>
                    <Icon
                        name='compact-disc'
                        type='font-awesome-5'
                        color='#092740'
                        size={20}
                        style={styles.icono}
                    />
                    <Text style={styles.logo}>DoMusic</Text>
                </View>

                <Text style={styles.title}>{item.title}</Text>

            </View>


        )
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#092740', }}>
                <SessionNavbar navigation={navigation}></SessionNavbar>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                    <Carousel
                        layout={'stack'}
                        layoutCardOffset={15}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={280}
                        itemWidth={380}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: "center" 
      },

    head: {
        alignItems: "center",
        marginLeft: 20,
        backgroundColor: 'white',
        height: '94%',
        borderRadius: 23,

    },

    imagen: {
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
    },
    
    logo: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#092740",
        textAlign: "center"
    },

    title: {
        fontSize: 25,
        textAlign:"center",
        color: "#092740",
    },

    icono:{
        marginTop:10
    }
});