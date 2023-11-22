import { Text, View } from "react-native";
import { useAuth } from "../../store/useAuth";

export default function Index() {
  const { logout } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={logout}>Logout</Text>
    </View>
  );
}