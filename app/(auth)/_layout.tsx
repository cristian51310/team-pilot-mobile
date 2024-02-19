import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTintColor: '#fff',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        name="login"
      />
    </Stack>
  );
};

export default AuthLayout;