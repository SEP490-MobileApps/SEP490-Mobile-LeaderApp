import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Text, View } from "react-native";
import { Checkbox } from "@ant-design/react-native";
import { router } from "expo-router";


const signIn = () => {
  return (
    <SafeAreaView className="w-full justify-center h-full px-4">
      <View className="mb-10">
        <Text className="text-3xl font-semibold text-center">Xin chào bạn,</Text>
        <Text className="text-xl text-gray-400 text-center">Hãy Đăng Nhập Để Quản Lí Công Việc</Text>
      </View>
      
      <FormField
        title="Địa chỉ Email"
        // value={form.email}
        // handleChangeText={(e: any) => setForm({ ...form, email: e })}
        placeholder="Nhập địa chỉ Email"
        otherStyles="mt-7 "
        keyboardType="email-address"
      />
      <FormField
        title="Mật khẩu"
        // value={form.email}
        // handleChangeText={(e: any) => setForm({ ...form, email: e })}
        placeholder="Nhập mật khẩu"
        otherStyles="mt-7 "
      />

      <View className="flex-row justify-between mt-5">
        <View className="flex-row ml-2">
          <Checkbox/>
          <Text className="text-lg">Ghi nhớ mật khẩu</Text>
        </View>
        <View className="">
          <Text className="text-blue-700 underline text-lg"
          onPress={() => router.push('/(auth)/forget-password')}
          >Quên mật khẩu</Text>
        </View>
      </View>

      <CustomButton
            title="Đăng nhập"
            // handlePress={submit}
            containerStyles="mt-7 mt-14"
            // isLoading={isSubmitting}
      />
      
    </SafeAreaView>
  );
};

export default signIn;
