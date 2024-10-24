import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { newRequests, user } from "@/constants/data";
import Notificaton from "@/components/custom_components/Notificaton";
import RenderNewRequestItem from "@/components/custom_components/RenderNewRequestItem";
import { FontAwesome } from "@expo/vector-icons";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate a data fetch or refresh logic
    setTimeout(() => {
      // Here you would fetch the new data if needed
      setRefreshing(false);
    }, 2000); // Simulate network request delay
  };

  return (
    <SafeAreaView className="w-full h-full mt-5 px-4">
      <View className="flex flex-row justify-between items-center pr-6 bg-[#DBE2EF] rounded-full mb-5">
        <View className=" flex flex-row items-center ">
          {user.AvatarUrl ? (
            <Image
              source={{ uri: user.AvatarUrl }}
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <FontAwesome name="user-circle" size={64} color="black" />
          )}
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-xl font-bold ml-5 w-40"
          >
            {user.FullName}
          </Text>
        </View>
        <View>
          <Notificaton />
        </View>
      </View>
      <RenderNewRequestItem
        requests={newRequests}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </SafeAreaView>
  );
};

export default Home;
