/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable, TextInput, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const Login = ({navigation}) => {
  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };
  const handleBackButtonClick = () => {
    navigation.goBack();
  };
  const handleHome = () => {
    navigation.navigate('MainNavigator');

  };
  return (
    <View style={styles.view1}>
      <View style={styles.view10}>
        <Pressable onPress={handleBackButtonClick}>
          <Ionicons name="chevron-back-circle-sharp" size={39} color={'#fff'} />
        </Pressable>
      </View>
      <View style={styles.view7}>
        <Text style={styles.text1}>SIGN IN</Text>
        <Text style={styles.text2}>Welcome back!</Text>
      </View>
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
        <Image source={require('../../assets/login_logo.png')} />
      </View>
      <View style={styles.view11}>
        <Text style={styles.text3}>Student Email / Phone Number</Text>
        <TextInput style={styles.input3} placeholder="Enter Student Email or Phone Number" />
      </View>
      <View style={styles.view13}>
        <Text style={styles.text3}>New Password</Text>
        <TextInput
          style={styles.input3}
          placeholder="Enter New Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.view8}>
        <Pressable style={styles.btn1} onPress={handleHome}>
          <Text style={styles.btntxt}>SIGN IN</Text>
        </Pressable>
      </View>
      <View style={styles.view12}>
        <Text style={styles.text3}>Already have an account? {''}</Text>
        <Pressable onPress={handleSignupPress}>
          <Text style={styles.text4}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
