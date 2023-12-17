/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropdownSelect from 'react-native-input-select';

const RegDetails = ({navigation}) => {
  const [level, setLevel] = React.useState();
  const handleBackButtonClick = () => {
    navigation.goBack();
  };
  const handleSuccess = () => {
    Alert.alert('Success', 'Registration was successful', [
      {
        text: 'Ok',
        onPress: () => navigation.navigate('Home'),
      },
    ]);
  };
  const handleImagePicker = () => {
    Alert.alert(
      'Upload Image',
      'Would you like to upload an image?',
      [
        {
          text: 'Yes',
          onPress: () => Alert.alert('Image successfully uploaded'),
        },
        {
          text: 'No',
          onPress: () => Alert.alert("Image upload wasn't successful"),
        },
      ], // Buttons
    );
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
        <Text style={styles.text2}>Fill form to complete registration</Text>
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
      <View style={styles.view9}>
        <View style={styles.view12}>
          <Text style={styles.text3}> Room Number</Text>
          <TextInput style={styles.input1} placeholder="Enter Room Number" />
        </View>
        <View style={styles.horizontalSpace} />
        <View style={styles.view12}>
          <Text style={styles.text3}> Telephone Number</Text>
          <TextInput style={styles.input2} placeholder="Enter Tel Number" />
        </View>
      </View>
      <View style={styles.view11}>
        <Text style={styles.text3}>Guardian Name</Text>
        <TextInput style={styles.input3} placeholder="Enter Guardian Number" />
      </View>
      <View style={styles.view11}>
        <DropdownSelect
          label="Level"
          labelStyle={styles.dropdownlabel}
          placeholder="Select an option..."
          options={[
            {label: '100', value: '100'},
            {label: '200', value: '200'},
            {label: '300', value: '300'},
            {label: '400', value: '400'},
            {label: '500', value: '500'},
            {label: '600', value: '600'},
          ]}
          selectedValue={level}
          onValueChange={value => setLevel(value)}
          dropdownStyle={styles.dropdown}
          style={styles.dropdown}
        />
      </View>
      <View style={styles.view11}>
        <Text style={styles.text3}>Course</Text>
        <TextInput style={styles.input3} placeholder="Enter Course" />
      </View>
      <View style={styles.view11}>
        <Text style={styles.text3}>Upload Picture</Text>
        <Pressable onPress={handleImagePicker}>
          <Image source={require('../../../assets/image_picker.png')} />
        </Pressable>
      </View>
      <View style={styles.view8}>
        <Pressable style={styles.btn1} onPress={handleSuccess}>
          <Text style={styles.btntxt}>Save & Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegDetails;
