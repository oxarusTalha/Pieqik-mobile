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
  import { Ionicons } from '@expo/vector-icons';

  export default function PhoneNumber({ onPressIncrease,onPressReduce,pressCross }) {
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
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Ionicons name="chevron-back" size={24} color="black"  onPress={onPressReduce}/>
        <Entypo name="circle-with-cross" size={24} color="black" onPress={pressCross} />
        </View>
        <View style={styles.titleArea}>
          <Text style={styles.title}>What’s your phone</Text>
          <Text style={styles.title}>number ?</Text>
        </View>
  
        <View style={styles.contentArea}>
          <Text style={styles.content}>
          We need it to verify your account, and exclusively
          </Text>
          <Text style={styles.content}>for that reason. It will never be shown on your profile.</Text>
        </View>
  
        <View style={styles.textArea}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Phone Number"
          />
        </View>
  
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.nextButton}   onPress={onPressIncrease}> 
            <Text style={styles.nextButtonText}>Send Code</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFEFEF",
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
  