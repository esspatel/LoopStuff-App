import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

export default function Listings() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex:1, backgroundColor:'#FFFAF0', padding:20 }}>
      <Text style={{ fontSize:24 }}>Listings</Text>

      <TouchableOpacity
        onPress={pickImage}
        style={{ backgroundColor:'#DC143C', padding:10, marginTop:20 }}
      >
        <Text style={{ color:'#fff' }}>Add Listing</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={{ height:200, marginTop:20 }} />}
    </View>
  );
}