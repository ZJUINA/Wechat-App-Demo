# Wechat-App-Demo

## 注意事项

### 微信开发者工具查看时

- 在使用微信开发者工具查看编译效果的时候，不要使用开发者工具的编译功能
- 可以通过清除缓存达到初始打开应用的效果
- 通过禁用掉详情 - 本地设置 中的 "不校验合法域名"一栏，可以使用IP地址或localhost调试接口服务

## 使用方式

### 开发与编译

开发目录下的config.js文件指定了服务端的地址和端口，请按需进行修改。

在开发完并需要检查运行时效果时，使用：
```shell
(sudo) npm run dev:weapp
```
或运行 `/script/dev:weapp` 来获得编译产物，位于./dist文件夹下。Taro将会监听文件修改，会根据代码改动动态更新产物变化。

如果在编译过程中遇到问题，可以尝试删除原来的文件夹并重新执行命令。

接下来使用微信开发者工具打开该文件夹即可获得运行时效果。

### 集成与交付

在完成所有开发后，提交可以在生产环境使用的版本：
```shell
(sudo) npm run build:weapp
```
或运行 `/script/build:weapp` 获得产物。Taro会对代码进行压缩打包，此时Taro监听和更新代码的频率会下降。

在微信小程序开发者工具中进行版本上传。

