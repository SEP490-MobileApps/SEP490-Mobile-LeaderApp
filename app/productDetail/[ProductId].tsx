import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Divider } from 'react-native-paper';
import { products } from '@/constants/data';
import { Product } from '@/model/product';

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
        <Text>Product not found!</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        source={{ uri: product.ImageUrl }}
        className="w-full h-48 rounded-md mb-10"
        resizeMode="contain"
      />
      <Divider />
      <View>
        <Text className="text-xl font-bold">{product.Name}</Text>
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
        <Text className="text-gray-500 mb-4">{product.Description}</Text>
        <Text className='underline text-lg font-bold'>Bảo hành: {product.WarrantyMonths} tháng</Text>

      </View>
    </View>
  );
};

export default ProductDetail;
