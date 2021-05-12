<template>
  <div>
    <!-- 左（上下）右  -->
    <el-row type="flex">
      <el-col :md="18" :xs="24" :sm="24">
        <div class="article-left">
          <el-card>
            <!-- 标题 -->
            <div class="article-title">
              <h1>{{ detailData.title }}</h1>
              <div class="article-count">
                <nuxt-link
                  :to="`/user/${detailData.id}`"
                  target="_blank"
                  class="nickname"
                >
                  <i class="el-icon-user-solid"></i> {{ detailData.author }}
                </nuxt-link>
                <span>
                  <i class="el-icon-date"></i>
                  <!-- {{ getDateFormat(detailData.updateDaTe) }} -->
                  <i class="el-icon-thumb"></i> {{ detailData.like }}
                  <i class="el-icon-view"></i> {{ detailData.looks }}
                </span>
              </div>
              <el-tag
                style="margin: 5px"
                
                size="small"
              >
                {{ detailData.sortName }}
              </el-tag>
            </div>
            <!-- 文章内容 -->
            <div class="article-content">
              <div class="markdown-body" v-html="detailData.content"></div>
            </div>
            <!-- plain为true，背景不是深蓝色，为false是深蓝色 -->
            <el-button
              icon="el-icon-thumb"
              type="primary"
              size="medium"
            >
              赞
            </el-button>
          </el-card>
        </div>
      </el-col>
      <el-col class="hidden-sm-and-down" :md="6">
        <el-row>
          <el-col>
            <mxg-affix :offset="80">
              <mxg-directory parentClass="article-content"></mxg-directory>
            </mxg-affix>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// 高度显示样式
import "@/assets/css/md/github-markdown.css";
import "@/assets/css/md/github-min.css";

import { dateFormat } from "@/utils/date.js";
// 固钉
import MxgAffix from "@/components/common/Affix/index.vue";
// 文章目录
import MxgDirectory from "@/components/common/Directory/index.vue";
export default {
  components: { MxgAffix, MxgDirectory },

  // 校验id为数值才可访问此组件
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },

  head() {
    return {
      title: this.detailData.title, // 浏览器中的标题
    };
  },

  data() {
    return {
      //    // 是否点赞
      //    isThumb: this.$cookies.get(`article-thumb-${this.$route.params.id}`) || false,
    };
  },

  methods: {
    getDateFormat(date) {
      return dateFormat(date);
    },
    //    // 点赞
    //    async handleThumb() {
    //        // 取消点赞或者点赞
    //        this.isThumb = !this.isThumb
    //        // 1. 点赞，-1取消赞
    //        const count = this.isThumb ? 1: -1
    //        // 获取文章
    //        const articleId = this.$route.params.id
    //        const {code} = await this.$updateArticleThumb(articleId, count)
    //        if(code === 20000) {
    //            // 更新下当前文章页面显示的点赞数
    //           this.data.thumhup = this.data.thumhup+count
    //           // 保存cookie，永久保存
    //           this.$cookies.set(`article-thumb-${this.$route.params.id}`, this.isThumb, {
    //               maxAge: 60*60*24*365*5 // 保存5年
    //           })
    //        }
    //    },
  },

  async asyncData({ params, app }) {
    // 1. 查询文章详情
    const {data: detailData} = await app.$getArticleDetail(params.id)
    return { detailData };
  },
};
</script>

<style scoped>
@import "@/assets/css/blog/article.css";
</style>