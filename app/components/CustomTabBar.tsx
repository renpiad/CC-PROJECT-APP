import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TabItem {
  name: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
}

const TAB_ITEMS: TabItem[] = [
  {
    name: 'home',
    title: 'Home',
    icon: 'home',
    route: '/'
  },
  {
    name: 'athlete',
    title: 'Athlete',
    icon: 'person',
    route: '/athlete'
  },
  {
    name: 'trainings',
    title: 'Trainings',
    icon: 'barbell',
    route: '/trainings'
  },
  {
    name: 'analysis',
    title: 'Analysis',
    icon: 'analytics',
    route: '/analysis'
  }
];

export default function CustomTabBar() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const handleTabPress = (route: string) => {
    if (route === '/') {
      router.push('/');
    } else {
      router.push(route as any);
    }
  };

  const isActive = (route: string) => {
    if (route === '/') {
      return pathname === '/' || pathname === '/index';
    }
    return pathname === route || pathname.startsWith(route);
  };

  return (
    <View className="pt-2" style={{ paddingBottom: insets.bottom }}>
      <View className="mx-0 flex-row rounded-xl bg-white px-3 py-2 shadow-sm">
        {TAB_ITEMS.map(tab => {
          const active = isActive(tab.route);
          return (
            <TouchableOpacity
              key={tab.name}
              className="flex-1 items-center justify-center py-1.5"
              onPress={() => handleTabPress(tab.route)}
              activeOpacity={0.7}
            >
              <View className="relative mb-2 items-center">
                <Ionicons
                  name={tab.icon}
                  size={22}
                  color={active ? '#FF0000' : '#000000'}
                />
                {active && (
                  <View className="absolute -bottom-2 h-1 w-1 rounded-full bg-red-500" />
                )}
              </View>
              <Text
                className={`text-center text-xs font-medium ${
                  active ? 'font-semibold text-red-500' : 'text-black'
                }`}
              >
                {tab.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
