import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

export default function HeaderPost({ name, imgUser }) {
  return (
    <View className="flex mb-5 flex-row items-center justify-between">
      <View className="flex flex-row items-center">
        <Image
          className="w-10 h-10 rounded-full mr-2"
          source={{ uri: imgUser }}
        ></Image>
        <Text className="text-gray-50 text-[18px]">
          {name.length > 10 ? name.slice(0, 10) + "..." : name}
        </Text>
      </View>
      <TouchableOpacity>
        <Icon name="ellipsis1" color="#eee" size={30} />
      </TouchableOpacity>
    </View>
  );
}
