import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable, useColorScheme } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={26} style={{ marginBottom: -4 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="kanban"
        options={{
          title: 'Tableros',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="table" color={color} />
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
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="magic" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pdf"
        options={{
          title: 'PDFs',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="file-pdf-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
          title: 'ToDo',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar-check-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: 'Notas',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="sticky-note-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
