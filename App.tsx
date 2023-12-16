import React, { Component } from 'react';
import { View, Text, FlatList, Image, Alert } from 'react-native';

class App extends Component {

  myData=[

    {
      title:"A",subTitle:"America",img:"https://picsum.photos/seed/picsum/200/300"
    },{
      title:"B",subTitle:"Bangladesh",img:"https://picsum.photos/200/300"
    },{
      title:"C",subTitle:"Canada",img:"https://picsum.photos/id/237/200/300"
    },{
      title:"D",subTitle:"Denmark",img:"https://picsum.photos/200/300/?blur=2"
    },{
      title:"E",subTitle:"England",img:"https://picsum.photos/200/300/?blur"
    },{
      title:"F",subTitle:"France",img:"https://picsum.photos/200/300.webp"
    },{
      title:"G",subTitle:"Germany",img:"https://picsum.photos/200/300.jpg"
    },{
      title:"H",subTitle:"Holand",img:'https://picsum.photos/seed/picsum/200/300'
    },{
      title:"I",subTitle:"India",img:"https://picsum.photos/200/300?grayscale"
    }
  ];

  onItemClick=(alertTitle)=>{
    Alert.alert(alertTitle)
  }

  ChildView=({childTitle,childSubtitle,img})=>{

    return (<View style={{flexDirection:'row',backgroundColor:'gray',padding:5,margin:5,borderRadius:10,flex:100}}>

      <View style={{flex:20}}>
      <Image  style={{height:70,width:"100%",padding:16,borderRadius:10}}source={{uri:img}}/>
      </View>

      <View style={{flex:80,padding:10}}>

      <Text  onPress = {this.onItemClick.bind(this,childSubtitle)}style={{color:'black',fontSize:20}}>{childTitle}</Text>
      <Text style={{color:'black',fontSize:18}}>{childSubtitle}</Text>

      </View>

     
    </View>)

  }

  render() {
    return (
      <FlatList data={this.myData} renderItem={({item})=><this.ChildView childTitle={item.title} childSubtitle={item.subTitle} img={item.img}/>}></FlatList>
    );
  }
}
export default App;
