//////
//////import { NavigationContainer } from '@react-navigation/native';
//////import { useEffect, useState } from 'react';
//////import { ActivityIndicator, View } from 'react-native';
//////import AuthStack from './navigation/authstack';
//////import MainTabs from './navigation/mainpage';
//////import supabase from './supabaseclient';
//////
//////export default function App() {
//////  const [user, setUser] = useState(null);
//////  const [loading, setLoading] = useState(true);
//////
//////  useEffect(() => {
//////    const getSession = async () => {
//////      const { data, error } = await supabase.auth.getSession();
//////      if (error) console.error('Session error:', error);
//////      setUser(data?.session?.user ?? null);
//////      setLoading(false);
//////    };
//////
//////    getSession();
//////
//////    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
//////      setUser(session?.user ?? null);
//////    });
//////
//////    return () => listener?.subscription?.unsubscribe();
//////  }, []);
//////
//////  if (loading) {
//////    return (
//////      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//////        <ActivityIndicator size="large" />
//////      </View>
//////    );
//////  }
//////
//////  return (
//////    <NavigationContainer>
//////      {user ? <MainTabs user={user} /> : <AuthStack />}
//////    </NavigationContainer>
//////  );
//////}
////
//////
//////import { NavigationContainer } from '@react-navigation/native';
//////import { useEffect, useState } from 'react';
//////import { ActivityIndicator, View } from 'react-native';
//////import AuthStack from './navigation/authstack';
//////import MainTabs from './navigation/mainpage';
//////import supabase from './supabaseclient';
//////
//////export default function App() {
//////  const [user, setUser] = useState(null);
//////  const [loading, setLoading] = useState(true);
//////
//////  useEffect(() => {
//////    const getSession = async () => {
//////      const { data } = await supabase.auth.getSession();
//////      // Only set user if session exists
//////      setUser(data?.session?.user ?? null);
//////      setLoading(false);
//////    };
//////
//////    getSession();
//////
//////    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
//////      setUser(session?.user ?? null);
//////    });
//////
//////    return () => listener?.subscription?.unsubscribe();
//////  }, []);
//////
//////  if (loading) {
//////    return (
//////      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//////        <ActivityIndicator size="large" />
//////      </View>
//////    );
//////  }
//////
//////  return (
//////    <NavigationContainer>
//////      {/* Show AuthStack if user is null */}
//////      {user ? <MainTabs user={user} /> : <AuthStack />}
//////    </NavigationContainer>
//////  );
//////}
////
////import { NavigationContainer } from '@react-navigation/native';
////import { useEffect, useState } from 'react';
////import { ActivityIndicator, View } from 'react-native';
////import AuthStack from './navigation/authstack';
////import MainTabs from './navigation/mainpage';
////import supabase from './supabaseclient';
////
////export default function App() {
////  const [user, setUser] = useState(null);
////  const [loading, setLoading] = useState(true);
////
////  useEffect(() => {
////    const getSession = async () => {
////      const { data } = await supabase.auth.getSession();
////      setUser(data?.session?.user ?? null);
////      setLoading(false);
////    };
////
////    getSession();
////
////    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
////      setUser(session?.user ?? null);
////    });
////
////    return () => listener?.subscription?.unsubscribe();
////  }, []);
////
////  if (loading) {
////    return (
////      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
////        <ActivityIndicator size="large" />
////      </View>
////    );
////  }
////
////  return (
////    <NavigationContainer>
////      {user ? <MainTabs user={user} /> : <AuthStack />}
////    </NavigationContainer>
////  );
////}
//
////import { NavigationContainer } from '@react-navigation/native';
//import { useEffect, useState } from 'react';
//import { ActivityIndicator, View } from 'react-native';
//import AuthStack from './navigation/authstack';
//import MainTabs from './navigation/mainpage';
//import supabase from './supabaseclient';
//
//export default function App() {
//  const [user, setUser] = useState(null);
//  const [loading, setLoading] = useState(true);
//
//  useEffect(() => {
//    const getSession = async () => {
//      const { data } = await supabase.auth.getSession();
//      setUser(data?.session?.user ?? null);
//      setLoading(false);
//    };
//
//    getSession();
//
//    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
//      setUser(session?.user ?? null);
//    });
//
//    return () => listener?.subscription?.unsubscribe();
//  }, []);
//
//  if (loading) {
//    return (
//      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//        <ActivityIndicator size="large" />
//      </View>
//    );
//  }
//
////  return (
////    <NavigationContainer>
////      {user ? <MainTabs user={user} /> : <AuthStack />}
////    </NavigationContainer>
////  );
//}