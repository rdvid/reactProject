import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Linking, Pressable, View, SafeAreaView, Image } from 'react-native';
import { Button, TouchableWithoutFeedback } from 'react-native-web';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/60834135?v=4';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const urlGithub = 'https://github.com/rdvid';

export default function App() {

  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlGithub);
    
    if(res){
      await Linking.openURL(urlGithub)
    }
  
  
  }

  return (  
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
        source={{uri: imageProfileGithub}} 
        style={styles.avatar} 
        accessibilityLabel ='Rafael frente ao espelho com celular'/>
        <Text accessibilityLabel='Nome: Rafael David da Silva' style={[styles.defaultText, styles.name]}> Rafael David da Silva</Text>
        <Text accessibilityLabel='Nickname: rdvid' style={[styles.defaultText, styles.nickname]}>rdvid</Text>
        <Text 
        acessibilityLabel="Descrição: Front End Web Developer || Javascript || Html || CSS" 
        style={[styles.defaultText, styles.description]}>Front End Web Developer || Javascript || Html || CSS</Text>   
      </View>
      <Pressable onPress={handlePressGoToGithub}>
        <View style={[styles.button, styles.textButton]}>
          <Text>Open in Github</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGithub,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 250,
    width: 250,
    borderRadius: 1000,
    borderColor: 'grey',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  }


});
