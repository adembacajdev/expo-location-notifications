import { Text, View } from "react-native";
import { Tabs } from "expo-router/tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import styled from "styled-components/native";
import { useTheme } from "../../theme/theme";
import { Container } from "../../layouts/Container";

export default function Preferences() {
  /** Hooks */
  const { colors } = useTheme();

  return (
    <Container style={{ backgroundColor: colors.background }}>
      <Tabs.Screen
        options={{
          tabBarLabel: "Preferences",
          tabBarActiveTintColor: colors.tabLight,
          tabBarInactiveTintColor: colors.tabDark,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="settings"
              size={25}
              color={focused ? colors.tabLight : colors.tabDark}
            />
          ),
        }}
      />
      <Text onPress={() => router.push("/my-location")}>
        My Preferences screen
      </Text>
    </Container>
  );
}
