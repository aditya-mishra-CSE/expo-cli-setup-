import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}
