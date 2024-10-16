import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      className={`bg-[#3F72AF] rounded-xl min-h-[62px] justify-center ${containerStyles} ${isLoading ? `opacity-50`: ``}`}
        disabled={isLoading}
    >
      <Text className={`${textStyles} text-white text-lg text-center`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
