import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const params = useLocalSearchParams();
  const SearchQuery = params.SearchQuery;

  return (
    <SafeAreaView className="w-full h-full mt-5 px-4">
      <Text className="text-2xl">Search Query</Text>
      <Text className="text-lg mt-2">Search Query: {SearchQuery}</Text>
    </SafeAreaView>
  );
};

export default Search;
