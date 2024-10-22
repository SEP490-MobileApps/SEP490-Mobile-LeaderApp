import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import FormField from '@/components/custom_components/FormField'
import CustomButton from '@/components/custom_components/CustomButton'
import { router } from 'expo-router'

const forgetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const submit = async () => {
    setEmailError('');

    if (!email) {
      setEmailError('Email không được để trống');
      return;
    }

    setIsSubmitting(true);

    Alert.alert('Đã gửi link', 'Kiểm tra mail để đổi mật khẩu')
    router.back();


    setIsSubmitting(false);
  };


  return (
    <SafeAreaView className="w-full  h-full mt-20 px-4">
      <View className="mb-10">
        <Text className="text-3xl font-semibold text-center">Bạn Đã Quên Mật Khẩu?</Text>
        <Text className="text-xl text-gray-500 text-center">Hãy Nhập Email Của Bạn Để Cài Lại Mật Khẩu.</Text>
      </View>
      <FormField
        title="Địa chỉ Email"
        value={email}
        handleChangeText={(e: string) => setEmail(e)}
        placeholder="Nhập địa chỉ Email"
        otherStyles="mt-7 "
        keyboardType="email-address"
      />
      {emailError ? <Text className="text-red-500 absolute top-[275px] font-bold left-4 ">{emailError}</Text> : null} 

            <CustomButton
            title="Xác nhận mật khẩu"
            handlePress={submit}
            containerStyles="mt-7 mt-14"
            isLoading={isSubmitting}
      />
    </SafeAreaView>
  )
}

export default forgetPassword