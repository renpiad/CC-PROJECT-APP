import { Stack } from 'expo-router';
import { View } from 'react-native';
import '../global.css';
import CustomTabBar from './components/CustomTabBar';

export default function RootLayout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
      <CustomTabBar />
    </View>
  );
}
