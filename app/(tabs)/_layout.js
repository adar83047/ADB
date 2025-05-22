import { Stack } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  // Use Stack navigation without header
  return <Stack screenOptions={{ headerShown: false }} />;
}
