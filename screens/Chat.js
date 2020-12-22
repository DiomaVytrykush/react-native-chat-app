import React from "react";
import {
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Fire from "../Fire";
import { AntDesign } from "@expo/vector-icons";

export class Chat extends React.Component {
  state = {
    messages: [],
  };

  get user() {
    return {
      _id: Fire.uid,
      name: this.props.route.params,
    };
  }

  componentDidMount() {
    Fire.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      }))
    );
  }

  componentWillUnmount() {
    Fire.off();
  }

  navigate = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
      />
    );
    if (Platform.OS === "android") {
      return (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={30}
          enabled
        >
          {chat}
        </KeyboardAvoidingView>
      );
    }
    return (
      <>
        <TouchableOpacity style={styles.navigate} onPress={this.navigate}>
          <AntDesign name="leftcircleo" size={50} color="black" />
        </TouchableOpacity>
        <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  navigate: {
    marginLeft: 30,
    marginTop: 52,
  },
});

export default Chat;
