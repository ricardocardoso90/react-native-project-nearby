import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  title: {
    fontSize: 16,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
  }
});