import React from "react";
import { View, Text, StyleSheet} from "react-native";


const Second = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Second</Text>
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

export default Second;