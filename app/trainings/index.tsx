import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SubTab from '../components/SUBTAB';

export default function TrainingsScreen() {
  const [activeTab, setActiveTab] = useState('programs');
  const [searchQuery, setSearchQuery] = useState('');

  const trainingTabs = [
    { id: 'programs', label: 'Programs' },
    { id: 'exercises', label: 'Exercises' },
    { id: 'sessions', label: 'Sessions' }
  ];

  const handleFilterPress = () => {
    console.log('Training filter pressed');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header Section - Using reusable Header component */}
      <Header
        title="Trainings"
        showNotifications={false} // Example: hide notifications for this screen
        onMenuPress={() => console.log('Training menu pressed')}
      />

      {/* Tab Navigation - Using reusable SubTab component */}
      <SubTab
        tabs={trainingTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Search and Filter Section - Using reusable SearchBar component */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        placeholder="Search trainings..."
        onFilterPress={handleFilterPress}
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
