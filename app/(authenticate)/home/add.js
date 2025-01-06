import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Dimensions, Platform, SafeAreaView } from "react-native";
import { auth, db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window"); // Get screen dimensions

const add = ({route}) => {
  const { onAddressAdded } = route.params; 
  const [name, setName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [landmark, setLandmark] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const userUid = auth?.currentUser.uid;

  const navigation = useNavigation();

  const addAddress = async () => {
    try {
      const addressCollectionRef = collection(db, "users", userUid, "userAddresses");

      const addressDocRef = await addDoc(addressCollectionRef, {
        name,
        houseNo,
        landmark,
        postalCode,
      });

      console.log("Address added:", addressDocRef.id);
      
      if (onAddressAdded) {
        onAddressAdded(); // This will trigger `fetchAddress` in the parent screen
      }
      navigation.goBack("address");
      
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>Add a New Address</Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            style={styles.input}
          />

          <TextInput
            value={houseNo}
            onChangeText={setHouseNo}
            placeholder="Flat, House No, Building"
            placeholderTextColor="#888"
            style={styles.input}
          />

          <TextInput
            value={landmark}
            onChangeText={setLandmark}
            placeholder="Landmark (e.g., Near Apollo Hospital)"
            placeholderTextColor="#888"
            style={styles.input}
          />

          <TextInput
            value={postalCode}
            onChangeText={setPostalCode}
            placeholder="Enter Pincode"
            placeholderTextColor="#888"
            keyboardType="number-pad"
            style={styles.input}
          />

          <Pressable onPress={addAddress} style={styles.button}>
            <Text style={styles.buttonText}>Add Address</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "ios" ? 20 : 0, // Add top padding for iOS to avoid status bar overlap
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    marginTop: 30, // Adjusted to push the content down
    elevation: 2, // Add shadow for iOS
    shadowColor: "#000", // Add shadow for Android
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    padding: 12,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#FEBE10",
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default add;
