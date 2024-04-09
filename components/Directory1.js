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

const Directory1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Directory")}>
      <Text style={styles.directory1}>Directory</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  directory1: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.epilogueMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default Directory1;
