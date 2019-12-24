import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  ActivityIndicator
} from 'react-native';
import {h, w, customFont} from '../components/variable/dimension'
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome5'

import {client_token, base_url, client_id, client_secret} from '../../config/api'
import {branchName, tagArray, activityGroup, ratingColor, paginationCount} from '../components/convert/wordConvert'

class Home extends Component {
  state = {
    result : null,
    page : 0,
    maxPage : 0,
    client_token : '4mvlMAvdhxuOMjkWpljo5663pP4A9h',
    isLoading : true,
    errorMsg : null
  }

  login = () => {
    axios({
      url : `${base_url}/api/v1/auth/token`,
      method : 'POST',
      data : {
        grant_type : 'client_credentials',
        client_id : `${client_id}`,
        client_secret : `${client_secret}`
      }
    })
    .then(({data}) => {
      this.setState({
        client_token : data.access_token,
        isLoading : true,
        errorMsg : null,
      }, () => this.getDataFromAPI())
    })
    .catch(error => {
      this.setState({
        isLoading : false,
        errorMsg : 'Server Error'
      })
    })
  }

  getDataFromAPI = () => {
    axios({
      method : 'GET',
      url : `${base_url}/api/v2/search?page=${this.state.page == 0 ? 1 : this.state.page}&per_page=10&query=coffee&class=provinsi&idx=11`,
      headers : {
        "Authorization": `Bearer ${this.state.client_token}`,
        "Content-Type": "application/json",
      }
    })
    .then(({data}) => {
      if(this.state.result){
        this.setState({
          result : {
            ...this.state.result,
            data : [...this.state.result.data, ...data.data]
          },
          isLoading : false,
          errorMsg : null
        })
      } else {
        this.setState({ 
          isLoading : false,
          errorMsg : null,
          result : data,
          page : 1,
          maxPage : paginationCount(data.paginate.count, data.paginate.per_page)
        })
      }
    })
    .catch(error => {
      this.setState({
        errorMsg : 'Gagal mengambil data, silahkan coba login kembali',
        isLoading : false
      })
    })
  }

  loadMore = () => {
    this.setState({
      page : this.state.page + 1
    }, () => this.getDataFromAPI())
  }

  componentDidMount(){
    this.getDataFromAPI()
  }

  render(){
    const { result, page, maxPage, isLoading, errorMsg } = this.state
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" backgroundColor="transparent"/>
        <SafeAreaView>
          <View
            style={{
              width : w,
              height : h*0.1,
              justifyContent : 'center',
              alignItems : 'center',
              borderBottomWidth : 0.3,
              borderBottomColor : '#b2bec3'
            }}
          >
            <TouchableOpacity
              style={{
                height : 50,
                width : w*0.9,
                borderRadius : 15,
                backgroundColor : '#81ecec',
                justifyContent : 'center',
                alignItems : 'center'
              }}
              onPress = {this.login}
            >
              <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 15}}>Login</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              height : h*0.86
            }}
          >
            {
              result && result.data.map(({_source}, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    height : 100,
                    flexDirection : 'row',
                    backgroundColor : '#fff',
                    borderBottomColor : 'grey',
                    borderBottomWidth : 0.3,
                    padding : 10
                  }}
                >
                  <Image 
                    // source={require('../../assets/img/tempat-com-logo.png')}
                    source={_source.branch_images ? {uri : _source.branch_images.image_url_thumb} : require('../../assets/img/tempat-com-logo.png')}
                    style={{
                      width : 80,
                      height : 80,
                      resizeMode : 'cover',
                      borderRadius : 5
                    }}
                  />
                  <View
                    style={{
                      marginHorizontal : 10,
                    }}
                  >
                    <Text style={{ fontWeight : 'bold', fontSize : 17, marginBottom : 5}}>{branchName(_source.branch_name)}</Text>
                    <Text>{`${_source._intersects.kelurahan.name}, ${_source._intersects.kabupaten.name}`}</Text>
                    <Text style={{ color : '#747d8c' }}>{activityGroup(_source.branch_group_activity)} {tagArray(_source.tags)}</Text>
                  </View>
                  <View
                    style={{
                      position : 'absolute',
                      top : 10,
                      right : 10
                    }}
                  >
                    <View
                      style={{
                        height : 25,
                        width : 50,
                        borderRadius : 15,
                        backgroundColor : `${ratingColor(_source.rating_score)}`,
                        flexDirection : "row",
                        justifyContent : 'center',
                        alignItems : 'center',
                      }}
                    >
                      <Icon name="star" solid={true} color="#fff"/>
                      <Text style={{ color : "#fff"}}> {_source.rating_score}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            }
            {
              errorMsg
              ? <View style={{ marginVertical : 20, justifyContent : 'center', alignItems : 'center'}}><Text style={{color : '#d63031'}}>{errorMsg}</Text></View>
              : null
            }
            {
              isLoading
              ? <ActivityIndicator/>
              : null
            }
            {
              page !== maxPage
              ? <View
                  style={{
                    width : w/1,
                    paddingVertical : 10,
                    justifyContent : 'center',
                    alignItems : 'center'
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height : 50,
                      width : w*0.9,
                      borderRadius : 12,
                      backgroundColor : '#81ecec',
                      justifyContent : 'center',
                      alignItems : 'center'
                    }}
                    onPress={this.loadMore}
                  >
                    <Text style={{fontWeight : 'bold', fontSize : 15, color : '#fff'}}>Muat Lebih</Text>
                  </TouchableOpacity>
                </View>
              : null
            }
            
          </ScrollView>
          
        </SafeAreaView>
      </Fragment>
    );
  }
};

export default Home;
