/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SupportDetail = ({navigation}) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
  };
  const handleSubmitComplaint = () => {
    Alert.alert('Success', 'Submission successful', [
      {
        text: 'Ok',
        onPress: () => navigation.navigate('SupportMain'),
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
        <Text style={styles.text1}>SUPPORT</Text>
        <Text style={styles.text2}>Fill form to lodge complaint</Text>
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
      <View style={styles.view11}>
        <Text style={styles.text3}>Name</Text>
        <TextInput style={styles.input3} placeholder="Enter Name" />
      </View>
      <View style={styles.view13}>
        <Text style={styles.text3}>Room</Text>
        <TextInput
          style={styles.input3}
          placeholder="Enter Room Number"
        />
      </View>
      <View style={styles.view14}>
        <Text style={styles.text3}>Type Complaint</Text>
        <TextInput
          editable
          multiline
          numberOfLines={10}
          style={styles.input3}
          placeholder="Type Complaint Here"
        />
      </View>
      <View style={styles.view8}>
        <Pressable style={styles.btn1} onPress={handleSubmitComplaint}>
          <Text style={styles.btntxt}>Submit Complaint</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SupportDetail;
