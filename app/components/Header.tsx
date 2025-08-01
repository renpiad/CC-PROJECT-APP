import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
  title: string;
  showNotifications?: boolean;
  showMenu?: boolean;
  onNotificationPress?: () => void;
  onMenuPress?: () => void;
  className?: string;
}

export default function Header({
  title,
  showNotifications = true,
  showMenu = true,
  onNotificationPress,
  onMenuPress,
  className = ''
}: HeaderProps) {
  return (
    <View
      className={`flex-row items-center justify-between bg-white px-5 py-4 ${className}`}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3
      }}
    >
      <Text className="text-xl font-bold text-black">{title}</Text>
      <View className="flex-row space-x-4">
        {showNotifications && (
          <TouchableOpacity onPress={onNotificationPress}>
            <Ionicons name="notifications" size={24} color="#000" />
          </TouchableOpacity>
        )}
        {showMenu && (
          <TouchableOpacity onPress={onMenuPress}>
            <Ionicons name="menu" size={24} color="#000" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
