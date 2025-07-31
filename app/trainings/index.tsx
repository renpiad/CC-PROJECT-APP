import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubTab from '../components/SUBTAB';

export default function TrainingsScreen() {
  const [activeTab, setActiveTab] = useState('programs');

  const trainingTabs = [
    { id: 'programs', label: 'Programs' },
    { id: 'exercises', label: 'Exercises' },
    { id: 'sessions', label: 'Sessions' }
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header Section */}
      <View className="flex-row items-center justify-between px-5 py-4">
        <Text className="text-xl font-bold text-black">Trainings</Text>
      </View>

      {/* Tab Navigation - Using reusable SubTab component */}
      <SubTab
        tabs={trainingTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Placeholder content */}
      <View className="flex-1 items-center justify-center px-5 pb-24">
        <Text className="mb-2.5 text-2xl font-bold text-[#333]">
          {activeTab === 'programs'
            ? 'Programs'
            : activeTab === 'exercises'
              ? 'Exercises'
              : 'Sessions'}
        </Text>
        <Text className="text-center text-base text-[#666]">
          Training {activeTab} content coming soon...
        </Text>
      </View>
    </SafeAreaView>
  );
}
