import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import React, { useState } from "react";
import { tabs } from "../../assets/data";
export default function TabsBotton() {
  const [active, setActive] = useState("Home");
  return (
    <View className="z-1000 w-[100%] border-t-[1px] border-gray-500 px-5 flex flex-row items-center justify-between h-[60px] shadow-2xl ">
      {tabs.map((item, index) => {
        return (
          <View key={index}>
            <TouchableOpacity onPress={() => setActive(item.name)}>
              {item.name == "User" ? (
                <Image
                  className="w-10 h-10 rounded-full"
                  source={{ uri: item.active }}
                ></Image>
              ) : (
                <Icon
                  name={item.active}
                  color={active === item.name ? "white" : "gray"}
                  size={30}
                />
              )}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
