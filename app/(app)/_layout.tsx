import { Redirect, Stack } from "expo-router";
import { Tabs } from "expo-router/tabs";

import { Image, Text } from "react-native";
import { useAuth } from "../../store/useAuth";
import { useTheme } from "../../theme/theme";
import styled from "styled-components/native";

const Img = styled(Image)({
  width: 20,
  height: 20,
});

export default function AppLayout() {
  const { isLoggedIn, isLoading } = useAuth();
  const { colors } = useTheme();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!isLoggedIn) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.background,
        tabBarInactiveBackgroundColor: colors.background,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarActiveTintColor: colors.tabLight,
          tabBarInactiveTintColor: colors.tabDark,
          tabBarIcon: ({ focused }) => (
            <Img
              source={require("../../assets/icons/home.png")}
              tintColor={focused ? colors.tabLight : colors.tabDark}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my-location"
        options={{
          tabBarLabel: "My Location",
          title: "My Location",
          tabBarActiveTintColor: colors.tabLight,
          tabBarInactiveTintColor: colors.tabDark,
          tabBarIcon: ({ focused }) => (
            <Img
              source={require("../../assets/icons/pin.png")}
              tintColor={focused ? colors.tabLight : colors.tabDark}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="preferences"
        options={{
          tabBarLabel: "Preferences",
          title: "Preferences",
          tabBarActiveTintColor: colors.tabLight,
          tabBarInactiveTintColor: colors.tabDark,
          tabBarIcon: ({ focused }) => (
            <Img
              source={require("../../assets/icons/setting.png")}
              tintColor={focused ? colors.tabLight : colors.tabDark}
            />
          ),
        }}
      />
    </Tabs>
  );
}
