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
    // backgroundColor: '#ffd448',
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
    bottom: '10%',
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
    justifyContent: 'center',
    width: '100%',
  },
  view10: {
    position:'absolute',
    left: '1%',
    top: '5%',
  },
  view11: {
    position: 'absolute',
    top: '20%',
    width: '95%',
  },
  view13: {
    position: 'absolute',
    top: '35%',
    width: '95%',
  },
  view14: {
    // position: 'absolute',
    // top: '50%',
    width: '95%',
  },
  view12: {
    position: 'absolute',
    bottom: '5%',
    flexDirection: 'row',

  },
  text1: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    color: '#CBB708',
  },
  text2: {
    textAlign: 'center',
    fontWeight: '800',
    color: '#000',
  },
  text3: {
    marginLeft: '1%',
    fontWeight: '800',
    color: '#000',
  },
  text4: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
  },
  btn1:{
    borderRadius: 5,
    backgroundColor: '#776C04',
    paddingVertical: 10,
    paddingHorizontal: '20%',
    // paddingHorizontal: 45,
  },
  btntxt: {
    fontWeight: '800',
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  input1:{
    color: '#E4E3D4',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '12%',
  },
  input2:{
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '12%',
    padding: 10,
  },
  input3:{
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
horizontalSpace: {
    paddingHorizontal: '5%',
},
});

export { styles };
