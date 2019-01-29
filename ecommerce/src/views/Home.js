import React, { Component } from 'react'
import { View, Text,
  TouchableOpacity, Button,
  ImageBackground, StyleSheet, Image,
   Dimensions, TextInput, ScrollView } from 'react-native'
import { connect } from 'react-redux'


class Home extends Component {
  static navigationOptions = {
    draverLabel: 'home'
  }

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { title: 'Man wear',
          image: require('../images/mans.png'),
        },
        { title: 'Women wear',
          image: require('../images/womans.png'),
      },
        { title: 'Kids wear',
          image: require('../images/kids.png'),
      },
      ],
    };
  }

  viewCategories(){
    return (
      <View style={{flexDirection: 'column'}}>

      { this.state.categories.map((item, key)=>(
          (key == 0)
          ?
          <View style={styles.categoryItem} key={key}>
            <Image source={item.image} style={{width: "100%"}}/>
            <Text style={styles.categoryButton}  > { item.title }</Text>
          </View>
          :
          <View style={styles.categoryItem} key={key}>
            <Image source={item.image} style={{width: "100%"}}/>
            <Text style={styles.categoryButton} > { item.title }</Text>
          </View>
        )
       )}
      </View>
    )
  }

  render () {
    return (
      <View>
        <ScrollView>
        {this.viewCategories()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  categoryItem: {
    padding: 10,
  },
  categoryButton: {
    padding: 10,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#333333'
  }
});

export default connect(null, null)(Home)
