import { Text, SafeAreaView, View, Image } from "react-native";
import React from "react";
import { apartmentArea, user } from "@/constants/data";
import ProfileIcon from "@/components/custom_components/ProfileIcon";
import { router } from "expo-router";
import RenderOptionItem, {
  Option,
} from "@/components/custom_components/RenderOptionItem";
import { MaterialIcons } from "@expo/vector-icons";

const options: Option[] = [
  {
    icon: <MaterialIcons name="edit" size={24} color="black" />,
    title: "Coi danh sách nhân viên",
    route: `/workerList/${user.AccountId}`,
  },
];

const profile = () => {
  return (
    <SafeAreaView>
      <View className="flex-col items-center ">
        <ProfileIcon
          image={user.AvatarUrl}
          handlePress={() => router.push(`/profileEdit/${user.AccountId}`)}
        />
        <Text numberOfLines={1} ellipsizeMode="tail" className="font-bold text-xl">{user.FullName}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" className="text-base text-gray-500">{user.Email}</Text>
      </View>
      <View className="mt-5">
        <Text className="mb-2 text-center text-lg">Thông tin chung cư quản lí</Text>
        <View className=" mx-3 bg-[#DBE2EF] flex-row p-2 rounded-xl items-center">
          <Image
            source={{ uri: apartmentArea.AvatarUrl }}
            className="w-14 h-14 rounded-full mr-2"
          />
          <View>
            <Text className="text-base font-bold" >
              {apartmentArea.ManagementCompany}
            </Text>
            <Text>{apartmentArea.Name}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail">{apartmentArea.Address}</Text>
          </View>
        </View>
      </View>
      <Text className="bg-[#DBE2EF] text-[#5F60B9] p-4 text-xl font-bold w-full mt-6">
        Thông tin chung
      </Text>
      <RenderOptionItem options={options} />
    </SafeAreaView>
  );
};

export default profile;
