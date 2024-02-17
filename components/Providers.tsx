import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

export default function Providers({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? DarkTheme : DefaultTheme

  return (
    <ThemeProvider value={themeColor}>
      {children}
    </ThemeProvider>
  )
}