import { useEffect } from 'react';
import { router } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import supabase from './supabaseclient';

export default function Index() {
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();

      if (data?.session) {
        router.replace('/(tabs)/feed');
      } else {
        router.replace('/signup');
      }
    };

    checkUser();
  }, []);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}