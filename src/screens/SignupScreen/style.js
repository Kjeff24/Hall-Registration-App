/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bg1: {
    opacity:0.51,
  },
  opa1:{
    opacity: 0.30,

  },
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
    left: '5%',
    top: '25%',
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  view10: {
    position:'absolute',
    left: '1%',
    top: '5%',
  },
  view11: {
    marginTop: '5%',
    width: '95%',
  },
  view12: {
    width: '45%',
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
    marginLeft: '1%',
    fontWeight: '800',
    color: '#000',
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
  input1:{
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft:10,
    // backgroundColor: '#000',
  },
  input2:{
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft:10,
  },
  input3:{
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export { styles };
