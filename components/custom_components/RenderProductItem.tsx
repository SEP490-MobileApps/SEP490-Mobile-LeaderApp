import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Product } from '@/model/product';
import { router } from 'expo-router';

interface RenderProductItemProps {
  products: Product[];
}

const RenderProductItem = ({ products }: RenderProductItemProps) => {
  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
    className='bg-[#DBE2EF] rounded-lg p-4 m-1 mb-8 w-[48%] shadow-lg '
      onPress={() => router.push(`/productDetail/${item.ProductId}`)}
    >
        <Image
          source={{ uri: item.ImageUrl }}
          className="w-full h-32 rounded-md mb-2"
          resizeMode="cover"
        />
        <Text className="text-lg font-bold mb-1" numberOfLines={1}>
          {item.Name}
        </Text>
        <Text className="text-xl text-[#3F72AF]">
          {item.ProductPrices.PriceByDate}.000VND
        </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.ProductId}
      numColumns={2} // Display 2 cards per row
      columnWrapperStyle={{ justifyContent: 'space-between' }} // Space between items
    />
  );
};

export default RenderProductItem;
