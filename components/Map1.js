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

const Map1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("UEMaps")}>
      <Text style={styles.map1}>Map</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  map1: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.epilogueMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default Map1;
