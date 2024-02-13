import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function HomeScreen({ onPressIncrease }) {
  const [fontsLoaded] = useFonts({
    "ClashDisplay-Bold": require("./../../../../assets/fonts/ClashDisplay-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.centerContent}>
          <View style={styles.rectangle}></View>
          <Text style={styles.title}>People worth meeting.</Text>
          <Text style={styles.content}>Less swiping and</Text>
          <Text style={styles.content}>more great dates</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="google" size={24} color="black" />
            <Text style={styles.buttonText}>Connect with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={onPressIncrease}
          >
            <Entypo name="phone" size={24} color="black" />
            <Text style={styles.buttonText}>Connect with Number</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appleButton}>
            <Ionicons name="logo-apple" size={24} color="white" />
            <Text style={styles.appleButtonText}>Connect with Apple</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>
            When you sign up, you accept our{" "}
            <Text style={{ fontWeight: "bold" }}>Terms of Service</Text> and our{" "}
            <Text style={{ fontWeight: "bold" }}>Privacy policy</Text>.
          </Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C3FFAE",
    padding: 24,
    justifyContent: "space-between",
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 125,
  },
  rectangle: {
    height: 54,
    width: 54,
    backgroundColor: "black",
    borderRadius: 13,
    marginBottom: 18,
  },
  title: {
    fontSize: 34,
    fontFamily: "ClashDisplay-Bold",
    textAlign: "center",
    marginBottom: 18,
  },
  content: {
    fontSize: 22,
    fontWeight: "normal",
    textAlign: "center",
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  appleButton: {
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 16,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  appleButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#C3FFAE",
  },
  footerText: {
    fontSize: 12,
    paddingRight: 50,
    paddingLeft: 50,
    textAlign: "center",
    fontWeight: "300",
  },
});

HomeScreen.navigationOptions = {
    headerShown: false, // Navigasyon çubuğunu gizle
  };