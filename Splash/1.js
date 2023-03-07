import React,{useState,useEffect} from "react";
import { View, Text, StyleSheet, SafeAreaView,Dimensions,Image,Animated, TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { BlurView } from "expo-blur";



const First = ({ navigation }) => {
    const {width,height} = Dimensions.get("window");
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Papaya")} style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    marginTop: height*0.025,
                }}>
                    <FontAwesome5 name="arrow-left" size={24} color="#0080ff" style={{ left: width*0.05, top: height*0.05}}/>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 30,
    },
    box: {
        width: 200,
        height: 200,
    }
});

export default First;

