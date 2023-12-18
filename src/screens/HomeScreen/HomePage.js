/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {styles} from './style';

const Home = ({navigation}) => {
  const handleLodgeComplaint = () => {
    navigation.navigate('Support');
  };
  return (
    <View style={styles.view1}>
      <View style={styles.view7}>
        <Text style={styles.text1}>Welcome, Gabriel</Text>
      </View>
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
      <View style={styles.view2}>
        <View>
          <Text style={[styles.text6, styles.horizontalSpace]}>
            Registration
          </Text>
          <View style={styles.spacer} />
          <View style={styles.line} />
        </View>
        <View style={styles.view3}>
          <View>
            {/* <Image source={require('../../assets/person_1.png')} /> */}
            <Text style={styles.text7}>Completed</Text>
          </View>
          <View>
            <Text>01/15/2024</Text>
          </View>
          <View>
            <Image source={require('../../assets/correct.png')} />
          </View>
        </View>
      </View>
      <View style={styles.view4}>
        <View>
          <Text>Level</Text>
          <Text style={styles.text5}>300</Text>
        </View>
        <View>
          <Text>Telephone</Text>
          <Text style={styles.text5}>0200000000</Text>
        </View>
        <View>
          <Text>Course</Text>
          <Text style={styles.text5}>BA. Accounting</Text>
        </View>
      </View>
      <View style={styles.line2} />
      <View style={styles.view5}>
        <Text style={styles.text2}>Are You Facing Any Problems?</Text>
        <Text style={styles.text3}>
          Lodge a complaint directly to the hall administration if you are
          facing any issues. Tap the button below to lodge a complaint.
        </Text>
      </View>
      <View style={styles.view8}>
        <Pressable style={styles.btn1} onPress={handleLodgeComplaint}>
          <Text style={styles.btntxt}>Lodge A Complaint</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
