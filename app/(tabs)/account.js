
import { Text, View, TouchableOpacity } from 'react-native';
import supabase from '../supabaseclient';
import { router } from 'expo-router';

export default function Account() {

  const logout = async () => {
    await supabase.auth.signOut();
    router.replace('/loginpage');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFAF0',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: '700' }}>
        Account
      </Text>

      <TouchableOpacity
        onPress={logout}
        style={{
          backgroundColor: '#DC143C',
          padding: 12,
          marginTop: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '800' }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}