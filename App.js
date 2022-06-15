import React, {useState, useEffect} from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Torch from "react-native-torch";
import RNShake from 'react-native-shake';


const App = () => {

  const [toggle, setToggle] = useState(false);
  
  const handleOnPress = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    // liga flashlight
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      handleOnPress()
    });

    return () => subscription.remove();

  });


  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity 
        onPress={handleOnPress}>
      
        <Image 
          style={
            toggle 
              ? style.lightingOn
              : style.lightingOff
            }
          source={
            toggle 
              ? require('./icons/eco-light.png')
              : require('./icons/eco-light-off.png')
          } 
        />

        <Image 
          style={
            toggle 
              ? style.logoDioOn
              : style.logoDioOff
            }
          source={
            toggle 
              ? require('./icons/logo-dio.png')
              : require('./icons/logo-dio-white.png')
          } 
        />

      </TouchableOpacity>
    </View>

  )

};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  logoDioOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  logoDioOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 250,
    height: 250,
  },

});