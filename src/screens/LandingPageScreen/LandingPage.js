/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {styles} from './style';

const LandingPage = ({navigation}) => {
  const handleGetStarted = () => {
    navigation.navigate('UserPortal');
  };
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Image
          source={require('../../assets/hall_bg.png')}
          style={styles.bg1}
        />
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
        <Image source={require('../../assets/hall_logo.png')} />
      </View>
      <View style={styles.view7}>
        <Text style={styles.text1}>Welcome To Elizabeth Frances Sey Hall</Text>
      </View>
      <View style={styles.view8}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={handleGetStarted}>
          <Text style={styles.btntxt}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;
