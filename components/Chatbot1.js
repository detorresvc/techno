import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Chatbot1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Chatbot")}>
      <Text style={styles.chatbot1}>Chatbot</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chatbot1: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.epilogueMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default Chatbot1;
