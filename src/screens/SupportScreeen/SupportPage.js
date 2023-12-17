/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';

const SupportMain = ({navigation}) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
  };
  const handleSupportDetail = () => {
    navigation.navigate('SupportDetail');
  };
  return (
    <View style={styles.view1}>
      <View style={styles.view10}>
        <Pressable onPress={handleBackButtonClick}>
          <Ionicons name="chevron-back-outline" size={39} color={'#000'} />
        </Pressable>
      </View>
      <View style={styles.view7}>
        <Text style={styles.text1}>SUPPORT</Text>
        <Text style={styles.text2}>
          Lodge Complaint to various hall workers
        </Text>
      </View>
      {/* <View style={styles.view2}>
    <Image
      source={require('../../assets/hall_bg.png')}
      style={styles.bg1}
    />
  </View> */}
      {/* <View style={styles.view3}>
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
    </View> */}
      <View style={styles.view6}>
        <Image source={require('../../assets/support_logo.png')} />
      </View>
      {/* <View style={styles.view11}>
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
    </View> */}
      <View style={styles.view8}>
        <Pressable style={styles.btn1} onPress={handleSupportDetail}>
          <Text style={styles.btntxt}>Electrical</Text>
        </Pressable>
        <Pressable style={styles.btn1} onPress={handleSupportDetail}>
          <Text style={styles.btntxt}>Payment Issues</Text>
        </Pressable>
        <Pressable style={styles.btn1} onPress={handleSupportDetail}>
          <Text style={styles.btntxt}>Plumbing</Text>
        </Pressable>
        <Pressable style={styles.btn1} onPress={handleSupportDetail}>
          <Text style={styles.btntxt}>Furniture</Text>
        </Pressable>
      </View>
      <View style={styles.view12}>
        <Text style={styles.text3}>We're here to help you</Text>
      </View>
    </View>
  );
};

export default SupportMain;
