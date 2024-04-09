const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginPagepagelogin from "./screens/LoginPagepagelogin";
import Profile from "./screens/Profile";
import UEMaps from "./screens/UEMaps";
import Directory from "./screens/Directory";
import Chatbot from "./screens/Chatbot";
import ResetPassword from "./screens/ResetPassword";
import Registration from "./screens/Registration";
import Menu from "./components/Menu";
import Chatbot1 from "./components/Chatbot1";
import Directory1 from "./components/Directory1";
import Map1 from "./components/Map1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
function DrawerRoot({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 233 } }}
      drawerContent={(props) => <Menu {...props} />}
    >
      <Drawer.Screen
        name="Chatbot"
        component={Chatbot}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Directory"
        component={Directory}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="UEMaps"
        component={UEMaps}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "LeagueSpartan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
    "Epilogue-Medium": require("./assets/fonts/Epilogue-Medium.ttf"),
    "Epilogue-ExtraBold": require("./assets/fonts/Epilogue-ExtraBold.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="LoginPagepagelogin"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

            <Stack.Screen
              name="LoginPagepagelogin"
              component={LoginPagepagelogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
