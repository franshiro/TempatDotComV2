import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { w } from "./variable/dimension";
import {thisDay, cekDate, cekMonth} from './convert/date'

const arrayDays = [0,1,2,3,4,5,6]
const arrayBooking = [
  {
    id : 1,
    percent : 0.4,
    time : '15.30 - 17.00'
  },
  {
    id : 2,
    percent : 0.1,
    time : '17.00 - 19.00'
  },
  {
    id : 3,
    percent : 0.5,
    time : '19.00 - 21.00'
  },
  {
    id : 4,
    percent : 0.35,
    time : '21.00 - 22.00'
  },
  {
    id : 5,
    percent : 0.6,
    time : '22.00 - 23.30'
  },
]
const menuBooked = [
  {
    title : 'All Pastries',
    tags : 'Cakes, pastries, breads, eclaiers, ice cream',
    desc : 'How many people redeeming this voucher?',
    totalBooked : 4
  },
  {
    title : 'All Beverages',
    tags : 'Coffee, tea, milkshakes, soft drinks, mocktails',
    desc : 'How many people redeeming this voucher?',
    totalBooked : 2
  },
  {
    title : 'All Noodles',
    tags : 'Ramen, Pasta, Chicken Noodle',
    desc : 'How many people redeeming this voucher?',
    totalBooked : 0
  },
]

class HappyHours extends Component {
  state = {
    activeTab : '0',
    activeButton : 1,
  }

  textSize = (value) => {
    if(value >= 0 && value < 0.3 ){
      return 0.5
    }
    else if(value >= 0.3 && value < 0.5){
      return 0.6
    }
    else if(value >= 0.5){
      return 0.7
    }
  }
  
  textColor = (value) => {
    if(value >= 0 && value < 0.3 ){
      return '#D980FA'
    }
    else if(value >= 0.3 && value < 0.5){
      return '#9980FA'
    }
    else if(value >= 0.5){
      return '#5758BB'
    }
  }

  render() {
    const {activeTab, activeButton} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.headerContaner}>
          <Image
            source={require("../../assets/img/happyhours.png")}
            resizeMode="cover"
            style={{
              height: hp(6),
              width: hp(6)
            }}
          />
          <View style={styles.headerText}>
            <Text style={styles.title}>Happy Hours!</Text>
            <Text style={{ fontSize: hp(1.5), color: "#fff" }}>
              Booked <Text style={{ fontWeight: "bold" }}>1002</Text> times
              since yesterday
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                height : hp(7),
                width : '100%',
                backgroundColor : '#dfe4ea',
                paddingHorizontal : 10,
                bottom : 0,
              }}
            >
              {
                arrayDays.map((day, index) => (
                  <TouchableOpacity 
                    key={index}
                    style={styles.tabBar}
                    onPress={() => this.setState({ activeTab : day})}
                  >
                    <Text style={{ fontSize : hp(1.3), color : `${activeTab == day ? 'black': '#576574'}`}}>{thisDay(day)}</Text>
                    <Text style={{ fontSize : hp(1.5), color : `${activeTab == day ? 'black': '#576574'}`}}>{cekDate(day)} <Text style={{fontSize : 11, color : `${activeTab == day ? 'black': '#576574'}`}}>{cekMonth(day)}</Text></Text>
                    {
                      activeTab == day ? <View style={styles.bottomLine}/> : null
                    }
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
          </View>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                height : hp(10),
                marginLeft : 20,
              }}
            >
              {
                arrayBooking.map((list, index) => (
                  <TouchableOpacity
                  key={index}
                    style={{
                      height : hp(8),
                      width : hp(10),
                      top : hp(1),
                      backgroundColor : `${activeButton == list.id ? '#3c40c6' : '#d2dae2'}`,
                      borderRadius : 8,
                      marginRight : 7,
                      overflow : 'hidden',
                      alignItems : 'center',
                      borderWidth : 0.5,
                      borderColor : '#808e9b'
                    }}
                    onPress={() => this.setState({ activeButton : list.id })}
                  >
                    <View
                      style={{
                        height : hp(4.5),
                        width : hp(10),
                        borderBottomLeftRadius : 10,
                        borderBottomRightRadius : 10,
                        backgroundColor : `${activeButton == list.id ? '#575fcf' : '#fff'}`,//'#575fcf',
                        justifyContent : 'center',
                        alignItems : 'center'
                      }}
                    >
                      <Text style={{ fontWeight : 'bold', fontSize : hp(5) * this.textSize(list.percent), color : `${activeButton == list.id ? '#fff' : this.textColor(list.percent)}`}}>{100 * list.percent}%</Text>
                    </View>
                    <View
                      style={{
                        height : hp(3.5),
                        width : hp(10),
                        justifyContent : 'center',
                        alignItems : 'center'
                      }}
                    >
                      <Text style={{fontSize : hp(1.3), color : `${activeButton == list.id ? '#fff' : '#747d8c'}`}}>{list.time}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
          </View>
          <View
            style={{
              alignItems : 'center',
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                height : hp(47.5),
                width : (w * 1) - 80,
              }}
            >
              {
                menuBooked.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      height : 110,
                      width : '100%',
                      borderBottomColor : '#ced6e0',
                      borderBottomWidth : 1,
                      justifyContent : 'center'
                    }}
                  >
                    <View
                      style={{
                        flexDirection : 'row',
                        paddingVertical : 10
                      }}
                    >
                      <Image 
                        source={require('../../assets/img/tempat-com-logo.png')}
                        style={{
                          height : hp(5),
                          width : hp(5),
                          backgroundColor : 'blue',
                          marginRight : 10,
                          borderRadius : 8
                        }}
                      />
                      <View>
                        <Text style={{fontSize : hp(1.7), fontWeight : 'bold'}}>{item.title}</Text>
                        <Text style={{fontSize : hp(1.3), color : '#747d8c'}}>{item.tags}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection : 'row',
                        justifyContent : 'space-between',
                      }}
                    >
                      <View
                        style={{
                          width : (w * 1) - 200,
                        }}
                      >
                        <Text style={{ fontSize : hp(1.5), color : '#2f3542'}}>{item.desc}</Text>
                      </View>
                      <View
                        style={{
                          height : hp(3.5),
                          width : wp(23),
                          borderColor : '#ced6e0',
                          borderWidth : 1,
                          borderRadius : 6,
                          overflow : 'hidden',
                          flexDirection : 'row'
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            width : wp(7),
                            borderRightWidth : 1,
                            borderRightColor : '#ced6e0',
                            justifyContent : 'center',
                            alignItems : 'center'
                          }}
                        >
                          <Icon name="minus" size={hp(1.8)} color='#3742fa'/>
                        </TouchableOpacity>
                        <View
                          style={{
                            width : wp(9),
                            justifyContent : 'center',
                            alignItems : 'center'
                          }}
                        >
                          <Text style={{fontSize : hp(1.8), fontWeight : 'bold', color : '#5352ed'}}>{item.totalBooked}</Text>
                        </View>
                        <TouchableOpacity
                          style={{
                            width : wp(7),
                            borderLeftWidth : 1,
                            borderLeftColor : '#ced6e0',
                            justifyContent : 'center',
                            alignItems : 'center'
                          }}
                        >
                          <Icon name="plus" size={hp(1.8)} color='#3742fa'/>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))
              }
              <TouchableOpacity
                style={{
                  height : hp(4),
                  width : '100%',
                  justifyContent : 'center',
                  alignItems : 'center'
                }}
              >
                <Text style={{fontSize : hp(2), color : '#5352ed', fontWeight : 'bold'}}>SEE MORE  <Icon name='chevron-down'/></Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={styles.viewer}>
          <Text style={{fontSize : hp(1.7), color : '#57606f'}}><Text style={{fontWeight : 'bold'}}>25</Text> people are looking at this restaurant right now</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { height : hp(80), alignItems: "center"},
  headerContaner: {
    height: hp(8),
    width: w * 0.9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent : 'center',
  },
  headerText: {
    height: hp(5),
    width: w * 0.9 - 60,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  title: { fontWeight: "bold", fontSize: hp(2), color: "#fff" },
  contentContainer: {
    width: w * 0.9,
    height: hp(65),
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow : 'hidden',
    elevation : 5,
  },
  tabBar : {
    height : hp(7),
    width : 50,
    justifyContent : 'center',
    overflow : 'hidden',
    marginRight : 10,
    alignItems : 'center',
  },
  bottomLine : {
    height : hp(3),
    width : '100%',
    position : 'absolute',
    bottom : hp(-2.4),
    borderRadius : 5,
    backgroundColor : '#341f97'
  },
  viewer: {
    width: w * 0.95,
    height: hp(5),
    marginTop: hp(1),
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent : 'center',
    alignItems : 'center',
    elevation : 5
  },
});

export default HappyHours;
