import Providers from '@/components/Providers';
import { useAuth } from '@clerk/clerk-expo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import "../global.css";

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function InitialLayout() {
  return (
    <Providers>
      <RootLayout />
    </Providers>
  )
}

function RootLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  const [loaded, error] = useFonts({
    //SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    // Verificar si todas las condiciones necesarias están cumplidas
    if (isSignedIn) {
      router.replace('/');
    } else {
      router.replace('/login');
    }
  }, [isSignedIn, router]);

  if (!isLoaded || !loaded) return null;

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        options={{ presentation: 'modal', title: "Mi perfil" }}
      />
      <Stack.Screen
        name="kanban-add"
        options={{ presentation: 'modal', title: "Crear Tablero" }}
      />
      <Stack.Screen
        name="notes-add"
        options={{ presentation: 'modal', title: "Crear Nueva Nota" }}
      />
    </Stack>
  )
}


