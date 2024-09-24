import { View, Text } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';

const Home = () => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, {user?.emailAddresses[0].emailAddress} 🎉</Text>
      <Text>ID: {user?.id}</Text>
      <Text>First Name: {user?.firstName}</Text>
      <Text>Last Name: {user?.lastName}</Text>
    </View>
  );
};

export default Home;