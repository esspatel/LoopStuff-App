
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const data = await AsyncStorage.getItem('cart');
    if (data) {
      setCartItems(JSON.parse(data));
    } else {
      setCartItems([]);
    }
  };

  const removeFromCart = async (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FAF3E0',
        padding: 20,
      }}
    >
      {/* HEADER */}
      <Text style={{ fontSize: 26, fontWeight: '700', textAlign: 'center' }}>
        Your Cart
      </Text>

      {/* TOTAL */}
      <Text style={{ marginTop: 10, fontSize: 16, textAlign: 'center' }}>
        Total: ${total.toFixed(2)}
      </Text>

      {/* EMPTY STATE */}
      {cartItems.length === 0 ? (
        <View style={{ marginTop: 50, alignItems: 'center' }}>
          <Text>Your cart is empty 🛒</Text>
        </View>
      ) : (
        <FlatList
          style={{ marginTop: 20 }}
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: '#fff',
                padding: 15,
                borderRadius: 12,
                marginBottom: 10,
              }}
            >
              <Text>{item.title}</Text>
              <Text>${item.price}</Text>

              <TouchableOpacity
                onPress={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: '#B00020',
                  padding: 8,
                  marginTop: 10,
                  borderRadius: 6,
                }}
              >
                <Text style={{ color: '#fff', textAlign: 'center' }}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}