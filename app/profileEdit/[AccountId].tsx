import { Text, SafeAreaView, Platform, View } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { user } from "@/constants/data";
import ProfileIcon from "@/components/custom_components/ProfileIcon";
import * as ImagePicker from "expo-image-picker";
import FormField from "@/components/custom_components/FormField";
import { formatDate } from "@/utils/utils";
import { AntDesign } from "@expo/vector-icons";
import DatePicker from "@/components/custom_components/DatePicker";
import CustomButton from "@/components/custom_components/CustomButton";
import DateTimePicker from "@react-native-community/datetimepicker";

const ProfileEdit = () => {
  const params = useLocalSearchParams();
  const AccountId = params.AccountId;
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState<string | null>(user.AvatarUrl);
  const [form, setForm] = useState({
    FullName: user.FullName,
    PhoneNumber: user.PhoneNumber,
    DateOfBirth: user.DateOfBirth,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const submit = async () => {
    setFullNameError("");
    setPhoneNumberError("");

    let isValid = true; // A flag to track if the form is valid

    if (!form.FullName) {
      setFullNameError("Tên đầy đủ không được để trống");
      isValid = false; // Mark the form as invalid
    }

    if (!form.PhoneNumber) {
      setPhoneNumberError("Số điện thoại không được để trống");
      isValid = false; // Mark the form as invalid
    }

    // If the form is invalid, don't proceed with the submission
    if (!isValid) {
      return;
    }

    console.log(form)
    setIsSubmitting(true);

    router.back();

    setIsSubmitting(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Chỉnh sửa hồ sơ",
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

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const dateString = selectedDate.toISOString().split('T')[0]; 
      setForm({ ...form, DateOfBirth: dateString }); 
    }
  };
  

  return (
    <SafeAreaView className="flex-1 p-4 py-0">
      <ProfileIcon image={imageUri} handlePress={pickImage} />
      <View>
        <FormField
          title="Tên Đầy Đủ"
          value={form.FullName}
          handleChangeText={(e: string) => setForm({ ...form, FullName: e })}
          placeholder="Nhập tên đầy đủ"
          otherStyles="mt-7"
          icon={<AntDesign name="user" size={24} color="black" />}
        />
        {fullNameError ? (
          <Text className="text-red-500 absolute top-[130px] font-bold left-2 ">
            {fullNameError}
          </Text>
        ) : null}

        <DatePicker
          title="Ngày sinh"
          placeholder="Chọn ngày sinh"
          values={formatDate(form.DateOfBirth)}
          otherStyles="mt-10"
          handlePress={() => setShowDatePicker(true)}
        />
        {showDatePicker && (
          <DateTimePicker
            value={new Date(form.DateOfBirth)}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={onDateChange}
            maximumDate={new Date()} // Optionally set a maximum date
          />
        )}
        <FormField
          title="SĐT"
          value={form.PhoneNumber}
          handleChangeText={(e: string) => setForm({ ...form, PhoneNumber: e })}
          placeholder="Nhập số điện thoại"
          otherStyles="mt-10"
          keyboardType="phone-pad"
          icon={<AntDesign name="user" size={24} color="black" />}
        />
        {phoneNumberError ? (
          <Text className="text-red-500 absolute bottom-16 font-bold left-2 ">
            {phoneNumberError}
          </Text>
        ) : null}
      </View>

      <CustomButton
        title="Xác nhận lưu"
        handlePress={submit}
        containerStyles="mt-10"
        isLoading={isSubmitting}
      />
    </SafeAreaView>
  );
};

export default ProfileEdit;
