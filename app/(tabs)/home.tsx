import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import React from "react";
import { newRequests, user } from "@/constants/data";
import Notificaton from "@/components/custom_components/Notificaton";
import RenderNewRequestItem from "@/components/custom_components/RenderNewRequestItem";

const Home = () => {
    return (
      <SafeAreaView className="w-full h-full mt-5 px-4">
        <View className="flex flex-row justify-between items-center pr-6 bg-[#DBE2EF] rounded-full mb-5">
          <View className=" flex flex-row items-center ">
            <Image
              source={{ uri: user.AvatarUrl }}
              className="w-16 h-16 rounded-full"
            />
            <Text className="text-xl font-bold ml-5">{user.FullName}</Text>
          </View>
          <View>
            <Notificaton />
          </View>
        </View>
  
        <Text className="text-center font-bold text-xl">Yêu Cầu Sửa Chữa Gần Đây</Text>
  
        <RenderNewRequestItem requests={newRequests} />
      </SafeAreaView>
    );
  };
  
  export default Home;
