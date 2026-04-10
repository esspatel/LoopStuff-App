import { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';


export default function Feed() {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);

   const addToCart = (item) => {
     setCart([...cart, item]);
   };

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <View style={{ flex:1, backgroundColor:'#FAF3E0', padding:20 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{
            backgroundColor:'#fff',
            padding:15,
            marginBottom:10,
            borderRadius:12,
            shadowColor:'#000',
            shadowOpacity:0.1
          }}>
            <Text style={{ fontSize:16, fontWeight:'600' }}>{item.title}</Text>
            <Text style={{ marginTop:5 }}>${item.price}</Text>

            <TouchableOpacity
              onPress={() => addToCart(item)}
              style={{
                backgroundColor:'#D1495B',
                padding:10,
                marginTop:10,
                borderRadius:8
              }}
            >
              <Text style={{ color:'#fff', textAlign:'center' }}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}