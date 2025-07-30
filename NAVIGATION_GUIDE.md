# Tab Navigation System Guide

This document outlines the tab navigation system implemented in this React Native app using Expo Router.

## 🏗️ Architecture Overview

The navigation system is built with the following principles:
- **Type Safety**: Full TypeScript support with proper type definitions
- **Maintainability**: Centralized configuration for easy updates
- **Consistency**: Uniform styling and behavior across all tabs
- **Performance**: Optimized for smooth navigation and minimal re-renders

## 📁 File Structure

```
app/
├── _layout.tsx              # Main tab layout configuration
├── index.tsx               # Home tab screen
├── profile.tsx             # Profile tab screen
├── settings.tsx            # Settings tab screen
├── notifications.tsx       # Notifications tab screen
├── navigation/
│   └── tabConfig.ts        # Centralized tab configuration
└── hooks/
    └── useTabNavigation.ts # Custom navigation hook
```

## 🔧 Configuration

### Tab Configuration (`app/navigation/tabConfig.ts`)

The `TAB_CONFIG` object defines all tab properties:

```typescript
export const TAB_CONFIG: Record<string, TabConfigItem> = {
  index: {
    name: 'index',
    title: 'Home',
    icon: 'home',
    iconFocused: 'home',
    headerShown: false,
  },
  // ... other tabs
};
```

### Adding a New Tab

1. **Add configuration** in `tabConfig.ts`:
```typescript
newTab: {
  name: 'newTab',
  title: 'New Tab',
  icon: 'star',
  iconFocused: 'star',
  headerShown: true,
},
```

2. **Create the screen file** `app/newTab.tsx`:
```typescript
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewTabScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>New Tab</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
```

3. **Update the layout** in `_layout.tsx` to include the new tab.

## 🎣 Using the Navigation Hook

The `useTabNavigation` hook provides type-safe navigation methods:

```typescript
import { useTabNavigation } from '../hooks/useTabNavigation';

export default function MyScreen() {
  const { navigateToTab, goHome, goToProfile } = useTabNavigation();

  return (
    <View>
      <Button onPress={() => goHome()} title="Go Home" />
      <Button onPress={() => goToProfile()} title="Go to Profile" />
      <Button onPress={() => navigateToTab('settings')} title="Go to Settings" />
    </View>
  );
}
```

### Available Methods

- `navigateToTab(tabName)`: Navigate to any tab
- `replaceWithTab(tabName)`: Replace current screen with a tab
- `goBack()`: Go back to previous screen
- `goHome()`: Navigate to home tab
- `goToProfile()`: Navigate to profile tab
- `goToSettings()`: Navigate to settings tab
- `goToNotifications()`: Navigate to notifications tab

## 🎨 Styling

### Default Styles

The system uses consistent styling defined in `tabConfig.ts`:

```typescript
export const DEFAULT_TAB_BAR_STYLE = {
  backgroundColor: '#ffffff',
  borderTopWidth: 1,
  borderTopColor: '#e5e5e5',
  height: 60,
  paddingBottom: 10,
  paddingTop: 10,
};
```

### Customizing Styles

To customize tab bar appearance, modify the `screenOptions` in `_layout.tsx`:

```typescript
<Tabs
  screenOptions={{
    tabBarStyle: {
      ...DEFAULT_TAB_BAR_STYLE,
      backgroundColor: '#your-color',
    },
    tabBarActiveTintColor: '#your-active-color',
    tabBarInactiveTintColor: '#your-inactive-color',
  }}
>
```

## 🔒 Type Safety

The system includes comprehensive TypeScript support:

```typescript
// Tab names are type-safe
type TabName = 'index' | 'profile' | 'settings' | 'notifications';

// Configuration is type-checked
const config: TabConfigItem = {
  name: 'newTab',
  title: 'New Tab',
  icon: 'star', // Must be valid Ionicons name
  iconFocused: 'star',
};
```

## 🚀 Best Practices

### 1. Consistent Screen Structure

All tab screens should follow this pattern:

```typescript
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenName() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Screen content */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
```

### 2. Navigation Patterns

- Use the `useTabNavigation` hook for all navigation
- Avoid direct router calls in components
- Use descriptive function names (`goHome`, `goToProfile`)

### 3. Performance Considerations

- `unmountOnBlur: false` keeps screens mounted for better performance
- Use `React.memo` for components that don't need frequent updates
- Implement proper loading states for data fetching

### 4. Error Handling

- Always wrap navigation calls in try-catch blocks
- Provide fallback navigation for failed routes
- Log navigation errors for debugging

## 🐛 Troubleshooting

### Common Issues

1. **Tab not showing**: Check if the tab is properly configured in `TAB_CONFIG`
2. **Icon not displaying**: Verify the icon name exists in Ionicons
3. **Navigation not working**: Ensure the screen file exists and is properly exported
4. **TypeScript errors**: Check that all imports are correct and types match

### Debug Tips

- Use React DevTools to inspect navigation state
- Check console logs for navigation errors
- Verify file paths and imports are correct
- Test navigation on both iOS and Android

## 📚 Additional Resources

- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [React Navigation Tabs](https://reactnavigation.org/docs/tab-based-navigation)
- [Ionicons Reference](https://ionic.io/ionicons)

---

This navigation system is designed to be scalable, maintainable, and developer-friendly. Follow these guidelines to ensure consistency and avoid common pitfalls. 