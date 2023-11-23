import { Text } from "react-native";
import { router } from "expo-router";
import { useTheme } from "../../theme/theme";
import { Container } from "../../layouts/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Preferences() {
  /** Hooks */
  const { colors } = useTheme();
  const { top } = useSafeAreaInsets();

  return (
    <Container style={{ backgroundColor: colors.background, paddingTop: top }}>
      <Text onPress={() => router.push("/my-location")}>
        My Preferences screen
      </Text>
    </Container>
  );
}
