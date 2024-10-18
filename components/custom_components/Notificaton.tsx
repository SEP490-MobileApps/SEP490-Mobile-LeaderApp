import { View, Text } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Notificaton = () => {
  const [notification, setNotification] = useState(true);
  return (
    <View className="flex flex-row">
      <FontAwesome name="bell" size={24} color="#4072AF" />
      {notification &&
        <View className="bg-red-600 rounded-full w-3 h-3 -ml-3 border-white border-2" />
      }
    </View>
  );
};

export default Notificaton;
