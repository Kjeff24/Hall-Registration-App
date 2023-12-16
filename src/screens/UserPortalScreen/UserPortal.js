/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserPortal = ({navigation}) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
  };
  const handleLoginPress = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
  };
  const handleCreateAccount = () => {
    // Navigate to the Login screen
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.view1}>
      <View style={styles.view10}>
        <Pressable onPress={handleBackButtonClick}>
          <Ionicons name="chevron-back-circle-sharp" size={39} color={'#fff'} />
        </Pressable>
      </View>
      <View style={styles.view7}>
        <Text style={styles.text1}>CREATE ACCOUNT</Text>
        <Text style={styles.text2}>Create a new account with us</Text>
      </View>
      {/* <View style={styles.view2}>
        <Image
          source={require('../../assets/hall_bg.png')}
          style={styles.bg1}
        />
      </View> */}
      <View style={styles.view3}>
        <Image
          source={require('../../assets/ellipse1.png')}
          style={styles.opa1}
        />
      </View>
      <View style={styles.view4}>
        <Image
          source={require('../../assets/ellipse2.png')}
          style={styles.opa1}
        />
      </View>
      <View style={styles.view5}>
        <Image
          source={require('../../assets/ellipse3.png')}
          style={styles.opa1}
        />
      </View>
      <View style={styles.view6}>
        <Image source={require('../../assets/userVector.png')} />
      </View>
      <View style={styles.view8}>
        <Pressable style={styles.btn1} onPress={handleCreateAccount}>
          <Text style={styles.btntxt}>CREATE AN ACCOUNT</Text>
        </Pressable>
      </View>
      <View style={styles.view9}>
        <Text style={styles.text3}>Already have an account? {''}</Text>
        <Pressable onPress={handleLoginPress}>
          <Text style={styles.text4}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserPortal;
