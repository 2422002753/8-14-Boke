## vuepress 搭建个人博客
1. 全局安装 vuepress
 npm install -g vuepress
 2. 建立一个文件夹
 makdir HAORANBLOG
 3. npm init -y
 4. 创建文件夹和文件 
 5. 配置package.json的命令
 ```
        "dev": "vuepress dev docs",
        "build": "vuepress build docs"
 ```
 6. 配置默认主题
 ```js
        ---
        home: true
        heroImage: /hero.png
        actionText: 快速上手 →
        actionLink: /zh/guide/
        features:
        - title: 简洁至上
        details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
        - title: Vue驱动
        details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
        - title: 高性能
        details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
        footer: MIT Licensed | Copyright © 2018-present Evan You
        ---
 ```
 6.  在docs/.vuepress/public 放图片

 7.  在docs/.vuepress/config.js
  ```js
  module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
    }
  ```
 8. 配置导航  .vuepress/config.js,可以下拉的导航使用的items
 ```js
     themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
 ```
 9. 让导航可以使用
    docs/web/README.md

 10.  一级的侧边栏配置
 ```
    sidebar: ['/','/web/','/js/','/vue/']
 ```
11. 侧边栏的分组
```js
     sidebar: [
            {
                title: '学习VUE',
                collapsable: true, //是否折叠菜单栏
                children: [
                    '/vuex/','/prop/'
                ]
            },
        ]
```
12. 发布到GitHub
  建立文件 deploy.sh

13. git仓库起名
  2422002753.github.io
  
14. 发布时候的命令
    npm run deploy

15. 右键鼠标，选中 “Git Bash here”，输入指令，进入.ssh文件夹
  $ cd ~/.ssh/

16. 如果提示 “ No such file or directory”，你可以手动的创建一个 .ssh文件夹即可
  mkdir ~/.ssh

17. 生成key
    $ ssh-keygen -t rsa -C "2422002753@qq.com"

    连续按两次回车，这里设置密码，并且创建了key。
  ```js
    Your identification has been saved in /User/Admin/.ssh/id_rsa.
    Your public key has been saved in /User/Admin/.ssh/id_rsa.pub.
    The key fingerprint is:
  ………………
  ```
  最后得到了两个文件：id_rsa和id_rsa.pub

18. 打开C:\Users\Think\.ssh目录进入.ssh文件夹，用记事本打开id_rsa.pub，复制里面的内容添加到你github或者bitbucket ssh设置里即可
      
19. 生成SSH秘钥
     1. 打开https://github.com/ 
     2. 设置Settings的SSH和GPG密钥
     3. 设置新的SSH密钥
     4. 把id_rsa.pub里面的内容添加到github里即可

20.  测试ssh命令
  ssh -T git@github.com