import { Text, Image, FlatList, RefreshControl, View } from "react-native";
import React from "react";
import { Worker } from "@/model/worker";
import EmptyState from "./EmptyUserList";
import { AntDesign, Feather, Octicons } from "@expo/vector-icons";

interface RenderWorkerItemProps {
  workers: Worker[];
  refreshing: boolean;
  onRefresh: () => void;
}

const RenderWorkerItem = ({
  workers,
  onRefresh,
  refreshing,
}: RenderWorkerItemProps) => {
  const renderItem = ({ item }: { item: Worker }) => (
    <View className=" bg-[#DBE2EF] rounded-xl mx-2 my-4 p-4 flex-row">
      <Image
        source={{ uri: item.AvatarUrl }}
        className="w-[70px] h-[70px] rounded-full mr-3"
        resizeMode="contain"
      />
      <View className="flex-1">
        <Text className="font-bold text-xl mb-3">{item.FullName}</Text>
        <Text className="text-base text-gray-500 mb-3">
          <AntDesign name="mail" size={19} color="black" />{"  "}{item.Email}
        </Text>
        <Text className="text-base text-gray-500 mb-3">
          <Feather name="phone-call" size={19} color="black" />{" "}
          {" "}{item.PhoneNumber}
        </Text>
      </View>
      <View className="absolute right-5 top-3">
        { item.isBusy ? <Octicons name="dot-fill" size={50} color="#39A81D" />
        : <Octicons name="dot-fill" size={50} color="#C12727" />}
      </View>
    </View>
  );

  return (
    <FlatList
      data={workers}
      renderItem={renderItem}
      keyExtractor={(item) => item.AccountId} // Use AccountId as the unique key
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListEmptyComponent={
        <EmptyState
          title="Không có nhân viên"
          subtitle="Không tìm nhân viên mà bạn cần"
        />
      }
    />
  );
};

export default RenderWorkerItem;
