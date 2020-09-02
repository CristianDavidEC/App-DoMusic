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
                    title: "DoMusic",
                    text: "Bienvenido",
                    img: '../../assets/img1.jpg'

                },
                {
                    title: "Item 2",
                    text: "Text 2",
                    img: '../../assets/img2.jpg'
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                    img: '../../assets/img3.jpg'
                },
                {
                    title: "Item 4",
                    text: "Text 4",
                    img: '../../assets/img4.jpg'
                },
                {
                    title: "Item 5",
                    text: "Text 5",
                    img: '../../assets/img5.jpg'
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={styles.head}>
                
                    <Image
                        source={require('../../assets/img1.jpg')}
                    />
                
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
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
                        layoutCardOffset={18}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={300}
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
    },

    head: {
        alignItems: "center",
        marginLeft: 20,
        backgroundColor: 'white',
        height: '90%',
        borderRadius: 20,
        padding: 20
    },

});