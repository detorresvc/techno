import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.resetPassword, styles.iconLayout]}>
      <Image
        style={[styles.bgIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <View style={[styles.frame, styles.framePosition]}>
        <Pressable
          style={[styles.resetPassword1, styles.emailFlexBox]}
          onPress={() => navigation.navigate("LoginPagepagelogin")}
        >
          <Pressable onPress={() => navigation.navigate("LoginPagepagelogin")}>
            <Text style={styles.resetPassword3}>Reset Password</Text>
          </Pressable>
        </Pressable>
        <View style={[styles.email, styles.emailFlexBox]}>
          <TextInput
            style={styles.email1}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="#000"
          />
        </View>
        <Text style={styles.resetPassword4}>Reset Password</Text>
        <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/frame-19.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  framePosition: {
    width: 390,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  emailFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  bgIcon: {
    top: 550,
    height: 304,
  },
  resetPassword3: {
    fontSize: FontSize.size_sm,
    letterSpacing: 1.4,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  resetPassword1: {
    top: 321,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRed_200,
    width: 261,
    height: 46,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 8,
    left: 65,
  },
  email1: {
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_mini,
  },
  email: {
    top: 247,
    left: 61,
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 267,
    height: 53,
    paddingLeft: Padding.p_xl,
    paddingTop: 10,
    paddingRight: Padding.p_smi,
    paddingBottom: Padding.p_4xs,
  },
  resetPassword4: {
    top: 196,
    fontSize: FontSize.size_5xl,
    letterSpacing: 2.4,
    fontWeight: "800",
    fontFamily: FontFamily.epilogueExtraBold,
    color: Color.colorBlack,
    textAlign: "center",
    width: 235,
    height: 30,
    left: 65,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  wrapper: {
    left: 27,
    top: 26,
    width: 54,
    height: 49,
    position: "absolute",
  },
  frame: {
    top: 0,
    backgroundColor: "#f8f8f8",
    height: 550,
  },
  resetPassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
  },
});

export default ResetPassword;
