import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { colors } from "./colors";
import { Linking } from "react-native";

// Store data
const stores = [
  {
    _id: "1",
    name: "Ken Salon, The Galleria Al Maryah Island",
    street: "The Galleria Al Maryah Island - 107 Hamouda Bin Ali Al Dhaheri St",
    city: "Abu Dhabi",
    zipCode: "00000",
    country: "United Arab Emirates",
    phone: "(02) 6218808",
    mobile: "+971 503043570",
    email: "ken.beauty1@hotmail.com",
    imageStore:
      "https://res.cloudinary.com/dzzm7ye56/image/upload/v1727123223/The-Galleria-Mall-Cover_vd3dau.jpg",
  },
  {
    _id: "2",
    name: "Ken Salon, Rixos Hotel",
    street: "Rixos Hotel, Marina - Al Kasir - Al Marina",
    city: "Abu Dhabi",
    zipCode: "00000",
    country: "United Arab Emirates",
    phone: "(02) 635 9993",
    mobile: "+971 55 557 0029",
    barberMobile: "+971 56 181 6017",
    email: "ken.beauty1@hotmail.com",
    imageStore:
      "https://res.cloudinary.com/dzzm7ye56/image/upload/v1727123735/495553057_zs2coz.jpg",
  },
];

export default function DetailsScreen() {
  const renderStore = ({ item }) => (
    <View style={styles.storeContainer}>
      <Image source={{ uri: item.imageStore }} style={styles.storeImage} />
      <Text style={styles.storeName}>{item.name}</Text>
      <Text style={styles.storeDetails}>{item.street}</Text>
      <Text style={styles.storeDetails}>{`${item.city}, ${item.country}`}</Text>
      <Text style={styles.storeDetails}>ZIP: {item.zipCode}</Text>

      {/* Contact Details with Linking */}
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.phone}`)}>
        <Text style={styles.contactInfo}>Phone: {item.phone}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.mobile}`)}>
        <Text style={styles.contactInfo}>Mobile: {item.mobile}</Text>
      </TouchableOpacity>
      {item.barberMobile && (
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:${item.barberMobile}`)}
        >
          <Text style={styles.contactInfo}>
            Barber Mobile: {item.barberMobile}
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => Linking.openURL(`mailto:${item.email}`)}>
        <Text style={styles.contactInfo}>Email: {item.email}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerA}>
        <Link href="/" style={styles.paragraphA}>
          Home
        </Link>
        <Text style={styles.paragraphA}>Contact</Text>
        <Link href="/about" style={styles.paragraphA}>
          About
        </Link>
      </View>

      {/* Rendering Store List */}
      <FlatList
        data={stores}
        renderItem={renderStore}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.storeListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGreen,
    padding: 10,
  },
  containerA: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: colors.teal950,
    borderBottomWidth: 1,
    borderBottomColor: colors.oliveSoftGrayGreen,
  },
  paragraphA: {
    fontSize: 18,
    color: colors.textColor,
    textAlign: "center",
    marginHorizontal: 10,
    textTransform: "uppercase",
  },
  storeListContainer: {
    paddingTop: 20,
  },
  storeContainer: {
    backgroundColor: colors.darkGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  storeImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  storeName: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.customGreen01,
    marginBottom: 8,
  },
  storeDetails: {
    fontSize: 14,
    color: colors.customGray,
    marginBottom: 4,
  },
  contactInfo: {
    fontSize: 16,
    color: colors.customGreen,
    marginTop: 6,
  },
});
