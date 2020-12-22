import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import background from "../assets/background.jpg";

Login = ({ navigation }) => {
  const [name, setName] = React.useState("");

  const navigate = () => {
    if (name != "") {
      navigation.navigate("Chat", name);
      setName("");
    } else {
      Alert.alert("Please enter your name");
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.userName}>UserName</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={(name) => setName(name)}
            value={name}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.navigate} onPress={navigate}>
          <AntDesign name="rightcircleo" size={50} color="black" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    justifyContent: "center",
    marginHorizontal: 32,
  },
  userName: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 30,
    marginTop: 100,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 30,
    paddingHorizontal: 16,
    fontWeight: "600",
  },
  navigate: {
    marginLeft: 330,
    marginTop: 32,
  },
});

export default Login;
