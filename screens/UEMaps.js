import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const UEMaps = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.ueMaps, styles.ueMapsLayout]}>
      <View style={[styles.frame13aspectratioscreenc, styles.ueMapsLayout]}>
        <View style={styles.mapcomponentmapinteractive} />
      </View>
      <Image
        style={styles.kadigma13}
        contentFit="cover"
        source={require("../assets/kadigma-1-3.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  ueMapsLayout: {
    overflow: "hidden",
    height: 844,
  },
  mapcomponentmapinteractive: {
    top: 118,
    left: 31,
    borderRadius: 20,
    backgroundColor: "#d9d9d9",
    width: 329,
    height: 656,
    position: "absolute",
  },
  frame13aspectratioscreenc: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
  },
  kadigma13: {
    top: 4,
    left: 100,
    width: 190,
    height: 119,
    position: "absolute",
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
  ueMaps: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default UEMaps;
