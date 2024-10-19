import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

const productDetail = () => {
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

  return (
    <View className="flex-1 justify-center items-center">
      <Image source={{ uri:"https://m.media-amazon.com/images/I/51Wwg4MvY8L.jpg" }}
                className="w-full h-48 rounded-md mb-2"
          resizeMode="contain"
      />
    </View>
  );
};

export default productDetail;
