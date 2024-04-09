import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, TextInput, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import fb from '../utils/fb';

fb()

const LoginPagepagelogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        navigation.navigate("DrawerRoot", { screen: "Chatbot" })
        setEmail('')
        setPassword('')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        Alert.alert('Error', errorMessage)
        setEmail('')
        setPassword('')
      });
  }

  return (
    <View style={styles.loginPagepagelogin}>
      <View style={[styles.bgParent, styles.bgIconLayout]}>
        <Image
          style={[styles.bgIcon, styles.bgIconLayout]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Pressable
          style={[styles.forgotPassword, styles.forgotPasswordPosition]}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text style={[styles.forgotPassword1, styles.passwordTypo]}>
            Forgot password
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.newUserRegisterContainer,
            styles.forgotPasswordPosition,
          ]}
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={[styles.forgotPassword1, styles.passwordTypo]}>
            New User? Register Now.
          </Text>
        </Pressable>
        <Image
          style={styles.kadigma11}
          contentFit="cover"
          source={require("../assets/kadigma-1-1.png")}
        />
        <View style={[styles.password, styles.emailLayout]}>
          <TextInput
            style={styles.passwordTypo}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="#1e1e1e"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <View style={[styles.email, styles.emailLayout]}>
          <TextInput
            style={styles.passwordTypo}
            placeholder="Email"
            autoCapitalize="none"
            secureTextEntry={false}
            placeholderTextColor="#000"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <Pressable
          style={styles.loginbtn}
          onPress={handleLogin}
        >
          <Text style={styles.logIn}>LOG IN</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgIconLayout: {
    width: 390,
    overflow: "hidden",
  },
  forgotPasswordPosition: {
    left: 95,
    position: "absolute",
  },
  passwordTypo: {
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_smi,
  },
  emailLayout: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_smi,
    height: 44,
    width: 285,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_41xl,
    left: 53,
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    overflow: "hidden",
  },
  bgIcon: {
    top: 540,
    left: 0,
    height: 304,
    position: "absolute",
  },
  forgotPassword1: {
    letterSpacing: 1.3,
    color: Color.colorDarkgray,
    width: 197,
    height: 20,
    textAlign: "center",
  },
  forgotPassword: {
    top: 494,
  },
  newUserRegisterContainer: {
    top: 460,
  },
  kadigma11: {
    top: 112,
    left: 70,
    width: 252,
    height: 149,
    position: "absolute",
  },
  password: {
    top: 336,
  },
  email: {
    top: 273,
  },
  logIn: {
    fontSize: FontSize.size_sm,
    letterSpacing: 1.4,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  loginbtn: {
    top: 399,
    left: 149,
    borderRadius: 5,
    backgroundColor: Color.colorRed_200,
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 11,
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    overflow: "hidden",
  },
  bgParent: {
    backgroundColor: "#f6f6f6",
    height: 844,
    width: 390,
  },
  loginPagepagelogin: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    overflow: "hidden",
    height: 844,
  },
});

export default LoginPagepagelogin;
