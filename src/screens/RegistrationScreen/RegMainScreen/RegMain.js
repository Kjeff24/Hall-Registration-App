/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './style';
// import Ionicons from 'react-native-vector-icons/Ionicons';

/* eslint-disable prettier/prettier */
const RegMain = ({navigation}) => {
    // const handleBackButtonClick = () => {
    //   navigation.goBack();
    // };
    const handlePayDues = () => {
      navigation.navigate('RegDues');
    };
    const handleSkip = () => {
      navigation.navigate('Home');
    };
    return (
        <View style={styles.view1}>
          {/* <View style={styles.view10}>
            <Pressable onPress={handleBackButtonClick}>
              <Ionicons name="chevron-back-circle-sharp" size={39} color={'#fff'} />
            </Pressable>
          </View> */}
          <View style={styles.view7}>
            <Text style={styles.text1}>REGISTRATION</Text>
            <Text style={styles.text2}>Follow steps to complete registration</Text>
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
            <Image source={require('../../../assets/reg_main_logo.png')} />
          </View>
          <View style={styles.view8}>
            <Pressable style={styles.btn1} onPress={handlePayDues}>
              <Text style={styles.btntxt}>CREATE AN ACCOUNT</Text>
            </Pressable>
          </View>
          <View style={styles.view9}>
            <Text style={styles.text3}>Already registered {''}</Text>
            <Pressable onPress={handleSkip}>
              <Text style={styles.text4}>Skip</Text>
            </Pressable>
          </View>
        </View>
    );
};

export default RegMain;
