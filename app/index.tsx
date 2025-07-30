import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F0F0F0]">
      <View className="flex-1 items-center justify-center px-5 pb-24">
        <Text className="mb-2.5 text-2xl font-bold text-[#333]">
          Welcome Home
        </Text>
        <Text className="text-center text-base text-[#666]">
          This is your main dashboard
        </Text>
      </View>
    </SafeAreaView>
  );
}
