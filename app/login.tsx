import { Button, View } from "react-native";

import styled from "styled-components/native";
import { useAuth } from "../store/useAuth";

const Container = styled(View)({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
});

export default function SignIn() {
  const { login } = useAuth();
  return (
    <Container>
      <Button title="Login" onPress={login} />
    </Container>
  );
}
