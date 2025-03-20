import React from 'react';
import { Button, Layout, Icon,Text } from '@ui-kitten/components';
import { ScrollView, StyleSheet, View, Dimensions, Image, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get("window");

const WelcomeScreen = ({ constentType }) => {

 
  
  const stepFormWidth = width;
  const stepFormHeight = height;
  let imageSource;
  let buttonColor;

  switch (constentType) {
    case "anime":
      imageSource = require('../images-assets/anime.jpg');
      buttonColor = "primary";
      break;
    case "movies":
      imageSource = require('../images-assets/movies.jpg');
      buttonColor = "warning";
      break;
    case "series":
      imageSource = require('../images-assets/series.jpg');
      buttonColor = "info";
      break;
  }

  // Function to render the icon
 

  return (
    <>
      <ImageBackground source={imageSource} blurRadius={20}>
        <View style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={{ width: "100%", borderRadius: 2 }}>
            <View
              style={{
                width: stepFormWidth,
                height: stepFormHeight,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 160,
              }}
            >
              {/* <Text
              status= {buttonColor}
                style={{
                 
                  fontSize: 30,
                  fontFamily: "monospace",
                }}
              >
                {constentType.toUpperCase() + " UNIVERSE"}
              </Text> */}
              <Image source={imageSource} style={{ width: 300, height: 600 }} borderRadius={30} />
              
              <Button
                style={styles.button}
                appearance="outline"
                status={buttonColor}
                // accessoryLeft={PlayIcon} // Correctly pass the function
              >
                {"STREAM " + constentType.toUpperCase() + " ?"}
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    margin: 2,
  },
  controlContainer: {
    margin: 2,
    padding: 6,
    borderRadius: 6,
    justifyContent: "center",
    backgroundColor: "#3366FF",
  },
});
