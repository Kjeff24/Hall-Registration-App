/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable, Alert, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';

const Profile = ({navigation}) => {
  const handleCancel = () => {
    navigation.navigate('Home');
  };
  const handleBackButtonClick = () => {
    navigation.goBack();
  };
  const handleSave = () => {
    Alert.alert('Success', 'Profile saved successful', [
      {
        text: 'Ok',
        onPress: () => navigation.navigate('Profile'),
      },
    ]);
  };
  return (
    <View style={styles.view1}>
      <View style={styles.view10}>
        <Pressable onPress={handleBackButtonClick}>
          <Ionicons name="chevron-back-outline" size={39} color={'#000'} />
        </Pressable>
      </View>
      <View style={styles.view7}>
        <Text style={styles.text1}>PROFILE</Text>
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
        <View>
          <Image source={require('../../assets/person_1.png')} />
        </View>
        <View>
          <View style={styles.spacer} />
          <Text>Name</Text>
          <Text style={styles.text4}>Gabriel Smith</Text>
          <View style={styles.spacer} />
          <Text>Student ID</Text>
          <Text style={styles.text4}>10911111</Text>
          <View style={styles.spacer} />
          <Text>Room</Text>
          <Text style={styles.text4}>0000</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text5}>Personal Information</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.pen}>
        <Image source={require('../../assets/pen.png')}/>
      </View>
      <View style={styles.view5}>
        <View>
          <Text>Level</Text>
          <Text style={styles.text4}>300</Text>
          <View style={styles.spacer} />
          <Text>Student Mail</Text>
          <Text style={styles.text4}>gsmith@st.ug.edu.gh</Text>
          <View style={styles.spacer} />
          <Text>Telephone</Text>
          <Text style={styles.text4}>0200000000</Text>
        </View>
        <View>
          <Text>Guardian's Name</Text>
          <Text style={styles.text4}>Jeffery Smith</Text>
          <View style={styles.spacer} />
          <Text>Guardian's Contact</Text>
          <Text style={styles.text4}>0200000000</Text>
        </View>
      </View>
      <View style={styles.view8}>
        <Pressable style={styles.btn1} onPress={handleSave}>
          <Text style={styles.btntxt}>Save & Continue</Text>
        </Pressable>
      </View>
      <View style={styles.view9}>
        <Pressable style={styles.btn2} onPress={handleCancel}>
          <Text style={styles.btntxt}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;
