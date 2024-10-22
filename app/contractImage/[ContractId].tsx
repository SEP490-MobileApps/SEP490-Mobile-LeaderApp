import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';

const contractImage = () => {
  const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
          headerTitle: "Chi tiết hợp đồng scan",
          headerTitleAlign: "left",
          headerStyle: { backgroundColor: "#4072AF" },
          headerTintColor: "white",
        });
      }, [navigation]);

  return (
    <View>
      <Text>
        ContractImage
      </Text>
    </View>
  )
}

export default contractImage