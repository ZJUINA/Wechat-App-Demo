
export const login = async (data) => {
  console.log('网络请求：用户登录')
  // return request.post(`/user/login`, {
  //   data,
  // });

  return {
    code: 0,
    data: {
      binded: false,
      openid: "0x1000000000"
    }
  }
};

export const getUserInfo = async () => {
  console.log('网络请求：获取用户信息')
  // return request.get(`/user/info`, {
  //   header: {
  //     Authorization: getJWT(),
  //   },
  // });

  return {
    code: 0,
    data: {
      nickName: "liuxuanming"
    }
  }
}

