import { ClerkProvider } from '@clerk/clerk-expo';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import Constants from "expo-constants";
import * as SecureStore from 'expo-secure-store';
import { useColorScheme } from 'react-native';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();

  const themeColor = colorScheme === 'dark' ? DarkTheme : DefaultTheme
  const key = Constants.expoConfig?.extra?.clerkPublishableKey

  if (!key) {
    throw new Error('Clerk publishable key is missing. Please add it to app.config.js')
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={key}>
      <ThemeProvider value={themeColor}>
        {children}
      </ThemeProvider>
    </ClerkProvider>
  )
}
