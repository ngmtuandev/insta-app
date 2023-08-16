import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderPost from "./HeaderPost";
import CenterPost from "./CenterPost";
import CommentPost from "./CommentPost";
export default function Post({ data }) {
  return (
    <View className="pt-6 w-[100%] border-t-[1px] border-gray-600 pb-6">
      <SafeAreaView>
        <HeaderPost name={data.user} imgUser={data.imgUser}></HeaderPost>
        <CenterPost
          imgPost={data.imgPost}
          likes={data.likes}
          caption={data.caption}
          name={data.user}
        ></CenterPost>
        <CommentPost comments={data.comments}></CommentPost>
      </SafeAreaView>
    </View>
  );
}
