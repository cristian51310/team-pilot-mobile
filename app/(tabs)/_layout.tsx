import UserAvatar from '@/components/UserAvatar';
import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable, Text, View, useColorScheme } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  focused: boolean;
  label: string;
}) {
  const isFocus = props.focused;
  const classNamesContainer = ["py-1.5 px-7 rounded-full"]
  const classNamesText = []

  if (isFocus) classNamesText.push('text-purple-600 font-bold');
  else classNamesText.push('text-gray-600 text-xs');

  if (isFocus) classNamesContainer.push('bg-purple-200');

  return (
    <View className='flex justify-center items-center gap-1.5 -mb-7'>
      <View className={classNamesContainer.join(" ")}>
        <FontAwesome
          size={isFocus ? 24 : 22}
          {...props}
        />
      </View>
      <Text className={classNamesText.join(" ")}>
        {props.label}
      </Text>
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          paddingHorizontal: 10,
        },
        headerLeft: () => (
          <UserAvatar />
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tableros',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="table" label='Tableros' color={color} focused={focused} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus-square-o"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="ocr"
        options={{
          title: 'OCR',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="magic" label='OCR' focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pdf"
        options={{
          title: 'PDFs',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} name="file-pdf-o" label="PDFs" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
          title: 'Tareas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} label='ToDo' name="calendar-check-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: 'Notas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} label='Notas' name="sticky-note-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
