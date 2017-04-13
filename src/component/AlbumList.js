import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ScrollView,
} from 'react-native';
// import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList  extends Component
{
  state = {albums: []};
  componentWillMount()
  {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then((data) =>{
      this.setState({albums:data});
    })
    .catch((err) => {
      console.log(err);
    });
  }
  renderAlbums()
  {
    console.log("test");
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render(){
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
//make Component available in other part of App
export default AlbumList;
