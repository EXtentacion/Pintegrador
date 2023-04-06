import React, { useState, useEffect, useRef,useMemo } from "react";
import BottomSheet from '@gorhom/bottom-sheet';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { BlurView } from "expo-blur";




const Contenido = ({ navigation, route }) => {
  const { propiedad } = route.params;
  const longitud= propiedad.length
  const progress = currentIndex >= 0 ? (currentIndex + 1) / longitud : 0;
  const { width, height } = Dimensions.get("window");
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const bottomSheet = useRef(null);
  const snapPoints = useMemo(() => ['17%','50%','80%'], []);



  


  const onNextPress = () => {
    if (currentIndex === longitud - 1) {
      // Si se alcanzó el último contenido, navegar a otra pantalla
      navigation.navigate("HomeScreen");
    } else {
      // Actualizar el índice actual solo cuando se navega hacia adelante
      setLastIndex(currentIndex);
      setCurrentIndex((prevIndex) => prevIndex + 1);

      // Desplazar el ScrollView para mostrar el siguiente contenido
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * width,
        y: 0,
        animated: true,
      });
    }
  }

  //instalar version react-native-reanimated con npm install react-native-reanimated versioj 
  //react-native-reanimated


  const onBackPress = () => {
    setLastIndex(currentIndex);
    setCurrentIndex((prevIndex) => prevIndex - 1);

    // Desplazar el ScrollView para mostrar el contenido anterior
    scrollViewRef.current.scrollTo({
      x: (currentIndex - 1) * width,
      y: 0,
      animated: true,
    });

  };




  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#f4f4f4",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            marginTop: height * 0.03,
            width: width * 0.2,
            height: height * 0.1,
          }}
        >
          <FontAwesome5
            name="times"
            size={24}
            color="rgba(0,0,0,0.5)"
            style={{ left: width * 0.05, top: height * 0.05 }}
            
          />
        </TouchableOpacity>
        <View
          style={{
            marginTop: height * -0.5,
          }}
        >
          <Text
            style={{
              marginTop: height * 0.6,
              fontSize: 20,
              fontWeight: "bold",
              color: "#0080ff",
              textAlign: "center",
            }}
          >
            {propiedad.name}
          </Text>
          <Progress.Bar
            //antes de navegar entre screens quiero ver el porcentaje de progreso completo de la propiedad
            width={width * 0.8}
            progress={
              currentIndex >= 0 ? (currentIndex + 1) / longitud : 0

            }
            height={10}
            style={{
              marginTop: height * 0.02,
              alignSelf: "center",
              borederRadius: 10,
            }}
            unfilledColor="#e6e6e6"
            borderColor="transparent"
            color={currentIndex ===  
              longitud - 1 ? "#00bb27" : "#0080ff"}
          />
          <ScrollView
            ref={scrollViewRef}
            scrollEnabled={false}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.textContainer}>
              <Text>{propiedad.description}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{propiedad.price}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{propiedad.duration}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{propiedad.felicidades}</Text>
            </View>
          </ScrollView>
        </View>
        <BottomSheet
              ref={bottomSheet}
              index={0}
              snapPoints={snapPoints}
              backgroundStyle= {{
                backgroundColor: currentIndex ===   longitud - 1 ? "#00bb27" : "#0080ff",
              }}
              style={{justifyContent:"center",alignItems:"center",}}
            >
            <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: height * 0.03,
            }}
          >
            {currentIndex > 0 && (
              <TouchableOpacity
                onPress={onBackPress}
                style={{
                  backgroundColor: "rgba(0,0,0,1)", //verde #00bb27
                  height: height * 0.05,
                  width: width * 0.2,
                  borderRadius: width * 0.03,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: width * 0.07,
                  display: "flex", // Mostrar el botón solo si currentIndex > 1
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <FontAwesome5 name="arrow-left" size={24} color="#fff" />
                </Text>
              </TouchableOpacity>
            )}
                          <TouchableOpacity
                onPress={onNextPress}
                style={{
                  backgroundColor: "#fff", 
                  height: height * 0.05,
                  width: currentIndex > 0 ? width * 0.6 : width * 0.9,
                  borderRadius: width * 0.03,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex", // Mostrar el botón solo si currentIndex > 1
                }}
              >
                <Text style={styles.buttonText}>
                  {currentIndex === longitud - 1 ? "Finalizar" : "Continuar"}
                </Text>
              </TouchableOpacity>
          </View>

        </BottomSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0080ff",
    textAlign: "center",
    marginTop: 200,
  },
  box: {
    width: 200,
    height: 200,
  },
  textContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.3,
    justifyContent: "center",
    alignItems: "center",
    },
    buttonContainer: {
        backgroundColor: "#0080ff",
        padding: 100,
    },
    buttonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
    
});



export default Contenido;