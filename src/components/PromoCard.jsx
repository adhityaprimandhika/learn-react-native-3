import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PromoCard = ({list}) => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <Text style={styles.textTitle}>Promo & Diskon</Text>
        <TouchableOpacity>
          <Text style={styles.textSubTitle}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <FlatList
          data={list}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image style={styles.card} source={{uri: item.image, height: 170, width: 300}} />
            </TouchableOpacity>
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
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
    width: 300,
    height: 170,
    marginHorizontal: 5,
  },
});

export default PromoCard;
