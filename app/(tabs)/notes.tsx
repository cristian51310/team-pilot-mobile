import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { loadDatabase } from '@/utils/loadDatabase';

export default function TabTwoScreen() {
  const [dbLoaded, setDbLoaded] = useState(false);

  useEffect(() => {
    loadDatabase()
      .then(() => { setDbLoaded(true) })
      .catch((e) => console.error(e))
  }, [])

  if (!dbLoaded) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' />
        <Text className='font-bold text-2xl'>
          Cargando base de datos...
        </Text>
      </View>
    );
  }

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='font-bold text-2xl'>
        Mis notas
      </Text>
    </View>
  );
}
