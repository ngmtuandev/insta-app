import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/EvilIcons";

export default function CenterPost({ imgPost, likes, caption, name }) {
  return (
    <View className="flex flex-col justify-between ">
      <View className="w-[100%] ">
        <Image
          className="rounded-md w-[100%] h-[500px] object-contain"
          source={{ uri: imgPost }}
        ></Image>
      </View>
      <View className="flex flex-row  mt-6 items-center justify-between">
        <View className="flex w-[30%] flex-row items-center justify-between">
          <TouchableOpacity>
            <Icon name="hearto" color="#eee" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon2 name="comment" color="#eee" size={40} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon1 name="send" color="#eee" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Icon1 name="share" color="#eee" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text className="text-gray-100 mt-3 font-medium text-[19px]">
          {likes} likes
        </Text>
      </View>
      <View className="flex flex-row flex-wrap items-center">
        <Text className="text-gray-100 font-bold text-[19px]">
          {name.length > 10 ? name.slice(0, 10) + "... " : name}
        </Text>
        <Text className="my-2 text-gray-300 text-[18px]">{caption}</Text>
      </View>
    </View>
  );
}
