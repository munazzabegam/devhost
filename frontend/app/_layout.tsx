import { Stack } from 'expo-router';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function RootLayout() {
  return (
    
    <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}