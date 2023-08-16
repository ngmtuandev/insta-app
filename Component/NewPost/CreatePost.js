import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import HeaderNewPost from "./HeaderNewPost";
import FormikPost from "./FormikPost";

export default function CreatePost() {
  return (
    <SafeAreaView className="w-[100%] pt-9 px-2 h-[100%] bg-black">
      <HeaderNewPost></HeaderNewPost>
      <FormikPost></FormikPost>
    </SafeAreaView>
  );
}
