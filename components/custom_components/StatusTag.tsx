import { View, Text } from 'react-native';
import React from 'react';

interface StatusTagProps {
  status: string;
}

const TagColor = [
  {
    Status: "Yêu Cầu Mới",
    Color: "#DBE2EF",
  },
  {
    Status: "Đang thực hiện",
    Color: "#FFD700", // Example color for "In Progress"
  },
  {
    Status: "Hoàn thành",
    Color: "#32CD32", // Example color for "Completed"
  },
  {
    Status: "Hủy bỏ",
    Color: "#FF4500", // Example color for "Cancelled"
  },
];

const StatusTag = ({ status }: StatusTagProps) => {
  // Find the corresponding color for the given status
  const statusColor = TagColor.find(tag => tag.Status === status)?.Color || "#DBE2EF"; // Default color if not found

  return (
    <View className="rounded-full" style={{ backgroundColor: statusColor, alignSelf: 'flex-start' }}>
      <Text className="text-base font-bold px-2 py-1">{status}</Text>
    </View>
  );
};

export default StatusTag;
