import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Alert,
  Image,
  SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";
import AntDesign from "react-native-vector-icons/AntDesign";

const cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  // Calculate total price of items in the cart
  const total =
    cart
      ?.map((item) => item.item.price * item.item.quantity)
      .reduce((prev, curr) => prev + curr, 0) || 0;

  // State for showing order success message
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Handle checkout action
  const handleCheckout = () => {
    // Simulate checkout process and show success message
    setOrderPlaced(true);
    setTimeout(() => {
      Alert.alert("Success", "Your order was placed successfully");
    }, 100); // Short delay before showing alert
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Basket Total</Text>
          <View>
            <Text style={styles.headerText}>Rs {total}</Text>
            <Text style={styles.headerText}>for {cart.length} items</Text>
          </View>
        </View>

        <Text style={styles.cartTitle}>Cart Items</Text>

        <View style={styles.cartItems}>
          {cart?.map((item, index) => (
            <Pressable
              style={styles.cartItem}
              key={index}
            >
              <Image
                style={styles.cartItemImage}
                source={{ uri: item?.item?.image }}
              />
              <View style={styles.cartItemDetails}>
                <Text>{item?.item.name}</Text>
                <Text>{item?.item.price * item?.item.quantity}</Text>
              </View>

              <Pressable>
                <AntDesign name="pluscircleo" size={24} color="#89CFF0" />
              </Pressable>
            </Pressable>
          ))}
        </View>

        <View style={styles.checkoutContainer}>
          <Pressable style={styles.emptyBasketButton}>
            <Text style={styles.buttonText}>Empty Basket</Text>
          </Pressable>
          <Pressable style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </Pressable>
        </View>

        {orderPlaced && (
          <Text style={styles.successMessage}>
            Your order was placed successfully!
          </Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default cart;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0066b2",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  cartTitle: {
    padding: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  cartItems: {
    marginHorizontal: 12,
  },
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    marginVertical: 13,
    flexDirection: "row",
    gap: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  cartItemImage: {
    width: 40,
    height: 40,
  },
  cartItemDetails: {
    flex: 1,
  },
  checkoutContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    gap: 12,
    marginTop: 30,
  },
  emptyBasketButton: {
    backgroundColor: "#d0d0d0",
    padding: 15,
    borderRadius: 10,
    flex: 1,
  },
  checkoutButton: {
    backgroundColor: "#0066b2",
    padding: 15,
    borderRadius: 10,
    flex: 1,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "500",
  },
  checkoutButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
  successMessage: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
