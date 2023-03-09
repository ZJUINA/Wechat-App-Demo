const ROOT_URL = process.env.NODE_ENV === 'development' ?
    // 线下开发地址（通过npm run dev命令）
    'http://localhost:3000' :
    // 线上及默认地址（通过npm run build命令）
    'http://localhost:3000'

const BASE_URL = `${ROOT_URL}`
console.log('项目后台: ', BASE_URL)

export {BASE_URL}
