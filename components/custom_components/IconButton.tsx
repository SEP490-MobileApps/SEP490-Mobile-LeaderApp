import {
    GestureResponderEvent,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  
  interface IconButtonProps {
    handlePress?: (event: GestureResponderEvent) => void;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
    icon?: React.ReactNode;
  }
  
  const IconButton = ({
    handlePress,
    containerStyles,
    isLoading,
    icon,
  }: IconButtonProps) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePress}
        className={`bg-[#3F72AF] rounded-xl min-h-[62px] justify-center flex-row items-center ${containerStyles} ${
          isLoading ? `opacity-50` : ``
        }`}
        disabled={isLoading}
      >
    <View>{icon}</View>
  
      </TouchableOpacity>
    );
  };
  
  export default IconButton;
  