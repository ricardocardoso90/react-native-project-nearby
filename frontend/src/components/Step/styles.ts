import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    marginBottom: 25,
  },
  details: {
    flex: 1
  },
  title: {
    fontSize: 16,
    color: colors.gray[600],
    fontFamily: fontFamily.semiBold,
  },
  description: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    marginTop: 14,
  }
});