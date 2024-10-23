import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { products } from '@/constants/data';
import { Product } from '@/model/product';
import EmptyState from '@/components/custom_components/EmptyState';

const ProductDetail = () => {
  const params = useLocalSearchParams();
  const ProductId = params.ProductId;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Chi tiết sản phẩm",
      headerTitleAlign: "left",
      headerStyle: { backgroundColor: "#4072AF" },
      headerTintColor: "white",
    });
  }, [navigation]);

  const product = products.find((item: Product) => item.ProductId === ProductId);

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center">
        <EmptyState title='Không có sản phẩm' subtitle='Không tìm sản phẩm mà bạn cần'/>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <ScrollView>
        <View className=' py-10 mb-10 w-full flex justify-center items-center'>
          <Image
            source={{ uri: product.ImageUrl }}
            className="w-60 h-60"
            resizeMode="contain"
          />
        </View>
        <View>
        <Text className="text-xl font-bold">{product.Name || 'Tên sản phẩm không có'}</Text>
          <View className="flex-row justify-between w-[80%] items-end">
            <Text className="text-xl text-[#3F72AF] font-bold">
              {product.ProductPrices.PriceByDate.toLocaleString()}.000 VND
            </Text>
            <Text
              className={`text-base ${
                product.In_Of_Stock < 1 ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {product.In_Of_Stock < 1 ? 'Hết hàng' : `Còn hàng: ${product.In_Of_Stock}`}
            </Text>
          </View>
          <Text className='underline text-lg font-bold'>Mô tả sản phẩm:</Text>
          <Text className="text-gray-500 mb-4">{product.Description || 'Mô tả không có'}</Text>
          <Text className='underline text-lg font-bold'>Bảo hành: {product.WarrantyMonths || "Không có dữ liệu"} tháng</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
