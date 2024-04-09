import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Directory = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.directory, styles.directoryLayout]}>
      <View style={[styles.kadigma13Parent, styles.directoryLayout]}>
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
        <View style={styles.buttons1} />
        <Text style={[styles.trunkLine632, styles.textTypo]}>
          Trunk line: (632) 8367-45-72
        </Text>
        <Text style={styles.directories}>DIRECTORIES</Text>
        <Text style={[styles.text, styles.textTypo]}>5328 4572</Text>
        <View style={[styles.frameChild, styles.frameShadowBox]} />
        <Text style={[styles.collegeOfEngineering, styles.collegeTypo]}>
          College of Engineering
        </Text>
        <Text style={[styles.emailCengcalueeduph, styles.emailTypo]}>
          Email: ceng.cal@ue.edu.ph
        </Text>
        <Text style={[styles.directLine, styles.loc504Typo]}>
          Direct Line : 8365-4121
        </Text>
        <Image
          style={[styles.frameItem, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-6.png")}
        />
        <Text style={[styles.engrDean, styles.locTypo1]}>Engr. Dean</Text>
        <Text style={[styles.loc166, styles.locLayout]}>loc 166</Text>
        <Text style={[styles.engrCollegeSecretary, styles.locTypo1]}>
          Engr. College Secretary
        </Text>
        <Text style={[styles.loc167, styles.locLayout]}>loc 167</Text>
        <Text style={[styles.civilEngineering, styles.loc171Typo]}>
          Civil Engineering
        </Text>
        <Text style={[styles.loc171, styles.loc171Typo]}>loc 171</Text>
        <Text style={[styles.computerEngineering, styles.locTypo1]}>
          Computer Engineering
        </Text>
        <Text style={[styles.loc172, styles.locLayout]}>loc 172</Text>
        <Text style={[styles.electronicsCommunicationEngi, styles.locTypo1]}>
          Electronics Communication Engineering
        </Text>
        <Text style={styles.loc181}>loc 181</Text>
        <Text style={[styles.electricalEngineering, styles.locTypo1]}>
          Electrical Engineering
        </Text>
        <Text style={[styles.loc170, styles.locLayout]}>loc 170</Text>
        <Text style={[styles.mechanicalEngineering, styles.locTypo1]}>
          Mechanical Engineering
        </Text>
        <Text style={[styles.loc169, styles.locLayout]}>loc 169</Text>
        <View style={[styles.frameInner, styles.frameShadowBox]} />
        <Text style={[styles.collegeOfFine, styles.collegeTypo]}>
          College of Fine Arts, Architecture and Design
        </Text>
        <Text style={[styles.emailCfadcalueeduph, styles.emailTypo]}>
          Email: cfad.cal@ue.edu.ph
        </Text>
        <Text style={[styles.loc504, styles.loc504Typo]}>loc : 504</Text>
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <Text style={[styles.cfadDean, styles.cfadTypo]}>CFAD Dean</Text>
        <Text style={[styles.loc507, styles.locTypo]}>loc 507</Text>
        <Text style={[styles.cfadCollegeSecretary, styles.cfadTypo]}>
          CFAD College Secretary
        </Text>
        <Text style={[styles.loc503, styles.locTypo]}>loc 503</Text>
        <Text style={[styles.cfadFaculty, styles.cfadTypo]}>CFAD Faculty</Text>
        <Text style={[styles.loc501, styles.locTypo]}>loc 501</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  directoryLayout: {
    overflow: "hidden",
    height: 844,
  },
  textTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  frameShadowBox: {
    width: 325,
    backgroundColor: Color.colorRed_100,
    left: 32,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  collegeTypo: {
    color: Color.colorWhite,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  emailTypo: {
    width: 220,
    fontSize: FontSize.size_mini,
    height: 21,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  loc504Typo: {
    fontSize: FontSize.size_mini,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 324,
    position: "absolute",
  },
  locTypo1: {
    fontSize: FontSize.size_xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  locLayout: {
    width: 67,
    height: 17,
    left: 280,
  },
  loc171Typo: {
    top: 392,
    fontSize: FontSize.size_xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  cfadTypo: {
    left: 56,
    fontSize: FontSize.size_xs,
    width: 179,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  locTypo: {
    left: 276,
    width: 67,
    fontSize: FontSize.size_xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  kadigma13: {
    top: 4,
    width: 190,
    height: 119,
    left: 100,
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
    height: 36,
    width: 36,
    top: 45,
    position: "absolute",
  },
  buttons1: {
    left: 28,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 36,
    width: 36,
    top: 45,
    position: "absolute",
  },
  trunkLine632: {
    top: 167,
    width: 269,
    height: 18,
    left: 60,
  },
  directories: {
    top: 115,
    fontSize: 30,
    color: Color.colorRed_100,
    textAlign: "left",
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    left: 100,
    position: "absolute",
  },
  text: {
    top: 197,
    left: 140,
    width: 109,
    height: 21,
  },
  frameChild: {
    top: 232,
    height: 28,
  },
  collegeOfEngineering: {
    top: 238,
    left: 88,
    width: 222,
    height: 18,
    textAlign: "left",
  },
  emailCengcalueeduph: {
    top: 277,
    left: 90,
  },
  directLine: {
    top: 298,
    left: 104,
    width: 179,
    height: 21,
  },
  frameItem: {
    top: 329,
    left: 33,
  },
  engrDean: {
    top: 347,
    width: 179,
    height: 21,
    left: 60,
  },
  loc166: {
    top: 348,
    height: 17,
    fontSize: FontSize.size_xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  engrCollegeSecretary: {
    top: 371,
    width: 179,
    height: 21,
    left: 60,
  },
  loc167: {
    top: 372,
    height: 17,
    fontSize: FontSize.size_xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  civilEngineering: {
    height: 20,
    width: 179,
    left: 60,
  },
  loc171: {
    height: 17,
    width: 67,
    left: 280,
  },
  computerEngineering: {
    top: 412,
    width: 179,
    height: 21,
    left: 60,
  },
  loc172: {
    top: 413,
    height: 17,
    fontSize: FontSize.size_xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  electronicsCommunicationEngi: {
    top: 433,
    width: 217,
    height: 21,
    left: 60,
  },
  loc181: {
    top: 437,
    width: 42,
    height: 16,
    left: 280,
    fontSize: FontSize.size_xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  electricalEngineering: {
    top: 467,
    width: 179,
    height: 21,
    left: 60,
  },
  loc170: {
    top: 463,
    height: 17,
    fontSize: FontSize.size_xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  mechanicalEngineering: {
    top: 488,
    width: 179,
    height: 21,
    left: 60,
  },
  loc169: {
    top: 485,
    height: 17,
    fontSize: FontSize.size_xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  frameInner: {
    top: 522,
    height: 50,
  },
  collegeOfFine: {
    top: 530,
    left: 70,
    textAlign: "center",
    width: 250,
    height: 36,
  },
  emailCfadcalueeduph: {
    top: 592,
    left: 89,
  },
  loc504: {
    top: 621,
    left: 161,
    width: 75,
    height: 20,
  },
  lineIcon: {
    top: 644,
    left: 37,
  },
  cfadDean: {
    top: 664,
    height: 21,
  },
  loc507: {
    top: 667,
    height: 17,
  },
  cfadCollegeSecretary: {
    top: 688,
    height: 20,
  },
  loc503: {
    top: 687,
    height: 16,
  },
  cfadFaculty: {
    top: 708,
    height: 21,
  },
  loc501: {
    top: 711,
    height: 17,
  },
  kadigma13Parent: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
  },
  directory: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default Directory;
