<template>
  <div class="mxg-header mxg-header-fixed">
    <template>
      <div class="mxg-header mxg-header-fixed">
        <div class="mxg-nav">
          <!-- 头部， space-between 表示 flex 布局下的水平排列方式-->
          <el-row type="flex" justify="space-between">
            <!-- Logo， 任意宽度都是占4格-->
            <el-col class="logo" :xs="4" :sm="4" :md="4">
              <!-- <nuxt-link to="/"> 博客Logo </nuxt-link> -->
            </el-col>
            <el-col :xs="20" :sm="20" :md="8">
              <div class="trans inner-container" >
                <i class="el-icon-message-solid" style="color: orange"></i> 
                react博客废弃,nuxtjs重构博客系统
              </div>
            </el-col>
            <!-- 登录、注册/头像 手机与平板坚屏都占18格，其他占8格-->
            <!-- <el-col class="nav-right" :xs="14" :sm="14" :md="8">
              <div class="nav-sign">
                <el-button type="text">管理后台</el-button>
                <el-button type="text">登录</el-button>
                <el-button type="primary" size="small" round>注册</el-button>
              </div>
            </el-col> -->
          </el-row>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  methods: {
    // 下拉点击后调用
    handleCommand(command) {
      this.$message("click on item " + command);
    },
  },
};
</script>
<style scoped>
/* 头部 */
.mxg-header {
  width: 100%;
  height: 60px;
  border-top: 3px solid #345dc2;
  background-color: #fafafa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  z-index: 1501;
}
/* 固定头部 */
.mxg-header-fixed {
  position: fixed;
}

/* 导航 */
.mxg-header .mxg-nav {
  max-width: 1140px;
  /* 居中 */
  margin: auto;
  padding: 10px;
}

.el-menu.el-menu--horizontal {
  /* 去除底部边框 */
  border-bottom: 0px;
  margin-top: -10px;
}

/* 导航右侧 */
.nav-right {
  text-align: right;
}
.nav-sign {
  position: absolute;
  right: 0;
  margin-right: 50px;
}

/* 防止点击头像有边框 */
div:focus {
  outline: none;
}
.trans{
  width: 100%;
  height: 100%;
}
.inner-container {
    margin-left: 100%;
    width: 100%;
    animation: myMove 30s linear infinite; 
    animation-fill-mode: forwards;
  }
    /*文字无缝滚动*/
  @keyframes myMove {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1200px);
    }
  }
</style>