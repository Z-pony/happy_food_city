利用webpack 搭建一套react+ts的脚手架

## 启动项目

```javascript
  npm run dev
```

# 立项初衷
想自己从脚手架搭建，到项目完成，走一套完成的前后端流程，从而练习一下node,与koa2、typescript。
关于项目选择怎样的项目，由于自己没美食比较有兴趣，之前关注了深证美食俱乐部的公众号，看到上面的美食推荐，一直有个想法，就是把他们统计起来，然后根据评价地址，一一对他们翻拍。
目前想做的事功能是，对广东省内的美食进行分区统计，并自己给出一套推荐指数算法。
之后还想对广东省的美食，以及旅游地点进行统计。
其实会python的话，应该可以直接爬取数据，但我现在想巩固node的功能，所以想再去录入的方式，之后想学python了，再考虑爬取数据的方式
-20200311

## 目录介绍

|-build       
|-config            // webpack配置
  |-base.conf.js   
  |-dev.conf.js   
  |-pro.conf.js   
|-public
|-server            // server端渲染文件
  |-app.ts          // 放置浏览器和服务端通用逻辑
  |-clientRouter.ts // 在此文件中包含了把服务端路由匹配到react路由的逻辑
  |-ignore.ts   
  |-index.ts         
|-src
  |-app          // 放置浏览器和服务端通用逻辑
  |-assets       // 静态文件
  |-components   // 公共组件
  |-pages        // 页面组件
  |-routes       // 路由配置文件
  |-index.tsx    // 入口文件  
  |-assets  
  |-assets  
  |-assets  
  |-assets  
  |-assets
|-test          // 测试
