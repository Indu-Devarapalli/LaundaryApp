import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'; // Import Provider
import store from '../../store';
import login from './login';
import register from './register';
import address from './home/address';
import add from './home/add';
import BasketScreen from './basket/BasketScreen';
import select from './basket/select';
import OrdersScreen from './basket/OrdersScreen';
import cart from './basket/cart';
import BottomTabNavigator from './BottomTabNavigator'; // Import BottomTabNavigator

const Stack = createStackNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Unauthenticated screens */}
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="register" component={register} />
         
          {/* Authenticated area (after login, the BottomTabNavigator should be shown) */}
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />

          {/* Other screens that should be part of BottomTabNavigator */}
          <Stack.Screen name="address" component={address} />
          <Stack.Screen name="BasketScreen" component={BasketScreen} />
          <Stack.Screen name="add" component={add} />
          <Stack.Screen name="select" component={select} />
          <Stack.Screen name="cart" component={cart} />
          <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
