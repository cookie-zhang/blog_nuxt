exports.ids=[3],exports.modules={100:function(t,e,r){var content=r(114);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(4).default;t.exports.__inject__=function(t){n("4d64fe44",content,!0,t)}},113:function(t,e,r){"use strict";r.r(e);var n=r(100),d=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=d.a},114:function(t,e,r){(e=r(3)(!1)).push([t.i,".note-list[data-v-3f589dee]{margin:0;padding:0;list-style:none}.note-list li[data-v-3f589dee]{position:relative;margin:0 0 15px;padding:15px 20px 10px 10px;border-bottom:1px solid #f0f0f0;word-wrap:break-word;background-color:#f2f5f7}.note-list .title[data-v-3f589dee]{margin:7px 0 4px;display:inherit;font-size:18px;font-weight:700;line-height:1.5}.note-list .title[data-v-3f589dee]:visited{color:#969696}.note-list .abstract[data-v-3f589dee]{margin:0 0 8px;font-size:14px;line-height:24px;color:#999}.note-list .meta[data-v-3f589dee]{font-size:13px;font-weight:400;line-height:20px}.note-list .meta a[data-v-3f589dee],.note-list .meta span[data-v-3f589dee]{margin-right:10px;color:#b4b4b4}.note-list .have-img .content[data-v-3f589dee]{padding-right:165px}.note-list li.have-img[data-v-3f589dee]{min-height:130px}.note-list .have-img .wrap-img[data-v-3f589dee]{position:absolute;top:50%;margin-top:-60px;right:20px;width:150px;height:100px}.note-list .have-img .wrap-img img[data-v-3f589dee]{width:100%;height:100%;border-radius:4px;border:1px solid #f0f0f0}.page[data-v-3f589dee]{margin-top:15px}",""]),t.exports=e},117:function(t,e,r){"use strict";r.r(e);var n={validate({params:t}){const e=t.id?t.id:0;return/^\d+$/.test(e)},data:()=>({loading:!1,noMore:!1}),async asyncData({params:t,app:e}){const r=t.id?t.id:null,{data:n}=await e.$getArticleListAxios();return{query:{categoryId:r,current:1,size:20},articleList:n}},methods:{}},d=r(1);var component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<ul class="note-list" data-v-3f589dee>',"</ul>",t._l(t.articleList,(function(e){return t._ssrNode("<li"+t._ssrClass(null,{"have-img":e.coverImg})+" data-v-3f589dee>","</li>",[t._ssrNode('<div class="content" data-v-3f589dee>',"</div>",[r("nuxt-link",{attrs:{to:"/article/"+e.id,target:"_blank"}},[r("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"abstract"},[t._v("\n            "+t._s(e.introduce)+"\n          ")])]),t._ssrNode(" "),t._ssrNode('<div class="meta" data-v-3f589dee>',"</div>",[r("nuxt-link",{staticClass:"nickname",attrs:{to:"/user/"+e.userId,target:"_blank"}},[r("i",{staticClass:"el-icon-user-solid"}),t._v(" "+t._s(e.author)+"\n          ")]),t._ssrNode(' <span data-v-3f589dee><i class="el-icon-thumb" data-v-3f589dee></i>'+t._ssrEscape(" "+t._s(e.like)+" ")+'</span> <span data-v-3f589dee><i class="el-icon-view" data-v-3f589dee></i>'+t._ssrEscape(" "+t._s(e.looks)+" ")+"</span>")],2),t._ssrNode(" "),e.coverImg?t._ssrNode("<div data-v-3f589dee>","</div>",[r("nuxt-link",{staticClass:"wrap-img",attrs:{to:"/article/"+e.id,target:"_blank"}},[r("img",{attrs:{src:e.coverImg}})])],1):t._e()],2)])})),0),t._ssrNode(" "),r("el-row",{attrs:{type:"flex",justify:"center"}},[t.noMore?r("el-tag",{attrs:{type:"primary"}},[t._v("没有更多数据了……")]):t._e()],1)],2)}),[],!1,(function(t){var e=r(113);e.__inject__&&e.__inject__(t)}),"3f589dee","d34ef66e");e.default=component.exports}};