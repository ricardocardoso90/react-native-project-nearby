import { Stack } from "expo-router";
import { colors } from "@/styles/colors";

import { useFonts } from "expo-font";
import { Loading } from "@/components/Loading";

import {
  Rubik_700Bold,
  Rubik_500Medium,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_700Bold,
    Rubik_500Medium,
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] },
      }}
    />
  )
};