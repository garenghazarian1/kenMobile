import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "./colors";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerA}>
        <Link href="/" style={styles.paragraphA}>
          Home
        </Link>
        <Link href="/contact" style={styles.paragraphA}>
          contact
        </Link>
        <Text style={styles.paragraphA}>About</Text>
      </View>
      <Text>about</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGreen, // Using custom color variable
  },
  containerA: {
    flexDirection: "row", // Align children horizontally
    justifyContent: "flex-start", // Align items to the start of the container
    alignItems: "center", // Align children vertically in the center
    padding: 10, // Correctly use numerical value without px
  },
  paragraphA: {
    fontSize: 16,
    color: colors.textColor,
    textAlign: "justify",
    lineHeight: 24,
    margin: 10, // Use numerical value for margin
  },
});
