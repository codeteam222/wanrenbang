(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70ecb5cc"],{"0b5b":function(t,a,n){"use strict";var e=n("becc"),i=n.n(e);i.a},"0fea":function(t,a,n){"use strict";var e=n("3953"),i=n.n(e);i.a},2458:function(t,a,n){"use strict";var e=n("2e3d"),i=n.n(e);i.a},"2e3d":function(t,a,n){},3953:function(t,a,n){},"425c":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"c-layout-popup"},[n("div",{staticClass:"header"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:t.back}}),t._v(" "+t._s(t.title)+" ")],1),n("div",{staticClass:"body"},[t.tabs.length?[n("van-tabs",{on:{change:t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},t._l(t.tabs,(function(t,a){return n("van-tab",{key:a,attrs:{name:t.name,title:t.title}})})),1)]:t._e(),t._t("default")],2)])},i=[],c={props:{tabs:{type:Array,default:function(){return[]}},title:{type:[String,Array],default:""}},data:function(){return{activeName:""}},methods:{back:function(){this.$emit("back")},handleClick:function(t){this.$emit("change",t)}}},s=c,o=(n("0fea"),n("2877")),l=Object(o["a"])(s,e,i,!1,null,"74085b72",null);a["a"]=l.exports},becc:function(t,a,n){},f6c2:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"personal-follow"},[n("c-popup-layout",{attrs:{title:"我的粉丝"},on:{back:function(a){return t.$router.push({name:"Personal"})}}},[n("b-fans")],1)],1)},i=[],c=n("425c"),s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"b-fans"},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getData},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[n("ul",{staticClass:"fans"},t._l(t.data,(function(a,e){return n("li",{key:e,staticClass:"fans-item"},[n("img",{staticClass:"avatar",attrs:{src:a.head_img_src}}),n("div",{staticClass:"ceil name"},[t._v(t._s(a.username))]),n("div",{staticClass:"button",class:["fans-"+a.is_conc],on:{click:function(n){return t.follow(a)}}},[t._v(" "+t._s(1===a.is_conc?"取消关注":"关注")+" ")])])})),0)])],1)},o=[],l=(n("99af"),n("5530")),r={data:function(){return{data:[],finished:!1,loading:!1,params:{p:0}}},created:function(){this.getData()},methods:{getData:function(){var t=this;if(!this.loading){var a=this.params.p,n=0===a?1:a+1;1===n&&(this.data=[]),this.loading=!0,this.$fetch.form("/Home/List/index/mcode/ape5f8a6ed3dee7c.html",Object(l["a"])(Object(l["a"])({},this.params),{},{p:n})).then((function(a){var e=a.data;t.data=t.data.concat(e.table_data),t.finished=e.totalpages===t.params.p,t.params.p=n,t.loading=!1})).catch((function(){t.loading=!1}))}},follow:function(t){var a=this;this.$fetch.form("/Home/Create/pub_add/mcode/ape5f86f3bdec677",{mid:t.uid,log_type:2}).then((function(n){var e=n.code,i=-2===e?0:1;a.$set(t,"is_conc",i)}))}}},u=r,f=(n("0b5b"),n("2877")),d=Object(f["a"])(u,s,o,!1,null,"cdb94cd0",null),p=d.exports,h={components:{"c-popup-layout":c["a"],"b-fans":p}},m=h,b=(n("2458"),Object(f["a"])(m,e,i,!1,null,"81670274",null));a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-70ecb5cc.7010783f.js.map