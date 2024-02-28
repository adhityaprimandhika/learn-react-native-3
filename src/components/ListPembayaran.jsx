import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const ListPembayaran = () => {
  const list = [
    require("../../assets/icon_telco.png"),
    require("../../assets/icon_pln.png"),
    require("../../assets/icon_pdam.png"),
    require("../../assets/icon_school.png"),
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>List Pembayaran</Text>
      <FlatList
        data={list}
        scrollEnabled={false}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-betweeen" }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.paymentItems}>
            <Image source={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  textTitle: {
    color: "#852884",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 18,
  },
  paymentItems: {
    width: "25%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ListPembayaran;
