import * as React from "react";
import { Pressable, Text, StyleSheet, TextInput, View, Alert } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registration = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const handleSignUp = async () => {
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Alert.alert('Success', 'User successfully created!')
        navigation.navigate("LoginPagepagelogin")
        setEmail('')
        setPassword('')
        // ...
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
    <View style={[styles.registration, styles.frameLayout]}>
      <View style={[styles.frame, styles.frameLayout]}>
        <Pressable
          style={styles.register}
          onPress={handleSignUp}
          >
          <Text style={styles.register1}>Register</Text>
        </Pressable>
        {/* <View style={[styles.yesno, styles.yesnoPosition]}>
          <TextInput
            style={styles.yesnoinput}
            placeholder="Yes"
            autoCapitalize="words"
            placeholderTextColor="rgba(0, 0, 0, 0.16)"
          />
        </View> */}
        {/* <View style={[styles.gender, styles.genderPosition]}>
          <TextInput
            style={styles.GenderInput}
            placeholder="Gender"
            placeholderTextColor="rgba(0, 0, 0, 0.16)"
          />
        </View> */}
        {/* <View style={[styles.confirmpassword, styles.genderPosition]}>
          <TextInput
            style={styles.ConfirmPasswordInput}
            placeholder="******"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="rgba(0, 0, 0, 0.16)"
          />
        </View> */}
        <View style={[styles.password, styles.yesnoPosition]}>
          <TextInput
            style={styles.PasswordInput}
            placeholder="******"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="rgba(0, 0, 0, 0.16)"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <View style={styles.email}>
          <TextInput
            style={styles.EmailInput}
            placeholder="Email"
            autoCapitalize="none"
            secureTextEntry={false}
            placeholderTextColor="rgba(0, 0, 0, 0.16)"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        {/* <View style={[styles.lastname, styles.lastnamePosition]}>
          <TextInput
            style={styles.LastnameInput}
            placeholder="Last Name"
            autoCapitalize="words"
            placeholderTextColor="rgba(0, 0, 0, 0.16)"
          />
        </View>
        <View style={[styles.firstname, styles.lastnamePosition]}>
          <TextInput
            style={styles.FirstnameInput}
            placeholder="First Name"
            autoCapitalize="words"
            placeholderTextColor="rgba(0, 0, 0, 0.12)"
          />
        </View> */}
        <Text style={styles.registration1}>Registration</Text>
        <Image
          style={styles.kadigma12}
          contentFit="cover"
          source={require("../assets/kadigma-1-3.png")}
        />
        {/* <Text style={[styles.studentlabel, styles.studentlabelTypo]}>
          Student
        </Text> */}
        {/* <Text style={[styles.genderlabel, styles.genderlabelTypo]}>Gender</Text> */}
        {/* <Text style={[styles.confirmPasswordlabel, styles.genderlabelTypo]}>
          Confirm Password
        </Text> */}
        <Text style={[styles.passwordlabel, styles.studentlabelTypo]}>
          Password
        </Text>
        <Text style={styles.emaillabel}>{`Email
`}</Text>
        {/* <Text style={[styles.lastNamelabel, styles.namelabelTypo]}>
          Last Name
        </Text>
        <Text style={[styles.firstNamelabel, styles.namelabelTypo]}>
          First Name
        </Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 844,
    overflow: "hidden",
  },
  yesnoPosition: {
    paddingBottom: Padding.p_xs,
    paddingRight: Padding.p_220xl,
    paddingTop: Padding.p_xs,
    paddingLeft: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 35,
    width: 299,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_41xl,
    left: 45,
    position: "absolute",
    overflow: "hidden",
  },
  genderPosition: {
    left: 46,
    paddingBottom: Padding.p_xs,
    paddingRight: Padding.p_220xl,
    paddingTop: Padding.p_xs,
    paddingLeft: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 35,
    width: 299,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_41xl,
    position: "absolute",
    overflow: "hidden",
  },
  lastnamePosition: {
    top: 263,
    height: 35,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_41xl,
    position: "absolute",
  },
  studentlabelTypo: {
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    left: 53,
    color: Color.colorBlack,
    position: "absolute",
  },
  genderlabelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    left: 53,
    color: Color.colorBlack,
    position: "absolute",
  },
  namelabelTypo: {
    top: 235,
    width: 87,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    position: "absolute",
  },
  register1: {
    top: 7,
    left: 12,
    fontSize: FontSize.size_sm,
    letterSpacing: 1.4,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorWhite,
    width: 115,
    height: 20,
    textAlign: "center",
    position: "absolute",
  },
  register: {
    top: 717,
    left: 125,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRed_200,
    width: 139,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  yesnoinput: {
    top: 4,
    left: 4,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_xs,
  },
  GenderInput: {
    top: 4,
    left: 4,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_xs,
  },
  ConfirmPasswordInput: {
    top: 4,
    left: 4,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_xs,
  },
  PasswordInput: {
    top: 4,
    left: 4,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_xs,
  },
  EmailInput: {
    top: 4,
    left: 20,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_xs, 
  },
  FirstnameInput: {
    top: 4,
    left: 14,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_xs,
  },
  LastnameInput: {
    top: 4,
    left: 14,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_xs,
  },
  yesno: {
    top: 645,
  },
  gender: {
    top: 567,
  },
  confirmpassword: {
    top: 492,
  },
  password: {
    top: 419,
  },
  email: {
    top: 338,
    height: 35,
    width: 299,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_41xl,
    left: 45,
    position: "absolute",
    overflow: "hidden",
  },
  lastname: {
    left: 192,
    width: 153,
    overflow: "hidden",
  },
  firstname: {
    width: 140,
    left: 45,
    top: 263,
  },
  registration1: {
    top: 179,
    left: 101,
    fontSize: FontSize.size_5xl,
    letterSpacing: 2.4,
    fontWeight: "800",
    fontFamily: FontFamily.epilogueExtraBold,
    width: 191,
    height: 36,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  kadigma12: {
    top: 60,
    left: 100,
    width: 190,
    height: 119,
    position: "absolute",
  },
  studentlabel: {
    top: 620,
    width: 91,
  },
  genderlabel: {
    top: 541,
    width: 116,
    height: 20,
  },
  confirmPasswordlabel: {
    top: 467,
    width: 143,
    height: 19,
  },
  passwordlabel: {
    top: 391,
    width: 98,
  },
  emaillabel: {
    top: 316,
    height: 15,
    width: 87,
    textAlign: "left",
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    left: 53,
    color: Color.colorBlack,
    position: "absolute",
  },
  lastNamelabel: {
    left: 195,
  },
  firstNamelabel: {
    left: 49,
  },
  frame: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
    overflow: "hidden",
  },
  registration: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },

  });

  export default Registration;

