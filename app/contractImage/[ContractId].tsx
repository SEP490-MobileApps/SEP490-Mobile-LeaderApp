import React, { useState, useEffect } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "@/components/custom_components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import EmptyState from "@/components/custom_components/EmptyState";

const ContractImage = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const params = useLocalSearchParams();
  const ContractId = params.ContractId;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Chi tiết hợp đồng scan",
      headerTitleAlign: "left",
      headerStyle: { backgroundColor: "#4072AF" },
      headerTintColor: "white",
    });
  }, [navigation]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    // Log the result when an image is picked
    console.log("ImagePicker Result:", result);

    if (!result.canceled && result.assets && result.assets.length > 0) {
      console.log("Selected Image URI:", result.assets[0].uri); // Log the image URI
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <CustomButton
        title="Thêm ảnh hợp đồng"
        containerStyles="mt-4 mx-2"
        handlePress={pickImage}
        icon={<Ionicons name="add-circle-outline" size={24} color="white" />}
      />
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          resizeMode="contain"
          className="w-full h-[500px] mt-10"
        />
      ) : (
        <View className="mt-20">
          <EmptyState
            title="Không ảnh hợp đồng"
            subtitle="Hãy thêm ảnh hợp đồng vào"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ContractImage;
