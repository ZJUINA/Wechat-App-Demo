import Taro from "@tarojs/taro";
import {USER_SAVE} from "../constants";
import {getUserInfo, login} from "../services/user";

export const userSave = (payload, saveType = USER_SAVE) => {
  return {
    type: saveType,
    payload
  }
}

export const fetchUserInfo = () => {
  return async dispatch => {
    try {
      console.log('用户登录：从服务器获取用户信息')
      const res = await getUserInfo()

      if (res && res.code === 0) {
        console.log('用户登录：获取用户信息成功')
        dispatch(userSave({...res.data, receivedData: true}))
      } else {
        console.log('用户登录：从服务器获取个人信息失败')
      }

    } catch (e) {
      console.log(e)
    }
  }
}

export const relogin = () => {
  return async dispatch => {
    // removeJWT()

    try {
      console.log("用户登录：用户重新登录")
      const res = await Taro.login()
      if (res.code) {
        console.log('用户登录：小程序登录成功，向服务器发送登录请求')
        let resp = await login({
          code: res.code
        })
        if (resp && resp.code === 0) {
          console.log('用户登录：向服务器发送登录请求成功，存储登录状态')
          dispatch(userSave({...resp.data, login: true}))
          // setJWT(resp.data.token)

          if (resp.data.binded) {
            // 用户已经注册，直接获取个人信息
            console.log('用户登录：登录用户已经绑定个人信息')
            // dispatch(fetchUserInfo())
          } else {
            console.log('用户登录：登录用户未注册和绑定信息，进行初始化注册')
            // dispatch(initRegister(resp.data.openid))
          }
        } else {
          console.log('用户登录：向服务器发送登录请求失败')
        }
      } else {
        console.log('用户登录：小程序登录失败')
      }
    } catch (e) {
      console.log(e)
    }
  }
}
