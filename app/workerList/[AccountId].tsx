import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { workers } from '@/constants/data'; // Assuming you imported the workers list
import RenderWorkerItem from '@/components/custom_components/RenderWorkerItem'; // Assuming this is the correct path

const ProfileEdit = () => {
  const [refreshing, setRefreshing] = useState(false);
  const params = useLocalSearchParams();
  const AccountId = params.AccountId;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Danh sách nhân viên",
      headerTitleAlign: "left",
      headerStyle: { backgroundColor: "#4072AF" },
      headerTintColor: "white",
    });
  }, [navigation]);

  // Function to handle refresh action
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false); // Simulate fetching new data
    }, 2000);
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <RenderWorkerItem workers={workers} refreshing={refreshing} onRefresh={onRefresh} />
    </SafeAreaView>
  );
};

export default ProfileEdit;
