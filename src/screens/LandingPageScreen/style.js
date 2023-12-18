/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view1: {
    backgroundColor: '#BCAE2B',
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
    opacity: 0.60,

  },
  view3: {
    top: '-2%',
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
    top: '10%',
    position: 'absolute',
  },
  text1: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff',
    width: 316,
  },
  view7:{
    marginTop: 60,
  },
  view8: {
    position: 'absolute',
    bottom: '20%',
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
});

export { styles };
