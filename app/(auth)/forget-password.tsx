import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import FormField from '@/components/custom_components/FormField'
import CustomButton from '@/components/custom_components/CustomButton'

const forgetPassword = () => {
  return (
    <SafeAreaView className="w-full  h-full mt-20 px-4">
      <View className="mb-10">
        <Text className="text-3xl font-semibold text-center">Bạn Đã Quên Mật Khẩu?</Text>
        <Text className="text-xl text-gray-400 text-center">Hãy Nhập Email Của Bạn Để Cài Lại Mật Khẩu.</Text>
      </View>
      <FormField
        title="Địa chỉ Email"
        // value={form.email}
        // handleChangeText={(e: any) => setForm({ ...form, email: e })}
        placeholder="Nhập địa chỉ Email"
        otherStyles="mt-7 "
        keyboardType="email-address"
      />
            <CustomButton
            title="Xác nhận mật khẩu"
            // handlePress={submit}
            containerStyles="mt-7 mt-14"
            // isLoading={isSubmitting}
      />
    </SafeAreaView>
  )
}

export default forgetPassword