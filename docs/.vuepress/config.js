module.exports = {
    title: 'VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/ZhiNan/' },
            { text:'axios',link:'/AXIOS/'},
            { text:'vuex',link:'/VUEX/'}
        ],
        sidebar: [
            {
                title: '指南',
                collapsable: true, //是否折叠菜单栏
                children: ['/ZhiNan/']
            },
            {
                title: 'AXIOS',
                collapsable: true, //是否折叠菜单栏
                children: ['/AXIOS/' ]
            },
            {
                title: 'VUEX',
                collapsable: true, //是否折叠菜单栏
                children: ['/VUEX/' ]
            },
        ]
    }
};