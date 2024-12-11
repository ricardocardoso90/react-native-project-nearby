import { Step } from "../Step";
import { styles } from "./styles";
import { Text, View } from "react-native";

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Veja como funciona:
      </Text>

      <Step/>
    </View>
  )
};