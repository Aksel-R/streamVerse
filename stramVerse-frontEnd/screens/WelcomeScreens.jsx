import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';

import WelcomeScreen from './WelcomeScreen';

const content = ["anime", "series", "movies"];

const WelcomeScreens = () => {
  return (
    <ScrollView
      pagingEnabled
      horizontal
      style={{ flexGrow: 1 }}
    >
      {content.map((el, index) => {
        console.log(el); // Logs each item: anime, series, movies

        return (
          <WelcomeScreen
            key={index}  // Add key prop for each element
            constentType={el}  // Corrected the prop name to 'contentType'
          />
        );
      })}
    </ScrollView>
  );
};

export default WelcomeScreens;
