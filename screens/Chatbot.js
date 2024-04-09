import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { getAuth } from "firebase/auth";

const Chatbot = () => {
  const navigation = useNavigation();

  const auth = getAuth();
  const user = auth.currentUser;
  
  return (
    <View style={[styles.chatbot, styles.chatbotLayout]}>
      <View style={[styles.kadigma13Parent, styles.chatbotLayout]}>
        <Image
          style={styles.kadigma13}
          contentFit="cover"
          source={require("../assets/kadigma-1-3.png")}
        />
        <Image
          style={[styles.enterButtonIcon, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/enter-button.png")}
        />
        <Pressable
          style={styles.untitledDesign111}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/untitled-design-11-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.buttons}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/3-buttons.png")}
          />
        </Pressable>
        <View style={styles.commentbox}>
          <Text style={styles.commentboxcomponentinputTex}>Type here...</Text>
        </View>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatbotLayout: {
    height: 844,
    overflow: "hidden",
  },
  frameChildPosition: {
    left: "50%",
    position: "absolute",
  },
  kadigma13: {
    top: 4,
    left: 100,
    width: 190,
    height: 119,
    position: "absolute",
  },
  enterButtonIcon: {
    marginLeft: 126,
    top: 709,
    width: 29,
    height: 154,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  untitledDesign111: {
    left: 293,
    top: 23,
    width: 92,
    height: 81,
    position: "absolute",
  },
  buttons: {
    left: 27,
    top: 45,
    width: 36,
    height: 36,
    position: "absolute",
  },
  commentboxcomponentinputTex: {
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: FontFamily.dMSansRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 242,
  },
  commentbox: {
    top: 764,
    left: 40,
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 265,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_4xs,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    marginTop: 326.5,
    marginLeft: -155.5,
    top: "50%",
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 311,
    height: 1,
  },
  kadigma13Parent: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
    overflow: "hidden",
  },
  chatbot: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Chatbot;
