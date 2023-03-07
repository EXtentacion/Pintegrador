import React,{useState,useEffect} from "react";
import { View, Text, StyleSheet, Button ,ScrollView, SafeAreaView,Dimensions,Animated,Image, FlatList} from "react-native";
const { width } = Dimensions.get('window')
import { Overlay } from 'react-native-elements';

 


    
const HomeScreen = ({ navigation }) => {
    
    const data1 = [
        { key: '1', name: 'Curso 1', content: 'Curso 1 Content',image:require('../assets/icon.png') },
        { key: '2', name: 'Curso 2', content: 'Curso 2 Content' ,image:require('../assets/icon.png')},
        { key: '3', name: 'Curso 3', content: 'Curso 3 Content'   ,image:require('../assets/icon.png')},
        { key: '4', name: 'Curso 4', content: 'Curso 4 Content' ,image:require('../assets/icon.png') },
        { key: '5', name: 'Curso 5', content: 'Curso 5 Content' ,image:require('../assets/icon.png') },
        { key: '6', name: 'Curso 6', content: 'Curso 6 Content' , image:require('../assets/icon.png')},
    ];

    const {width,height} = Dimensions.get("window");
    // SHOW THE DATE 
    const [date, setDate] = useState(new Date().toDateString());
    const data = [
        'item1','item2', 
        'item3','item4',
        'item5','item6',
        'item7','item8',
        'item9','item10',
        'item11','item12',
        'item13','item14',
        'item15','item16',
        'item17','item18',
        'item19','item20',

      ]
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date().toDateString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    let AnimatedHeaderValue = new Animated.Value(0);
    const Header_Max_Height = height*0.11;
    const Header_Min_Height = height*0.02;

    const AnimatedHeaderbackgroundColor = AnimatedHeaderValue.interpolate({
        inputRange: [0, (Header_Max_Height - Header_Min_Height)],
        outputRange: ['transparent', 'transparent'],
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
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
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
              borderBottomColor: "rgba(0, 0, 0, 0.2)",
              borderBottomWidth: 0.5,
              alignSelf: "center",
              width: width * 0.9,
              paddingBottom: height * 0.01,
            }}
          >
            <Text
              style={{
                color: "grey",
                fontSize: 15,
                fontWeight: "bold",
                right: width * 0.3,
                marginTop: height * 0.1,
              }}
            >
              {date}
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "bold",
                right: width * 0.24,
              }}
            >
              UPQ Games
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: height * 0.01,
              backgroundColor: "transparent",
              width: width,
              height: height * 0.33,
              borderBottomColor: "rgba(0,0,0, 0.2)",
              borderBottomWidth: 0.5,
              alignSelf: "center",
              paddingBottom: height * 0.01,
            }}
          >
            <FlatList
              data={[1, 2, 3, 4, 5]}
              getItemLayout={(data, index) => ({
                length: width * 0.9 + width * 0.03,
                offset: width * 0.9 + width * 0.03 * index,
                index,
              })}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    width: width * 0.9,
                    height: height * 0.3,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 5,
                    marginBottom: height * 0.02,
                    margin: width * 0.015,
                    left: width * 0.03,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#000",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      left: width * 0.05,
                      top: height * 0.02,
                    }}
                  >
                    Game {item}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "grey",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      left: width * 0.05,
                      top: height * 0.02,
                    }}
                  >
                    Game {item} Description
                  </Text>
                </View>
              )}
              initialScrollIndex={2}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={(item) => item.toString()}
              snapToInterval={width * 0.9 + width * 0.03}
            />
          </View>
          <View
            style={{
              marginTop: height * 0.01,
              backgroundColor: "transparent",
              width: width,
              height: height * 0.3,
              borderBottomColor: "rgba(0,0,0, 0.2)",
              borderBottomWidth: 0.5,
              alignSelf: "center",
              paddingBottom: height * 0.01,
              width: width * 0.9,
            }}
          >
            <Text
              style={{
                fontSize: 23,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "bold",
                left: width * 0.05,
                top: height * 0.02,
              }}
            >
              Lecciones 🧠
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                marginTop: height * 0.03,
                backgroundColor: "transparent",
                width: width,
                height: height * 0.3,
              }}
            >
              <View style={{ flexDirection: "column" }}>
                {data1.map((item, index) => {
                  if (index % 3 === 0) {
                    return (
                      <View key={item.key} style={{ flexDirection: "row" }}>
                        {data1.slice(index, index + 3).map((innerItem) => (
                          <View
                            key={innerItem.key}
                            style={{
                              width: width * 0.8,
                              height: height * 0.09,
                              borderRadius: width * 0.03,
                              backgroundColor: "lightgray",
                              alignItems: "center",
                              margin: width * 0.02,
                              alignContent: "flex-start",
                              justifyContent: "flex-start",
                              flexDirection: "row",
                            }}
                          >
                            <Image
                              source={innerItem.image}
                              style={{
                                width: width * 0.15,
                                height: height * 0.07,
                                borderRadius: width * 0.05,
                                marginRight: width * 0.02,
                                left: width * 0.02,
                              }}
                            />
                            <Text
                              style={{
                                fontSize: 15,
                                color: "#000",
                                fontStyle: "normal",
                                fontWeight: "bold",
                                left: width * 0.02,
                              }}
                            >
                              {innerItem.name}
                            </Text>
                          </View>
                        ))}
                      </View>
                    );
                  }
                  return null;
                })}
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              marginTop: height * 0.01,
              backgroundColor: "transparent",
              width: width,
              height: height * 0.28,
              borderBottomColor: "rgba(0,0,0, 0.2)",
              borderBottomWidth: 1,
              alignSelf: "center",
              paddingBottom: height * 0.01,
              width: width * 0.9,
            }}
          >
            <Text
              style={{
                fontSize: 23,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "bold",
                left: width * 0.05,
                top: height * 0.02,
              }}
            >
              Piensa-Diferente 👽
            </Text>
            <FlatList
              getItemLayout={(data, index) => ({
                length: width * 0.81 + width * 0.03,
                offset: width * 0.81 + width * 0.03 * index,
                index,
              })
              }
              data={data1}
              horizontal={true}
              keyExtractor={(item) => item.key}
              snapToInterval={width * 0.81 + width * 0.03}
              renderItem={({ item }) => (
                <View
                  style={{
                    marginTop: height * 0.05,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    width: width * 0.81,
                    height: height * 0.15,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    margin: width * 0.015,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#000",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      left: width * 0.05,
                      top: height * 0.02,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              )}
            />
          </View>
          <View
            style={{
              marginTop: height * 0.01,
              backgroundColor: "transparent",
              width: width,
              height: height * 0.35,
              borderBottomColor: "rgba(0,0,0, 0.2)",
              borderBottomWidth: 1,
              alignSelf: "center",
              paddingBottom: height * 0.01,
              width: width * 0.9,
            }}
          >
            <Text
              style={{
                fontSize: 23,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "bold",
                left: width * 0.05,
                top: height * 0.02,
              }}
            >
              Sabias Que? 🤔
            </Text>
            <FlatList
              getItemLayout={(data, index) => ({
                length: width * 0.4 + width * 0.03,
                offset: width * 0.4 + width * 0.03 * index,
                index,
              })
              }
              data={data1}
              horizontal={true}
              keyExtractor={(item) => item.key}
              snapToInterval={width * 0.4 + width * 0.03}
              renderItem={({ item }) => (
                <View
                  style={{
                    marginTop: height * 0.05,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    width: width * 0.4,
                    height: height * 0.15,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    margin: width * 0.015,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#000",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      left: width * 0.05,
                      top: height * 0.02,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 27,
        color: 'rgba(0, 0, 0, 0.8)',
        fontStyle: "normal",
        fontWeight: "bold",
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },

});

export default HomeScreen;