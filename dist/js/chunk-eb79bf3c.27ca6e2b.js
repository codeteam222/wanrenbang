(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb79bf3c"],{"0127":function(t,a,e){},"0339":function(t,a,e){"use strict";var i=e("14c0"),s=e.n(i);s.a},"12fe":function(t,a,e){},1476:function(t,a,e){t.exports=e.p+"img/pavatar.c3d6c85a.jpg"},"14c0":function(t,a,e){},2729:function(t,a,e){t.exports=e.p+"img/pu.2318adcd.png"},"2a6e":function(t,a,e){"use strict";var i=e("0127"),s=e.n(i);s.a},"2aec":function(t,a,e){},3239:function(t,a,e){t.exports=e.p+"img/edit-article.2be9619d.png"},"3ca3":function(t,a,e){"use strict";var i=e("6547").charAt,s=e("69f3"),n=e("7dd0"),l="String Iterator",c=s.set,o=s.getterFor(l);n(String,"String",(function(t){c(this,{type:l,string:String(t),index:0})}),(function(){var t,a=o(this),e=a.string,s=a.index;return s>=e.length?{value:void 0,done:!0}:(t=i(e,s),a.index+=t.length,{value:t,done:!1})}))},4567:function(t,a,e){"use strict";var i=e("2aec"),s=e.n(i);s.a},"4df4":function(t,a,e){"use strict";var i=e("0366"),s=e("7b0b"),n=e("9bdd"),l=e("e95a"),c=e("50c4"),o=e("8418"),r=e("35a1");t.exports=function(t){var a,e,u,v,d,m,p=s(t),f="function"==typeof this?this:Array,_=arguments.length,h=_>1?arguments[1]:void 0,b=void 0!==h,y=r(p),g=0;if(b&&(h=i(h,_>2?arguments[2]:void 0,2)),void 0==y||f==Array&&l(y))for(a=c(p.length),e=new f(a);a>g;g++)m=b?h(p[g],g):p[g],o(e,g,m);else for(v=y.call(p),d=v.next,e=new f;!(u=d.call(v)).done;g++)m=b?n(v,h,[u.value,g],!0):u.value,o(e,g,m);return e.length=g,e}},"55b1":function(t,a,e){"use strict";var i=e("c6cd5"),s=e.n(i);s.a},"576c":function(t,a,e){"use strict";var i=e("6046"),s=e.n(i);s.a},6046:function(t,a,e){},"60b6":function(t,a,e){"use strict";var i=e("c8cf"),s=e.n(i);s.a},"7f15":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"c-tab"},[e("ul",{staticClass:"tab-list",class:["layout-"+t.layout]},t._l(t.tabs,(function(a,i){var s;return e("li",{key:i,staticClass:"tab-item",class:(s={},s["active active_"+i]=i===t.active,s["tab-"+i]=i>=0,s),style:["color:"+a.color],on:{click:function(a){return t.change(i)}}},[t._v(" "+t._s(a.label)+" ")])})),0),e("div",{staticClass:"tab-content"},[t._t("default")],2)])},s=[],n=(e("a9e3"),{props:{tabs:{type:Array,default:function(){return[]}},active:{type:Number,default:0},layout:{type:String,default:"center"}},methods:{change:function(t){this.$emit("update:active",t)}}}),l=n,c=(e("cc93"),e("2877")),o=Object(c["a"])(l,i,s,!1,null,"c0f9814e",null);a["a"]=o.exports},8150:function(t,a,e){"use strict";var i=e("f3db"),s=e.n(i);s.a},8592:function(t,a,e){"use strict";var i=e("d2f9"),s=e.n(i);s.a},"98a0":function(t,a,e){},"9b5f":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper plan-wrapper"},[e("div",{staticClass:"page-header"},[e("c-menu",{attrs:{active:1}}),e("c-tab",{attrs:{tabs:t.tabs,active:t.tabActiveIndex},on:{"update:active":function(a){t.tabActiveIndex=a}}})],1),e(t.currentComponent,{tag:"component"})],1)},s=[],n=e("c9b9"),l=e("7f15"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"plan-buy"},[e("div",{staticClass:"section section-1"},[t._m(0),e("div",{staticClass:"body"},[t._m(1),t._m(2),e("div",{staticClass:"count-down"},[t._m(3),e("c-countdown",{attrs:{remainTime:87e3},on:{end:t.countDownEnd}}),t._m(4)],1),e("div",{staticClass:"button button-buy",on:{click:t.handleBuyPopup}},[t._v("立即参与")])])]),t._m(5),t._m(6),e("van-popup",{staticClass:"popup-box",attrs:{position:"bottom","safe-area-inset-bottom":!0,"close-on-click-overlay":!1,round:""},model:{value:t.buyPopupVisible,callback:function(a){t.buyPopupVisible=a},expression:"buyPopupVisible"}},[e("div",{staticClass:"my-gold"},[t._v("我的金币：4321231")]),e("div",{staticClass:"title"},[e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),t._v(" 圆梦计划 "),e("span",{staticStyle:{color:"#169BD5"}},[t._v("l")])]),e("div",{staticClass:"stepper"},[t._v(" 参与 "),e("van-stepper",{model:{value:t.buyNumber,callback:function(a){t.buyNumber=a},expression:"buyNumber"}}),t._v(" 金币 ")],1),e("div",{staticClass:"prompt"},[e("p",[t._v("（1个金币获取1个圆梦号码）")]),e("p",[t._v("（每天最多可参与100个金币）")])]),e("div",{staticClass:"actions"},[e("van-button",{attrs:{type:"default",size:"small"},on:{click:function(a){return t.handleBuyPopup(!1)}}},[t._v("取消")]),e("van-button",{attrs:{type:"info",size:"small",loading:t.loading},on:{click:t.buy}},[t._v("确认参与")])],1)])],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section-title title"},[e("div",{staticClass:"plan-id"},[t._v("《12345678》")]),e("div",{staticClass:"plan-state"},[t._v("正在进行中")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bar-char"},[e("div",{staticClass:"bar-item bar-1"},[e("div",{staticClass:"total"},[t._v("￥23435")])]),e("div",{staticClass:"bar-item bar-2"},[t._v("圆梦计划")]),e("div",{staticClass:"bar-item bar-3"},[e("div",{staticClass:"total"},[t._v("12345人")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bar-footer"},[e("span",{staticClass:"people-num"},[t._v("当前参与人数")]),e("span",[t._v("|")]),e("span",{staticClass:"gold-num"},[t._v("当前金币总数")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"stext"},[e("div",{staticClass:"open-draw open"},[t._v("开")]),e("div",{staticClass:"open-draw draw"},[t._v("奖")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dtext"},[e("div",{staticClass:"count-down-time down"},[t._v("倒")]),e("div",{staticClass:"count-down-time count"},[t._v("计")]),e("div",{staticClass:"count-down-time time"},[t._v("时")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section section-2"},[e("div",{staticClass:"section-title"},[e("span",[t._v("计划规则")])]),e("div",{staticClass:"section-body rules"},[e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),e("span",{staticStyle:{color:"#FFC107"}},[t._v("l")]),t._v(" 圆梦三部曲 "),e("span",{staticStyle:{color:"#2892EE"}},[t._v("l")]),e("span",{staticStyle:{color:"#5AB963"}},[t._v("l")])])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#2892EE"}},[t._v("l")]),t._v(" 第一步：购买福利卡，系统免费赠送金币 ")]),e("p",[e("span",[t._v("（购买1张福利卡，系统免费赠送1个金币，购买100张，系统免费")])]),e("p",[e("span",[t._v("赠送100个金币，以此类推，购买N张，系统赠送N个金币）")])])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#5AB963"}},[t._v("l")]),t._v(" 第二步：参与圆梦计划获取幸运号码 ")]),e("p",[e("span",[t._v("（用系统赠送的金币参与圆梦计划，参与1个金币获取1个幸运号码，")])]),e("p",[e("span",[t._v("每天最多可获取100个幸运号码）")])])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),t._v(" 第三步：中奖成为幸运锦鲤，享受特权 ")]),e("p",[e("span",[t._v("（每天20：50分准时开奖，开出的幸运号码，和你获得的其中一个")])]),e("p",[e("span",[t._v("幸运号码一样，那么你就是本期的幸运锦鲤，幸运锦鲤可以在卡卷")])]),e("p",[e("span",[t._v("商城以0.3元每张的价格购买本期圆梦计划中奖所得金币相等数量")])]),e("p",[e("span",[t._v("的福利卡，并在幸运锦鲤页面以每张1元的价格出售。出售所得的钱")])]),e("p",[e("span",[t._v("直接存入账户余额，随时提现！（前期购买福利卡的费用，可等售完")])]),e("p",[e("span",[t._v("之后再付钱）")])]),e("p",[e("span",[e("br")])])]),e("div",{staticClass:"rule-item"},[e("div",{staticClass:"font-20"},[e("span",{staticStyle:{color:"#FFC107"}},[t._v("l")]),e("span",{staticStyle:{color:"#5AB963"}},[t._v("l")]),t._v(" 幸运号码计算公式：[ (A+B) /C ] 取余数+10000001 "),e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),e("span",{staticStyle:{color:"#2892EE"}},[t._v("l")])])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#2892EE"}},[t._v("l")]),t._v(" 数值A=当天日期+当天总参与人数 ")]),e("p",[e("span",[t._v("（如：2019年5月3号，总参与人数为：28374")])]),e("p",[e("span",[t._v("那么数值A=20190503+28374=20218877;）")])])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#2892EE"}},[t._v("l")]),t._v(" 数值B=重庆时时彩每天固定第55期开奖号码 ")]),e("p",[e("span",[t._v("（如：2019年5月3号，重庆时时彩第55期开奖号码为：37485")])]),e("p",[e("span",[t._v("那么数值B=37485，如果时时彩数据因为特殊情况未开出，")])]),e("p",[e("span",[t._v("那么数值B取值为00000；）")])])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),t._v(" 数值C=当天总参与人数 ")])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),e("span",{staticStyle:{color:"#FFC107"}},[t._v("l")]),t._v(" 注：余数取小数点前面的整数 "),e("span",{staticStyle:{color:"#2892EE"}},[t._v("l")]),e("span",{staticStyle:{color:"#5AB963"}},[t._v("l")])])]),e("div",{staticClass:"rule-item"},[e("div",[e("p",[e("span",{staticStyle:{color:"#2892EE"}},[t._v("l")]),e("span",[t._v("例：2017-11-28期总参与人数为：846545人，重庆时时彩")])]),e("p",[e("span",[t._v("20171128055期开奖号码：11232；")])])])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#2892EE"}},[t._v("l")]),t._v(" A=20171128+846545=20017673; ")])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#FFC107"}},[t._v("l")]),t._v(" B=11232; ")])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),t._v(" C=846545; ")])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#5AB963"}},[t._v("l")]),t._v(" 根据公式：【(A+B)/C】取余数+10000001=10000712； ")])]),e("div",{staticClass:"rule-item"},[e("div",[e("span",{staticStyle:{color:"#2892EE"}},[t._v("l")]),t._v(" 2017-11-28期幸运号码为：10000712 ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message"},[t._v(" 公平 "),e("span",{staticStyle:{color:"#FFC107"}},[t._v("l")]),t._v(" 公正 "),e("span",{staticStyle:{color:"#2892EE"}},[t._v("l")]),t._v(" 公开 ")])}],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"c-countdown"},["block"===t.type?t._l(t.timeTxt,(function(a,i){return e("span",{key:i,staticClass:"item",class:{"is-num":":"!==a,"is-t":":"===a}},[t._v(" "+t._s(a)+" ")])})):[t._v(" "+t._s(t.timeTxt.join(""))+" ")]],2)},u=[];e("99af"),e("ac1f"),e("1276");function v(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,i=new Array(a);e<a;e++)i[e]=t[e];return i}function d(t){if(Array.isArray(t))return v(t)}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("d3b7"),e("3ca3"),e("ddb0");function m(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("fb6a"),e("b0c0"),e("25f0");function p(t,a){if(t){if("string"===typeof t)return v(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?v(t,a):void 0}}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(t){return d(t)||m(t)||p(t)||f()}var h={props:{type:{type:String,default:"block"},remainTime:{default:""}},data:function(){return{hour:"",minute:"",second:"",promiseTimer:""}},computed:{hourString:function(){return this.formatNum(this.hour)},minuteString:function(){return this.formatNum(this.minute)},secondString:function(){return this.formatNum(this.second)},timeTxt:function(){return[].concat(_(this.hourString.split("")),[":"],_(this.minuteString.split("")),[":"],_(this.secondString.split("")))}},mounted:function(){this.remainTime>0&&(this.hour=Math.floor(this.remainTime/3600),this.minute=Math.floor(this.remainTime/60%60),this.second=Math.floor(this.remainTime%60),this.countDowm())},methods:{countDowm:function(){var t=this;clearInterval(this.promiseTimer),this.promiseTimer=setInterval((function(){0===t.hour?0!==t.minute&&0===t.second?(t.second=59,t.minute-=1):0===t.minute&&0===t.second?(t.second=0,t.$emit("end"),clearInterval(t.promiseTimer)):t.second-=1:0!==t.minute&&0===t.second?(t.second=59,t.minute-=1):0===t.minute&&0===t.second?(t.hour-=1,t.minute=59,t.second=59):t.second-=1}),1e3)},formatNum:function(t){return t<10?"0"+t:""+t}}},b=h,y=(e("55b1"),e("2877")),g=Object(y["a"])(b,r,u,!1,null,"6603dd6c",null),C=g.exports,k={components:{"c-countdown":C},data:function(){return{buyPopupVisible:!1,buyNumber:1}},computed:{loading:function(){return this.$store.state.loading}},methods:{countDownEnd:function(){console.log("倒计时结束")},handleBuyPopup:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loading||(this.buyPopupVisible=t,t||(this.buyNumber=1))},buy:function(){var t=this;this.loading||(this.$store.commit("UPDATE_LOADING",!0),setTimeout((function(){t.$store.commit("UPDATE_LOADING",!1)}),500))}}},S=k,E=(e("8592"),Object(y["a"])(S,c,o,!1,null,"cfa8abf6",null)),x=E.exports,w=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"plan-koifish"},[i("c-feed",{attrs:{data:t.commentList,type:"koiFish"},on:{load:t.load},scopedSlots:t._u([{key:"content",fn:function(a){var e=a.data;return[i("div",{staticClass:"content"},[i("p",{staticClass:"weight-bold total"},[i("label",[t._v("出售：")]),t._v(t._s(e.total)+"张福利卡，"+t._s(e.price)+"元一张，快来购买 ")]),i("p",{staticClass:"weight-bold sale"},[i("label",[t._v("已售出：")]),t._v(t._s(e.sale||0)+"张")]),i("p",{staticClass:"weight-bold surplus"},[i("label",[t._v("剩余：")]),t._v(t._s(e.surplus)+"张")]),i("p",{staticClass:"mood"},[i("label",[t._v("心情：")]),t._v(t._s(e.mood))])])]}},{key:"default",fn:function(a){return[i("div",{class:["state","state-"+a.data.state],on:{click:function(e){return t.handlerAction(a.data)}}},[t._v(" "+t._s(t.stateMap[a.data.state])+" ")])]}}])}),i("BBuyWelfareCard",{ref:"buyWelfareCard",attrs:{price:t.current.price||0},on:{success:t.buySuccess}}),i("BSell",{ref:"sell",attrs:{cardNum:t.cardNum},on:{relese:t.relese}}),i("div",{staticClass:"add-message",on:{click:t.openSell}},[i("img",{attrs:{src:e("3239")}}),i("div",[t._v("出售")])])],1)},N=[],A=e("2c4b"),$=e("645d"),j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("van-popup",{staticClass:"b-sell",attrs:{"lock-scroll":"",position:"right","safe-area-inset-bottom":!0,"close-on-click-overlay":!1},model:{value:t.visible,callback:function(a){t.visible=a},expression:"visible"}},[e("c-popup-layout",{attrs:{title:"出售福利卡"},on:{back:function(a){t.visible=!1}}},[e("div",{staticClass:"sell-card"},[e("van-field",{attrs:{center:"",clearable:"",label:"您有"+t.cardNum+"张福利卡，想要出售"},scopedSlots:t._u([{key:"button",fn:function(){return[t._v("张")]},proxy:!0}]),model:{value:t.sellNum,callback:function(a){t.sellNum=a},expression:"sellNum"}})],1),e("van-field",{staticClass:"textarea",attrs:{rows:"5",type:"textarea",label:"心情：",placeholder:"说说你的心情","show-word-limit":""},model:{value:t.message,callback:function(a){t.message=a},expression:"message"}}),e("div",{staticClass:"upload"},[e("van-uploader",{attrs:{multiple:"","max-count":3,"after-read":t.afterRead},model:{value:t.fileList,callback:function(a){t.fileList=a},expression:"fileList"}})],1),e("van-button",{attrs:{type:"primary"},on:{click:t.relese}},[t._v("发布")])],1)],1)},T=[],B=(e("a9e3"),e("425c")),F={components:{"c-popup-layout":B["a"]},props:{cardNum:{type:Number,default:0}},data:function(){return{visible:!1,message:"",fileList:[{url:"https://img.yzcdn.cn/vant/leaf.jpg",status:"uploading",message:"上传中..."},{url:"https://img.yzcdn.cn/vant/tree.jpg",status:"failed",message:"上传失败"}],sellNum:0}},computed:{token:function(){return this.$store.state.token}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1},afterRead:function(t){console.log(t)},relese:function(){this.$emit("relese")}}},O=F,L=(e("2a6e"),Object(y["a"])(O,j,T,!1,null,null,null)),D=L.exports,P={components:{"c-feed":A["a"],BBuyWelfareCard:$["a"],BSell:D},data:function(){return{commentList:[{avatar:e("1476"),nickname:"爱吃萝卜的兔子",createTime:"2020-10-28 18:11:22",links:[{text:"#第20200206期幸运锦鲤",url:"https://wwww.baidu.com"}],imgs:[e("2729"),e("2729"),e("2729")],total:12542,price:1,sale:540,surplus:12002,mood:"美滋滋，的时间里开发手机浪费框数据浪费三两句菲利克斯发金石可",state:0,sex:0,buyPersonal:[{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10}]},{avatar:e("1476"),nickname:"爱吃萝卜的兔子",createTime:"2020-10-28 18:11:22",links:[{text:"#第20200206期幸运锦鲤",url:"https://wwww.baidu.com"}],imgs:[e("2729"),e("2729"),e("2729")],total:12542,price:1,sale:540,surplus:12002,mood:"美滋滋，的时间里开发手机浪费框数据浪费三两句菲利克斯发金石可",state:0,sex:0,buyPersonal:[{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10}]},{avatar:e("1476"),nickname:"爱吃萝卜的兔子",createTime:"2020-10-28 18:11:22",links:[{text:"#第20200206期幸运锦鲤",url:"https://wwww.baidu.com"}],imgs:[e("2729"),e("2729"),e("2729")],total:12542,price:1,sale:540,surplus:12002,mood:"美滋滋，的时间里开发手机浪费框数据浪费三两句菲利克斯发金石可",state:0,sex:0,buyPersonal:[{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10},{avatar:e("1476"),name:"哈哈哈",num:10}]}],stateMap:{0:"购买",1:"已售完",2:"已圆梦"},current:{},cardNum:85264}},methods:{handlerAction:function(t){0===t.state&&(this.current=t,this.$refs.buyWelfareCard.open())},buySuccess:function(){this.$set(this.current,"state",1)},load:function(t){var a=[].concat(this.commentList);this.commentList=this.commentList.concat(a),t()},openSell:function(){this.$refs.sell.open()},relese:function(){this.$notify({type:"success",message:"发布成功"}),this.$refs.sell.close()}}},I=P,M=(e("fc97"),Object(y["a"])(I,w,N,!1,null,"5182fe03",null)),z=M.exports,R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"plan-detail"},[t._m(0),t._m(1),t._m(2),t._m(3),e("div",{staticClass:"detail-item"},[t._m(4),e("p",[t._v("根据幸运号码计算公式：[ (A+B) /C ] 取余数+10000001")]),e("p",[t._v("A=43445545；")]),e("p",[t._v("B=暂未知；")]),e("p",[t._v("C=33542；")]),e("p",[t._v(" 幸运号码：等待开奖.... "),e("c-countdown",{attrs:{remainTime:87e3,type:"text"}})],1),e("p",[t._v("幸运锦鲤：等待揭晓....")])]),e("div",{staticClass:"detail-item operation"},[e("div",{staticClass:"button",on:{click:function(a){return t.openPopup("join")}}},[t._v("我的参与记录")]),e("div",{staticClass:"button",on:{click:function(a){return t.openPopup("koiFish")}}},[t._v("历史幸运锦鲤")])]),e("div",{staticClass:"detail-item join-detail"},[t._m(5),e("ul",{staticClass:"join-list"},t._l(t.joinList,(function(a,i){return e("li",{key:i,staticClass:"join-item"},[e("div",{staticClass:"user-info"},[e("img",{staticClass:"avatar",attrs:{src:a.avatar,alt:""}}),e("div",{staticClass:"message"},[e("div",{staticClass:"nickname"},[t._v(t._s(a.nickname))]),e("div",{staticClass:"gold"},[t._v("参与"+t._s(a.goldNum)+"个商币")])])]),e("div",{staticClass:"time"},[t._v(" "+t._s(a.time)+" ")])])})),0)]),e("c-history",{ref:"history"})],1)},W=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail-item plan-id"},[e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),e("span",{staticStyle:{color:"#FFC107"}},[t._v("l")]),t._v(" 第20200206期 "),e("span",{staticClass:"state"},[t._v("正在进行中...")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail-item people-num total"},[e("span",{staticStyle:{color:"#FFC107"}},[t._v("l")]),t._v("当前参与人数： "),e("span",{staticClass:"num"},[t._v("33542；")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail-item gold-num total"},[e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),t._v("当前金币总数： "),e("span",{staticClass:"num"},[t._v("33542；")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail-item luck-number"},[e("div",{staticClass:"detail-item-title"},[e("span",{staticStyle:{color:"#2892EE"}},[t._v("l")]),t._v("本期我获得XX个幸运号码"),e("span",{staticStyle:{color:"#FFC107"}},[t._v("l")])]),e("ul",{staticClass:"number-list"},[e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")]),e("li",[t._v("10000026；")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail-item-title"},[e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),t._v("计算过程"),e("span",{staticStyle:{color:"#5AB963"}},[t._v("l")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail-item-title"},[e("span",{staticStyle:{color:"#5AB963"}},[t._v("l")]),t._v("用户参与详情")])}],V=e("db20"),J={components:{"c-countdown":C,"c-history":V["a"]},data:function(){return{joinList:[{avatar:e("0ba3"),nickname:"闭关修炼",goldNum:10,time:"2月11 15：46：32"},{avatar:e("0ba3"),nickname:"闭关修炼",goldNum:10,time:"2月11 15：46：32"},{avatar:e("0ba3"),nickname:"闭关修炼",goldNum:10,time:"2月11 15：46：32"},{avatar:e("0ba3"),nickname:"闭关修炼",goldNum:10,time:"2月11 15：46：32"},{avatar:e("0ba3"),nickname:"闭关修炼",goldNum:10,time:"2月11 15：46：32"},{avatar:e("0ba3"),nickname:"闭关修炼",goldNum:10,time:"2月11 15：46：32"},{avatar:e("0ba3"),nickname:"闭关修炼",goldNum:10,time:"2月11 15：46：32"}]}},methods:{openPopup:function(t){this.$refs.history.open({type:t})}}},U=J,G=(e("df39"),Object(y["a"])(U,R,W,!1,null,"05bacacb",null)),X=G.exports,q={name:"PlanIndex",components:{"c-menu":n["a"],"c-tab":l["a"]},data:function(){return{tabActiveIndex:1,tabs:[{label:"幸运锦鲤"},{label:"参与计划"},{label:"详情记录"}]}},computed:{currentComponent:function(){return 0===this.tabActiveIndex?z:1===this.tabActiveIndex?x:2===this.tabActiveIndex?X:x}},methods:{}},H=q,K=(e("adb6"),Object(y["a"])(H,i,s,!1,null,"454f0b9e",null));a["default"]=K.exports},a630:function(t,a,e){var i=e("23e7"),s=e("4df4"),n=e("1c7e"),l=!n((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:l},{from:s})},adb6:function(t,a,e){"use strict";var i=e("ec21"),s=e.n(i);s.a},b0c0:function(t,a,e){var i=e("83ab"),s=e("9bf2").f,n=Function.prototype,l=n.toString,c=/^\s*function ([^ (]*)/,o="name";i&&!(o in n)&&s(n,o,{configurable:!0,get:function(){try{return l.call(this).match(c)[1]}catch(t){return""}}})},c6cd5:function(t,a,e){},c8cf:function(t,a,e){},c9b9:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("div",{staticClass:"menu-list"},t._l(t.menuList,(function(a,i){var s;return e("div",{key:i,staticClass:"menu-item",class:(s={active:i===t.active},s["item-"+i]=i.toString(),s),on:{click:function(e){return t.handleClick(a)}}},[e("span",{staticClass:"label"},[t._v(t._s(a.label))])])})),0)])},s=[],n=(e("b0c0"),e("a9e3"),{props:{active:{type:Number,default:1}},data:function(){return{menuList:[{label:"服务大厅",name:"Service"},{label:"圆梦计划",name:"Plan"},{label:"个人中心",name:"Personal"}]}},methods:{handleClick:function(t){this.$router.push({name:t.name})}}}),l=n,c=(e("8150"),e("2877")),o=Object(c["a"])(l,i,s,!1,null,"6748f9c2",null);a["a"]=o.exports},cc93:function(t,a,e){"use strict";var i=e("cc94"),s=e.n(i);s.a},cc94:function(t,a,e){},cf55:function(t,a,e){"use strict";var i=e("12fe"),s=e.n(i);s.a},d28b:function(t,a,e){var i=e("746f");i("iterator")},d2f9:function(t,a,e){},db20:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("van-popup",{attrs:{position:"right","safe-area-inset-bottom":!0,"close-on-click-overlay":!1,duration:t.duration},model:{value:t.visible,callback:function(a){t.visible=a},expression:"visible"}},[e("c-popup-layout",{attrs:{title:t.title,tabs:t.tabs},on:{back:t.back,change:t.tabChange}},["join"===t.type?e("c-Join-history"):"koiFish"===t.type?e("c-koifish-history"):"recharge"===t.type?e("c-recharge-history"):"withdraw"===t.type?e("C-Withdraw-history"):t._e()],1)],1)},s=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"c-join-history"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.data,(function(a,i){return e("div",{key:i,staticClass:"history-item"},[e("div",{staticClass:"title"},[e("span",{staticStyle:{color:"#5AB963"}},[t._v("l")]),t._v(t._s(a.name)+t._s(a.state))]),e("div",{staticClass:"ceil"},[t._v("参与人数："+t._s(a.peopleTotal)+"；")]),e("div",{staticClass:"ceil"},[t._v("金币总数："+t._s(a.goldTotal)+"；")]),e("div",{staticClass:"ceil luck-number-list"},[e("span",[t._v("我的幸运号码：")]),t._l(a.myNumbers,(function(a,i){return e("span",{key:i},[t._v(t._s(a)+";")])}))],2),e("div",{staticClass:"ceil"},[t._v("幸运号码："+t._s(a.luckNunber||"等待揭晓....."))]),e("div",{staticClass:"ceil"},[t._v("幸运锦鲤："+t._s(a.koiFishNumber)+"；")])])})),0)],1)},l=[],c=(e("99af"),{data:function(){return{finished:!1,loading:!1,data:[{name:"20200628",state:"进行中",peopleTotal:132132,goldTotal:4515132,myNumbers:["10000086","10000086","10000086","10000086","10000086","10000086","10000086","10000086","10000086","10000086"],luckNunber:"",koiFishNumber:"li455136"},{name:"20200628",state:"已结束",peopleTotal:132132,goldTotal:4515132,myNumbers:["10000086","10000086","10000086","10000086","10000086"],luckNunber:"100000899",koiFishNumber:"li455136"},{name:"20200628",state:"已结束",peopleTotal:132132,goldTotal:4515132,myNumbers:["10000086","10000086","10000086","10000086","10000086"],luckNunber:"100000822",koiFishNumber:"li455136"}]}},methods:{getData:function(){var t=[].concat(this.data);this.data=this.data.concat(t),this.done()},onLoad:function(){this.loading=!0,this.getData()},done:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.finished=t,this.loading=!1}}}),o=c,r=(e("60b6"),e("2877")),u=Object(r["a"])(o,n,l,!1,null,"1e40c62b",null),v=u.exports,d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"c-join-history"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.data,(function(a,i){return e("div",{key:i,staticClass:"history-item"},[e("div",{staticClass:"title"},[e("span",{staticStyle:{color:"#5AB963"}},[t._v("l")]),t._v(t._s(a.name)+t._s(a.state))]),e("div",{staticClass:"ceil"},[t._v("幸运号码："+t._s(a.luckNunber||"等待揭晓....."))]),e("div",{staticClass:"ceil"},[t._v("幸运锦鲤："+t._s(a.koiFishNumber||"暂未知.....")+"；")]),e("div",{staticClass:"ceil"},[t._v("获得金币："+t._s(a.goldNumber||"暂未知.....")+"；")])])})),0)],1)},m=[],p={data:function(){return{finished:!1,loading:!1,data:[{name:"20200628",state:"进行中",luckNunber:"",koiFishNumber:"li455136",goldNumber:"12452"},{name:"20200628",state:"进行中",luckNunber:"",koiFishNumber:"li455136",goldNumber:"12452"},{name:"20200628",state:"进行中",luckNunber:"",koiFishNumber:"li455136",goldNumber:"12452"}]}},methods:{getData:function(){var t=[].concat(this.data);this.data=this.data.concat(t),this.done()},onLoad:function(){this.loading=!0,this.getData()},done:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.finished=t,this.loading=!1}}},f=p,_=(e("cf55"),Object(r["a"])(f,d,m,!1,null,"432e17c2",null)),h=_.exports,b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"c-join-history"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.data,(function(a,i){return e("div",{key:i,staticClass:"history-item"},[e("div",{staticClass:"ceil"},[e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),t._v("充值金额："+t._s(a.money)+"元")]),e("div",{staticClass:"ceil"},[e("span",{staticStyle:{color:"#5AB963"}},[t._v("l")]),t._v("充值状态："+t._s(t.getState(a.operateStatus))+" ")]),e("div",{staticClass:"ceil"},[e("span",{staticStyle:{color:"#169BD5"}},[t._v("l")]),t._v("充值时间："+t._s(a.createTime))])])})),0)],1)},y=[],g=e("5530"),C={data:function(){return{finished:!1,loading:!1,data:[],params:{start:0,size:10,type:2}}},created:function(){this.getData()},methods:{getData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.params;this.loading=!0,this.$fetch.get("/appMoneyRecord/findAllAppMoneyRecord",Object(g["a"])(Object(g["a"])({},a),{},{token:this.token})).then((function(a){var e=a.data;t.data=e,t.done(e.length<t.params.size)})).catch((function(a){var e=a.msg;t.$notify({type:"warning",message:e}),t.done(!0)}))},onLoad:function(){this.getData({start:this.params.start+1})},getState:function(t){var a={0:"充值中",1:"充值成功",2:"充值失败"};return a[t]},done:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.finished=t,this.loading=!1}}},k=C,S=(e("4567"),Object(r["a"])(k,b,y,!1,null,"7867a89e",null)),E=S.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"c-join-history"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.data,(function(a,i){return e("div",{key:i,staticClass:"history-item"},[e("div",{staticClass:"ceil"},[e("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),t._v("提现金额："+t._s(a.money)+"元")]),e("div",{staticClass:"ceil"},[e("span",{staticStyle:{color:"#5AB963"}},[t._v("l")]),t._v("提现状态："+t._s(t.getState(a.operateStatus))+" ")]),e("div",{staticClass:"ceil"},[e("span",{staticStyle:{color:"#169BD5"}},[t._v("l")]),t._v("提现时间："+t._s(a.createTime))])])})),0)],1)},w=[],N={data:function(){return{finished:!1,loading:!1,data:[],params:{start:0,size:10,type:1}}},created:function(){this.getData()},methods:{getData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.params;this.loading=!0,this.$fetch.get("/appMoneyRecord/findAllAppMoneyRecord",Object(g["a"])(Object(g["a"])({},a),{},{token:this.token})).then((function(a){var e=a.data;t.data=e,t.done(e.length<t.params.size)})).catch((function(a){var e=a.msg;t.$notify({type:"warning",message:e}),t.done(!0)}))},onLoad:function(){this.getData({start:this.params.start+1})},getState:function(t){var a={0:"提现中",1:"提现成功",2:"提现失败"};return a[t]},done:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.finished=t,this.loading=!1}}},A=N,$=(e("0339"),Object(r["a"])(A,x,w,!1,null,"58c689b3",null)),j=$.exports,T=e("425c"),B={components:{"c-Join-history":v,"c-koifish-history":h,"c-recharge-history":E,"C-Withdraw-history":j,"c-popup-layout":T["a"]},data:function(){return{visible:!1,type:"",tabs:[],duration:"0.3",backCb:null,fiedTitle:""}},computed:{title:function(){var t={join:"历史参与记录",koiFish:"历史幸运锦鲤",recharge:"充值记录",withdraw:"提现记录"};return this.fiedTitle||t[this.type]}},methods:{open:function(t){this.type=t.type,this.tabs=t.tabs||[],this.duration=t.duration||"0.3",this.backCb=t.back||null,this.fiedTitle=t.title||"",this.visible=!0},close:function(){this.visible=!1},back:function(){"function"===typeof this.backCb?this.backCb(this.close):this.close()},tabChange:function(t){console.log(t),this.type=t}}},F=B,O=(e("576c"),Object(r["a"])(F,i,s,!1,null,null,null));a["a"]=O.exports},ddb0:function(t,a,e){var i=e("da84"),s=e("fdbc"),n=e("e260"),l=e("9112"),c=e("b622"),o=c("iterator"),r=c("toStringTag"),u=n.values;for(var v in s){var d=i[v],m=d&&d.prototype;if(m){if(m[o]!==u)try{l(m,o,u)}catch(f){m[o]=u}if(m[r]||l(m,r,v),s[v])for(var p in n)if(m[p]!==n[p])try{l(m,p,n[p])}catch(f){m[p]=n[p]}}}},df39:function(t,a,e){"use strict";var i=e("98a0"),s=e.n(i);s.a},e01a:function(t,a,e){"use strict";var i=e("23e7"),s=e("83ab"),n=e("da84"),l=e("5135"),c=e("861d"),o=e("9bf2").f,r=e("e893"),u=n.Symbol;if(s&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var v={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),a=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(v[a]=!0),a};r(d,u);var m=d.prototype=u.prototype;m.constructor=d;var p=m.toString,f="Symbol(test)"==String(u("test")),_=/^Symbol\((.*)\)[^)]+$/;o(m,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,a=p.call(t);if(l(v,t))return"";var e=f?a.slice(7,-1):a.replace(_,"$1");return""===e?void 0:e}}),i({global:!0,forced:!0},{Symbol:d})}},e8dd:function(t,a,e){},ec21:function(t,a,e){},f3db:function(t,a,e){},fb6a:function(t,a,e){"use strict";var i=e("23e7"),s=e("861d"),n=e("e8b5"),l=e("23cb"),c=e("50c4"),o=e("fc6a"),r=e("8418"),u=e("b622"),v=e("1dde"),d=e("ae40"),m=v("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),f=u("species"),_=[].slice,h=Math.max;i({target:"Array",proto:!0,forced:!m||!p},{slice:function(t,a){var e,i,u,v=o(this),d=c(v.length),m=l(t,d),p=l(void 0===a?d:a,d);if(n(v)&&(e=v.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)?s(e)&&(e=e[f],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return _.call(v,m,p);for(i=new(void 0===e?Array:e)(h(p-m,0)),u=0;m<p;m++,u++)m in v&&r(i,u,v[m]);return i.length=u,i}})},fc97:function(t,a,e){"use strict";var i=e("e8dd"),s=e.n(i);s.a}}]);
//# sourceMappingURL=chunk-eb79bf3c.27ca6e2b.js.map