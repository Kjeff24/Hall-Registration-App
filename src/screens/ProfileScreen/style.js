/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg1: {
    opacity: 0.51,
  },
  opa1: {
    opacity: 0.3,
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
    position: 'absolute',
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
    top: '45%',
    marginLeft: '5%',
  },
  view5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '55%',
    position: 'absolute',
    width: '90%',
  },
  view6: {
    position: 'absolute',
    top: '15%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: '#CBB708',
    borderRadius: 20,
    width: '90%',
    paddingVertical: '5%',
    // height: '25%',
    // padding: '10%',
  },
  view7: {
    position: 'absolute',
    top: '5%',
  },
  view8: {
    position: 'absolute',
    bottom: '15%',
  },
  view9: {
    position: 'absolute',
    bottom: '5%',
  },
  view10: {
    position: 'absolute',
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
    position: 'absolute',
    top: '50%',
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
  text5: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
    textAlign: 'left',
  },
  btn1: {
    borderRadius: 5,
    backgroundColor: '#776C04',
    paddingVertical: 10,
    paddingHorizontal: '8%',
  },
  btn2: {
    borderRadius: 5,
    backgroundColor: '#776C04',
    paddingVertical: 10,
    paddingHorizontal: '10%',
  },
  btntxt: {
    fontWeight: '800',
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  input1: {
    color: '#E4E3D4',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '12%',
  },
  input2: {
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '12%',
    padding: 10,
  },
  input3: {
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  horizontalSpace: {
    paddingHorizontal: '5%',
  },
  spacer:{
    marginTop: '5%',
  },
  line: {
    borderWidth: 3,
    width: '100%',
    borderColor: '#D9D9D9',
    marginTop: '1%',
  },
  pen: {
    width: '90%',
    alignItems: 'flex-end',
    padding: 2,
  },
});

export {styles};
