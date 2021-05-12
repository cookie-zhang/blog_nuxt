export default({$axios}, inject) => {

    // // 查询列表接口测试
    inject('getArticleListAxios', () => $axios.$post('/data/articleList'))
    // 技术频道  分类管理  classificationList
    inject('getCategoryList', () => $axios.$post('/data/classificationList'))
    inject('getArticleDetail', id => $axios.$get(`/data/articleDetail?id=${id}`))

}