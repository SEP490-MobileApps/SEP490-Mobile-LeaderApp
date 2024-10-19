import {
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    TextInputProps,
  } from "react-native";
  import React, { useState } from "react";
  import { router, usePathname } from "expo-router";
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
    const pathname = usePathname();
    const [SearchQuery, setSearchQuery] = useState(initialQuery);
  
    const handleSearch = () => {
      if (!SearchQuery.trim()) {
        return Alert.alert(
          "You didn't type anything",
          "Please enter a search term"
        );
      }
  
      if (pathname.startsWith("/search")) {
        router.setParams({ SearchQuery });
      } else {
        router.push(`/search/${SearchQuery}`);
      }
    };
  
    return (
      <View
        style={[{ paddingHorizontal: 16 }, otherStyles]}
        className="bg-[#DBE2EF] w-[80%] h-16 px-4 bg-black-100 rounded-2xl items-center flex-row"
      >

        <TextInput
          className=" flex-1 text-black font-pregular text-base"
          value={SearchQuery}
          placeholder={placeholder}
          placeholderTextColor="#6C757D"
          onChangeText={(text) => setSearchQuery(text)}
          {...props} 
        />
                <TouchableOpacity onPress={handleSearch}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SearchInput;
  