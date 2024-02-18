import Button from '@/components/Button';
import { View } from '@/components/Themed';
import { useAuth } from '@clerk/clerk-react';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

export default function ProfileScreen() {
  const { isLoaded, signOut } = useAuth();

  if (!isLoaded) return null;

  return (
    <View className='flex-1 items-center p-4'>
      <Button
        variant='primary'
        label='Cerrar sesión'
        icon='sign-out'
        onPress={() => signOut()}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
