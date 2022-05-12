import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Alert, SafeAreaView } from "react-native";
import { ListItem } from "react-native-elements";
import axios from "axios";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            url: "http://127.0.0.1:5000"
        };
    }
    componentDidMount() {
        this.getname();
    }
    getname = () => {
        const { url } = this.state;
        axios.get(url)
            .then(response => {
                return this.setState({ listData: response.data.data });
            })
            .catch(error => { Alert.alert(error.message); });
    };
    renderItem = ({ item, index }) => (
        <TouchableOpacity 
        onPress={() => { 
            this.props.navigation.navigate("Star", { name: item.name }); }} > <Card image={require("../assets/card_bg.png")} imageStyle={{ marginTop: RFValue(30) }} featuredTitle={item.name} featuredTitleStyle={styles.cardTitle} containerStyle={styles.cardContainer} ></Card> </TouchableOpacity>
    )

    keyExtractor = (item, index) => index.toString();
    render() {
        const { listData } = this.state;
        if (listData.length === 0) {
            return (
                <View style={styles.emptyContainer}>
                    <Text>Loading...please Wait</Text>
                </View>
            );
        }
        else {

            return (
                <View style={{ flex: 1, backgroundColor: '#edc988' }}>
                    <SafeAreaView />
                    <View style={styles.upperContainer}>
                        <Text style={styles.headerText}>Star Name</Text>

                    </View>
                    <View style={styles.lowerContainer}>
                        <FlatList keyExtractor={this.keyExtractor}
                            data={this.state.listData}
                            renderItem={this.renderItem} />
                    </View>

                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#edc988" },
    upperContainer: {
        flex: 0.1, justifyContent: "center",
        alignItems: "center"
    },
    headerText: { fontSize: 30, fontWeight: "bold", color: "#132743" },
    lowerContainer: { flex: 0.9 },
    emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    emptyContainerText: { fontSize: 20 }, 
    title: { fontSize: 18, fontWeight: "bold", color: "#d7385e" },
    listContainer: { backgroundColor: "#eeecda" }
});