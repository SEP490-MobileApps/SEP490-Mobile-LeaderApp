import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { contracts } from "@/constants/data";
import { Contract } from "@/model/contract";
import { formatDate } from "@/utils/utils";
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native'; 
import EmptyState from "@/components/custom_components/EmptyState";

const ContractDetail = () => {
  const { width } = useWindowDimensions(); 
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

  if (!contract) {
    return (
      <View className="flex-1 justify-center items-center">
        <EmptyState title='Không có hợp đồng' subtitle='Không tìm hợp đồng mà bạn cần'/>
      </View>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView className="flex-1">
        <View className="w-full flex items-center">
          <Text className="bg-[#DBE2EF] text-[#5F60B9] p-4 text-center text-xl font-bold w-full">
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
          <Text className="bg-[#DBE2EF] text-[#5F60B9] p-4 text-center text-xl font-bold w-full">
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
          <Text className="bg-[#DBE2EF] text-[#5F60B9] p-4 text-center text-xl font-bold w-full">
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
              <RenderHTML
                contentWidth={width}
                source={{ html: contract?.ServicePackages.Policy ?? '<p>Không có dữ liệu</p>' }}
              />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ContractDetail;
