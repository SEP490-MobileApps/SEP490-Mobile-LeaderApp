import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { TextInputProps } from "@ant-design/react-native/lib/input-item";

interface FormFieldProps extends TextInputProps {
  title: string;
  values?: string;
  placeholder: string;
  handleChangeText?: (text: string) => void;
  otherStyles?: string;
  icon?: React.ReactNode;
}

const FormField = ({
  title,
  values,
  placeholder,
  handleChangeText,
  otherStyles,
  icon,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-2xl text-black ">{title}</Text>
      <View className="bg-[#DBE2EF] w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary-100 items-center flex-row">
        <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={values}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Mật khẩu" && !showPassword}
          {...props}
        />
        {title === "Mật khẩu" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <AntDesign name="eye" size={24} color="black" />
            ) : (
              <Entypo name="eye-with-line" size={24} color="black" />
            )}
          </TouchableOpacity>
        ) || title === "Địa chỉ Email" && (<AntDesign name="mail" size={24} color="black" />)}
      </View>
    </View>
  );
};

export default FormField;
