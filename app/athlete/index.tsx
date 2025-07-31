import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SubTab from '../components/SUBTAB';

export default function AthleteScreen() {
  const [activeTab, setActiveTab] = useState('athletes');
  const [searchQuery, setSearchQuery] = useState('');

  const athleteTabs = [
    { id: 'athletes', label: 'Athletes' },
    { id: 'games', label: 'Games' }
  ];

  const handleNotificationPress = () => {
    // Handle notification press
    console.log('Notification pressed');
  };

  const handleMenuPress = () => {
    // Handle menu press
    console.log('Menu pressed');
  };

  const handleFilterPress = () => {
    // Handle filter press
    console.log('Filter pressed');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header Section - Using reusable Header component */}
      <Header
        title="Athletes & Games"
        onNotificationPress={handleNotificationPress}
        onMenuPress={handleMenuPress}
      />

      {/* Tab Navigation - Using reusable SubTab component */}
      <SubTab
        tabs={athleteTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Search and Filter Section - Using reusable SearchBar component */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onFilterPress={handleFilterPress}
      />

      {/* Placeholder content */}
      <View className="flex-1 items-center justify-center px-5 pb-24">
        <Text className="mb-2.5 text-2xl font-bold text-[#333]">
          {activeTab === 'athletes' ? 'Athletes' : 'Games'}
        </Text>
        <Text className="text-center text-base text-[#666]">
          {activeTab === 'athletes'
            ? 'Athlete profiles and information'
            : 'Games and matches information'}
        </Text>
      </View>
    </SafeAreaView>
  );
}
