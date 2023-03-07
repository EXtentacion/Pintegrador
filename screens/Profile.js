import { BlurView } from "expo-blur";
import React,{useState} from "react";
import { View, Text, StyleSheet, Button, ScrollView,Image ,FlatList,Animated,Dimensions, TouchableOpacity, Touchable} from "react-native";
import { Comun } from '../object/Comun';
import { FontAwesome5 } from '@expo/vector-icons';

const Community = ({ navigation }) => {

  const {width,height} = Dimensions.get("window");
  let AnimatedHeaderValue = new Animated.Value(0);
    const Header_Max_Height = height*0.5;
    const Header_Min_Height = height*0.1;

  const Bluer = <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />;


  const AnimatedHeaderbackgroundColor = AnimatedHeaderValue.interpolate({
        inputRange: [0, (Header_Max_Height - Header_Min_Height)],
        outputRange: ['#f08080', '#f08080'],
        extrapolate: 'clamp'

  });

  const [numbers, setNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    setNumbers(arr);
  };

  const AnimatedHeaderHeight = AnimatedHeaderValue.interpolate({
        inputRange: [0, (Header_Max_Height + Header_Min_Height)],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp'
  });

  const AnimatedHeaderOpacity = AnimatedHeaderValue.interpolate({
    inputRange: [0, (Header_Max_Height - Header_Min_Height)],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });


  
  const AnimatedCircleHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, (Header_Max_Height - Header_Min_Height)],
    outputRange: [width * 0.5, 0],
    extrapolate: 'clamp'
  });

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            {
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              overflow: "hidden",
              zIndex: 1000,
            },
            {
              opacity: AnimatedHeaderOpacity,
              height: AnimatedHeaderHeight,
              backgroundColor: AnimatedHeaderbackgroundColor,
            },
          ]}
        >
          {/* tengo que hacer un circulo para la foto de perfil y el nombre */}
          <Image
            style={{
              width: width * 0.3,
              height: width * 0.3,
              borderRadius: width * 0.3,
              backgroundColor: "#fff",
              marginTop: height * -0.04,
            }}
            source={require("../assets/alfa.png")}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: "bold",
              marginTop: height * 0.035,
            }}
          >
            @username
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: height * 0.01,
            }}
          >
            🇲🇽 Mexico. Lvl 1
          </Text>
          <TouchableOpacity
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginTop: height * 0.01,
            }}
            onPress={() => navigation.navigate("Second")}
          >
            <Text
              style={{
                color: "#0080ff",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: height * 0.01,
              }}
            >
              Descripcion de tu perfil
            </Text>
          </TouchableOpacity>
          {/* followers */}
          <View
            style={{
              flexDirection: "row",
              marginTop: height * 0.01,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: height * 0.01,
              }}
            >
              0
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: height * 0.01,
                marginLeft: width * 0.25,
              }}
            >
              0
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: height * 0.01,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Followers
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: width * 0.1,
              }}
            >
              Following
            </Text>
          </View>
          {/* followers */}
        </Animated.View>
        <ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          <View
            style={{
              height: Header_Max_Height,
            }}
          />
          <View
            style={{
              backgroundColor: "#fff", //86b3d3
              marginTop: height * 0.01,
              width: width * 0.9,
              height: height * 0.1,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#fff", //86b3d3
              marginTop: height * 0.01,
              width: width * 0.9,
              height: height * 0.2,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#fff", //86b3d3
              marginTop: height * 0.01,
              width: width * 0.9,
              height: height * 0.15,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#fff", //86b3d3
              marginTop: height * 0.01,
              width: width * 0.9,
              height: height * 0.3,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <View
            style={{
              backgroundColor: "#fff", //86b3d3
              marginTop: height * 0.01,
              width: width * 0.9,
              height: height * 0.1,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <View
            style={{
              backgroundColor: "#fff", //86b3d3
              marginTop: height * 0.01,
              width: width * 0.9,
              height: height * 0.1,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <View style={
           { height: height*0.2}
          }/>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
    },
    text: {
        fontSize: 30
    },
    box: {
        width: 200,
        height: 200,
    }
});

export default Community;