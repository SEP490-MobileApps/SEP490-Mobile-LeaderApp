import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const productDetail = () => {
  const { ProductId } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl">Product Detail</Text>
      <Text className="text-lg mt-2">Product ID: {ProductId}</Text>
    </View>
  );
};

export default productDetail;
