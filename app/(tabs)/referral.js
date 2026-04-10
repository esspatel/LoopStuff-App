import { Text, View } from 'react-native';

export default function Referral() {
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
      <Text style={{ fontSize: 24, fontWeight: '700' }}>
        Invite Friends 🎉
      </Text>

      <Text style={{ marginTop: 10, fontSize: 16 }}>
        Share your code: LOOP123
      </Text>
    </View>
  );
}