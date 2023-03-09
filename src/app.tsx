import {Provider} from 'react-redux'

import {store} from './store'

import './app.scss'
import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import {fetchUserInfo, relogin, userSave} from "./actions/user";

const App = (props) => {

  const [sessionValid, setSessionValid] = useState(false)
  const {sessionKey,} = store.getState().user

  async function handleSessionValid() {
    setSessionValid(true)

    // check JWT
    // if (!getJWT() || !sessionKey) {
    if (!sessionKey) {
      console.log('用户登录：SessionKey不存在，重新登录');
      store.dispatch(relogin())
    } else {
      // 获取个人信息
      console.log('用户登录：SessionKey存在，获取用户信息');
      store.dispatch(userSave({login: true}))
      store.dispatch(fetchUserInfo())
    }
  }

  useEffect(() => {

    console.log(store.getState())

    // 获取设备信息
    Taro.getSystemInfo().then((systemInfo) => {
      console.log(systemInfo)
    });

    const checkSession = async () => {
      try {
        console.log('用户登录：check Session');
        await Taro.checkSession()
        // session not timeout
        console.log('用户登录：Session有效');
        await handleSessionValid()
      } catch (e) {
        if (!sessionValid) {
          // session timeout
          console.log('用户登录：Session无效，发起登录');
          store.dispatch(relogin())
        }
      }
    }

    checkSession()

  }, [])

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default App
