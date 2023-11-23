import { Text } from "react-native";
import { useAuth } from "../../store/useAuth";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../theme/theme";
import { Container } from "../../layouts/Container";
import { FlashList } from "@shopify/flash-list";
import { useCallback } from "react";
import styled from "styled-components/native";

const ItemContainer = styled.View({
  width: "100%",
  padding: 10,
  borderRadius: 8,
  marginBottom: 10,
});

export default function Home() {
  /** Hooks */
  const { logout } = useAuth();
  const { top } = useSafeAreaInsets();
  const { colors } = useTheme();

  const renderItem = useCallback(({ item }: any) => {
    return (
      <ItemContainer style={{ backgroundColor: colors.darkGrey }}>
        <Text>{item?.title}</Text>
      </ItemContainer>
    );
  }, []);

  return (
    <Container style={{ paddingTop: top, backgroundColor: colors.background }}>
      <FlashList
        data={DUMMY_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={10}
      />
    </Container>
  );
}

const DUMMY_DATA = [
  {
    id: 1,
    title: "First Item",
    description: "This is the first item",
  },
  {
    id: 2,
    title: "Second Item",
    description: "This is the second item",
  },
  {
    id: 3,
    title: "Third Item",
    description: "This is the third item",
  },
  {
    id: 4,
    title: "Fourth Item",
    description: "This is the fourth item",
  },
  {
    id: 5,
    title: "Fifth Item",
    description: "This is the fifth item",
  },
];
