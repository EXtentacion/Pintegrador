import { BlurView } from "expo-blur";
import React,{useState} from "react";
import { View, Text, StyleSheet, Button, ScrollView,Image ,FlatList,Animated,Dimensions, TouchableOpacity} from "react-native";
import { Comun } from '../object/Comun';
import { FontAwesome5 } from '@expo/vector-icons';

const Community = ({ navigation }) => {

  const {width,height} = Dimensions.get("window");
  let AnimatedHeaderValue = new Animated.Value(0);
    const Header_Max_Height = height*0.11;
    const Header_Min_Height = height*0.02;

  const Bluer = <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />;


  const AnimatedHeaderbackgroundColor = AnimatedHeaderValue.interpolate({
        inputRange: [0, (Header_Max_Height - Header_Min_Height)],
        outputRange: ['transparent', 'rgba(255,255,255, 0.9)'],
        extrapolate: 'clamp'

  });

  const AnimatedHeaderHeight = AnimatedHeaderValue.interpolate({
        inputRange: [0, (Header_Min_Height + Header_Max_Height)],
        outputRange: [Header_Min_Height, Header_Max_Height],
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
              flexDirection: "row",
            },
            {
              height: AnimatedHeaderHeight,
              backgroundColor: AnimatedHeaderbackgroundColor,
            },
          ]}
        >
          <Text style={{
            color: "rgba(0, 0, 0, 0.8)",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: height * 0.035,
          }}>Community</Text>
          <FontAwesome5 name="bell" size={24} color="rgba(0, 0, 0, 0.8)" style={{ left: width*0.25, marginTop: height * 0.035}}/>
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
              alignItems: "center",
              justifyContent: "center",
              borderBottomColor: "rgba(0, 0, 255, 0.2)",
              borderBottomWidth: 0.5,
              alignSelf: "center",
              paddingBottom: height * 0.01,
              width: width * 0.87,
            }}
          >
            <Text
              style={{
                color: "grey",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: height * 0.08,
              }}
            >
              "Practice makes perfect"
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "bold",
              }}
            >
              UPQ Games
            </Text>
          </View>
          {Comun.map((item) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("First", { item: item.image })}
              key={item.id}
            >
              <View
                style={{
                  marginTop: height * 0.02,
                  backgroundColor: "#fff",
                  width: width * 0.87,
                  height: height * 0.5,
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  margin: width * 0.015,
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: width * 0.87,
                    height: height * 0.31,
                    position: "absolute",
                    marginTop: height * 0.002,
                    borderRadius: 10,
                    backgroundColor: "#000",
                  }}
                />
                <View
                  style={{
                    width: width * 0.87,
                    height: height * 0.2,
                    borderRadius: 10,
                    backgroundColor: "white",
                    opacity: 0.5,
                    position: "absolute",
                    marginTop: height * 0.3,
                  }}
                >
                  <Text
                    style={{
                      textTransform: "uppercase",
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "rgba(0, 0, 0, 0.8)",
                      marginTop: height * 0.02,
                      marginLeft: width * 0.05,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#000",
                      marginTop: height * 0.01,
                      marginLeft: width * 0.05,
                    }}
                  >
                    {item.description}
                  </Text>
                  <View
                    style={{
                      height: height * 0.1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "#000",
                        marginTop: height * 0.01,
                        marginLeft: width * 0.05,
                      }}
                    >
                      {item.color}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <View
            style={{
              height: height * 0.1,
            }}
          />
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