(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-507bef14"],{"0975":function(t,e,n){t.exports=n.p+"img/avatar1.a3c0c950.png"},"146e":function(t,e,n){t.exports=n.p+"img/2-3.1f40ef4f.png"},1690:function(t,e,n){t.exports=n.p+"img/1-2.3b0c8c9f.png"},"1a8b":function(t,e,n){},2721:function(t,e,n){t.exports=n.p+"img/2-1.99cd73d9.png"},"29ac":function(t,e,n){},5214:function(t,e,n){t.exports=n.p+"img/2-2.0bdac129.png"},"54de":function(t,e,n){t.exports=n.p+"img/3-2.9ca1dd86.png"},"5b6f":function(t,e,n){"use strict";var a=n("29ac"),i=n.n(a);i.a},"690a":function(t,e,n){t.exports=n.p+"img/avatar.beaddb6f.png"},"6afe":function(t,e,n){"use strict";var a=n("ed15"),i=n.n(a);i.a},"760e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper personal-follow"},[n("b-collection",{ref:"collection"})],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-popup",{attrs:{position:"right","safe-area-inset-bottom":!0,"close-on-click-overlay":!1,duration:t.duration,"lock-scroll":"","get-container":"body"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("c-popup-layout",{attrs:{title:"我的收藏/关注/分享",tabs:t.tabs},on:{back:t.back,change:t.tabChange}},["collection"===t.type?n("b-collection"):t._e(),"follow"===t.type?n("b-follow"):t._e(),"share"===t.type?n("b-share"):t._e()],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-collection"},[n("c-feed",{attrs:{data:t.commentList},on:{load:t.load}})],1)},l=[],r=(n("99af"),n("2c4b")),u={components:{"c-feed":r["a"]},data:function(){return{commentList:[{avatar:n("690a"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"圣卡洛斯考虑好开发来",imgs:[n("8ab6"),n("1690"),n("ce6c")],state:2,sex:0,isLike:!0,likeNum:"收藏"},{avatar:n("0975"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"圣卡洛斯考虑好开发来",imgs:[n("2721"),n("5214"),n("146e")],state:1,sex:1,isLike:!0,likeNum:"收藏"},{avatar:n("9c3a"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"圣卡洛斯考虑好开发来",imgs:[n("a7bd"),n("54de"),n("e930")],state:0,sex:0,isLike:!0,likeNum:"收藏"}]}},methods:{load:function(t){var e=[].concat(this.commentList);this.commentList=this.commentList.concat(e),t()}}},f=u,m=n("2877"),p=Object(m["a"])(f,s,l,!1,null,null,null),b=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-follow"},[n("ul",{staticClass:"follow"},t._l(t.data,(function(e,a){return n("li",{key:a,staticClass:"follow-item"},[n("img",{staticClass:"avatar",attrs:{src:e.avatar}}),n("div",{staticClass:"ceil name"},[t._v(t._s(e.name))]),n("div",{staticClass:"button",class:["follow-"+e.state],on:{click:function(n){return t.follow(e)}}},[t._v(" "+t._s(1===e.state?"已关注":"关注")+" ")])])})),0)])},h=[],v={data:function(){return{data:[{avatar:n("0ba3"),name:"爱吃萝卜的兔子",state:0},{avatar:n("0ba3"),name:"爱吃萝卜的兔子2",state:1}]}},methods:{follow:function(t){this.$set(t,"state",1===t.state?0:1)}}},g=v,k=(n("6afe"),Object(m["a"])(g,d,h,!1,null,"3a847b50",null)),x=k.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-share"},[n("c-feed",{attrs:{data:t.commentList,actions:t.actions},on:{load:t.load},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"delete",on:{click:function(n){return t.handlerAction(e)}}},[t._v(" 删除 ")])]}}])})],1)},_=[],C=(n("a434"),{components:{"c-feed":r["a"]},data:function(){return{commentList:[{avatar:n("690a"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"圣卡洛斯考虑好开发来",imgs:[n("8ab6"),n("1690"),n("ce6c")],state:2,sex:0,isLike:!0},{avatar:n("0975"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"圣卡洛斯考虑好开发来",imgs:[n("2721"),n("5214"),n("146e")],state:1,sex:1,isLike:!0},{avatar:n("9c3a"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"圣卡洛斯考虑好开发来",imgs:[n("a7bd"),n("54de"),n("e930")],state:0,sex:0,isLike:!0}],actions:["share","comment","zan"]}},methods:{load:function(t){var e=[].concat(this.commentList);this.commentList=this.commentList.concat(e),t()},handlerAction:function(t){this.commentList.splice(t.index,1)}}}),y=C,L=(n("5b6f"),Object(m["a"])(y,w,_,!1,null,"d303090a",null)),T=L.exports,$=n("425c"),E={components:{"b-collection":b,"b-follow":x,"b-share":T,"c-popup-layout":$["a"]},data:function(){return{visible:!1,type:"",tabs:[],duration:"0.3",backCb:null,fiedTitle:""}},methods:{open:function(t){this.type=t.type,this.tabs=t.tabs||[],this.duration=t.duration||"0.3",this.backCb=t.back||null,this.fiedTitle=t.title||"",this.visible=!0},close:function(){this.visible=!1},back:function(){"function"===typeof this.backCb?this.backCb(this.close):this.close()},tabChange:function(t){this.type=t}}},O=E,j=(n("ee61"),Object(m["a"])(O,c,o,!1,null,null,null)),A=j.exports,S={components:{"b-collection":A},data:function(){return{tabs:[{title:"我的收藏",name:"collection"},{title:"我的关注",name:"follow"},{title:"我的分享",name:"share"}]}},mounted:function(){var t=this;this.$refs.collection.open({tabs:this.tabs,duration:"0",type:"collection",back:function(){return t.$router.push({name:"Personal"})}})}},M=S,N=(n("f3b6"),Object(m["a"])(M,a,i,!1,null,null,null));e["default"]=N.exports},"8ab6":function(t,e,n){t.exports=n.p+"img/1-1.ce57c2a2.png"},"9c3a":function(t,e,n){t.exports=n.p+"img/avatar2.d63706cf.png"},a434:function(t,e,n){"use strict";var a=n("23e7"),i=n("23cb"),c=n("a691"),o=n("50c4"),s=n("7b0b"),l=n("65f0"),r=n("8418"),u=n("1dde"),f=n("ae40"),m=u("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,d=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!m||!p},{splice:function(t,e){var n,a,u,f,m,p,g=s(this),k=o(g.length),x=i(t,k),w=arguments.length;if(0===w?n=a=0:1===w?(n=0,a=k-x):(n=w-2,a=d(b(c(e),0),k-x)),k+n-a>h)throw TypeError(v);for(u=l(g,a),f=0;f<a;f++)m=x+f,m in g&&r(u,f,g[m]);if(u.length=a,n<a){for(f=x;f<k-a;f++)m=f+a,p=f+n,m in g?g[p]=g[m]:delete g[p];for(f=k;f>k-a+n;f--)delete g[f-1]}else if(n>a)for(f=k-a;f>x;f--)m=f+a-1,p=f+n-1,m in g?g[p]=g[m]:delete g[p];for(f=0;f<n;f++)g[f+x]=arguments[f+2];return g.length=k-a+n,u}})},a7bd:function(t,e,n){t.exports=n.p+"img/3-1.2dca5c88.png"},be16:function(t,e,n){},ce6c:function(t,e,n){t.exports=n.p+"img/1-3.ee8e216a.png"},e930:function(t,e,n){t.exports=n.p+"img/3-3.3eb64b04.png"},ed15:function(t,e,n){},ee61:function(t,e,n){"use strict";var a=n("1a8b"),i=n.n(a);i.a},f3b6:function(t,e,n){"use strict";var a=n("be16"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-507bef14.372976d6.js.map