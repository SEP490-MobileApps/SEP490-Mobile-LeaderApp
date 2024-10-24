import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/custom_components/FormField";
import CustomButton from "@/components/custom_components/CustomButton";
import { Text, View } from "react-native";
import { Checkbox } from "@ant-design/react-native";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";


const signIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  

  const submit = async () => {
    setEmailError('');
    setPasswordError('');

    if (!form.email) {
      setEmailError('Email không được để trống');
      return;
    }

    if (!form.password) {
      setPasswordError('Mật khẩu không được để trống');
      return;
    }

    setIsSubmitting(true);
    console.log(form)

    router.replace('/(tabs)/home');

    setIsSubmitting(false);

  };

  return (
    <SafeAreaView className="w-full h-full mt-20 px-4">
      <View className="mb-10">
        <Text className="text-3xl font-semibold text-center mb-5">Xin chào bạn,</Text>
        <Text className="text-xl text-gray-400 text-center">Hãy Đăng Nhập Để Quản Lí Công Việc</Text>
      </View>
      
      <FormField
        title="Địa chỉ Email"
        value={form.email} 
        handleChangeText={(e: string) => setForm({ ...form, email: e })}
        placeholder="Nhập địa chỉ Email"
        otherStyles="mt-7"
        keyboardType="email-address"
        icon={<AntDesign name="mail" size={24} color="black" />}
      />
      {emailError ? <Text className="text-red-500 absolute top-[270px] font-bold left-4 ">{emailError}</Text> : null} 
      
      <FormField
        title="Mật khẩu"
        value={form.password}
        handleChangeText={(e: string) => setForm({ ...form, password: e })}
        placeholder="Nhập mật khẩu"
        otherStyles="mt-10"
        secureTextEntry 
      />
      {passwordError ? <Text className="text-red-500 absolute font-bold bottom-[376px] left-4">{passwordError}</Text> : null} 
      
      <View className="flex-row justify-between mt-14">
        <View className="flex-row ml-2">
          <Checkbox />
          <Text className="text-base">Ghi nhớ mật khẩu</Text>
        </View>
        <View className="">
          <Text className="text-blue-700 underline text-base"
            onPress={() => router.push('/(auth)/forget-password')}
          >Quên mật khẩu</Text>
        </View>
      </View>

      <CustomButton
        title="Đăng nhập"
        handlePress={submit}
        containerStyles="mt-7 mt-14"
        isLoading={isSubmitting}
      />
    </SafeAreaView>
  );
};

export default signIn;