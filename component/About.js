import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import Icon from "./Icon";
import { Linking } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/photo.jpg")} />
      <Text style={styles.text}>Saber Basha</Text>
      <Text style={styles.info}>
        Hello I am Saber Basha, Currently pursuing B.tech in Information
        Technology at Madras Institute of Technology. Skilled in MERN Stack
        development and React Native. Want to collaborate with me? Feel free to
        contact!
      </Text>
      <View style={styles.icons}>
        <Icon
          backgroundColor="#ff4d4d"
          onPress={() => Linking.openURL("mailto:saberbasha752002@gmail.com")}
          name={"email"}
          size={50}
        />
        <Icon
          onPress={() => Linking.openURL("https://github.com/zero7zero5")}
          backgroundColor="#ff4d4d"
          name={"github"}
          size={50}
        />
        <Icon
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/saber-basha-s/")
          }
          backgroundColor="#ff4d4d"
          name={"linkedin"}
          size={50}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
export default About;