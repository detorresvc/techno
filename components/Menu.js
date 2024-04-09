import React, { useState } from "react";
import Chatbot1 from "./Chatbot1";
import Directory1 from "./Directory1";
import Map1 from "./Map1";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Menu = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <Chatbot1 />,
    <Directory1 />,
    <Map1 />,
  ]);
  const [drawerItemsActive] = useState([
    <Chatbot1 />,
    <Directory1 />,
    <Map1 />,
  ]);
  const stateIndex = !state ? 0 : state.index;

  return (
    <SafeAreaView style={styles.menu}>
      <View style={styles.view}>
        <View style={styles.frameParent}>
          <View style={styles.lineParent}>
            <View style={styles.frameChild} />
            {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
          </View>
          <View style={[styles.lineGroup, styles.linePosition]}>
            <View style={[styles.frameItem, styles.framePosition]} />
            {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
          </View>
          <View style={[styles.lineContainer, styles.linePosition]}>
            <View style={[styles.frameInner, styles.framePosition]} />
            {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: Color.colorRed_200,
  },
  mapTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  linePosition: {
    height: 38,
    left: 39,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    top: 32,
    height: 1,
    width: 156,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  frameChild: {
    top: 29,
    height: 1,
    width: 156,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: 1,
    position: "absolute",
  },
  lineParent: {
    top: 151,
    height: 37,
    width: 157,
    left: 39,
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    left: -1,
  },
  lineGroup: {
    top: 199,
    width: 153,
  },
  frameInner: {
    left: 1,
  },
  lineContainer: {
    top: 95,
    width: 157,
  },
  frameParent: {
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    height: 844,
    width: 233,
  },
  view: {
    overflow: "hidden",
    height: 844,
    width: 233,
    backgroundColor: Color.colorRed_200,
  },
});

export default Menu;
