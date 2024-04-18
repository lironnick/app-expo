import { View, Text, StatusBar } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-black p-3">
      <StatusBar barStyle="light-content" />
      <Text className="text-white font-bold text-xl">Home</Text>
    </View>
  );
}
