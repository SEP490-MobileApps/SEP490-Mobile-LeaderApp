import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  TextInputProps,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

interface SearchInputProps extends TextInputProps {
  placeholder: string;
  initialQuery?: string;
  otherStyles?: object;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  initialQuery = "", // default to an empty string
  otherStyles = {}, // default to an empty object
  ...props
}) => {
  const [query, setQuery] = useState(initialQuery);

  // Function to handle search logic
  const handleSearch = (text: string) => {
    console.log("Search query:", text);
    // Add your search logic here
  };

  return (
    <View
      style={[{ paddingHorizontal: 16 }, otherStyles]}
      className="bg-[#DBE2EF] w-[80%] h-16 px-4 bg-black-100 rounded-2xl items-center flex-row"
    >
      <TextInput
        className="flex-1 text-black font-pregular text-base"
        value={query}
        placeholder={placeholder}
        placeholderTextColor="#6C757D"
        onChangeText={(text) => {
          setQuery(text); // Update the input value in state
          handleSearch(text); // Call handleSearch on every text change
        }}
        {...props}
      />
      <TouchableOpacity onPress={() => handleSearch(query)}>
        <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
