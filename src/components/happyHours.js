import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";

import { h, w } from "./variable/dimension";

class HappyHours extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContaner}>
          <Image
            source={require("../../assets/img/happyhours.png")}
            resizeMode="cover"
            style={{
              height: 60,
              width: 60
            }}
          />
          <View style={styles.headerText}>
            <Text style={styles.title}>Happy Hours!</Text>
            <Text style={{ fontSize: 13, color: "#fff" }}>
              Booked <Text style={{ fontWeight: "bold" }}>1002</Text> times
              since yesterday
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}></View>
        <View style={styles.viewer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  headerContaner: {
    height: 80,
    width: w * 0.9,
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    height: 50,
    width: w * 0.9 - 60,
    paddingHorizontal: 15,
    justifyContent: "space-between"
  },
  title: { fontWeight: "bold", fontSize: 20, color: "#fff" },
  contentContainer: {
    width: w * 0.9,
    height: h * 0.61,
    backgroundColor: "yellow",
    borderRadius: 10
  },
  viewer: {
    width: w * 0.95,
    height: h * 0.05,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 30
  }
});

export default HappyHours;
