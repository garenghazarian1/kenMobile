import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Video } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "./colors";
import { Link } from "expo-router";

export default function Hero() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      {/* Navigation Links */}
      <View style={styles.navigationContainer}>
        <Link href="/" style={styles.navLink}>
          Home
        </Link>
        <Link href="/contact" style={styles.navLink}>
          Contact
        </Link>
        <Link href="/about" style={styles.navLink}>
          About
        </Link>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <Video
          source={{
            uri: "https://res.cloudinary.com/dzzm7ye56/video/upload/v1727082316/hero_qwgwb5.mp4",
          }}
          style={styles.video}
          resizeMode="cover"
          shouldPlay
          isLooping
          isMuted
        />

        {/* Gradient Overlay with Buttons */}
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={[styles.overlay, { width: screenWidth }]}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                Linking.openURL(
                  "https://kenbeauty.zenoti.com/webstoreNew/services"
                )
              }
            >
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.whatsappButton}
              onPress={() =>
                Linking.openURL(
                  "https://wa.me/971555570029?text=Hello%20KEN%20Beauty%20Center%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                )
              }
            >
              <FontAwesome name="whatsapp" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      {/* Image Background Section with Gradient and Title */}
      <ImageBackground
        source={{
          uri: "https://res.cloudinary.com/dzzm7ye56/image/upload/v1727125377/insta01_uyu4hh.jpg",
        }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)"]}
          style={styles.overlayContent}
        >
          <View style={styles.overlayContent}>
            <Text style={styles.title}>Advanced Beauty Solutions</Text>
            <Text style={styles.subtitle}>
              Visit our luxurious salon in the heart of the UAE to discover a
              world where brilliance and beauty meet.
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      {/* Content Section */}
      <ImageBackground
        source={{
          uri: "https://res.cloudinary.com/dzzm7ye56/image/upload/v1727125329/insta02_ket2ej.jpg",
        }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)"]}
          style={styles.overlayContent}
        >
          <View style={styles.content}>
            <Text style={styles.mainTitle}>
              Your Beauty <Text style={styles.highlightText}>Haven</Text>
            </Text>
            <Text style={styles.paragraph}>
              Visit our luxurious salon in the heart of the UAE to discover a
              world where brilliance and beauty meet. Our team of specialists is
              committed to providing a wide range of services, including hair
              styling and transformation for both men and women, nails, facials,
              and solarium treatments. We stand out as the top beauty salon in
              the United Arab Emirates because of our dedication to quality,
              professionalism, and customer satisfaction. Embrace the pleasure
              that you deserve and love an unforgettable experience that will
              leave you feeling healthy and brilliant.
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGreen,
  },
  videoContainer: {
    position: "relative",
    width: "100%",
    height: 300,
  },
  video: {
    width: "100%",
    height: 300,
    borderRadius: 12, // Modern styling with rounded edges
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContent: {
    flexDirection: "column", // Stack buttons or content vertically
    justifyContent: "flex-end", // Align content at the bottom
    alignItems: "center", // Center content horizontally
    paddingBottom: 30, // Adjust padding to position elements
    gap: 15, // Space between the buttons or content
    height: 600,
  },
  buttonContainer: {
    flexDirection: "row", // Keep buttons side by side
    justifyContent: "center", // Center the buttons
    alignItems: "center",
    paddingVertical: 20, // Spacing around the buttons
    gap: 15, // Space between the buttons
  },
  button: {
    backgroundColor: colors.teal950, // Dark green for the Book Now button
    paddingHorizontal: 35, // Horizontal padding for larger touch area
    paddingVertical: 14, // Vertical padding for comfort
    borderRadius: 30, // More rounded corners for a modern feel
    borderWidth: 2, // Add a border for emphasis
    borderColor: colors.customGreen, // Border color to make it pop
    elevation: 5, // More prominent shadow for modern look
    shadowColor: "#000", // Darker shadow for better contrast
    shadowOffset: { width: 2, height: 2 }, // Adjust shadow offset
    shadowOpacity: 0.3, // Softer shadow
    shadowRadius: 6, // Larger shadow radius for smooth effect
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: 10, // Space at the bottom
  },
  buttonText: {
    color: colors.textHover, // White text for contrast
    fontSize: 18, // Keep the font size large for readability
    fontWeight: "600", // Make the font weight semi-bold for emphasis
    textAlign: "center",
    letterSpacing: 1, // Add letter spacing for modern look
  },
  whatsappButton: {
    backgroundColor: colors.teal950, // Darker teal for WhatsApp button
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 50, // Fully rounded corners for a modern, icon-like look
    borderWidth: 2, // Border around the WhatsApp button
    borderColor: colors.customGreen, // Green border for contrast
    elevation: 5,
    shadowColor: "#000", // Shadow for WhatsApp button as well
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.textColor, // Use a contrasting text color
    textAlign: "center", // Center the text
    marginBottom: 10, // Space below the title
    paddingHorizontal: 20, // Add some padding for better readability
  },
  subtitle: {
    fontSize: 18,
    color: colors.lightGray, // Slightly lighter color for subtitle
    textAlign: "center", // Center the text
    lineHeight: 24, // Adjust line height for readability
    paddingHorizontal: 20, // Padding for better alignment
    marginBottom: 20, // Space below the subtitle
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textColor,
    marginBottom: 10,
  },
  highlightText: {
    color: colors.header2, // Special color for highlighting part of the text
  },
  paragraph: {
    fontSize: 16,
    color: colors.textColor,
    textAlign: "justify",
    lineHeight: 24,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: colors.teal950,
    borderBottomWidth: 1,
    borderBottomColor: colors.oliveSoftGrayGreen,
  },
  navLink: {
    fontSize: 18,
    color: colors.textColor,
    textAlign: "center",
    marginHorizontal: 10,
    textTransform: "uppercase",
  },
  imageBackground: {
    width: "100%",
    height: "auto",
  },
});
