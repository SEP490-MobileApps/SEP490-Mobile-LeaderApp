import { View, Text, FlatList, RefreshControl } from "react-native";
import React from "react";
import { Request } from "@/model/request";
import { formatDate } from "@/utils/utils";
import StatusTag from "./StatusTag";
import EmptyState from "./EmptyState";

interface RenderRequestItemProps {
  requests: Request[];
  refreshing: boolean;
  onRefresh: () => void;
}

const RenderNewRequestItem = ({
  requests,
  onRefresh,
  refreshing,
}: RenderRequestItemProps) => {
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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListHeaderComponent={
        <Text className="text-center font-bold text-xl">
          Yêu Cầu Sửa Chữa Gần Đây
        </Text>
      }
      ListEmptyComponent={
        <EmptyState
          title="Không có yêu cầu"
          subtitle="Không tìm yêu cầu mà bạn cần"
        />
      }
    />
  );
};

export default RenderNewRequestItem;
