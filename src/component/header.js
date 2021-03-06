import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

//Make Component
const Header = (props) => {
  const {textStyle,viewStyle} = styles;

  return(
    <View style = {viewStyle}>
      <Text style = {textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent:'center',
    alignItems: 'center',
    height: 60,
    paddingTop:15,
    //Shadow of View
    shadowColor: '#000',
    shadowOffset: {width : 0,height:2},
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize:20,
  }
};

//make Component available in other part of App
export default Header;
