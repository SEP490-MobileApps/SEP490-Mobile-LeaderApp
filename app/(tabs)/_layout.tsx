import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <>
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#3F72AF",
        tabBarInactiveTintColor: "#CDCDE0",
        headerTintColor:"white",
        tabBarStyle: { height: 60, backgroundColor: "#DBE2EF" },
        headerStyle: {backgroundColor:"#4072AF"},
        headerTitleAlign: "center", 
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Trang chủ",
          headerShown: true,
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Entypo name="home" size={20} color={color} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={20}
                color={color}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="request"
        options={{
          title: "Yêu cầu sửa chữa",
          headerShown: true,
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome5 name="wrench" size={20} color={color} />
            ) : (
              <SimpleLineIcons name="wrench" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          title: "Vật tư điện nước",
          headerShown: true,
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome5 name="shopping-cart" size={20} color={color} />
            ) : (
              <AntDesign name="shoppingcart" size={20} color={color} />
            ),
        }}
      />

      <Tabs.Screen
        name="contract"
        options={{
          title: "Quản lí hợp đồng",
          headerShown: true,
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="file-text" size={20} color={color} />
            ) : (
              <FontAwesome name="file-text-o" size={20} color={color} />
            ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: true,
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome5 name="user-alt" size={20} color={color} />
            ) : (
              <FontAwesome5 name="user" size={20} color={color} />
            ),
        }}
      />
    </Tabs>
    <StatusBar backgroundColor="#4072AF" style="light"/>
    </>
  );
}
