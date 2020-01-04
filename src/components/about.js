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
import AboutDetail from '../components/aboutDetail'
import { detailTag, detailFacility } from "./convert/wordConvert";

class About extends Component {
  state = {
    activeTab : '0',
    activeButton : 1,
  }

  render() {
    const {activeTab, activeButton} = this.state
    const {branch_name, address, type, facilities, costInfo, tags} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.headerContaner}>
          <View style={styles.headerText}>
            <Text style={styles.title}>{branch_name}</Text>
            <Text style={{ fontSize: hp(1.5), color: "#fff" }}>{detailTag(tags)}</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <View
              style={{
                height : hp(6),
                width : '100%',
                backgroundColor : '#dfe4ea',
                paddingHorizontal : 10,
                bottom : 0,
                justifyContent : 'center'
              }}
            >
              <Text style={{fontSize : hp(2.5), fontWeight : 'bold', color : '#636e72'}}>About</Text>
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
                height : hp(60),
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
  container: { height : hp(80), alignItems: "center"},
  headerContaner: {
    height: hp(8),
    width: w * 0.9,
    flexDirection: "row",
    alignItems: "center",
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

export default About;
