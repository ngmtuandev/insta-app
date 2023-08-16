import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Header from "../Component/Home/Header";
import Stories from "../Component/Home/Stories";
import Post from "../Component/Home/Post";
import { dataPost } from "../assets/data";
import TabsBotton from "../Component/Home/TabsBotton";
import { database } from "../firebase";
import { collectionGroup, getDocs } from "firebase/firestore";
export default function Home() {
  useEffect(() => {
    const getCollectPost = async () => {
      const querySnapshot = await getDocs(collectionGroup(database, "posts"))
      // console.log('test',querySnapshot)
      querySnapshot.forEach((doc) => {
      console.log("data: ", doc.data());
    })
    }
    getCollectPost()
  }, [])
  return (
    <SafeAreaView className="h-[100%] px-3 w-screen pt-9 bg-black">
      <Header></Header>
      <Stories></Stories>
      <ScrollView showsVerticalScrollIndicator={false}>
        {dataPost.length > 0 &&
          dataPost.map((item, index) => {
            return <Post data={item} key={index}></Post>;
          })}
      </ScrollView>
      <View className="z-50">
        <TabsBotton></TabsBotton>
      </View>
    </SafeAreaView>
  );
}
