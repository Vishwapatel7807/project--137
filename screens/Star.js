import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert,Image,ImageBackground} from "react-native";
import { Card, Icon } from "react-native-elements";
import axios from "axios";

export default class StarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Star: {},
            name: this.props.navigation.getParam("name"),
        };
    }
    componentDidMount() {
        this.getStar(name);
    }
    getStar= (name) => {
        const url = `http://127.0.0.1:5000/star?name=${name}`;
        axios.get(url)
            .then(response => {
                this.setStar(response.data.data);
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    };
   

    render() {
        const { Star, name } = this.state;
        if (Star) {
            return (
                <View style={styles.container}>
                    <ImageBackground>
                        </ImageBackground>         
                </View>
            );
        } return null;


    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    cardItem: { marginBottom: 10 }
});