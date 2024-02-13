import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Entypo } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [fontsLoaded] = useFonts({
    "ClashDisplay-Bold": require("./../../../../assets/fonts/ClashDisplay-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Entypo name="cross" size={24} color="black" />
      <View style={styles.titleArea}>
        <Text style={styles.title}>What's your</Text>
        <Text style={styles.title}>name ?</Text>
      </View>

      <View style={styles.contentArea}>
        <Text style={styles.content}>
          Great name! Double check your spelling
        </Text>
        <Text style={styles.content}>because you can’t change this later.</Text>
      </View>

      <View style={styles.textArea}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="surname"
        />
      </View>

      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.nextButton}   onPress={() => navigation.navigate("Home")}> 
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF3C7",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 34,
    fontFamily: "ClashDisplay-Bold",
    textAlign: "center",
  },
  titleArea: {
    marginBottom: 32,
  },
  content: {
    fontSize: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    gap: 10,
    paddingHorizontal: 13,
    paddingVertical: 13,
    height: 48,
    width:"100%"
  },
  buttonArea: {
    display: "flex",
    alignItems: "flex-end",
  },
  contentArea: {
    marginBottom: 32,
  },
  nextButton: {
    backgroundColor: "black",
    height: 48,
    width: 74,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
  },
  nextButtonText: {
    color: "white",
    textAlign: "center",
  },
  textArea: {
    marginBottom: 65,
  },
});
