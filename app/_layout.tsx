import Providers from '@/components/Providers';
import SignInWithOAuth from '@/components/SignInWithOAuth';
import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import "../global.css";

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function InitialLayout() {
  return (
    <Providers>
      <RootLayout />
    </Providers>
  )
}

function RootLayout() {
  const [loaded, error] = useFonts({
    //SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  if (!isLoaded || !loaded) return null;

  useEffect(() => {
    if (isSignedIn) {
      router.replace('/');
    } else if (!isSignedIn) {
      router.replace('/login');
    }
  }, [isSignedIn]);

  return (
    <>
      <SignedIn>
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
            name="modal"
            options={{ presentation: 'modal', }}
          />
        </Stack>
      </SignedIn>
      <SignedOut>
        <SignInWithOAuth />
      </SignedOut>
    </>
  )
}


