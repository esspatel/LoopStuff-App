
// import { useNavigation } from '@react-navigation/native';
// import { useState } from 'react';
// import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import supabase from '../supabaseclient';


// export default function LoginScreen() {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     setError('');
//     const { data, error: err } = await supabase.auth.signInWithPassword({ email, password });
//     if (err) {
//       setError(err.message);
//     } else {
//       Alert.alert('Login Successful');
//       navigation.navigate('Feed');

//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Login to Loop</Text>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         secureTextEntry
//         onChangeText={setPassword}
//         style={styles.input}
//       />
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <Button title="Log In" onPress={handleLogin} />
//       <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
//         Don’t have an account? Sign up
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 20, flex: 1, justifyContent: 'center' },
//   header: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
//   input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
//   error: { color: 'red', marginBottom: 10 },
//   link: { marginTop: 20, textAlign: 'center', color: 'blue' },
// });

// import { useState } from 'react';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import supabase from '../supabaseclient';


// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     if (error) alert(error.message);
//   }; 

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
//       <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
//       <Button title="Login" onPress={handleLogin} />
//       <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 16 },
//   title: { fontSize: 24, marginBottom: 20 },
//   input: { borderWidth: 1, padding: 10, marginBottom: 12, borderRadius: 5 },
// });




// app/loginpage.js
//import { router } from 'expo-router';
//import { useState } from 'react';
//import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
//import supabase from '../supabaseclient';
//
//export default function LoginPage() {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [error, setError] = useState('');
//
//  const handleLogin = async () => {
//    setError('');
//    if (!email || !password) {
//      setError('Enter email & password');
//      return;
//    }
//
//    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
//
//    if (loginError) {
//      setError(loginError.message);
//    } else {
//      router.replace('/tabs'); // go to tabs page
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      <Text style={styles.title}>Login</Text>
//
//      <TextInput
//        style={styles.input}
//        placeholder="Email"
//        onChangeText={setEmail}
//        value={email}
//        autoCapitalize="none"
//        placeholderTextColor="#666"
//      />
//      <TextInput
//        style={styles.input}
//        placeholder="Password"
//        onChangeText={setPassword}
//        value={password}
//        secureTextEntry
//        placeholderTextColor="#666"
//      />
//
//      {error ? <Text style={styles.error}>{error}</Text> : null}
//
//      <TouchableOpacity style={styles.button} onPress={handleLogin}>
//        <Text style={styles.buttonText}>Log In</Text>
//      </TouchableOpacity>
//
//      <TouchableOpacity onPress={() => router.push('/')}>
//        <Text style={styles.link}>Don't have an account? Sign up</Text>
//      </TouchableOpacity>
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: { flex: 1, justifyContent: 'center', padding: 20 },
//  title: { fontSize: 28, marginBottom: 30, textAlign: 'center' },
//  input: { borderWidth: 1, padding: 12, marginBottom: 15, borderRadius: 6 },
//  button: { backgroundColor: '#4CAF50', padding: 14, borderRadius: 6 },
//  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center' },
//  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
//  link: { marginTop: 20, textAlign: 'center', color: '#007AFF' },
//});


import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import supabase from './supabaseclient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError('Enter email & password');
      return;
    }

    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });

    if (loginError) {
      setError(loginError.message);
    } else {
      router.replace('/(tabs)/feed'); // go to main tabs
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholderTextColor="#666"
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/pages/signup')}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#FFFAF0' },
  title: { fontSize: 28, marginBottom: 30, textAlign: 'center', fontWeight: '700', color: '#333' },
  input: { backgroundColor: '#fff', padding: 14, marginBottom: 15, borderRadius: 8, borderWidth: 1, borderColor: '#ccc' },
  button: { backgroundColor: '#DC143C', paddingVertical: 14, borderRadius: 8, marginTop: 10 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: '600', textAlign: 'center' },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
  link: { marginTop: 20, textAlign: 'center', color: '#DC143C' },
});