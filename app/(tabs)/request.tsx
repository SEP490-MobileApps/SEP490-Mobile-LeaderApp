import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import RenderRequestItem from "@/components/custom_components/RenderRequestItem";
import CustomButton from "@/components/custom_components/CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "@/components/Themed";
import CustomSheet from "@/components/custom_components/RequestSheet";
import { useGlobalState } from "../../context/GlobalProvider";
import {
  newRequests,
  inProgressRequests,
  completedRequests,
  cancelledRequests,
} from "@/constants/data";

const Request = () => {
  const { setIsRequestOpen } = useGlobalState();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate a data fetch or refresh logic
    setTimeout(() => {
      // Here you would fetch the new data if needed
      setRefreshing(false);
    }, 2000); // Simulate network request delay
  };

  const handleOpenPress = () => {
    setIsRequestOpen(true);
  };

  // Grouping requests by status into sections
  const requests = [
    {
      title: "Yêu cầu mới",
      data: newRequests,
    },
    {
      title: "Đang thực hiện",
      data: inProgressRequests,
    },
    {
      title: "Hoàn thành",
      data: completedRequests,
    },
    {
      title: "Hủy bỏ",
      data: cancelledRequests,
    },
  ];

  return (
    <SafeAreaView className="w-full h-full mt-5 px-4">
      <View className="flex flex-row justify-end mb-5">
        <View className="w-28">
          <CustomButton
            title="Bộ lọc"
            icon={<FontAwesome5 name="filter" size={24} color="white" />}
            handlePress={handleOpenPress}
          />
        </View>
      </View>

      {/* Passing the requests sections to RenderRequestItem */}
      <RenderRequestItem
        sections={requests}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <CustomSheet />
    </SafeAreaView>
  );
};

export default Request;
