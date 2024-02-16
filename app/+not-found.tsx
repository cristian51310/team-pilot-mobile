import { Text, View } from '@/components/Themed';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className='flex-1 items-center justify-center p-5'>
        <Text className='font-bold text-2xl'>
          Esta página no existe.
        </Text>

        <Link href="/" className='mt-4 py-4'>
          <Text className='text-base text-[#2e78b7]'>
            Ir a la pantalla principal!
          </Text>
        </Link>
      </View>
    </>
  );
}
