import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {h,w} from '../components/variable/dimension'

const AboutDetail = ({title, content}) => {
  return (
    <View
      style={{
        height : 110,
        width : '100%',
        borderBottomColor : '#ced6e0',
        borderBottomWidth : 1,
        justifyContent : 'center',
      }}
    >
      <View
        style={{
          paddingVertical : 10
        }}
      >
        <Text style={{fontSize : 15, fontWeight : 'bold'}}>{title}</Text>
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
          <Text style={{ fontSize : 12, color : '#2f3542', textAlign : 'justify'}}>{content}</Text>
        </View>
      </View>
    </View>
  )
}

export default AboutDetail