/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry , View} from 'react-native';

import Header from './src/component/header';
import AlbumList from './src/component/AlbumList';

//Create component
const App = () => (
  <View style={{flex: 1 }}>
    <Header headerText ={'Nidhi'}/>
    <AlbumList />
  </View>
)
//Render it to device
AppRegistry.registerComponent('albums', () => App);


// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   Image, TextInput,ListView
// } from 'react-native';

/*export default class albums extends Component
{
  render() {
    return (
      <View>
        <View style={styles.colorset} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Nidhi' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }

render()
{
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Hello
      </Text>
      </View>
    );
}
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>


  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={styles.colorset}/>
    );
 }
 }

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  colorset:{
    // backgroundColor : 'red',
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
});

AppRegistry.registerComponent('albums', () => albums);


constructor(props) {
  super(props);
  this.state = {text: ''};
}

render() {
  return (
    <View style={{padding: 10}} >
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}
      />
      <Text style={{padding: 0, fontSize: 40}}>
        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>

  );
}
constructor(props) {
  super(props);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows([
      'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
    ])
  };
}
render() {
  return (
    <View style={{flex: 1, paddingTop: 22}}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    </View>
  );
}
*/

// export default class albums extends Component
// {
//   render()
//   {
//     return(
//       <Text>Hello</Text>
//     );
//   }
// }
// const albums = ()=> {
// return (<View style = {styles.viewStyle}>
//   <Text style={styles.text}>Hello!</Text>
//    </View>)
// }
//
// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 50,
//   },
//   viewStyle: {
//     width: Dimensions.get('window').width,
//     height: 60,
//     backgroundColor: 'whitesmoke',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
// })
