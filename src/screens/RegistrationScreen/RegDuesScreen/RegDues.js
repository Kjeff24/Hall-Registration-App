/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropdownSelect from 'react-native-input-select';

const RegDues = ({navigation}) => {
  const [country, setCountry] = React.useState();
  const handleBackButtonClick = () => {
    navigation.goBack();
  };
  const handleQRCode = () => {
    navigation.navigate('RegQR');
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
        <Text style={styles.text2}>Pay hall dues to continue</Text>
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
        <View style={styles.spacer} />
        <Text style={styles.text5}>TOTAL HALL DUES</Text>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <View style={styles.margin}>
          <Text>Plant & Fuel Levy</Text>
          <Text>GHc70.00</Text>
          <View style={styles.spacer} />
          <Text>JCR dues</Text>
          <Text>GHc50.00</Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <Text style={styles.text6}>Total</Text>
        <Text style={styles.text6}>GHc120.00</Text>
      </View>
      <View style={styles.view11}>
        <Text style={styles.text3}>Enter Payment Details</Text>
        <TextInput style={styles.input3} placeholder="Choose Mobile Network" />
      </View>
      <View style={styles.view12}>
        <DropdownSelect
          label="Country"
          labelStyle={styles.dropdownlabel}
          placeholder="Select an option..."
          options={[
            {label: 'Nigeria', value: 'NG'},
            {label: 'Åland Islands', value: 'AX'},
            {label: 'Algeria', value: 'DZ'},
            {label: 'American Samoa', value: 'AS'},
            {label: 'Andorra', value: 'AD'},
          ]}
          selectedValue={country}
          onValueChange={value => setCountry(value)}
          dropdownStyle={styles.dropdown}
          style={styles.dropdown}
        />
      </View>
      <View style={styles.view8}>
        <Pressable style={styles.btn1} onPress={handleQRCode}>
          <Text style={styles.btntxt}>Pay Hall Dues</Text>
        </Pressable>
      </View>
      {/* <View style={styles.view9}>
            <Text style={styles.text3}>Already registered {''}</Text>
            <Pressable onPress={handleHome}>
              <Text style={styles.text4}>Skip</Text>
            </Pressable>
          </View> */}
    </View>
  );
};

export default RegDues;
