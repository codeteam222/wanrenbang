(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a912b788"],{"0ba3":function(t,e,a){t.exports=a.p+"img/avatar.3a683d59.jpg"},"186b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-about-popup",{ref:"project"})},r=[],c=a("3ee4"),i={components:{"b-about-popup":c["a"]},data:function(){return{projectTabs:[{title:"所有项目",name:"all"},{title:"我入股的项目",name:"my"},{title:"股权交易中心",name:"center"}]}},mounted:function(){var t=this;this.$refs.project.open({type:"project",tabs:this.projectTabs,duration:"0",back:function(){return t.$router.push({name:"Personal"})}})}},o=i,u=a("2877"),s=Object(u["a"])(o,n,r,!1,null,null,null);e["default"]=s.exports},"425c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-layout-popup"},[a("div",{staticClass:"header"},[a("van-icon",{attrs:{name:"arrow-left"},on:{click:t.back}}),t._v(" "+t._s(t.title)+" ")],1),a("div",{staticClass:"body"},[t.tabs.length?[a("van-tabs",{on:{change:t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabs,(function(t,e){return a("van-tab",{key:e,attrs:{name:t.name,title:t.title}})})),1)]:t._e(),t._t("default")],2)])},r=[],c={props:{tabs:{type:Array,default:function(){return[]}},title:{type:[String,Array],default:""}},data:function(){return{activeName:""}},methods:{back:function(){this.$emit("back")},handleClick:function(t){this.$emit("change",t)}}},i=c,o=(a("97e9"),a("2877")),u=Object(o["a"])(i,n,r,!1,null,"2ee90793",null);e["a"]=u.exports},"54a2":function(t,e,a){},"97e9":function(t,e,a){"use strict";var n=a("54a2"),r=a.n(n);r.a},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),c=a("e8b5"),i=a("861d"),o=a("7b0b"),u=a("50c4"),s=a("8418"),l=a("65f0"),f=a("1dde"),p=a("b622"),d=a("2d00"),b=p("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",m=d>=51||!r((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),k=f("concat"),y=function(t){if(!i(t))return!1;var e=t[b];return void 0!==e?!!e:c(t)},g=!m||!k;n({target:"Array",proto:!0,forced:g},{concat:function(t){var e,a,n,r,c,i=o(this),f=l(i,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(c=-1===e?i:arguments[e],y(c)){if(r=u(c.length),p+r>v)throw TypeError(h);for(a=0;a<r;a++,p++)a in c&&s(f,p,c[a])}else{if(p>=v)throw TypeError(h);s(f,p++,c)}return f.length=p,f}})}}]);
//# sourceMappingURL=chunk-a912b788.4f3e4c05.js.map