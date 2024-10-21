import { View, Text, FlatList } from "react-native";
import React from "react";
import { Request } from "@/model/request";
import { formatDate } from "@/utils/utils";
import StatusTag from "./StatusTag";

interface RenderRequestItemProps {
  requests: Request[];
}

const RenderNewRequestItem = ({ requests }: RenderRequestItemProps) => {
  const renderRequestItem = ({ item }: { item: Request }) => (
    <View className="border-b-[1px] border-black py-4 mb-5">
      <Text className="text-lg font-semibold mb-3" numberOfLines={1}>
        {item.CustomerProblem}
      </Text>
      <StatusTag status={item.Status} />
      <View className="flex flex-row justify-between mt-3">
        <View>
          <Text className="text-sm text-gray-500 mb-3">Căn hộ:</Text>
          <Text className="text-sm text-gray-500">Ngày yêu cầu: </Text>
        </View>
        <View>
          <Text className="text-sm text-gray-500 text-right mb-3">
            {item.Customer.RoomId}
          </Text>
          <Text className="text-sm text-gray-500 text-right">
            {formatDate(item.Start)}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={requests}
      renderItem={renderRequestItem}
      keyExtractor={(item) => item.Customer.RoomId}
    />
  );
};

export default RenderNewRequestItem;
