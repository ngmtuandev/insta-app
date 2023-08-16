import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({ title, handleSubmit, isValid }) {
  // console.log(isValid);
  return (
    <View
      className={`w-[90%] mt-4 h-[45px] flex items-center justify-center rounded-md ${
        isValid ? "bg-blue-500" : "bg-blue-900"
      }`}
    >
      <TouchableOpacity onPress={handleSubmit}>
        <Text className="font-medium text-[21px] text-gray-50">{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
