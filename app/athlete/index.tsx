import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AthleteScreen() {
  const [activeTab, setActiveTab] = useState<'athletes' | 'games'>('athletes');

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

      {/* Tab Navigation - Full width and responsive */}
      <View className="w-full flex-row px-5">
        <TouchableOpacity
          className={`flex-1 items-center pb-2 ${activeTab === 'athletes' ? 'border-b-2 border-red-500' : ''}`}
          onPress={() => setActiveTab('athletes')}
        >
          <Text
            className={`font-semibold ${activeTab === 'athletes' ? 'text-black' : 'text-gray-500'}`}
          >
            Athletes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 items-center pb-2 ${activeTab === 'games' ? 'border-b-2 border-red-500' : ''}`}
          onPress={() => setActiveTab('games')}
        >
          <Text
            className={`font-semibold ${activeTab === 'games' ? 'text-black' : 'text-gray-500'}`}
          >
            Games
          </Text>
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
