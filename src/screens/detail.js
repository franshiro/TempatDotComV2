import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet
} from 'react-native';
import axios from 'axios'

import {h, w,customFont} from '../components/variable/dimension'
import {base_url} from '../../config/api'
import HappyHours from '../components/happyHours'

class Detail extends Component{
  state = {
    id : null,
    token : null,
    detailResult : null,
    isLoading : false,
    errorMessage : null,
    activeTab : 'happy-hours'
  }

  getDetailData = () => {
    axios({
      url : `${base_url}/api/v2/branch/${this.state.id}?`,
      method : 'GET',
      headers : {
        "Authorization": `Bearer ${this.state.token}`,
        "Content-Type": "application/json",
      }
    })
    .then(({data}) => {
      console.warn(data)
    })
    .catch(error => {
      console.warn(error)
    })
  }

  componentDidMount(){
    // const data = this.props.navigation.getParam('detailData')
    // this.setState({
    //   id : data.id,
    //   token : data.token
    // }, () => this.getDetailData())
  }

  render(){
    const { isLoading, detailResult, errorMessage, activeTab } = this.state
    return (
      <SafeAreaView style={{height : h/1}}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent"/>
        <TouchableOpacity
          style={{ height : h*0.03}}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={{...customFont(60), color : '#0984e3'}}> back </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection : 'row',
            justifyContent : 'space-evenly'
          }}
        >
          <TouchableOpacity 
            style={styles.tabBar}
            onPress={() => this.setState({ activeTab : 'happy-hours'})}
          >
            <Text>Happy Hours</Text>
            {
              activeTab == 'happy-hours' ? <View style={styles.bottomLine}/> : null
            }
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.tabBar}
            onPress={() => this.setState({ activeTab : 'about'})}
          >
            <Text>About</Text>
            {
              activeTab == 'about' ? <View style={styles.bottomLine}/> : null
            }
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.tabBar}
            onPress={() => this.setState({ activeTab : 'menu'})}
          >
            <Text>Menu</Text>
            {
              activeTab == 'menu' ? <View style={styles.bottomLine}/> : null
            }
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.tabBar}
            onPress={() => this.setState({ activeTab : 'reviews'})}
          >
            <Text>Reviews</Text>
            {
              activeTab == 'reviews' ? <View style={styles.bottomLine}/> : null
            }
          </TouchableOpacity>
        </View>
        <View
          style={{
            height : (h*0.85) - 50,
            backgroundColor : '#fff'
          }}
        >
          <View
            style={{
              height : h*0.25,
            }}
          >
            <Image 
              source={require('../../assets/img/Header.png')}
              style={{
                height : '100%',
                width : '100%',
                resizeMode : 'stretch',
              }}
            />
          </View>
          <View
            style={{
              height : '100%',
              width : w*1,
              paddingHorizontal : 10,
              position : 'absolute',
              top : 0,
              backgroundColor : 'green',
              alignItems : 'center'
            }}
          >
            <HappyHours />
          </View>
        </View>
        <View
          style={{
            height : h*0.12,
            width : w*1,
            position : 'absolute',
            bottom : 0,
            left : 0,
            backgroundColor : 'pink'
          }}
        >
          
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  buttonSubmit : {
    height : '30%',
    backgroundColor : '#0984e3',
    borderRadius : 12,
    justifyContent : 'center',
    alignItems : 'center'
  },
  inputTodo : {
    height : '30%',
    backgroundColor : '#fff',
    paddingHorizontal : 10,
    paddingVertical : 0,
    color : '#636e72'
  },
  tabBar : {
    height : 50,
    backgroundColor : 'yellow',
    justifyContent : 'center',
    overflow : 'hidden'
  },
  bottomLine : {
    height : 30,
    width : '100%',
    position : 'absolute',
    bottom : -24,
    borderRadius : 12,
    backgroundColor : '#341f97'
  }
})

export default Detail