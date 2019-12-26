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
import Icon from 'react-native-vector-icons/FontAwesome5'

import {h, w,customFont} from '../components/variable/dimension'
import {base_url} from '../../config/api'
import HappyHours from '../components/happyHours'
import About from '../components/about'
import { justTitle } from '../components/convert/wordConvert';

const menuTabBar = [
  {
    name : 'happy-hours',
    title : 'Happy Hours'
  },
  {
    name : 'about',
    title : 'About'
  },
  {
    name : 'menu',
    title : 'Menu'
  },
  {
    name : 'reviews',
    title : 'Reviews'
  },
]

class Detail extends Component{
  state = {
    id : null,
    token : null,
    detailResult : null,
    isLoading : false,
    errorMessage : null,
    activeTab : 'about'
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
      this.setState({
        detailResult : data.data
      })
    })
    .catch(error => {
      console.warn(error)
    })
  }

  componentDidMount(){
    const data = this.props.navigation.getParam('detailData')
    this.setState({
      id : data.id,
      token : data.token
    }, () => this.getDetailData())
  }

  render(){
    const { isLoading, detailResult, errorMessage, activeTab } = this.state
    return (
      <SafeAreaView style={{ height: h * 0.97}}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
          <TouchableOpacity
            style={{ height: h * 0.03, marginHorizontal : 20 }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={{ ...customFont(60), color: "#0984e3" }}> back </Text>
          </TouchableOpacity>
          <View style={{marginHorizontal : 20}}>
          <Text style={{fontWeight : 'bold', color :'#2c3e50', fontSize : 20}}>{detailResult && detailResult.brand.brand_name}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          {menuTabBar.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.tabBar}
              onPress={() => this.setState({ activeTab: item.name })}
            >
              <Text
                style={{
                  color: `${activeTab == item.name ? "#4834d4" : "#b2bec3"}`,
                  fontWeight: "bold"
                }}
              >
                {item.title}
              </Text>
              {activeTab == item.name ? (
                <View style={styles.bottomLine} />
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            height: h * 0.85 - 50,
            backgroundColor: "#fff"
          }}
        >
          <View
            style={{
              height: h * 0.25
            }}
          >
            <Image
              source={require("../../assets/img/Header.png")}
              style={{
                height: "100%",
                width: "100%",
                resizeMode: "stretch"
              }}
            />
          </View>
          <View
            style={{
              height: "100%",
              width: w * 1,
              paddingHorizontal: 10,
              position: "absolute",
              top: 0,
              alignItems: "center"
            }}
          >
            {
              activeTab == 'happy-hours' ? <HappyHours /> : null
            }
            {
              activeTab == 'about' 
              ? <About 
                  branch_name={detailResult && detailResult.branch_name}
                  address = {detailResult && detailResult.building.properties.address}
                  type={detailResult && detailResult.branch_type}
                  costInfo = {detailResult && detailResult.price_info}
                  facilities = {detailResult && detailResult.facilities}
                  tags = {detailResult && detailResult.branch_tags}
                /> 
              : null
            }
          </View>
        </View>
        <View
          style={{
            height: h * 0.09,
            width: w * 1,
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            left: 0,
            paddingHorizontal: 20,
            borderTopColor : '#ecf0f1',
            borderTopWidth : 1
          }}
        >
          <TouchableOpacity
            style={[
              styles.footerButton,
              {
                borderRightColor: "#dfe6e9",
                borderRightWidth: 1
              }
            ]}
          >
            <View style={styles.iconFooter}>
              <Image 
                source={require('../../assets/img/add-review.png')}
                style={{
                  height : '100%',
                  width : '100%'
                }}
              />
            </View>
            <Text style={styles.footerText}>Add Review</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <View style={styles.iconFooter}>
              <Icon name='directions' color='#bdc3c7' size={24}/>
            </View>
            <Text style={styles.footerText}>Direction</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: h * 0.08 - 15,
              width: w * 0.53 - 40,
              backgroundColor: "#e58e26",
              borderRadius: 8,
              justifyContent : 'center',
              alignItems : 'center'
            }}
          >
            <Text style={{fontSize : 15, color : '#fff', fontWeight : 'bold'}}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
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
  },
  footerButton : {
    height : (h*0.08) - 15,
    width : w*0.23,
    alignItems : 'center'
  },
  footerText : {
    color : '#636e72'
  },
  iconFooter : {
    height : 30,
    width : 30,
    justifyContent : 'center',
    alignItems : 'center'
  }
})

export default Detail