import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

import { h, w } from "./variable/dimension";
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
              height: 60,
              width: 60
            }}
          />
          <View style={styles.headerText}>
            <Text style={styles.title}>Happy Hours!</Text>
            <Text style={{ fontSize: 13, color: "#fff" }}>
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
                height : 60,
                width : '100%',
                backgroundColor : '#dfe4ea',
                paddingHorizontal : 10,
                bottom : 0
              }}
            >
              {
                arrayDays.map((day, index) => (
                  <TouchableOpacity 
                    key={index}
                    style={styles.tabBar}
                    onPress={() => this.setState({ activeTab : day})}
                  >
                    <Text style={{ fontSize : 11, color : `${activeTab == day ? 'black': '#576574'}`}}>{thisDay(day)}</Text>
                    <Text style={{ fontSize : 13, color : `${activeTab == day ? 'black': '#576574'}`}}>{cekDate(day)} <Text style={{fontSize : 11, color : `${activeTab == day ? 'black': '#576574'}`}}>{cekMonth(day)}</Text></Text>
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
                height : 80,
                marginLeft : 20,
              }}
            >
              {
                arrayBooking.map((list, index) => (
                  <TouchableOpacity
                  key={index}
                    style={{
                      height : 60,
                      width : 75,
                      top : 20,
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
                        height : 35,
                        width : 75,
                        borderBottomLeftRadius : 10,
                        borderBottomRightRadius : 10,
                        backgroundColor : `${activeButton == list.id ? '#575fcf' : '#fff'}`,//'#575fcf',
                        justifyContent : 'center',
                        alignItems : 'center'
                      }}
                    >
                      <Text style={{ fontWeight : 'bold', fontSize : 25 * this.textSize(list.percent), color : `${activeButton == list.id ? '#fff' : this.textColor(list.percent)}`}}>{100 * list.percent}%</Text>
                    </View>
                    <View
                      style={{
                        height : 25,
                        width : 75,
                        justifyContent : 'center',
                        alignItems : 'center'
                      }}
                    >
                      <Text style={{fontSize : 11, color : `${activeButton == list.id ? '#fff' : '#747d8c'}`}}>{list.time}</Text>
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
                height : (h * 0.61) - 142,
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
                          height : 40,
                          width : 40,
                          backgroundColor : 'blue',
                          marginRight : 10,
                          borderRadius : 8
                        }}
                      />
                      <View>
                        <Text style={{fontSize : 15, fontWeight : 'bold'}}>{item.title}</Text>
                        <Text style={{fontSize : 12, color : '#747d8c'}}>{item.tags}</Text>
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
                        <Text style={{ fontSize : 12, color : '#2f3542'}}>{item.desc}</Text>
                      </View>
                      <View
                        style={{
                          height : 30,
                          width : 90,
                          borderColor : '#ced6e0',
                          borderWidth : 1,
                          borderRadius : 6,
                          overflow : 'hidden',
                          flexDirection : 'row'
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            height : 30,
                            width : 25,
                            borderRightWidth : 1,
                            borderRightColor : '#ced6e0',
                            justifyContent : 'center',
                            alignItems : 'center'
                          }}
                        >
                          <Icon name="minus" size={15} color='#3742fa'/>
                        </TouchableOpacity>
                        <View
                          style={{
                            height : 30,
                            width : 40,
                            justifyContent : 'center',
                            alignItems : 'center'
                          }}
                        >
                          <Text style={{fontSize : 15, fontWeight : 'bold', color : '#5352ed'}}>{item.totalBooked}</Text>
                        </View>
                        <TouchableOpacity
                          style={{
                            height : 30,
                            width : 25,
                            borderLeftWidth : 1,
                            borderLeftColor : '#ced6e0',
                            justifyContent : 'center',
                            alignItems : 'center'
                          }}
                        >
                          <Icon name="plus" size={15} color='#3742fa'/>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))
              }
              <TouchableOpacity
                style={{
                  height : 40,
                  width : '100%',
                  justifyContent : 'center',
                  alignItems : 'center'
                }}
              >
                <Text style={{color : '#5352ed', fontWeight : 'bold'}}>SEE MORE  <Icon name='chevron-down'/></Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={styles.viewer}>
          <Text style={{color : '#57606f'}}><Text style={{fontWeight : 'bold'}}>25</Text> people are looking at this restaurant right now</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  headerContaner: {
    height: 80,
    width: w * 0.9,
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    height: 50,
    width: w * 0.9 - 60,
    paddingHorizontal: 15,
    justifyContent: "space-between"
  },
  title: { fontWeight: "bold", fontSize: 20, color: "#fff" },
  contentContainer: {
    width: w * 0.9,
    height: h * 0.61,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow : 'hidden',
    elevation : 5
  },
  tabBar : {
    height : 60,
    width : 50,
    justifyContent : 'center',
    overflow : 'hidden',
    marginRight : 10,
    alignItems : 'center'
  },
  bottomLine : {
    height : 30,
    width : '100%',
    position : 'absolute',
    bottom : -24,
    borderRadius : 5,
    backgroundColor : '#341f97'
  },
  viewer: {
    width: w * 0.95,
    height: h * 0.05,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent : 'center',
    alignItems : 'center',
    elevation : 5
  },
});

export default HappyHours;
