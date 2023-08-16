import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button } from "react-native-elements";

const yupValidatePostSchema = Yup.object().shape({
  imgPost: Yup.string().url().required("Hình ảnh phải là một đường dẫn url"),
  content: Yup.string().max(99, "Bài viết không được quá 1000 kí tự"),
});

export default function FormikPost() {
  const initImgPost =
    "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/a3/26/95/a3269589-8e69-e39f-1890-3f5702552f1f/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png";
  const [imgPost, setImgPost] = useState();
  return (
    <View>
      <Formik
        initialValues={{ imgPost: "", content: "" }}
        validationSchema={yupValidatePostSchema}
        onSubmit={(value) => console.log("on submit", value)}
        validateOnMount={true}
      >
        {({ handleChange, handleSubmit, errors, values }) => (
          <>
            <View className="flex flex-row justify-between mt-5">
              <Image
                className="w-[30%] h-[100px] rounded-md"
                source={{ uri: imgPost ? imgPost : initImgPost }}
              ></Image>
              <View>
                <TextInput
                  placeholder="Nhập nội dung bài viết"
                  placeholderTextColor="gray"
                  multiline={true}
                  className="w-[70%] text-[19px] text-gray-100"
                  value={values.content}
                  onChangeText={handleChange("content")}
                ></TextInput>
                {errors.content && (
                  <Text className="text-red-600 mb-5 font-semibold text-[14px]">
                    {errors.content}
                  </Text>
                )}
              </View>
            </View>
            <View className="mt-4">
              <TextInput
                placeholder="Nhập url hình ảnh"
                placeholderTextColor="gray"
                multiline={true}
                onChange={(e) => setImgPost(e.nativeEvent.text)}
                className="text-gray-100 text-[19px]"
                value={values.imgPost}
                onChangeText={handleChange("imgPost")}
              ></TextInput>
            </View>
            {errors.imgPost && (
              <Text className="text-red-600 mb-5 font-semibold text-[19px]">
                {errors.imgPost}
              </Text>
            )}
            <Button className="h-10" onPress={handleSubmit}>
              <Text>Đăng bài</Text>
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
}
