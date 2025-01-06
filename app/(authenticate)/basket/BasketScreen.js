import { Pressable, StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const BasketScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Update the total only when the cart changes
    if (cart) {
      const calculatedTotal = cart
        .map((item) => item.item.price * item.item.quantity)
        .reduce((prev, curr) => prev + curr, 0);
      setTotal(calculatedTotal);
    }
  }, [cart]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
          backgroundColor: "#0066b2",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20, // Adjusted to create space below the status bar
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500", color: "white" }}>
          Basket Total
        </Text>
        <View>
          <Text style={{ color: "white", fontSize: 17 }}>
            Rs {total} {/* Display the updated total */}
          </Text>
          <Text style={{ color: "white", fontSize: 17 }}>
            FOR {cart.length} ITEMS {/* Display the number of items */}
          </Text>
        </View>
      </View>

      <View
        style={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 7,
          marginTop: 20,
          marginHorizontal: 10,
          height: 200,
        }}
      >
        {cart.length === 0 ? (
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            YOUR BASKET IS EMPTY
          </Text>
        ) : (
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            You have {cart.length} items in your basket
          </Text>
        )}
      </View>

      <Pressable
        onPress={() => navigation.push("address")}
        style={{
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
          padding: 15,
          width: 200,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 4,
          backgroundColor: "#0066b2",
        }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>
          Place an Order
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({});
