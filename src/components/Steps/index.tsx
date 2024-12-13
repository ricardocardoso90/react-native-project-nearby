import { Step } from "../Step";
import { styles } from "./styles";
import { ScrollView, Text, View } from "react-native";
import { IconQrcode, IconMapPin, IconTicket } from "@tabler/icons-react-native";

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Veja como funciona:
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Step
          icon={IconMapPin}
          title="Encontre estabelecimentos"
          description="Veja locais perto de você que são parceiros Nearby"
        />
        <Step
          icon={IconQrcode}
          title="Ative o cupom com QR Code"
          description="Escaneie o código no estabelecimento para usar o beneficio."
        />
        <Step
          icon={IconTicket}
          title="Garanta vantagens perto de você"
          description="Ative cupons onde estiver, em diferentes tipos de estabelecimento."
        />
      </ScrollView>
    </View>
  )
};