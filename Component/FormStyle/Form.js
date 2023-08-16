import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { useState } from "react";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";
import {collection, addDoc} from 'firebase/firestore'
import * as Yup from "yup";
import { Formik } from "formik";
import { auth, database } from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
export default function Form({ isSignUp }) {
  const navigate = useNavigation();
  const [idUser, setIdUser] = useState()
  const [emailUser, setEmailUser] = useState()
  const getApiImgUserRandom = async () => {
    const rs = await fetch('https://randomuser.me/api')
    const data = await rs.json()
    return data?.results[0]?.picture?.large
  }

  const yupValidateFormSignUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Trường này phải là email"),
    username: Yup.string().required("Bạn phải nhập tên"),
    password: Yup.string()
      .required()
      .min(5, "Mật khẩu phải nhiều hơn 6 kí tự"),
  });
  const yupValidateFormLoginSchema = Yup.object().shape({
    email: Yup.string().email().required("Trường này phải là email"),
    password: Yup.string()
      .required()
      .min(5, "Mật khẩu phải nhiều hơn 6 kí tự"),
  });
  const handleLogin = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
    .then((item) => {
      console.log(item)
      navigate.navigate('Home')
    })
    .catch( console.log('Lỗi') )
  }

  const handleSignup = async (email, password, username) => {
    const userRef = collection(database, 'users');
    await createUserWithEmailAndPassword(auth, email, password)
    .then( async (item) =>  {

      await addDoc(userRef, {
        uid: item.user.uid,
        name: username,
        email: item.user.email,
        imgProfile: await getApiImgUserRandom()
      })
    })
    .catch((err) => console.log(err))
    

  }
  return (
    <SafeAreaView>
      <Formik
        validationSchema={
          isSignUp ? yupValidateFormSignUpSchema : yupValidateFormLoginSchema
        }
        initialValues={{ email: "", username: "", password: "" }}
        validateOnMount={true}
        onSubmit={values => {
          isSignUp ? handleSignup(values.email, values.password, values.username) : handleLogin(values.email, values.password)
        }}
      >
        {({ handleChange, handleSubmit, errors, values, isValid }) => (
          <>
            <View className="flex flex-col items-center w-[100%] h-screen">
              <View>
                <Image
                  className="w-[150px] h-[150px] mb-6"
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
                  }}
                ></Image>
              </View>
              <View>
                <View>
                  <TextInput
                    className={`h-[50px]  w-[350px] border-[1px] rounded-md px-3 my-2 ${
                      values.email.length > 5
                        ? "border-gray-400"
                        : "border-red-500"
                    }`}
                    placeholder="Email của bạn"
                    keyboardType="email-address"
                    placeholderTextColor="gray"
                    textContentType="emailAddress"
                    autoFocus={true}
                    value={values.email}
                    onChangeText={handleChange("email")}
                  ></TextInput>
                  {errors.email && (
                    <Text className="text-red-600 mb-5 font-semibold text-[14px]">
                      {errors.email}
                    </Text>
                  )}
                </View>
                {isSignUp && (
                  <View>
                    <TextInput
                      className="h-[50px] border-gray-400 w-[350px] border-[1px] rounded-md px-3 my-2"
                      placeholder="Tên của bạn"
                      placeholderTextColor="gray"
                      autoFocus={false}
                      value={values.username}
                      onChangeText={handleChange("username")}
                    ></TextInput>
                    {errors.username && (
                      <Text className="text-red-600 mb-5 font-semibold text-[14px]">
                        {errors.username}
                      </Text>
                    )}
                  </View>
                )}
                <View>
                  <TextInput
                    className="h-[50px] border-gray-400 w-[350px] border-[1px] rounded-md px-3 my-2"
                    placeholder="Mật khẩu của bạn"
                    placeholderTextColor="gray"
                    textContentType="password"
                    autoFocus={false}
                    value={values.password}
                    onChangeText={handleChange("password")}
                  ></TextInput>
                  {errors.password && (
                    <Text className="text-red-600 mb-5 font-semibold text-[14px]">
                      {errors.password}
                    </Text>
                  )}
                </View>
              </View>
              <View>
                {!isSignUp ? (
                  <Text className="flex font-medium text-blue-500">
                    Quên mật khẩu?
                  </Text>
                ) : (
                  ""
                )}
              </View>
              {isSignUp ? (
                <Button
                  handleSubmit={handleSubmit}
                  title={"Đăng Ký"}
                  isValid={isValid}
                ></Button>
              ) : (
                <Button
                  handleSubmit={handleSubmit}
                  title={"Đăng Nhập"}
                  isValid={isValid}
                ></Button>
              )}
              <View className="mt-3">
                {isSignUp ? (
                  <View className="flex flex-row">
                    <Text className="mr-2 text-gray-700">
                      Bạn đã có tài khoản?
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigate.navigate("Login")}
                    >
                      <Text className="font-medium text-blue-600">
                        Đăng nhập ngay
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View className="flex flex-row">
                    <Text className="mr-2 text-gray-700">
                      Bạn chưa có tài khoản?
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigate.navigate("Signup")}
                    >
                      <Text className="font-medium text-blue-600">
                        Đăng ký ngay
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View>
                <TouchableOpacity onPress={() => navigate.navigate("Home")}>
                  <Text className="font-medium text-blue-600">
                    Quay lại sang chủ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}
