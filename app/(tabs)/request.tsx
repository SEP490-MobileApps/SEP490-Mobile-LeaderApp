import { SafeAreaView, Text } from "react-native";
import React  from "react";
import { requests } from "@/constants/data";
import RenderRequestItem from "@/components/custom_components/RenderRequestItem";
import CustomButton from "@/components/custom_components/CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "@/components/Themed";

const Request = () => {



  return (

        <SafeAreaView className="w-full h-full mt-5 px-4">
          <View className="flex flex-row justify-end mb-5">
            <View className="w-28">
              <CustomButton
                title="Bộ lọc"
                icon={<FontAwesome5 name="filter" size={24} color="white" />}
              />
            </View>
          </View>
          <RenderRequestItem requests={requests} />

        </SafeAreaView>

  );
};

export default Request;
