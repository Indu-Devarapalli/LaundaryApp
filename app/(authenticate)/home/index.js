import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const index = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 12, height: 200, backgroundColor: "#FEBE10" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Image
              style={{ width: 200, height: 50, resizeMode: "cover" }}
              source={{
                uri: "https://laundrymate.in/assets/images/shared/branding/Logo.webp",
              }}
            />
          </View>
          <Octicons name="three-bars" size={24} color="white" />
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 13, fontFamily: "Kailasa-Bold" }}>
              Hi Indu!
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontFamily: "Kailasa-Bold",
                color: "white",
              }}
            >
              Home | Hyderabad - 560022
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="black"
            />
            <Text
              style={{
                width: 60,
                fontSize: 12,
                color: "#0066b2",
                fontFamily: "KohinoorTelugu-Medium",
              }}
            >
              QUICK HELP
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          padding: 10,
          backgroundColor: "white",
          width: 340,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 10,
          position: "absolute",
          top: 200,
          left: "50%",
          transform: [{ translateX: -170 }],
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View>
            <Text
              style={{
                fontSize: 15,
                color: "#0066b2",
                fontFamily: "Kailasa-Bold",
              }}
            >
              QUICK ORDER
            </Text>
            <Text style={{ marginTop: 4 }}>
              Book a pickup and a delivery option
            </Text>
            <Text>We will be at your doorstep on time</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 7,
              }}
            >
              <Pressable
                onPress={() => navigation.push("address")}
                style={{
                  backgroundColor: "#FEBE10",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 4,
                }}
              >
                <Text style={{ fontSize: 13, fontWeight: "400" }}>
                  BOOK NOW
                </Text>
              </Pressable>
              <MaterialCommunityIcons name="truck" size={24} color="#034694" />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 90,
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{ backgroundColor: "white", padding: 12, borderRadius: 10 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View>
              <Text
                style={{ color: "#FEBE10", fontSize: 15, fontWeight: "bold" }}
              >
                Club{" "}
                <Text
                  style={{ color: "#034694", fontSize: 15, fontWeight: "bold" }}
                >
                  Ultimate
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "300",
                  width: 130,
                  marginTop: 10,
                }}
              >
                Put your laundry on Cruise Control
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "300",
                  width: 130,
                  marginTop: 3,
                }}
              >
                Subscribe and get the benefits
              </Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderRadius: 10,
            marginRight: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Ionicons name="basket-outline" size={24} color="#034694" />
            <View>
              <Text
                style={{ color: "#FEBE10", fontSize: 15, fontWeight: "bold" }}
              >
                Place Your{" "}
                <Text
                  style={{ color: "#034694", fontSize: 15, fontWeight: "bold" }}
                >
                  Order
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "300",
                  width: 130,
                  marginTop: 10,
                }}
              >
                Select items from the catalogue below
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "300",
                  width: 130,
                  marginTop: 3,
                }}
              >
                and book your order. It's about time
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 13, fontWeight: "500", color: "#034694" }}
              >
                AFFORDABLE PRICES
              </Text>
              <Text style={{ marginTop: 4 }}>Get our Price List</Text>
            </View>
            <Entypo name="triangle-right" size={18} color="#034694" />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            padding: 12,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                color: "#FEBE10",
                width: 100,
                fontWeight: "bold",
              }}
            >
              WHAT'S THE PLAN
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#034694",
                width: 100,
                fontWeight: "bold",
              }}
            >
              FOR THE PLANET
            </Text>
          </View>
          <Entypo name="triangle-right" size={18} color="#034694" />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: 7,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text>Next Available</Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            marginTop: 5,
            color: "#034694",
            width: 150,
          }}
        >
          Order Within 15 mins to catch this pickUp Slot
        </Text>
        <Pressable onPress={() => navigation.push("select")}
          style={{
            borderColor: "#034694",
            paddingHorizontal: 10,
            paddingVertical: 4,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.7,
            width: 130,
            marginTop: 8,
            borderRadius: 5
          }}
        >
          <Text>ADD ITEMS</Text>
        </Pressable>
      </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default index;


const styles = StyleSheet.create({});