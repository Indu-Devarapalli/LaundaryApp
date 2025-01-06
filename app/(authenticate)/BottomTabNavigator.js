import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import index from './home/index';
import BasketScreen from './basket/BasketScreen';
import OrdersScreen from './basket/OrdersScreen';


// Create the Tab navigator
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { color: 'black' },
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          let IconComponent;
          let color = focused ? '#7CB9E8' : 'black'; // Correct the color reference

          // Determine which icon to show based on the route name
          if (route.name === 'home') {
            IconComponent = Feather;
            iconName = 'home';
          } else if (route.name === 'basket') {
            IconComponent = Ionicons;
            iconName = 'basket-outline';
          } else if (route.name === 'orders') {
            IconComponent = MaterialCommunityIcons;
            iconName = 'account-details';
          }

          return <IconComponent name={iconName} size={24} color={color} />; // Correct usage of color
        },
      })}
    >
      <Tab.Screen name="home" component={index} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="basket" component={BasketScreen} options={{ tabBarLabel: 'Basket' }} />
      <Tab.Screen name="orders" component={OrdersScreen} options={{ tabBarLabel: 'Orders' }} />
    </Tab.Navigator>
  );
}
