import { View, Text, Image } from "react-native";
import React from "react";

interface EmptyStateProps {
    title: string;
    subtitle: string;
  }

const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
  return (
    <View className="justify-center items-center  px-4">
      <Image
        source={require("../../assets/images/image 65.png")}
        className="w-[300px] h-[300px]"
        resizeMode="contain"
      />
      <Text className="text-2xl text-black font-bold">{title}</Text>
      <Text className="text-base text-gray-500 mt-2">{subtitle}</Text>
    </View>
  );
};

export default EmptyState;
