/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';

const RegQR = ({navigation}) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
  };
  const handleDetail = () => {
    navigation.navigate('RegDetails');
  };
  const handleCancel = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.view1}>
      <View style={styles.view10}>
        <Pressable onPress={handleBackButtonClick}>
          <Ionicons name="chevron-back-circle-sharp" size={39} color={'#fff'} />
        </Pressable>
      </View>
      <View style={styles.view7}>
        <Text style={styles.text1}>REGISTRATION</Text>
        <Text style={styles.text2}>Scan QR code to continue</Text>
      </View>
      {/* <View style={styles.view2}>
            <Image
              source={require('../../assets/hall_bg.png')}
              style={styles.bg1}
            />
          </View> */}
      <View style={styles.view3}>
        <Image
          source={require('../../../assets/ellipse1.png')}
          style={styles.opa1}
        />
      </View>
      <View style={styles.view4}>
        <Image
          source={require('../../../assets/ellipse2.png')}
          style={styles.opa1}
        />
      </View>
      <View style={styles.view5}>
        <Image
          source={require('../../../assets/ellipse3.png')}
          style={styles.opa1}
        />
      </View>
      <View style={styles.view6}>
        <Image source={require('../../../assets/qr_logo.png')} />
      </View>
      <View style={styles.view11}>
        <Text style={styles.text5}>
          Scan QR code to complete registration. Tap Scan & Continue to scan.
        </Text>
      </View>
      <View style={styles.view8}>
        <Pressable style={styles.btn1} onPress={handleDetail}>
          <Text style={styles.btntxt}>Scan & Continue</Text>
        </Pressable>
      </View>
      <View style={styles.view9}>
        <Pressable style={styles.btn1} onPress={handleCancel}>
          <Text style={styles.btntxt}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegQR;
