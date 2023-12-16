/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable, Image, TextInput} from 'react-native';

import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Signup = ({navigation}) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
  };
  const handleLoginPress = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
  };
  return (
    <View style={styles.view1}>
    <View style={styles.view10}>
          <Pressable onPress={handleBackButtonClick}>
            <Ionicons
              name="chevron-back-circle-sharp"
              size={39}
              color={'#fff'}
            />
          </Pressable>
        </View>
      <View style={styles.view7}>
          <Text style={styles.text1}>CREATE ACCOUNT</Text>
        <Text style={styles.text2}>Fill the form to create account</Text>
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
      <View style={styles.view9}>
        <View>
          <Text style={styles.text3}>Last Name</Text>
          <TextInput style={styles.input1} placeholder="Last Name" />
        </View>
        <View style={styles.horizontalSpace} />
        <View>
          <Text style={styles.text3}>First Name</Text>
          <TextInput style={styles.input2} placeholder="First Name" />
        </View>
      </View>
      <View style={styles.view11}>
        <Text style={styles.text3}>Phone Number</Text>
        <TextInput style={styles.input3} placeholder="Enter Phone Number" />
      </View>
      <View style={styles.view11}>
        <Text style={styles.text3}>Student ID</Text>
        <TextInput style={styles.input3} placeholder="Enter Student ID" />
      </View>
      <View style={styles.view11}>
        <Text style={styles.text3}>Student Email</Text>
        <TextInput style={styles.input3} placeholder="Enter Student Email" />
      </View>
      <View style={styles.view11}>
        <Text style={styles.text3}>New Password</Text>
        <TextInput
          style={styles.input3}
          placeholder="Enter New Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.view8}>
        <Pressable style={styles.btn1} onPress={handleLoginPress}>
          <Text style={styles.btntxt}>CREATE AN ACCOUNT</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
