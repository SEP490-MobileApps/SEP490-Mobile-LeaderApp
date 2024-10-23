import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router';

const ProfileEdit = () => {

  const params = useLocalSearchParams();
  const AccountId = params.AccountId;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Chỉnh sửa hồ sơ",
      headerTitleAlign: "left",
      headerStyle: { backgroundColor: "#4072AF" },
      headerTintColor: "white",
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>{AccountId}</Text>
    </SafeAreaView>
  )
}

export default ProfileEdit