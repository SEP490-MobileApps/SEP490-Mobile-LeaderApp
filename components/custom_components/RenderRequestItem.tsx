import { View, Text, SectionList } from "react-native";
import React from "react";
import { Request } from "@/model/request";
import { formatDate } from "@/utils/utils";
import StatusTag from "./StatusTag";

interface RenderRequestItemProps {
  sections: { title: string; data: Request[] }[];
}

const RenderRequestItem = ({ sections }: RenderRequestItemProps) => {
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

  const renderSectionHeader = ({ section }: { section: { title: string } }) => (
    <View className="p-8">
      <Text className="text-2xl font-bold text-center">{section.title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={sections}
      renderItem={renderRequestItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item) => item.RequestId}
    />
  );
};

export default RenderRequestItem;
