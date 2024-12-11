import { styles } from "./styles";
import { Image, Text, View } from "react-native";

import ImageLogo from "../../assets/logo.png";

export function Welcome() {
  return (
    <View>
      <Image
        source={ImageLogo}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Boas vindas ao Nearby!
      </Text>
      <Text style={styles.subtitle}>
        Tenha cupons de vantagens para usar em {"\n"}
        seus estabelecimentos favoritos.
      </Text>
    </View>
  )
};