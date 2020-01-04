import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const AboutDetail = ({title, content}) => {
  return (
    <View
      style={{
        height : hp(15),
        width : '100%',
        borderBottomColor : '#ced6e0',
        borderBottomWidth : 1,
        justifyContent : 'center',
      }}
    >
      <View
        style={{
          paddingVertical : hp(1)
        }}
      >
        <Text style={{fontSize : hp(2), fontWeight : 'bold'}}>{title}</Text>
      </View>
      <View
        style={{
          flexDirection : 'row',
          justifyContent : 'space-between',
        }}
      >
        <View
          style={{
            flex : 0.8,
          }}
        >
          <Text style={{ fontSize : hp(1.5), color : '#2f3542', textAlign : 'justify'}}>{content}</Text>
        </View>
      </View>
    </View>
  )
}

export default AboutDetail