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
import AboutDetail from '../components/aboutDetail'
import { detailTag, detailFacility } from "./convert/wordConvert";

class About extends Component {
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
    const {branch_name, address, type, facilities, costInfo, tags} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.headerContaner}>
          <View style={styles.headerText}>
            <Text style={styles.title}>{branch_name}</Text>
            <Text style={{ fontSize: 13, color: "#fff" }}>{detailTag(tags)}</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <View
              style={{
                height : 40,
                width : '100%',
                backgroundColor : '#dfe4ea',
                paddingHorizontal : 10,
                bottom : 0,
                justifyContent : 'center'
              }}
            >
              <Text style={{fontSize : 20, fontWeight : 'bold', color : '#636e72'}}>About</Text>
            </View>
          </View>
          <View
            style={{
              alignItems : 'center',
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                height : (h * 0.61)-40,
                width : (w * 1) - 80,
              }}
            >
              <AboutDetail 
                title="Address"
                content = {address}
              />
              <AboutDetail 
                title="Type"
                content = {type}
              />
              <AboutDetail 
                title="Average-Cost"
                content = {costInfo}
              />
              <AboutDetail 
                title="Facilities"
                content = {detailFacility(facilities)}
              />
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
    height: 60,
    width: w * 0.9 - 60,
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

export default About;
