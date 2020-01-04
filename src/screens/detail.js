import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
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
      <View style={{flex : 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
          <TouchableOpacity
            style={{ height: hp(3), marginHorizontal : 20 }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={{ fontSize : hp(2), color: "#0984e3" }}> back </Text>
          </TouchableOpacity>
          <View style={{marginHorizontal : 20}}>
          <Text style={{fontWeight : 'bold', color :'#2c3e50', fontSize : hp(2)}}>{detailResult && detailResult.brand.brand_name}</Text>
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
            height: hp(80),
          }}
        >
          <View
            style={{
              height: hp(18),
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
              height: hp(80),
              width: w * 1,
              paddingHorizontal: 10,
              position: "absolute",
              top: 0,
              alignItems: "center",
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
            height: hp(7),
            width: w * 1,
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            left: 0,
            paddingHorizontal: 20,
            borderTopColor : '#ecf0f1',
            borderTopWidth : 1,
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
              <Icon name='directions' color='#bdc3c7' size={hp(2)}/>
            </View>
            <Text style={styles.footerText}>Direction</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: hp(5),
              width: w * 0.53 - 40,
              backgroundColor: "#e58e26",
              borderRadius: 8,
              justifyContent : 'center',
              alignItems : 'center'
            }}
          >
            <Text style={{fontSize : hp(2), color : '#fff', fontWeight : 'bold'}}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    height : hp(5),
    justifyContent : 'center',
    overflow : 'hidden'
  },
  bottomLine : {
    height : hp(3),
    width : '100%',
    position : 'absolute',
    bottom : hp(-2.4),
    borderRadius : 12,
    backgroundColor : '#341f97'
  },
  footerButton : {
    height : hp(4),
    width : w*0.23,
    alignItems : 'center'
  },
  footerText : {
    fontSize : hp(1.5),
    color : '#636e72'
  },
  iconFooter : {
    height : hp(2),
    width : hp(2),
    justifyContent : 'center',
    alignItems : 'center'
  }
})

export default Detail