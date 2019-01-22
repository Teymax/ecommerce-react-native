import React, { Component } from 'react'
import { View, Text,
  TouchableOpacity, Button,
  ImageBackground, StyleSheet ,
   Dimensions, TextInput} from 'react-native'
import { connect } from 'react-redux'


class Home extends Component {
  static navigationOptions = {
    draverLabel: 'home'
  }

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { title: 'Man wear' },
        { title: 'Women wear'},
        { title: 'Kids wear'},
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
            <Text style={styles.categoryButton}  > { item.title }</Text>
          </View>
          :
          <View style={styles.categoryItem} key={key}>
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
        {this.viewCategories()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  categoryItem: {
    padding: 40,
  },
  categoryButton: {
    padding: 10,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#333333'
  }
});

export default connect(null, null)(Home)
