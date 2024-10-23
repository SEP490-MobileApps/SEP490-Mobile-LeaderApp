// RenderContractCard.tsx

import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React from "react";
import { Contract } from "@/model/contract";
import { formatCurrency, formatDate } from "@/utils/utils";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import EmptyState from "./EmptyState";

interface ContractProps {
  contract: Contract[];
  refreshing: boolean;
  onRefresh: () => void;
}

const RenderContractCard = ({
  contract,
  refreshing,
  onRefresh,
}: ContractProps) => {
  const renderItem = ({ item }: { item: Contract }) => (
    <TouchableOpacity
      className=" m-3 p-4 rounded-lg border border-black"
      onPress={() => router.push(`/contractDetail/${item.ContractId}`)}
    >
      <View className="flex-row items-center mb-4">
        <Image
          source={require("../../assets/images/image 60.png")}
          className="w-[50px] h-[50px] mr-2"
          resizeMode="contain"
        />
        <View className="flex-1">
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-lg font-semibold"
          >
            {item.ServicePackages.Name}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-lg font-semibold"
          >
            {formatCurrency(item.ServicePackagePrices.PriceByDate)}
          </Text>
        </View>
      </View>
      <View className="flex-row justify-center items-center mb-4">
        {item.Customers.AvatarUrl ? (
          <Image
            source={{ uri: item.Customers.AvatarUrl }}
            className="w-16 h-16 rounded-full"
          />
        ) : (
          <FontAwesome name="user-circle" size={64} color="black" />
        )}
        <Text className="ml-4 text-lg font-bold">
          {item.Customers.FullName}
        </Text>
      </View>

      <View className="flex flex-row justify-between items-center p-5 bg-[#DBE2EF] rounded-xl">
        <Text className="text-sm">Ngày đăng kí:</Text>
        <Text className="text-sm">{formatDate(item.PurchaseTime)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={contract}
      renderItem={renderItem}
      keyExtractor={(item) => item.ContractId}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListEmptyComponent={<EmptyState title='Không có hợp đồng' subtitle='Không tìm hợp đồng mà bạn cần'/>}
    />
  );
};

export default RenderContractCard;
