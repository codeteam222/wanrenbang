(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4555d0e8"],{"2b0c":function(t,e,a){},b9e1:function(t,e,a){"use strict";var n=a("2b0c"),c=a.n(n);c.a},bf72:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"other-page"},[a("c-popup-layout",{attrs:{title:t.title},on:{back:function(e){return t.$router.push({name:"Service"})}}},[a("b-banner",{attrs:{text:"全心全意为用户服务"}}),a("b-menu",{attrs:{"is-only-search":""}}),a("b-search",{on:{change:t.handleSearch}}),a("Feed",{attrs:{data:t.commentList},on:{load:t.load},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{class:["state","state-"+e.data.state],on:{click:function(a){return t.handlerAction(e.data)}}},[t._v(" "+t._s(t.stateMap[e.data.state])+" ")])]}},{key:"detailAction",fn:function(e){return[a("div",{class:["state","state-"+e.data.state],on:{click:function(a){return t.handlerAction(e.data)}}},[t._v(" "+t._s(t.stateMap[e.data.state])+" ")])]}}])})],1)],1)},c=[],s=(a("99af"),a("425c")),o=a("2c4b"),i=a("77d4"),r=a("b0e3"),u=a("66b4"),d={components:{Feed:o["a"],"c-popup-layout":s["a"],"b-banner":i["a"],"b-menu":r["a"],"b-search":u["a"]},data:function(){return{commentList:[{avatar:a("690a"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"圣卡洛斯考虑好开发来",imgs:[a("8ab6"),a("1690"),a("ce6c")],state:2,sex:0,type:"normal"},{avatar:a("0975"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"圣卡洛斯考虑好开发来",imgs:[a("2721"),a("5214"),a("146e")],state:1,sex:1,type:"lock"},{avatar:a("9c3a"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"圣卡洛斯考虑好开发来",imgs:[a("a7bd"),a("54de"),a("e930")],state:0,sex:0,type:"lock"}],stateMap:{0:"关注",1:"已关注",2:"广告"}}},computed:{title:function(){var t={0:"生活服务",1:"生活娱乐",2:"教育培训",3:"教育培训",4:"美食",5:"汽车",6:"商业代办",7:"金融服务",8:"农副产品",9:"个人分享"};return t[this.$route.query.type]}},methods:{handlerAction:function(t){0===t.state?this.$set(t,"state",1):1===t.state&&this.$set(t,"state",0)},load:function(t){var e=[].concat(this.commentList);this.commentList=this.commentList.concat(e),t()},handleSearch:function(t){console.log(t)}}},l=d,m=(a("b9e1"),a("2877")),b=Object(m["a"])(l,n,c,!1,null,"3d2b8ba9",null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-4555d0e8.9148d3b8.js.map