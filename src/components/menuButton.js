import React, {Fragment} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {h, customFont} from './variable/dimension'

const MenuButton = ({name, route, navigation}, ...props) => {
  return (
    <Fragment>
      <TouchableOpacity
        style={{
          height : h/10,
          backgroundColor : '#74b9ff',
          justifyContent : 'center',
          alignItems : 'center',
          borderRadius : 12,
        }}
        onPress={() => route ? navigation.navigate(route) : null}
      >
        <View>
          <Text style={{...customFont(75), color : '#fff'}}>{name}</Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

export default MenuButton
