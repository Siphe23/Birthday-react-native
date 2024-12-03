// App.js (or App.tsx if using TypeScript)
import React from 'react';
import { SafeAreaView } from 'react-native';
import BirthdayCard from '../../components/BirthdayCard'; // Ensure this path matches your file structure

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <BirthdayCard />
  </SafeAreaView>
);

export default App;
