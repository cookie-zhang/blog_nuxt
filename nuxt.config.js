
export default {
  mode: 'universal',
  
  env: {
    // 认证客户端URL， process.env.authURL
    authURL: process.env.NODE_ENV === 'dev' ? '//cookiezhang.com:7001': '//cookiezhang.com:7001'
  },

  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt', // 针对服务端操作cookie
  ],

  axios: {
    proxy: true, //开启代理转发
    prefix: '/data' // 请求接口添加前缀 /api   /test > /api/test
  },

  proxy: { // 代理转发 
    '/data': { 
      target: 'http://cookiezhang.com:7001',
      pathRewrite: {'^/data': ' '}
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '张见飞的博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '博客 javascript vuejs reactjs nuxjs IT技术交流社区', keyWords:'web前端开发' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/theme/theme.css',
    '~/assets/css/quanju.css',
    'element-ui/lib/theme-chalk/display.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/element-ui.js',
    '@/plugins/interceptor',
    '@/api/article'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
   /*
  ** Build configuration
  */
  build: {
    // 将位于 node-modules 里面的element-ui导出
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    ** webpack 自定义配置
    */
    extend (config, ctx) {
    }
  }
}
