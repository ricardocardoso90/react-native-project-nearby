import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Welcome } from "@/components/Welcome";
import { Steps } from "@/components/Steps";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Welcome />
      <Steps />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    padding: 40,
  }
});