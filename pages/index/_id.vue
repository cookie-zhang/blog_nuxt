<template>
  <div>
    <ul class="note-list">
      <li
        :class="{ 'have-img': item.coverImg }"
        v-for="item in articleList"
        :key="item.id"
      >
        <div class="content">
          <nuxt-link :to="`/article/${item.id}`" target="_blank">
            <p class="title">{{ item.title }}</p>
            <p class="abstract">
              {{ item.introduce }}
            </p>
          </nuxt-link>
          <div class="meta">
            <nuxt-link
              :to="`/user/${item.userId}`"
              target="_blank"
              class="nickname"
            >
              <i class="el-icon-user-solid"></i> {{ item.author }}
            </nuxt-link>
            <span> <i class="el-icon-thumb"></i> {{ item.like }} </span>
            <span> <i class="el-icon-view"></i> {{ item.looks }} </span>
          </div>
          <div v-if="item.coverImg">
            <!-- 图片 -->
            <nuxt-link
              :to="`/article/${item.id}`"
              class="wrap-img"
              target="_blank"
            >
              <img :src="item.coverImg" />
            </nuxt-link>
          </div>
        </div>
      </li>
    </ul>
    <el-row type="flex" justify="center">
      <el-tag v-if="noMore" type="primary">没有更多数据了……</el-tag>
      <!--  @click="load" -->
      <!-- <el-button
        v-else
       
        type="primary"
        :loading="loading"
        size="small"
        round
      >
        {{ loading ? "加载中……" : "加载完毕" }}
      </el-button> -->
    </el-row>
  </div>
</template>

<script>
export default {
  // 校验路由参数是否有效
  validate({ params }) {
    const id = params.id ? params.id : 0;
    // 必须是数值
    return /^\d+$/.test(id);
  },

  data() {
    return {
      loading: false, // 是否加载中
      noMore: false, // 数据已经查询完，没有更多数据, true 没有了，false查询到了数据
    };
  },
  async asyncData({ params, app }) {
    // 分类id，为空则查询推荐
    const categoryId = params.id ? params.id : null;
    // 查询文章列表
    const { data:articleList } = await app.$getArticleListAxios()
    const query = { categoryId, current: 1, size: 20 };
    return { query, articleList };
  },

  methods: {
  },
};
</script>

<style scoped>
@import "@/assets/css/blog/list.css";
</style>