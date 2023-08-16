import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Form from "../Component/FormStyle/Form";
export default function Signup() {
  return (
    <SafeAreaView>
      <View className="bg-white pt-36 ">
        <Form isSignUp={true}></Form>
      </View>
    </SafeAreaView>
  );
}
