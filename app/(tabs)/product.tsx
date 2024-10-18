import { View, SafeAreaView } from "react-native";
import React from "react";
import SearchInput from "@/components/custom_components/SearchInput";
import RenderProductItem from "@/components/custom_components/RenderProductItem";
import { products } from "@/constants/data";
import { FontAwesome5 } from "@expo/vector-icons";
import IconButton from "@/components/custom_components/IconButton";

const product = () => {
  return (
    <SafeAreaView className="w-full h-full mt-5 px-4">
      <View className="flex flex-row w-full justify-between mb-5">
        <SearchInput placeholder="Tìm kiếm" />
        <IconButton
          icon={<FontAwesome5 name="filter" size={24} color="white"/>}
          containerStyles="px-4"
        />
      </View>
      <RenderProductItem products={products} />
    </SafeAreaView>
  );
};

export default product;
