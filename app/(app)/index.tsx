import { Text } from "react-native";
import { useAuth } from "../../store/useAuth";
import { Tabs } from "expo-router/tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../theme/theme";
import { Container } from "../../layouts/Container";

export default function Home() {
  /** Hooks */
  const { logout } = useAuth();
  const { top } = useSafeAreaInsets();
  const { colors } = useTheme();

  return (
    <Container style={{ paddingTop: top, backgroundColor: colors.background }}>
      {/* Tab Options */}
      <Tabs.Screen
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: colors.tabLight,
          tabBarInactiveTintColor: colors.tabDark,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              size={25}
              color={focused ? colors.tabLight : colors.tabDark}
            />
          ),
        }}
      />
      {/* End of Tab Options */}
      <Text onPress={logout}>Logout</Text>
    </Container>
  );
}
