import { View, Text, ScrollView, Image, SafeAreaView } from "react-native";
import React from "react";
import { dataUser } from "../../assets/data";
export default function Stories() {
  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dataUser.length > 0 &&
          dataUser.map((item, index) => {
            return (
              <View
                className="mx-2 my-5 flex flex-col justify-center items-center"
                key={index}
              >
                <Image
                  className="w-20 h-20 rounded-full border-yellow-400 border-2"
                  source={{ uri: item.img }}
                ></Image>
                <Text className="text-gray-200 font-semibold mt-2 text-[16px]">
                  {item.name.length > 10
                    ? item.name.slice(0, 10).toUpperCase() + "..."
                    : item.name.toUpperCase()}
                </Text>
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
}
