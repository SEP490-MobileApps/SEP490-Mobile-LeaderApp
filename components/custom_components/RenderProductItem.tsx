import { View, Text, Image, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import React from 'react';
import { Product } from '@/model/product';
import { router } from 'expo-router';
import { formatCurrency } from '@/utils/utils';
import EmptyState from './EmptyState';

interface RenderProductItemProps {
  products: Product[];
  refreshing: boolean;
  onRefresh: () => void;
}

const RenderProductItem = ({ products, onRefresh, refreshing }: RenderProductItemProps) => {
  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      className="bg-[#DBE2EF] rounded-lg p-4 m-1 mb-8 w-[48%] shadow-lg"
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
      <Text
        className={`text-gray-500 ${
          item.In_Of_Stock < 1 ? 'text-red-500' : 'text-gray-500'
        }`}
      >
        {item.In_Of_Stock < 1 ? 'Hết hàng' : `Số lượng: ${item.In_Of_Stock}`}
      </Text>
      <Text className="text-xl text-[#3F72AF]">
        {formatCurrency(item.ProductPrices.PriceByDate)}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.ProductId}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListEmptyComponent={<EmptyState title='Không có sản phẩm' subtitle='Không tìm sản phẩm mà bạn cần'/>}
    />
  );
};

export default RenderProductItem;
