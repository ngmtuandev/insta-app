import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
export default function Header() {
  const navigate = useNavigation();
  const handleSignOut = async () => {
    try {
      await auth.signOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View className="flex flex-row items-center justify-between">
      <View>
        <TouchableOpacity onPress={handleSignOut}>
          <Text className="font-semibold text-[25px] text-gray-100">
            Insbita
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex w-[30%] flex-row justify-between">
        <TouchableOpacity onPress={() => navigate.navigate("UpPost")}>
          <View>
            <Icon name="plussquare" color="#eee" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Icon name="heart" color="#eee" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="relative">
            <Icon name="message1" color="#eee" size={30} />
            <View className="absolute px-1 bg-red-500 rounded-md -right-2 -top-2 z-100">
              <Text className="font-medium text-gray-200">11</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
