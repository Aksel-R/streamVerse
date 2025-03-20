import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { myTheme } from './custom-theme';


import WelcomeScreens from './screens/WelcomeScreens';

function App() {
  console.log("hello");
  
  return (
    
      <ApplicationProvider {...eva} theme={{...myTheme}}>
        <WelcomeScreens />
      </ApplicationProvider>
   
  );
}

export default App;
