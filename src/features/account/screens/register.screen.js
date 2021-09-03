import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text, View } from "react-native";
import { AccountBackground, AccountCover } from "../components/account.styles";

export const RegisterScreen = () => {
  return (
    <SafeArea>
      <AccountBackground>
        <AccountCover />
        <Text>Register</Text>
      </AccountBackground>
    </SafeArea>
  );
};
