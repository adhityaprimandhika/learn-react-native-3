import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";

const BalanceCard = ({ saldo, list }) => {
  const idr_saldo = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(saldo);
  return (
    <View style={styles.card}>
      <View style={styles.horizontal}>
        <Text style={styles.textTitle}>Saldo</Text>
        <Text style={styles.textSaldo}>{idr_saldo}</Text>
      </View>
      <Image
        style={styles.separator}
        source={require("../../assets/vector_line.png")}
      />
      <View style={styles.horizontal}>
      <FlatList
        data={list}
        scrollEnabled={false}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-betweeen" }}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.paymentComponent}>
              <Image source={{uri: item.image, height: 36, width: 36}} />
              <Text style={styles.textPayment}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
        {/* <TouchableOpacity>
          <View style={styles.paymentComponent}>
            <Image source={require("../../assets/icon_qris.png")} />
            <Text style={styles.textPayment}>QRIS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.paymentComponent}>
            <Image source={require("../../assets/icon_kirim_dana.png")} />
            <Text style={styles.textPayment}>Kirim Dana</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.paymentComponent}>
            <Image source={require("../../assets/icon_topup.png")} />
            <Text style={styles.textPayment}>Top Up</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 32,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
  textTitle: {
    color: "#852884",
    fontSize: 14,
    fontWeight: "400",
  },
  textSaldo: {
    color: "#852884",
    fontSize: 16,
    fontWeight: "600",
  },
  separator: {
    marginVertical: 24,
    width: 295,
  },
  paymentComponent: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 24,
  },
  textPayment: {
    color: "#852884",
    fontSize: 14,
    marginTop: 10,
    fontWeight: "400",
  },
});

export default BalanceCard;
