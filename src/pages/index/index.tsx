import {useDispatch, useSelector} from 'react-redux'
import {View, Button, Text, Image} from '@tarojs/components'

import {add as _add, minus as _minus, asyncAdd as _asyncAdd} from '../../actions/counter'

import './index.scss'
import Taro from "@tarojs/taro";
import {useState} from "react";
import {AnonymousImage} from "../../assets";

const Index = () => {

  const {num} = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const [avatarUrl,setAvatarUrl] = useState('')

  const add = () => {
    dispatch(_add())
  }
  const dec = () => {
    dispatch(_minus())
  }
  const asyncAdd = () => {
    dispatch(_asyncAdd())
  }

  function onChooseAvatar(e){
    setAvatarUrl(e.detail.avatarUrl)
  }

  return (
    <View className='index'>
      <Button className='add_btn' onClick={add}>+</Button>
      <Button className='dec_btn' onClick={dec}>-</Button>
      <Button className='dec_btn' onClick={asyncAdd}>async</Button>
      <View><Text>{num}</Text></View>
      <View style={{marginTop: "8px"}}>
        <Text className='popup-title'>
          完善头像与昵称
        </Text>
        <Button
          open-type='chooseAvatar'
          onChooseAvatar={onChooseAvatar}
        >
          {avatarUrl && avatarUrl.length ? (
            <Image
              className='img'
              mode='aspectFit'
              src={avatarUrl}
            />
          ) : (
            <Image
              className='img'
              mode='aspectFit'
              src={AnonymousImage}
            />
          )}
        </Button>

        <View
          onClick={async () => {
            if(!avatarUrl){
              await Taro.showToast({
                icon: 'none',
                title: '头像昵称不完善',
                duration: 3000,
              });
            } else {
              console.log("准备上传图片更新用户信息")
            }
          }}
        >确认</View>
      </View>
    </View>
  )
}

export default Index

