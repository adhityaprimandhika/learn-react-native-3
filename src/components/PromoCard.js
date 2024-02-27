import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PromoCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <Text style={styles.textTitle}>Promo & Diskon</Text>
        <TouchableOpacity>
          <Text style={styles.textSubTitle}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View style={styles.card}>
          <Image
            style={styles.vector}
            source={require("../../assets/vector_promo.png")}
          ></Image>
          <Image
            style={styles.promoCard}
            source={require("../../assets/illustration_promo.png")}
          ></Image>
          <Text style={styles.promoSubTitle}>Mulai Rp 10.000 bisa</Text>
          <Text style={styles.promoTitle}>Sedekah Takjil</Text>
          <Text style={styles.promoDesc}>
            Program Syariah Berbagi Kaum Dhuafa
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.vector}
            source={require("../../assets/vector_promo.png")}
          ></Image>
          <Image
            style={styles.promoCard}
            source={require("../../assets/illustration_promo.png")}
          ></Image>
          <Text style={styles.promoSubTitle}>Mulai Rp 10.000 bisa</Text>
          <Text style={styles.promoTitle}>Sedekah Takjil</Text>
          <Text style={styles.promoDesc}>
            Program Syariah Berbagi Kaum Dhuafa
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    color: "#852884",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 18,
  },
  textSubTitle: {
    color: "#39B54A",
    fontWeight: "500",
    fontSize: 14,
    marginBottom: 18,
  },
  card: {
    backgroundColor: "#00373E",
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "flex-start",
    width: 300,
    height: 170,
    marginHorizontal: 5,
  },
  promoCard: {
    position: "absolute",
    marginTop: 24,
    alignSelf: "flex-end",
  },
  promoSubTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
    paddingTop: 16,
    paddingLeft: 16,
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 2,
    paddingLeft: 16,
  },
  promoDesc: {
    fontSize: 12,
    fontWeight: "400",
    color: "#ffffff",
    marginTop: 16,
    paddingLeft: 16,
    width: 150,
  },
  vector: {
    marginTop: -5,
    position: "absolute",
    width: 300,
    height: 170,
  },
});

export default PromoCard;
