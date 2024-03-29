import { Text, View } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

export default function ModalScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='font-bold text-2xl'>Tab One</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
