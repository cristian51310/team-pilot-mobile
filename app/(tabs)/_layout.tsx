import UserAvatar from '@/components/UserAvatar';
import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as NavigationBar from "expo-navigation-bar";
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Platform, Pressable, Text, View, useColorScheme } from 'react-native';

if (Platform.OS === 'android') {
  NavigationBar.setPositionAsync("absolute");
  NavigationBar.setBackgroundColorAsync("transparent");
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  focused: boolean;
  label: string;
}) {
  const isFocus = props.focused;

  return (
    <View
      className='gap-1.5 ios:-mb-7 android:-mb-3'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: isFocus ? "#e9d5ff" : "transparent",
          paddingVertical: 5,
          paddingHorizontal: 22,
          borderRadius: 20,
        }}
      >
        <FontAwesome
          size={isFocus ? 24 : 22}
          {...props}
        />
      </View>
      <Text
        style={{
          color: isFocus ? "#7e22ce" : "gray",
          fontWeight: isFocus ? "bold" : "normal",
          fontSize: isFocus ? 14 : 10,
        }}
      >
        {props.label}
      </Text>
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 100,
            paddingHorizontal: 14,
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
              <Link href="/kanban-add" asChild>
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
            headerRight: () => (
              <Link href="/notes-add" asChild>
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
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon focused={focused} label='Notas' name="sticky-note-o" color={color} />
            ),
          }}
        />
      </Tabs>
    </>

  );
}
