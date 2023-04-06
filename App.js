import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Dimensions} from 'react-native';
import { NavigationContainer, useFocusEffect,useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import Community from './screens/Community';
import Leaderboard from './screens/Leaderboard';
import { FontAwesome5 } from '@expo/vector-icons';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';
import First from './Splash/1';
import Second from './Splash/2';
import There from './Splash/There';
import Four from './Splash/4';
import Five from './Splash/5';
import Six from './Splash/6';
import Contenido from './screens/Contenido';







const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();





function StackFLow() {
  return (
   
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: 'transparent',
        },
        transitionSpec: {
          open:{
            animation: 'timing',
            config: {
              duration: 300,
            },
          },
          close:{
            animation: 'timing',
            config: {
              duration: 300,
            },
          },
        }
      }}
    >
      <Stack.Screen name="Papaya" component={Community}   options={{
        headerShown: false,
       }}  
      />
      <Stack.Screen name="First" component={First} options={{
        headerShown: false,
        }}/>
    </Stack.Navigator>
  );
}

function StackFLow1() {
  return (
   
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Profile}   options={{
        headerShown: false,
       }}  
      />
      <Stack.Screen name="First" component={Second} />
    </Stack.Navigator>
  );
}





export default function App() {
  const [isContenidoOpen, setIsContenidoOpen] = useState(false)


  const listeners = () => ({
    // aquí actualizamos el estado cuando se muestra la pantalla de Contenido
    focus: () => {
      setIsContenidoOpen(true);
    },
    // aquí actualizamos el estado cuando se oculta la pantalla de Contenido
    blur: () => {
      setIsContenidoOpen(false);
    }
  });

  const Listeners1 = () => ({
    // aquí actualizamos el estado cuando se muestra la pantalla de Contenido
    focus: () => {
      setIsContenidoOpen(false);
    },
    // aquí actualizamos el estado cuando se oculta la pantalla de Contenido
    blur: () => {
      setIsContenidoOpen(false);
    }
  });


  
  const {width,height} = Dimensions.get("window");
  

  const StackFLow2 = () => {


    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: 'transparent',  
          },
          transitionSpec: {
            open:{
              animation: 'timing',
              config: {
                duration: 300,
              },
            },
            close:{
              animation: 'timing',
              config: { 
                duration: 300,
              },
            },
          }
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen}   options={{
          headerShown: false,
        }}
        listeners={Listeners1}
        />
        <Stack.Screen name="Contenido" component={Contenido} options={{
          headerShown: false,
          }}
          listeners={listeners}
        />
        <Stack.Screen name="There" component={There} options={{
          headerShown: false,
          }}/>
      </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { position: "absolute" },
          tabBarBackground: () => (
            <BlurView
              tint="light"
              intensity={70}
              style={StyleSheet.absoluteFill}
            />
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={StackFLow2}
          options={{
            tabBarStyle:isContenidoOpen?{display: 'none'}:{},
            tabBarComponent: (props) => (
              <BlurView
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
                tint="dark"
                intensity={100}
              >
                <BottomTabBar {...props} />
              </BlurView>
            ),
            tabBarLabel: "Learn",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="graduation-cap" size={24} color="grey" />
            ),
            headerStyle: {
              height: height * 0.08,
            },
            headerTitle: () => null,
            headerTransparent: true,
            headerBackground: () => (
              <BlurView
                tint="light"
                intensity={30}
                style={StyleSheet.absoluteFill}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={StackFLow}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="users" size={24} color="grey" />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="trophy" size={24} color="grey" />
            ),
            headerTransparent: true,
            headerTitle: () => 
            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
              <FontAwesome5 name="medal" size={35} color="#efb810" />
            <Text style={{fontSize: 20,fontWeight: 'bold',color: '#000'}}>Leaderboard</Text>
            <FontAwesome5 name="medal" size={35} color="#efb810" />
            </View>,
            headerBackground: () => (
              <BlurView
                tint="light"
                intensity={100}
                style={StyleSheet.absoluteFill}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={StackFLow1}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user" size={24} color="grey" />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



