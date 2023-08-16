import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
export default function HeaderNewPost() {
  const navigate = useNavigation();
  return (
    <View className="flex flex-row items-center justify-between">
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <Icon name="left" color="#eee" size={30} />
      </TouchableOpacity>
      <Text className="uppercase text-gray-50 text-[23px]">New Post</Text>
      <View></View>
    </View>
  );
}
