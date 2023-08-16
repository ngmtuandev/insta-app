import { View, Text, ScrollView } from "react-native";
import React from "react";

export default function CommentPost({ comments }) {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text className="text-gray-400 text-[16px] mb-1">
            {comments.length > 0
              ? `Bài viết có ${comments.length} bình luận`
              : "Bài viết không có bình luận"}
          </Text>
        </View>
        <View>
          {comments.length > 0 &&
            comments.map((item, index) => {
              return (
                <View key={index} className="flex-row items-center mb-1 flex">
                  <Text className="text-gray-100 text-[18px] font-bold">
                    {item.user + " "}
                  </Text>
                  <Text className="text-gray-300 text-[17px] ">
                    {item.comment}
                  </Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
