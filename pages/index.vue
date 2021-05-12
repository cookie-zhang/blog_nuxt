<!--
 * @Author: your name
 * @Date: 2020-06-09 16:18:14
 * @LastEditTime: 2021-04-16 21:45:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog_client/pages/index.vue
-->
<template>
  <div>
    <el-row type="flex" justify="space-between">
      <!-- 中间 -->
      <el-col :md="18">
        <div class="blog-center">
          <div class="banner">
            <el-carousel height="230px">
              <div v-for="(item, index) in articleList"  :key="item.id">
              <el-carousel-item v-if="index > 5">
                <a :href="item.coverImg"  :target="item.advertTarget">
                  <img @mouseenter="handleSeenter" :src="item.coverImg" />
                </a>
              </el-carousel-item>
              </div>

            </el-carousel>
          </div>
          <!-- 文章列表 -->
          <nuxt-child />
        </div>
      </el-col>
      <el-col class="hidden-sm-and-down" :md="6">
        <el-card class="box-card">
          <el-divider>轨迹</el-divider>
          <div
            v-for="(item, index) in articleList"
            :key="item.id"
            class="text item"
          >
          <nuxt-link :to="`/article/${item.id}`" target="_blank">
           <span>{{ index + 1 }} 、</span> {{ item.title }}
          </nuxt-link>
          </div>
          <el-divider class="category">技术频道</el-divider>
          <el-tag v-for="item in categoryList"
            @click="handleClickTag(item)"
            :key="item.id"
            :index="'/' + item.id"
            class="tage"
          >
            {{ item.type }}</el-tag>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: false
    }
  },
  async asyncData({ app }) {
    // 1. 文章列表
    const { data: articleList } = await app.$getArticleListAxios();
    // 2. 查询技术频道
    const { data: categoryList } = await app.$getCategoryList();
    return { articleList, categoryList };
  },
  methods:{
    // 点击分类
    handleClickTag(infos){
      console.log(infos.type)
    }
  },
};
</script>
<style scoped>
/* 局部引入外部样式文件 */
@import "@/assets/css/blog/index.css";
.item {
  padding: 5px 0;
  font-size: 14px;
  border-bottom: 1px dotted #f0e9e9;
}
.tage{
  margin: 5px;
  cursor: pointer;
}
</style>
