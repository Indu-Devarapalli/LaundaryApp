import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../firebase"; // Adjust path to your firebase.js
import { doc, setDoc } from "firebase/firestore";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      if (!email || !password) {
        throw new Error("Email and password are required.");
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const myUserUid = user.uid;

      await sendEmailVerification(user);
      console.log("Email verification sent to the user.");

      await setDoc(doc(db, "users", myUserUid), {
        email: user.email,
      });

      setEmail("");
      setPassword("");

      navigation.replace("login");
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View style={{ height: 200, backgroundColor: "#FEBE10", width: "100%" }}>
        <View
          style={{
            marginTop: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 200, height: 50, resizeMode: "cover" }}
            source={{
              uri: "https://laundrymate.in/assets/images/shared/branding/Logo.webp",
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Wash Wizard
        </Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 25,
              color: "#FEBE10",
            }}
          >
            Register to your Account
          </Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#FEBE10", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
            <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="white" />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{ color: "white", width: 300, marginVertical: 10, fontSize: 17 }}
              placeholder="Enter your email"
              placeholderTextColor="white"
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#FEBE10", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
            <AntDesign style={{ marginLeft: 8 }} name="lock1" size={24} color="white" />
            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{ color: "white", width: 300, marginVertical: 10, fontSize: 17 }}
              placeholder="Enter your password"
              placeholderTextColor="white"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forgot Password</Text>
        </View>

        <View style={{ marginTop: 50 }} />

        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.replace("login")}
          style={{ marginTop: 12 }}
        >
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Already have an account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;
