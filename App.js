/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Routes/home';
import {Image, View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {backgroundColor: '#fff'},
            headerTintColor: '#000',
            headerTitleStyle: {fontWeight: '500', fontSize: 17},
            headerTitle: props => <LogoTitle {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function LogoTitle() {
  return (
    <View style={{alignItems: 'center', marginHorizontal: 10}}>
      <Text style={{fontSize: 17, fontWeight: '900'}}>Labour</Text>
      <View style={styles.sectionStyle}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/001/591/517/non_2x/free-search-icon-free-vector.jpg',
          }}
          style={styles.imageStyle}
        />
        <TextInput
          style={{
            backgroundColor: '#C0C0C0',
            height: 30,
            width: '84%',
            marginVertical: 10,
            borderRadius: 5,
          }}
          placeholder="Search"
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    height: 40,
    width: '100%',
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default App;
