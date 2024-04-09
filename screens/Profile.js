import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { getAuth, signOut } from "firebase/auth";

const Profile = () => {
  const navigation = useNavigation();
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <View style={styles.profile}>
      <Pressable
        style={styles.untitledDesign112}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/untitled-design-11-1.png")}
        />
      </Pressable>
      <View style={[styles.emailParent, styles.iconLayout]}>
        <View style={[styles.email, styles.emailLayout]}>
          <Text style={styles.emailDisplay}>{user?.email}</Text>
        </View>
        <View style={[styles.student, styles.emailLayout]}>
          <Text style={styles.emailDisplay} numberOfLines={1}>
            Yes
          </Text>
        </View>
        <View style={[styles.gender, styles.emailLayout]}>
          <Text style={styles.emailDisplay}>Gender</Text>
        </View>
        <View style={[styles.lastname, styles.lastnamePosition]}>
          <Text style={styles.emailDisplay} numberOfLines={1}>
            Last Name
          </Text>
        </View>
        <Text style={[styles.student1, styles.gender1Typo]}>Student</Text>
        <Text style={[styles.gender1, styles.gender1Layout]}>Gender</Text>
        <Text style={[styles.username, styles.nameTypo]}>{`Email
`}</Text>
        <Text style={[styles.lastName, styles.nameTypo]}>Last Name</Text>
        <Text style={[styles.firstName, styles.nameTypo]}>First Name</Text>
        <View style={[styles.firstname, styles.lastnamePosition]}>
          <Text style={styles.emailDisplay} numberOfLines={1}>
            First Name
          </Text>
        </View>
        <Pressable
          style={styles.register}
          onPress={async () => {
            
            const auth = getAuth();
            await signOut(auth)
            navigation.navigate("LoginPagepagelogin")
          }}
        >
          <Text style={styles.register1}>Log out</Text>
        </Pressable>
        <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/frame-20.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  emailLayout: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_41xl,
    width: "76.67%",
    height: "4.15%",
    position: "absolute",
    overflow: "hidden",
  },
  lastnamePosition: {
    bottom: "50.71%",
    top: "45.14%",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_41xl,
    height: "4.15%",
    position: "absolute",
    overflow: "hidden",
  },
  gender1Typo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  gender1Layout: {
    height: "2.13%",
    left: "12.56%",
  },
  nameTypo: {
    width: "22.31%",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  untitledDesign112: {
    left: "-3.85%",
    top: "-2.13%",
    right: "-2.31%",
    bottom: "45.38%",
    width: "106.15%",
    height: "56.75%",
    position: "absolute",
  },
  emailDisplay: {
    top: 10,
    left: 17,
    fontSize: FontSize.size_xs,
    letterSpacing: 1.2,
    fontFamily: FontFamily.leagueSpartanRegular,
    color: Color.colorGray,
    height: 16,
    width: 115,
    textAlign: "left",
  },
  email: {
    top: "54.03%",
    bottom: "41.82%",
    left: "11.79%",
    borderRadius: Border.br_41xl,
    right: "11.54%",
    width: "76.67%",
    height: "4.15%",
  },
  student: {
    top: "71.92%",
    bottom: "23.93%",
    left: "11.79%",
    borderRadius: Border.br_41xl,
    right: "11.54%",
    width: "76.67%",
    height: "4.15%",
  },
  gender: {
    top: "62.68%",
    right: "12.05%",
    bottom: "33.18%",
    left: "11.28%",
    borderRadius: Border.br_41xl,
    width: "76.67%",
    height: "4.15%",
  },
  lastname: {
    width: "39.23%",
    left: "49.23%",
    right: "11.54%",
    bottom: "50.71%",
    top: "45.14%",
  },
  student1: {
    height: "2.25%",
    width: "15.9%",
    top: "69.19%",
    left: "12.56%",
  },
  gender1: {
    width: "14.62%",
    top: "60.19%",
    color: Color.colorBlack,
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  username: {
    top: "51.54%",
    height: "2.96%",
    width: "22.31%",
    left: "12.56%",
  },
  lastName: {
    top: "42.77%",
    left: "49.74%",
    height: "2.96%",
    width: "22.31%",
  },
  firstName: {
    top: "43.01%",
    height: "2.13%",
    left: "12.56%",
  },
  firstname: {
    width: "35.9%",
    right: "52.82%",
    left: "11.28%",
  },
  register1: {
    top: 7,
    left: 12,
    fontSize: FontSize.size_sm,
    letterSpacing: 1.4,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorWhite,
    textAlign: "center",
    height: 20,
    width: 115,
    position: "absolute",
  },
  register: {
    height: "3.91%",
    width: "35.64%",
    top: "80.81%",
    right: "33.08%",
    bottom: "15.28%",
    left: "31.28%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRed_200,
    position: "absolute",
    overflow: "hidden",
  },
  wrapper: {
    left: "4.36%",
    top: "3.44%",
    right: "78.97%",
    bottom: "91.47%",
    width: "16.67%",
    height: "5.09%",
    position: "absolute",
  },
  emailParent: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
