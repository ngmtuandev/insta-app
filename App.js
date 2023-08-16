import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home from "./Screens/Home";
import UpPost from "./Screens/UpPost";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import { useEffect, useState } from "react";
import {auth} from './firebase'
const Stack = createNativeStackNavigator();
export default function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const setUser = (user) => {
    user ? setCurrentUser(user) : setCurrentUser(null)
  }

  useEffect(
    () => {
      auth.onAuthStateChanged(user => setUser(user))
    }, []
  )

  return (
    <NavigationContainer>
      <SafeAreaView className="w-[100%] flex-1 h-screen">
        {
          currentUser ? <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="UpPost" component={UpPost} />
        </Stack.Navigator> : <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        }
      </SafeAreaView>
    </NavigationContainer>
  );
}
