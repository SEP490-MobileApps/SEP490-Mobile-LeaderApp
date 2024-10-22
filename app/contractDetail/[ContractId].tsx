import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { contracts } from "@/constants/data";
import { Contract } from "@/model/contract";
import { formatDate } from "@/utils/utils";
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native'; // For responsive width

const ContractDetail = () => {
  const { width } = useWindowDimensions(); // Get the window dimensions for responsive HTML rendering
  const params = useLocalSearchParams();
  const ContractId = params.ContractId;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Chi tiết hợp đồng",
      headerTitleAlign: "left",
      headerStyle: { backgroundColor: "#4072AF" },
      headerTintColor: "white",
    });
  }, [navigation]);

  const contract = contracts.find(
    (item: Contract) => item.ContractId === ContractId
  );

  return (
    <ScrollView>
      <View className="w-full flex items-center">
        <Text className="bg-[#DBE2EF] p-4 text-center text-xl font-bold w-full">
          Thông tin hợp đồng
        </Text>
        <View className="w-[100%] flex-row justify-evenly mt-8">
          <View>
            <Text className="font-bold text-base mb-2">Mã hợp đồng:</Text>
            <Text className="font-bold text-base mb-2">Ngày tạo hợp đồng:</Text>
            <Text className="font-bold text-base mb-8">Bản scan hợp đồng:</Text>
          </View>
          <View>
            <Text className="text-base mb-2 text-right text-gray-500">{contract?.ContractId ?? 'Không có dữ liệu'}</Text>
            <Text className="text-base mb-2 text-right text-gray-500">{contract?.PurchaseTime ? formatDate(contract.PurchaseTime) : 'Không có dữ liệu'}</Text>
            <Text
              className="text-blue-700 underline text-base mb-8 text-right"
              onPress={() => router.push(`/contractImage/${contract?.ContractId}`)}
            >
              Xem chi tiết
            </Text>
          </View>
        </View>
      </View>
      <View className="w-full flex items-center">
        <Text className="bg-[#DBE2EF] p-4 text-center text-xl font-bold w-full">
          Thông tin khách hàng
        </Text>
        <View className="w-[100%] flex-row justify-evenly mt-8">
          <View>
            <Text className="font-bold text-base mb-2">Họ và tên:</Text>
            <Text className="font-bold text-base mb-2">Ngày tạo hợp đồng:</Text>
            <Text className="font-bold text-base mb-2">Điện thoại:</Text>
            <Text className="font-bold text-base mb-8">Email:</Text>
          </View>
          <View>
            <Text className="text-base mb-2 text-right text-gray-500">{contract?.Customers.FullName ?? 'Không có dữ liệu'}</Text>
            <Text className="text-base mb-2 text-right text-gray-500">{contract?.Customers.DateOfBirth ? formatDate(contract.Customers.DateOfBirth) : 'Không có dữ liệu'}</Text>
            <Text className="text-base mb-2 text-right text-gray-500">{contract?.Customers.PhoneNumber ?? 'Không có dữ liệu'}</Text>
            <Text className="text-base mb-8 text-right text-gray-500">{contract?.Customers.Email ?? 'Không có dữ liệu'}</Text>
          </View>
        </View>
      </View>
      <View className="w-full flex items-center">
        <Text className="bg-[#DBE2EF] p-4 text-center text-xl font-bold w-full">
          Thông tin gói dịch vụ
        </Text>
        <Text className="text-lg font-semibold mt-6">
          {contract?.ServicePackages.Name ?? 'Không có dữ liệu'}
        </Text>
        <View className="mt-8 mb-5">
            <Text className='underline text-lg font-bold'>Mô tả gói:</Text>
            <Text className="mt-3">{contract?.ServicePackages.Description}</Text>
        </View>
        <View className="mt-8 mb-5 w-[75%]">
            <Text className='underline text-lg font-bold'>Chính sách:</Text>
            {/* Render the policy using RenderHTML */}
            <RenderHTML
              contentWidth={width} // Use the screen width for better responsiveness
              source={{ html: contract?.ServicePackages.Policy ?? '<p>Không có dữ liệu</p>' }} // Render policy content as HTML
            />
        </View>
      </View>
    </ScrollView>
  );
};

export default ContractDetail;
