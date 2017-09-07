# vue2-demo————基于Vue2实现的单页面应用

## 概述


  这是一个16年9月份找的开源项目源代码，结合自己的实际情况进行的修改项目，以后内容将会有很大的不同，项目的目标是向QQ看齐。
  
## 效果演示图

  ![效果图](https://github.com/lvzhenbang/vue2-demo/blob/master/static/images/%E9%A1%B9%E7%9B%AE%E6%BC%94%E7%A4%BA.gif)

### 免责声明

  本项目为开源项目，如有类同，纯属巧合。


### 项目已实现功能
  
    侧边栏
    联系页面
    动态页面
    信息列表
    搜索好友
    对话页面
    信息列表左右滑动
    
 ### 新增加功能
    
    怎加了信息列表的删除，
    标记可读，
    置顶

### 存在问题

    删除事件，置顶事件和标记事件的触发区域发生了位移，不知道原因

  > 注：项目的开发注意事项，填坑，以及技术栈等相关文章请访问我的掘金[个人主页](https://juejin.im/user/58b83c66128fe100642f5297)


  ## 桌面及移动端测试

  * 桌面测试： `npm run dev` 后，打开***开发者工具*** `F12`，模拟手机预览 `Ctrl+Shift+M` (Chrome)
  * 移动端测试： `npm run dev` 后，在cmd命令行中输入ipconfig（win）获取到局域网内ip地址


  ## 技术栈

  *  vue-cli
  *  vue2
  *  vue-router
  *  vuex
  *  axios
  *  stylus
  *  webpack2
  *  muse-ui

  ### 目录结构

<pre>
  .
  ├── README.md
  ├── build                 // 构建服务和webpack配置
  ├── config                // 项目不同环境的配置
  ├── dist                  // 项目build目录
  ├── index.html            // 项目入口文件
  ├── package.json          // 项目配置文件
  ├── mockdata.json         // 项目伪数据（模拟数据）
  ├── src
  │   ├── common            // 公用的css样式
  │   ├── components        // 各种组件
  │   ├── router            // 存放路由的文件夹
  │   ├── vuex	            // 存放Vuex的相关
  │   ├── muse-ui.config.js // muse-ui单组件加载配置
  │   ├── App.Vue           // 模板文件入口
  │   └── main.js           // Webpack 预编译入口
  ├── static                // css js 和图片资源

</pre>

  ``` bash
  # 安装
  npm install

  # 运行（端口8888）
  npm run dev

  # 发布
  npm run build
