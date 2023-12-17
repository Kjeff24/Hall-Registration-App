/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view1: {
    backgroundColor: '#ffd448',
    flex: 1,
    maxWidth: 480,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    position:'absolute',
    top: 0,
  },
  bg1: {
    opacity:0.51,
  },
  opa1:{
    opacity: 0.30,

  },
  view3: {
    top: 0,
    position: 'absolute',
    right: 0,
  },
  view4: {
    position: 'absolute',
    left: 0,
  },
  view5: {
    bottom: 0,
    position: 'absolute',
    right: 0,
  },
  view6: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: '20%',
    height: '28%',
    width: '90%',
    borderRadius: 10,
  },
  view7:{
    position: 'absolute',
    top: '5%',
  },
  view8: {
    position: 'absolute',
    bottom: '10%',
  },
  view9: {
    position: 'absolute',
    bottom: '15%',
    flexDirection: 'row',

  },
  view10: {
    position:'absolute',
    left: '1%',
    top: '5%',
  },
  view11: {
    position: 'absolute',
    bottom: '40%',
    width: '95%',
  },
  view12: {
    position: 'absolute',
    bottom: '20%',
    width: '95%',
  },
  text1: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    color: '#000',
    width: 316,
  },
  text2: {
    textAlign: 'center',
    fontWeight: '800',
    color: '#fff',
  },
  text3: {
    fontSize: 16,
    fontWeight: '800',
  },
  text4: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
  },
  text5: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
  },
  text6: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
    textAlign: 'left',
    marginLeft: '5%',
  },
  input3:{
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  btn1:{
    borderRadius: 5,
    backgroundColor: '#776C04',
    paddingVertical: 15,
    paddingHorizontal: 45,
    position: 'relative',
  },
  btntxt: {
    fontWeight: '800',
    fontSize: 22,
    color: '#fff',
  },
  dropdown:{
    backgroundColor: 'transparent',
    // color: '#465',
    paddingHorizontal: 5,
  },
  dropdownlabel:{
    color: '#000',
    fontWeight: '800',
  },
  spacer:{
    marginTop: '2%',
  },
  margin:{
    marginLeft: '5%',
  },
});

export { styles };
