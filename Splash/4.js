import React from "react";
import { View, Text, StyleSheet} from "react-native";


const Four = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>First</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
    }
});
export default Four;