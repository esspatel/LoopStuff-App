// // app/signup.js
// import { router } from 'expo-router';
// import { useState } from 'react';
// import { Alert, Button, Text, TextInput, View } from 'react-native';
// import supabase from '../supabaseclient';

// export default function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async () => {
//     const { error } = await supabase.auth.signUp({ email, password });
//     if (error) Alert.alert('Error', error.message);
//     else router.replace('/login'); // redirect to login
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text>Signup</Text>
//       <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
//       <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
//       <Button title="Sign Up" onPress={handleSignup} />
//     </View>
//   );
// }


// import { router } from 'expo-router';
// import { useState } from 'react';
// import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import supabase from '../supabaseclient';

// export default function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignup = async () => {
//     setError('');

//     const { data, error: signupError } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     if (signupError) {
//       setError(signupError.message);
//       return;
//     }

//     const user = data?.user;

//     if (user) {
//       const { error: insertError } = await supabase
//         .from('User_info')
//         .insert([
//           {
//             id: user.id,
//             email: user.email,
//             created_at: new Date().toISOString(),
//           },
//         ]);

//       if (insertError) {
//         setError(insertError.message);
//         return;
//       }

//       Alert.alert('Success', 'Signup successful!');
//       router.replace('./pages/loginpage');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up for LoopStuff</Text>

//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//         secureTextEntry
//       />

//       {error ? <Text style={styles.error}>{error}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>

//       <Text style={styles.linkText} onPress={() => router.replace('./pages/loginpage')}>
//         Already have an account? Log in here!
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 30,
//     marginTop: 60,
//     backgroundColor: '#FFFAF0',
//     flex: 1,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 22,
//     marginBottom: 20,
//     textAlign: 'center',
//     fontWeight: '600',
//   },
//   input: {
//     backgroundColor: '#fff',
//     padding: 12,
//     fontSize: 16,
//     borderRadius: 6,
//     marginBottom: 12,
//     borderColor: '#ccc',
//     borderWidth: 1,
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     borderRadius: 6,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   linkText: {
//     marginTop: 20,
//     color: '#007AFF',
//     textAlign: 'center',
//   },
// });


// app/pages/signup.js
// import { router } from 'expo-router';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import supabase from '../supabaseclient';

// export default function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async () => {
//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password,
//     });
//     if (error) {
//       alert(error.message);
//     } else {
//       alert('Signup successful! Please check your email for verification.');
//       router.push('/pages/loginpage'); // navigate to login after signup
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Signup</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         autoCapitalize="none"
//         keyboardType="email-address"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <Button title="Sign Up" onPress={handleSignup} />

//       <View style={{ marginTop: 20 }}>
//         <Button
//           title="Already have an account? Log In"
//           onPress={() => router.push('/pages/loginpage')}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   title: { fontSize: 28, marginBottom: 20, textAlign: 'center' },
//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 4,
//   },
// });

//
//
//import { router } from 'expo-router';
//import { useState } from 'react';
//import {
//  Alert,
//  StyleSheet,
//  Text,
//  TextInput,
//  TouchableOpacity,
//  View,
//} from 'react-native';
//import supabase from '../supabaseclient';
//
//export default function Signup() {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [error, setError] = useState('');
//
//  const handleSignup = async () => {
//    setError('');
//    if (!email || !password) {
//      setError('Please fill in all fields.');
//      return;
//    }
//
//    const { data, error: signupError } = await supabase.auth.signUp({
//      email,
//      password,
//    });
//
//    if (signupError) {
//      setError(signupError.message);
//      return;
//    }
//
//    Alert.alert(
//      'Signup successful!',
//      'Please check your email for verification.',
//      [{ text: 'OK', onPress: () => router.push('/pages/loginpage') }]
//    );
//  };
//
//  return (
//    <View style={styles.container}>
//      <Text style={styles.title}>Create an Account</Text>
//
//      <TextInput
//        style={styles.input}
//        placeholder="Email"
//        keyboardType="email-address"
//        autoCapitalize="none"
//        value={email}
//        onChangeText={setEmail}
//        placeholderTextColor="#666"
//      />
//
//      <TextInput
//        style={styles.input}
//        placeholder="Password"
//        secureTextEntry
//        value={password}
//        onChangeText={setPassword}
//        placeholderTextColor="#666"
//      />
//
//      {error ? <Text style={styles.error}>{error}</Text> : null}
//
//      <TouchableOpacity style={styles.button} onPress={handleSignup}>
//        <Text style={styles.buttonText}>Sign Up</Text>
//      </TouchableOpacity>
//
//      <TouchableOpacity
//        style={styles.linkContainer}
//        onPress={() => router.push('/pages/loginpage')}
//      >
//        <Text style={styles.linkText}>Already have an account? Log In</Text>
//      </TouchableOpacity>
//    </View>
//  );
//}
//
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#FFFAF0',
//    justifyContent: 'center',
//    paddingHorizontal: 30,
//  },
//  title: {
//    fontSize: 28,
//    fontWeight: '700',
//    marginBottom: 30,
//    textAlign: 'center',
//    color: '#333',
//  },
//  input: {
//    backgroundColor: '#fff',
//    padding: 14,
//    marginBottom: 15,
//    borderRadius: 8,
//    fontSize: 16,
//    borderColor: '#ccc',
//    borderWidth: 1,
//    color: '#000',
//  },
//  button: {
//    backgroundColor: '#4CAF50',
//    paddingVertical: 14,
//    borderRadius: 8,
//    marginTop: 10,
//  },
//  buttonText: {
//    color: 'white',
//    fontSize: 18,
//    fontWeight: '600',
//    textAlign: 'center',
//  },
//  error: {
//    color: 'red',
//    marginBottom: 10,
//    textAlign: 'center',
//  },
//  linkContainer: {
//    marginTop: 20,
//  },
//  linkText: {
//    color: '#007AFF',
//    fontSize: 16,
//    textAlign: 'center',
//  },
//});

import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import supabase from './supabaseclient';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const { data, error: signupError } = await supabase.auth.signUp({ email, password });

    if (signupError) {
      setError(signupError.message);
      return;
    }

    Alert.alert(
      'Signup Successful!',
      'Please check your email for verification.',
      [{ text: 'OK', onPress: () => router.replace('/loginpage') }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#666"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#666"
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkContainer} onPress={() => router.push('/pages/loginpage')}>
        <Text style={styles.linkText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    color: '#000',
  },
  button: {
    backgroundColor: '#DC143C', // Crimson Red
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  linkContainer: {
    marginTop: 20,
  },
  linkText: {
    color: '#DC143C',
    fontSize: 16,
    textAlign: 'center',
  },
});