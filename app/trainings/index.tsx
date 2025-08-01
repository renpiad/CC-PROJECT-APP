import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingActionButton from '../components/FloatingActionButton';
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

  const handleAddProgram = () => {
    console.log('Add program pressed');
    // Navigate to add program screen
  };

  const handleAddExercise = () => {
    console.log('Add exercise pressed');
    // Navigate to add exercise screen
  };

  const handleAddSession = () => {
    console.log('Add session pressed');
    // Navigate to add session screen
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#F0F0F0' }}>
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

      {/* Floating Action Button - Different icons for different tabs */}
      {activeTab === 'programs' && (
        <FloatingActionButton
          icon="add"
          onPress={handleAddProgram}
          color="#FF0000"
          size="medium"
          position="bottom-right"
        />
      )}
      {activeTab === 'exercises' && (
        <FloatingActionButton
          icon="barbell"
          onPress={handleAddExercise}
          color="#059669"
          size="medium"
          position="bottom-right"
        />
      )}
      {activeTab === 'sessions' && (
        <FloatingActionButton
          icon="play"
          onPress={handleAddSession}
          color="#6366F1"
          size="medium"
          position="bottom-right"
        />
      )}
    </SafeAreaView>
  );
}
