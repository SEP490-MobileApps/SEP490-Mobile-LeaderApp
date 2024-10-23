import { View, SafeAreaView, Text } from "react-native";
import React, { useState } from "react";
import SearchInput from "@/components/custom_components/SearchInput";
import RenderProductItem from "@/components/custom_components/RenderProductItem";
import { products } from "@/constants/data";
import { FontAwesome5 } from "@expo/vector-icons";
import IconButton from "@/components/custom_components/IconButton";
import CustomSheet from "@/components/custom_components/ProductSheet";
import { useGlobalState } from "../../context/GlobalProvider";

const product = () => {
  const { setIsProductOpen } = useGlobalState();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate a data fetch or refresh logic
    setTimeout(() => {
      // Here you would fetch the new data if needed
      setRefreshing(false);
    }, 2000); // Simulate network request delay
  };

  const handleOpenPress = () => {
    setIsProductOpen(true);
  };

  return (
    <SafeAreaView className="w-full h-full mt-5 px-4">
      <View className="flex flex-row w-full justify-between mb-5">
        <SearchInput placeholder="Tìm kiếm" />
        <IconButton
          icon={<FontAwesome5 name="filter" size={24} color="white" />}
          containerStyles="px-4"
          handlePress={handleOpenPress}
        />
      </View>
      <RenderProductItem
        products={products}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <CustomSheet />
    </SafeAreaView>
  );
};

export default product;
