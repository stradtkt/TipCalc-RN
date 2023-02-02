import React from 'react';
import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import background from './assets/images/background.jpeg';
const App = () => {
  return (
    <>
      <StatusBar/>
      <View style={styles.container}>
        <ImageBackground source={background} resizeMode="cover" style={styles.image}>
          <Text style={styles.title}>Tip Calculator</Text>
          <View style={styles.tipContainer}>
            <View style={styles.tipOutput}>
              <Text style={styles.tipOutputText}>21.50</Text>
              <Pressable style={styles.tipOutputButton}>
                <Text style={styles.tipOutputButtonText}>C</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginVertical: 70
  },
  tipContainer: {
    backgroundColor: 'rgba(0,0,20,0.5)',
    height: 400,
    marginHorizontal: 10,
    marginVertical: 75,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#222',
    shadowOpacity: 0.75,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8
  },
  tipOutput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  tipOutputText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal: 30
  },
  tipOutputButton: {
    backgroundColor: 'darkorange',
    height: 50,
    width: 100,
    borderRadius: 8,
  },
  tipOutputButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 8,
    height: 50
  }
});
StatusBar.setBarStyle('light-content', true);
export default App;