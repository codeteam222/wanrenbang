(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61a05f0b"],{"0874":function(t,e,n){"use strict";var a=n("977f"),i=n.n(a);i.a},"0f77":function(t,e,n){"use strict";var a=n("af2f"),i=n.n(a);i.a},1022:function(t,e,n){},"129e":function(t,e,n){},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"204c":function(t,e,n){},3239:function(t,e,n){t.exports=n.p+"img/edit-article.2be9619d.png"},"40c3":function(t,e,n){"use strict";var a=n("7afb"),i=n.n(a);i.a},"7afb":function(t,e,n){},"7f15":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-tab"},[n("ul",{staticClass:"tab-list",class:["layout-"+t.layout]},t._l(t.tabs,(function(e,a){var i;return n("li",{key:a,staticClass:"tab-item",class:(i={active:a===t.active},i["tab-"+a]=a>=0,i),on:{click:function(e){return t.change(a)}}},[t._v(" "+t._s(e.label)+" ")])})),0),n("div",{staticClass:"tab-content"},[t._t("default")],2)])},i=[],r=(n("a9e3"),{props:{tabs:{type:Array,default:function(){return[]}},active:{type:Number,default:0},layout:{type:String,default:"center"}},methods:{change:function(t){this.$emit("update:active",t)}}}),o=r,s=(n("fff9"),n("2877")),c=Object(s["a"])(o,a,i,!1,null,"7b4104d1",null);e["a"]=c.exports},"841c":function(t,e,n){"use strict";var a=n("d784"),i=n("825a"),r=n("1d80"),o=n("129f"),s=n("14c3");a("search",1,(function(t,e,n){return[function(e){var n=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var r=i(t),c=String(this),l=r.lastIndex;o(l,0)||(r.lastIndex=0);var u=s(r,c);return o(r.lastIndex,l)||(r.lastIndex=l),null===u?-1:u.index}]}))},8438:function(t,e,n){},"8b86":function(t,e,n){"use strict";var a=n("bc5c"),i=n.n(a);i.a},"8d1e":function(t,e,n){"use strict";var a=n("96ad"),i=n.n(a);i.a},"94e8":function(t,e,n){t.exports=n.p+"img/bridge-card_title.49fad1bd.png"},"96ad":function(t,e,n){},"96cf":function(t,e,n){var a=function(t){"use strict";var e,n=Object.prototype,a=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n,a){var i=e&&e.prototype instanceof d?e:d,r=Object.create(i.prototype),o=new S(a||[]);return r._invoke=k(t,n,o),r}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(a){return{type:"throw",arg:a}}}t.wrap=c;var u="suspendedStart",f="suspendedYield",p="executing",v="completed",h={};function d(){}function b(){}function m(){}var y={};y[r]=function(){return this};var g=Object.getPrototypeOf,_=g&&g(g(O([])));_&&_!==n&&a.call(_,r)&&(y=_);var x=m.prototype=d.prototype=Object.create(y);function C(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function w(t,e){function n(i,r,o,s){var c=l(t[i],t,r);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(f).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,s)}))}s(c.arg)}var i;function r(t,a){function r(){return new e((function(e,i){n(t,a,e,i)}))}return i=i?i.then(r,r):r()}this._invoke=r}function k(t,e,n){var a=u;return function(i,r){if(a===p)throw new Error("Generator is already running");if(a===v){if("throw"===i)throw r;return j()}n.method=i,n.arg=r;while(1){var o=n.delegate;if(o){var s=L(o,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===u)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var c=l(t,e,n);if("normal"===c.type){if(a=n.done?v:f,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=v,n.method="throw",n.arg=c.arg)}}}function L(t,n){var a=t.iterator[n.method];if(a===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=l(a,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,h;var r=i.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function O(t){if(t){var n=t[r];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){while(++i<t.length)if(a.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:j}}function j(){return{value:e,done:!0}}return b.prototype=x.constructor=m,m.constructor=b,m[s]=b.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},C(w.prototype),w.prototype[o]=function(){return this},t.AsyncIterator=w,t.async=function(e,n,a,i,r){void 0===r&&(r=Promise);var o=new w(c(e,n,a,i),r);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},C(x),x[s]="Generator",x[r]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var a=e.pop();if(a in t)return n.value=a,n.done=!1,n}return n.done=!0,n}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(a,i){return s.type="throw",s.arg=t,n.next=a,i&&(n.method="next",n.arg=e),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var i=a.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,a){return this.delegate={iterator:O(t),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=a}catch(i){Function("r","regeneratorRuntime = r")(a)}},"977f":function(t,e,n){},a19c:function(t,e,n){t.exports=n.p+"img/bridge-card_price.b39b5b5b.png"},aa40:function(t,e,n){"use strict";var a=n("204c"),i=n.n(a);i.a},ac6e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"servie-wrapper"},[a("c-menu",{attrs:{active:0}}),a("c-tab",{attrs:{tabs:t.tabs,active:t.tabActiveIndex},on:{"update:active":function(e){t.tabActiveIndex=e}}},[a(t.currentComponent,{tag:"component"})],1),1!==t.tabActiveIndex?a("div",{staticClass:"add-message",on:{click:t.openMessage}},[a("img",{attrs:{src:n("3239")}}),a("div",[t._v("发帖")])]):t._e(),a("b-message",{ref:"message"})],1)},i=[],r=n("c9b9"),o=n("7f15"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-popup",{attrs:{position:"right","safe-area-inset-bottom":!0,"close-on-click-overlay":!1},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("c-popup-layout",{attrs:{title:"分享资源"},on:{back:function(e){t.visible=!1}}},[n("van-field",{attrs:{rows:"5",type:"textarea",placeholder:"和大家分享写什么呢",maxlength:"200","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),n("div",{staticClass:"upload"},[n("van-uploader",{attrs:{multiple:"","max-count":3,"after-read":t.afterRead},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),n("van-button",{attrs:{type:"primary"},on:{click:t.relese}},[t._v("发布")])],1)],1)},c=[],l=n("425c"),u={components:{"c-popup-layout":l["a"]},data:function(){return{visible:!1,message:"",fileList:[{url:"https://img.yzcdn.cn/vant/leaf.jpg",status:"uploading",message:"上传中..."},{url:"https://img.yzcdn.cn/vant/tree.jpg",status:"failed",message:"上传失败"}]}},computed:{token:function(){return this.$store.state.token}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1},afterRead:function(t){console.log(t)},relese:function(){this.$emit("release")}}},f=u,p=(n("8d1e"),n("2877")),v=Object(p["a"])(f,s,c,!1,null,null,null),h=v.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-resource"},[n("b-banner",{attrs:{text:"全心全意为用户服务","bg-color":"rgba(59, 172, 106, 0.8)"}}),n("b-search",{on:{change:t.handleSearch}}),n("c-feed",{attrs:{data:t.commentList},on:{load:t.load},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{class:["state","state-"+e.data.state],on:{click:function(n){return t.handlerAction(e.data)}}},[t._v(" "+t._s(t.stateMap[e.data.state])+" ")])]}},{key:"detailAction",fn:function(e){return[n("div",{class:["state","state-"+e.data.state],on:{click:function(n){return t.handlerAction(e.data)}}},[t._v(" "+t._s(t.stateMap[e.data.state])+" ")])]}}])})],1)},b=[],m=(n("99af"),n("2c4b")),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner-box"},[n("div",{staticClass:"banner",style:{"background-color":t.bgColor}})])},g=[],_={props:{text:{type:String},link:{type:String},bgColor:{type:String}}},x=_,C=(n("aa40"),Object(p["a"])(x,y,g,!1,null,"9ec07a18",null)),w=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-search"},[n("div",{staticClass:"content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSearch,expression:"!isSearch"}],staticClass:"tabs-box"},[n("van-tabs",{on:{change:t.tabChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{title:"最新",name:"new"}}),n("van-tab",{attrs:{title:"最热",name:"hot"}}),n("van-tab",{attrs:{title:"关注",name:"follow"}})],1)],1),n("van-icon",{staticClass:"search-icon",attrs:{name:"search",color:"#CCCCCC"},on:{click:t.handleSearchVisible}})],1),n("b-search",{ref:"search"})],1)},L=[],P=(n("ac1f"),n("841c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("van-popup",{attrs:{position:"right","safe-area-inset-bottom":!0,"close-on-click-overlay":!1},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{staticClass:"searchBar"},[n("div",{staticClass:"searchInput"},[n("i",{staticClass:"iconfont iconsousuo"}),n("van-form",{attrs:{action:"#"},on:{submit:t.debounceSearch}},[n("van-field",{attrs:{autofocus:"",maxlength:"20",type:"search",placeholder:"请输入搜索关键词"},on:{input:t.input},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1),n("span",{on:{click:t.close}},[t._v("取消")])]),n("div",{staticClass:"content"})])],1)}),E=[];n("96cf"),n("d3b7");function S(t,e,n,a,i,r,o){try{var s=t[r](o),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(a,i)}function O(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function o(t){S(r,a,i,o,s,"next",t)}function s(t){S(r,a,i,o,s,"throw",t)}o(void 0)}))}}var j=n("ca00"),$={name:"BSearch",data:function(){return{searchValue:"",visible:!1}},computed:{debounceSearch:function(){return Object(j["c"])(this.search)}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1},input:function(){if(!this.searchValue)return this.classList=this.goodsList=""},search:function(){return O(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}},A=$,N=(n("cc1e"),Object(p["a"])(A,P,E,!1,null,"7b8ab612",null)),I=N.exports,T={components:{"b-search":I},data:function(){return{active:"new",isSearch:!1,searchValue:""}},methods:{handleSearchVisible:function(){this.$refs.search.open()},tabChange:function(t){this.$emit("change",{type:t})},searchChange:function(t){this.$emit("change",{type:name,search:t})}}},V=T,D=(n("8b86"),Object(p["a"])(V,k,L,!1,null,"2dcd29f2",null)),F=D.exports,G={components:{"c-feed":m["a"],"b-banner":w,"b-search":F},data:function(){return{commentList:[{avatar:n("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[n("0ba3"),n("0ba3"),n("0ba3")],state:0,sex:0},{avatar:n("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[n("0ba3"),n("0ba3"),n("0ba3")],state:1,sex:1},{avatar:n("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[n("0ba3"),n("0ba3"),n("0ba3")],state:2,sex:0}],stateMap:{0:"关注",1:"已关注",2:"广告"}}},methods:{handlerAction:function(t){0===t.state?this.$set(t,"state",1):1===t.state&&this.$set(t,"state",0)},load:function(t){var e=[].concat(this.commentList);this.commentList=this.commentList.concat(e),t()},handleSearch:function(t){console.log(t)}}},B=G,R=(n("0874"),Object(p["a"])(B,d,b,!1,null,"5c45664f",null)),z=R.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service-welfare"},[a("div",{staticClass:"card"},[a("img",{staticClass:"price",attrs:{src:n("a19c")}}),a("div",{staticClass:"title"},[t._m(0),a("img",{attrs:{src:n("94e8")}}),a("div",{staticClass:"prompt"},[t._v("<凭本卡片可兑换各种福利>")]),a("div",{staticClass:"buy",on:{click:function(e){return t.handleBuyPopup(!0,2)}}},[t._v("购买")])])]),a("div",{staticClass:"preferential-card"},[t._m(1),a("div",{staticClass:"right preferential-card-buy",on:{click:function(e){return t.handleBuyPopup(!0,.3)}}},[t._v(" 先买后付 ")])]),a("div",{staticClass:"card-list"},[t._m(2),a("div",{staticClass:"card-item"},[a("div",{staticClass:"title"},[t._v("待支付订单")]),a("div",{staticClass:"message"},[t._v(" 无&您有一笔待支付账单，"),a("span",{staticStyle:{"text-decoration":"underline",color:"#6D75F1"},on:{click:t.handleyPay}},[t._v("去支付")])])])]),a("van-popup",{attrs:{position:"bottom","safe-area-inset-bottom":!0,"close-on-click-overlay":!1,round:""},model:{value:t.buyPopupVisible,callback:function(e){t.buyPopupVisible=e},expression:"buyPopupVisible"}},[a("div",{staticClass:"my-gold"},[t._v("我的金币：4321231")]),a("div",{staticClass:"title"},[a("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),a("span",[t._v("福利卡")]),a("span",{staticStyle:{color:"#169BD5"}},[t._v("l")])]),a("div",{staticClass:"stepper"},[t._v("购买"),a("van-stepper",{model:{value:t.buyNumber,callback:function(e){t.buyNumber=e},expression:"buyNumber"}}),t._v("金币")],1),a("div",{staticClass:"prompt"},[t._v("< "+t._s(t.buyNumber)+"张需要"+t._s(t.totalPrice)+"元 >")]),a("div",{staticClass:"actions"},[a("van-button",{attrs:{type:"default",size:"small"},on:{click:function(e){return t.handleBuyPopup(!1)}}},[t._v("取消")]),a("van-button",{attrs:{type:"info",size:"small",loading:t.loading},on:{click:t.buy}},[t._v("确认购买")])],1)]),a("van-popup",{attrs:{position:"bottom","safe-area-inset-bottom":!0,"close-on-click-overlay":!1,round:""},model:{value:t.payPopupVisible,callback:function(e){t.payPopupVisible=e},expression:"payPopupVisible"}},[a("div",{staticClass:"my-gold"},[t._v("我的金币：4321231")]),a("div",{staticClass:"title"},[a("span",{staticStyle:{color:"#F56D91"}},[t._v("<")]),a("span",[t._v(" 支付3541元 ")]),a("span",{staticStyle:{color:"#FFD000"}},[t._v(">")])]),a("div",{staticClass:"prompt"},[t._v("该笔账单是您参与优惠活动购买3120张福利卡的费用")]),a("div",{staticClass:"actions"},[a("van-button",{attrs:{type:"default",size:"small"},on:{click:function(e){return t.handleyPay(!1)}}},[t._v("取消")]),a("van-button",{attrs:{type:"info",size:"small",loading:t.loading},on:{click:t.buy}},[t._v("确认支付")])],1)])],1)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticStyle:{color:"#F56D91"}},[t._v("fú")]),n("span",{staticStyle:{color:"#6D75F1"}},[t._v("lì")]),n("span",{staticStyle:{color:"#339933"}},[t._v("kǎ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("p",[a("span",{staticStyle:{color:"#F56D91"}},[t._v("l")]),a("span",[t._v("福利卡优惠活动")]),a("span",{staticStyle:{color:"#FFD000"}},[t._v("l")])]),a("p",{staticClass:"desc"},[t._v(" <本活动福利卡仅售0.3元一张，可以先购买，然后在圆梦计划→幸运锦鲤页面售完以后再付钱，活动仅限于圆梦计划幸运锦鲤用户参与 > ")]),a("p",{staticClass:"price"},[a("img",{attrs:{src:n("c03c")}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-item"},[n("div",{staticClass:"title"},[t._v("我的卡片")]),n("div",{staticClass:"message"},[t._v("福利卡"),n("span",{staticStyle:{color:"#336633"}},[t._v("×3000")])])])}],J={data:function(){return{commentList:[{avatar:n("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[n("0ba3"),n("0ba3"),n("0ba3")],state:0,sex:0},{avatar:n("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[n("0ba3"),n("0ba3"),n("0ba3")],state:0,sex:1},{avatar:n("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[n("0ba3"),n("0ba3"),n("0ba3")],state:0,sex:0}],stateMap:{0:"话圈"},buyPopupVisible:!1,buyNumber:1,unitPrice:0,payPopupVisible:!1}},computed:{totalPrice:function(){return Object(j["a"])(this.buyNumber,this.unitPrice)},loading:function(){return this.$store.state.loading}},methods:{openBuyPopup:function(){},handleBuyPopup:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.loading||(this.unitPrice=e,this.buyPopupVisible=t,t||(this.buyNumber=1))},buy:function(){var t=this;this.loading||(this.$store.commit("UPDATE_LOADING",!0),setTimeout((function(){t.$store.commit("UPDATE_LOADING",!1),t.handleBuyPopup(!1)}),500))},handleyPay:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loading||(this.payPopupVisible=t)},pay:function(){var t=this;this.loading||(this.$store.commit("UPDATE_LOADING",!0),setTimeout((function(){t.$store.commit("UPDATE_LOADING",!1),t.handleyPay(!1)}),500))}}},Y=J,q=(n("0f77"),Object(p["a"])(Y,M,U,!1,null,"7a1b2ee4",null)),H=q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-about"},[n("b-banner",{attrs:{text:"一切为了用户，一切依靠用户","bg-color":"rgba(59, 172, 106, 0.8)"}}),n("div",{staticClass:"about-item plan-detail",on:{click:function(e){return t.handleOpenPopup("explain")}}},[t._v("聚合联创计划说明")]),n("div",{staticClass:"about-item project-money",on:{click:function(e){return t.handleOpenPopup("money")}}},[n("div",{staticClass:"title"},[t._v("项目启动资金")]),n("div",{staticClass:"money"},[t._v("￥132.132.00")])]),n("div",{staticClass:"about-item project-center",on:{click:function(e){return t.handleOpenPopup("project")}}},[t._v("项目中心")]),n("b-about-popup",{ref:"aboutPopup"})],1)},Q=[],W=n("3ee4"),X={components:{"b-banner":w,"b-about-popup":W["a"]},data:function(){return{projectTabs:[{title:"所有项目",name:"all"},{title:"我入股的项目",name:"my"},{title:"股权交易中心",name:"center"}]}},methods:{handleOpenPopup:function(t){this.$refs.aboutPopup.open({type:t,position:"money"===t?"":"right",tabs:"project"===t?this.projectTabs:[]})}}},Z=X,tt=(n("40c3"),Object(p["a"])(Z,K,Q,!1,null,"30238ab7",null)),et=tt.exports,nt={name:"ServiceIndex",components:{"c-menu":r["a"],"c-tab":o["a"],"b-message":h},data:function(){return{tabActiveIndex:0,tabs:[{label:"每日福利"},{label:"卡片商城"},{label:"聚合联创"}]}},computed:{currentComponent:function(){return 0===this.tabActiveIndex?z:1===this.tabActiveIndex?H:2==this.tabActiveIndex?et:z}},methods:{openMessage:function(){this.$refs.message.open()}}},at=nt,it=(n("ac8e"),Object(p["a"])(at,a,i,!1,null,"36e7584e",null));e["default"]=it.exports},ac8e:function(t,e,n){"use strict";var a=n("1022"),i=n.n(a);i.a},af2f:function(t,e,n){},b0c0:function(t,e,n){var a=n("83ab"),i=n("9bf2").f,r=Function.prototype,o=r.toString,s=/^\s*function ([^ (]*)/,c="name";a&&!(c in r)&&i(r,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},bc5c:function(t,e,n){},c03c:function(t,e,n){t.exports=n.p+"img/bridge-card_price2.d38a49f4.png"},c42b:function(t,e,n){},c9b9:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"menu-list"},t._l(t.menuList,(function(e,a){var i;return n("div",{key:a,staticClass:"menu-item",class:(i={active:a===t.active},i["item-"+a]=a.toString(),i),on:{click:function(n){return t.handleClick(e)}}},[n("span",{staticClass:"label"},[t._v(t._s(e.label))])])})),0)])},i=[],r=(n("b0c0"),n("a9e3"),{props:{active:{type:Number,default:1}},data:function(){return{menuList:[{label:"服务大厅",name:"Service"},{label:"圆梦计划",name:"Plan"},{label:"个人中心",name:"Personal"}]}},methods:{handleClick:function(t){this.$router.push({name:t.name})}}}),o=r,s=(n("dbea"),n("2877")),c=Object(s["a"])(o,a,i,!1,null,"4e45b15a",null);e["a"]=c.exports},cc1e:function(t,e,n){"use strict";var a=n("c42b"),i=n.n(a);i.a},dbea:function(t,e,n){"use strict";var a=n("8438"),i=n.n(a);i.a},fff9:function(t,e,n){"use strict";var a=n("129e"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-61a05f0b.a740fc81.js.map