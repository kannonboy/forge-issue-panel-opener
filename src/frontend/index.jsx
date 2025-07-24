import React from 'react';
import ForgeReconciler, { Text } from '@forge/react';

const App = () => {
  return (
    <>
      <Text>If you can read this message, I'm working!</Text>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
