import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.container}
        color={colors.green.base}
      />
    </View>
  )
};