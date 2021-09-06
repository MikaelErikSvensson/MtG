import React, { useContext, useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper } from "../components/account.styles";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <AccountBackground>
        <AccountCover />
        <AnimationWrapper>
          <LottieView key="animation" autoPlay loop resizeMode="cover" source={require("../../../../assets/watermelon.json")} />
        </AnimationWrapper>
        <Title>Meals To Go</Title>
        <AccountContainer>
          <AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Login")}>
            Login
          </AuthButton>
          <Spacer size="large">
            <AuthButton icon="email" mode="contained" onPress={() => navigation.navigate("Register")}>
              Register
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </AccountBackground>
    </SafeArea>
  );
};
