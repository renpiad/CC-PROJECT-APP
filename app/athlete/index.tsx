import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AthleteCard from '../components/AthleteCard';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SubTab from '../components/SUBTAB';

interface Athlete {
  id: string;
  number: string;
  name: string;
  position: string;
}

const MOCK_ATHLETES: Athlete[] = [
  { id: '1', number: '10', name: 'John Smith', position: 'Forward' },
  { id: '2', number: '7', name: 'Mike Johnson', position: 'Midfielder' },
  { id: '3', number: '23', name: 'David Wilson', position: 'Defender' },
  { id: '4', number: '1', name: 'Tom Brown', position: 'Goalkeeper' },
  { id: '5', number: '9', name: 'Alex Davis', position: 'Forward' },
  { id: '6', number: '4', name: 'Chris Miller', position: 'Defender' },
  { id: '7', number: '8', name: 'Ryan Taylor', position: 'Midfielder' },
  { id: '8', number: '11', name: 'Kevin Lee', position: 'Forward' }
];

export default function AthleteScreen() {
  const [activeTab, setActiveTab] = useState('athletes');
  const [searchQuery, setSearchQuery] = useState('');
  const [athletes, setAthletes] = useState<Athlete[]>(MOCK_ATHLETES);

  const athleteTabs = [
    { id: 'athletes', label: 'Athletes' },
    { id: 'games', label: 'Games' }
  ];

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleMenuPress = () => {
    console.log('Menu pressed');
  };

  const handleFilterPress = () => {
    console.log('Filter pressed');
  };

  const handleAthletePress = (athlete: Athlete) => {
    console.log('Athlete pressed:', athlete.name);
    // Navigate to athlete detail screen
  };

  const filteredAthletes = athletes.filter(
    athlete =>
      athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.number.includes(searchQuery) ||
      athlete.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderAthleteCard = ({ item }: { item: Athlete }) => (
    <AthleteCard
      playerNumber={item.number}
      playerName={item.name}
      position={item.position}
      onPress={() => handleAthletePress(item)}
    />
  );

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#F0F0F0' }}>
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

      {/* Athlete List */}
      <View className="flex-1 px-3">
        {activeTab === 'athletes' ? (
          <FlatList
            data={filteredAthletes}
            renderItem={renderAthleteCard}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 8 }}
          />
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold text-gray-500">Games</Text>
            <Text className="text-center text-gray-400">
              Games content coming soon...
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
