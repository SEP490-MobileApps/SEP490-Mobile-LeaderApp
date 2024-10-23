import { Text, SafeAreaView } from "react-native";
import React from "react";
import { user } from "@/constants/data";
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
      <ProfileIcon
        image={user.AvatarUrl}
        handlePress={() => router.push(`/profileEdit/${user.AccountId}`)}
      />
      <Text className="bg-[#DBE2EF] text-[#5F60B9] p-4 text-xl font-bold w-full mt-6">
        Thông tin chung
      </Text>
      <RenderOptionItem options={options} />
    </SafeAreaView>
  );
};

export default profile;
