import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubTab from '../components/SUBTAB';

export default function AthleteScreen() {
  const [activeTab, setActiveTab] = useState('athletes');
  const [searchQuery, setSearchQuery] = useState('');

  const athleteTabs = [
    { id: 'athletes', label: 'Athletes' },
    { id: 'games', label: 'Games' }
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header Section */}
      <View className="flex-row items-center justify-between px-5 py-4">
        <Text className="text-xl font-bold text-black">Athletes & Games</Text>
        <View className="flex-row space-x-4">
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Navigation - Using reusable SubTab component */}
      <SubTab
        tabs={athleteTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Search and Filter Section */}
      <View className="flex-row items-center px-5 py-4">
        <View className="flex-1 flex-row items-center rounded-lg bg-gray-100 px-3 py-2">
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            className="ml-2 flex-1 text-base"
            placeholder="Search..."
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity className="ml-3 rounded-lg bg-gray-100 p-2">
          <Ionicons name="funnel" size={20} color="#666" />
        </TouchableOpacity>
      </View>

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
