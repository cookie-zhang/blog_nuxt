<template>
  <div class="main">
    <!-- header -->
    <Header />
    <!-- body -->
    <div class="mxg-main">
      <nuxt />
    </div>
    <!-- footer -->
    <Footer />
    <el-backtop :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
    </el-backtop>
  </div>
</template>
<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default {
  components: { Header, Footer },
};
</script>
<style coped>
.main{
  background: url('https://cookiezhang.com:8001/imgs/blog_bg.png');
}
.mxg-main {
  padding-top: 90px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
