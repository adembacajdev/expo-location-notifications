import { Redirect, Stack } from "expo-router";
import { Tabs } from "expo-router/tabs";

import { Text } from "react-native";
import { useAuth } from "../../store/useAuth";
import { useTheme } from "../../theme/theme";

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
        // tabBarLabelStyle: {
        //   marginTop: 30,
        //   bottom: 40,
        // },
        // // lazy: false,
        // tabBarStyle: {
        //   height: hp("15%"),
        //   bottom: -30,
        //   position:'absolute',
        //   // paddingLeft: 100,
        // },
      }}
    />
  );
}
