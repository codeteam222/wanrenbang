(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-681dbcd7"],{1057:function(t,e,a){},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1b06":function(t,e,a){},"1ff7":function(t,e,a){},3239:function(t,e,a){t.exports=a.p+"img/edit-article.2be9619d.png"},"59b5":function(t,e,a){"use strict";var i=a("8467"),s=a.n(i);s.a},"66b4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service-search"},[a("div",{staticClass:"content"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSearch,expression:"!isSearch"}],staticClass:"tabs-box"},[a("van-tabs",{on:{change:t.tabChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:"最新",name:"new"}}),a("van-tab",{attrs:{title:"最热",name:"hot"}}),a("van-tab",{attrs:{title:"关注",name:"follow"}})],1)],1)])])},s=[],n=(a("ac1f"),a("841c"),{components:{},data:function(){return{active:"new",isSearch:!1,searchValue:""}},methods:{handleSearchVisible:function(){this.$refs.search.open()},tabChange:function(t){this.$emit("change",{type:t})},searchChange:function(t){this.$emit("change",{type:name,search:t})}}}),c=n,o=(a("693e"),a("2877")),l=Object(o["a"])(c,i,s,!1,null,"462e2069",null);e["a"]=l.exports},"693e":function(t,e,a){"use strict";var i=a("d2a6"),s=a.n(i);s.a},"77d4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner-box"},[a("div",{staticClass:"banner",style:{"background-color":t.bgColor}},[a("img",{attrs:{src:t.src,alt:""}})]),t.showSearch?a("div",{staticClass:"search"},[a("el-input",{attrs:{placeholder:"搜索"},scopedSlots:t._u([{key:"suffix",fn:function(){return[a("i",{staticClass:"el-icon-search",on:{click:t.handleSearchVisible}})]},proxy:!0}],null,!1,3868226707),model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1):t._e()])},s=[],n={props:{text:{type:String},link:{type:String},bgColor:{type:String},showSearch:{type:Boolean,default:!0},src:{type:String}},data:function(){return{searchValue:""}},methods:{handleSearchVisible:function(){}}},c=n,o=(a("cbfc"),a("2877")),l=Object(o["a"])(c,i,s,!1,null,"28a78831",null);e["a"]=l.exports},"7b3b":function(t,e,a){"use strict";var i=a("1b06"),s=a.n(i);s.a},"7f15":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-tab"},[a("ul",{staticClass:"tab-list",class:["layout-"+t.layout]},t._l(t.tabs,(function(e,i){var s;return a("li",{key:i,staticClass:"tab-item",class:(s={},s["active active_"+i]=i===t.active,s["tab-"+i]=i>=0,s),style:["color:"+e.color],on:{click:function(e){return t.change(i)}}},[t._v(" "+t._s(e.label)+" ")])})),0),a("div",{staticClass:"tab-content"},[t._t("default")],2)])},s=[],n=(a("a9e3"),{props:{tabs:{type:Array,default:function(){return[]}},active:{type:Number,default:0},layout:{type:String,default:"center"}},methods:{change:function(t){this.$emit("update:active",t)}}}),c=n,o=(a("cc93"),a("2877")),l=Object(o["a"])(c,i,s,!1,null,"c0f9814e",null);e["a"]=l.exports},8150:function(t,e,a){"use strict";var i=a("f3db"),s=a.n(i);s.a},"841c":function(t,e,a){"use strict";var i=a("d784"),s=a("825a"),n=a("1d80"),c=a("129f"),o=a("14c3");i("search",1,(function(t,e,a){return[function(e){var a=n(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a):new RegExp(e)[t](String(a))},function(t){var i=a(e,t,this);if(i.done)return i.value;var n=s(t),l=String(this),r=n.lastIndex;c(r,0)||(n.lastIndex=0);var u=o(n,l);return c(n.lastIndex,r)||(n.lastIndex=r),null===u?-1:u.index}]}))},8467:function(t,e,a){},"8d1e":function(t,e,a){"use strict";var i=a("96ad"),s=a.n(i);s.a},"932a":function(t,e,a){"use strict";var i=a("c52c"),s=a.n(i);s.a},"94e8":function(t,e,a){t.exports=a.p+"img/bridge-card_title.49fad1bd.png"},"96ad":function(t,e,a){},a15b:function(t,e,a){"use strict";var i=a("23e7"),s=a("44ad"),n=a("fc6a"),c=a("a640"),o=[].join,l=s!=Object,r=c("join",",");i({target:"Array",proto:!0,forced:l||!r},{join:function(t){return o.call(n(this),void 0===t?",":t)}})},a19c:function(t,e,a){t.exports=a.p+"img/bridge-card_price.b39b5b5b.png"},ac6e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"servie-wrapper"},[i("c-menu",{attrs:{active:0}}),i("c-tab",{attrs:{tabs:t.tabs,active:t.tabActiveIndex},on:{"update:active":function(e){t.tabActiveIndex=e}}},[i(t.currentComponent,{tag:"component",attrs:{category:t.category,banner:t.banner}})],1),0===t.tabActiveIndex?i("div",{staticClass:"add-message"},[i("img",{attrs:{src:a("3239")}}),i("div",{on:{click:t.openMessage}},[t._v("发帖")])]):t._e(),i("b-message",{ref:"message"})],1)},s=[],n=a("c9b9"),c=a("7f15"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-popup",{attrs:{position:"right","safe-area-inset-bottom":!0,"close-on-click-overlay":!1,"get-container":"body"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("c-popup-layout",{attrs:{title:"分享资源"},on:{back:t.close}},[a("van-field",{staticClass:"textarea",attrs:{rows:"5",type:"textarea",placeholder:"和大家分享写什么呢",maxlength:"2000","show-word-limit":""},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),a("div",{staticClass:"upload"},[a("van-uploader",{attrs:{multiple:"","max-count":3,"after-read":t.afterRead},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),a("div",{staticClass:"rule rule-1"},[a("div",{staticClass:"stepper"},[t._v("以下内容需要："),a("van-field",{model:{value:t.form.coin,callback:function(e){t.$set(t.form,"coin",e)},expression:"form.coin"}}),t._v("张福利卡解锁")],1)]),a("van-field",{staticClass:"textarea",attrs:{rows:"5",type:"textarea",placeholder:"和大家分享写什么呢",maxlength:"2000","show-word-limit":""},model:{value:t.form.sec_content,callback:function(e){t.$set(t.form,"sec_content",e)},expression:"form.sec_content"}}),a("div",{staticClass:"upload"},[a("van-uploader",{attrs:{"max-count":3,"after-read":t.lockAfterRead},model:{value:t.lockFileList,callback:function(e){t.lockFileList=e},expression:"lockFileList"}})],1),a("div",{staticClass:"rule"},[a("div",{staticClass:"stepper",on:{click:t.openSelect}},[t._v(" 发布到："),a("span",{staticClass:"platform"},[a("label",{attrs:{for:""}},[t._v(t._s(t.target))]),a("van-icon",{attrs:{name:"arrow-down"}})],1)]),a("div",{staticClass:"desc",on:{click:t.openRule}},[a("van-icon",{attrs:{name:"info-o"}}),t._v("发帖规范")],1)]),a("div",{staticClass:"btn-box"},[a("van-button",{attrs:{type:"primary"},on:{click:t.relese}},[t._v("发布")])],1)],1),a("van-popup",{staticClass:"picker",attrs:{"get-container":"body",round:"",position:"bottom"},model:{value:t.selectVisible,callback:function(e){t.selectVisible=e},expression:"selectVisible"}},[a("van-picker",{attrs:{title:"发布到","show-toolbar":"","value-key":"cls_name",columns:t.selectData},on:{confirm:t.onConfirm,cancel:t.onCancel}})],1),a("Rule",{ref:"rule"})],1)},l=[],r=(a("4160"),a("a15b"),a("d81d"),a("a434"),a("159b"),a("5530")),u=a("425c"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-popup",{attrs:{position:"right","safe-area-inset-bottom":!0,"close-on-click-overlay":!1,"get-container":"body"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("c-popup-layout",{attrs:{title:"发帖规范"},on:{back:function(e){t.visible=!1}}},[a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("一、个人账号昵称及头像 个人简介")]),a("p",[t._v(" 账号信息中不能带有或近似党和国家领导人、国家机构及含有广告和宣传性质的内容，不要有攻击、侮辱、挑衅、猥亵或广告性质内容，还有请不要在使用带有官网小编字样或Q Q 号、微 信 号，一旦发现管理人员有权对您的账号进行昵称违规警告并开具处罚哟。 ")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("二、发布内容")]),a("p",[t._v(" 倡导文明、客观、理性、宽容、分享、互助、友好、关怀的发帖原则和圈子氛围。严禁发布国家法律法规不允许的内容及危害社区良好环境的内容： ")]),a("p",[t._v(" 1、严禁一切分裂祖国、危害人民和社会安定的信息，涉黄涉暴涉恐涉政等内容，一经发现立即删除并对该账号及设备进行永久封禁。必要时我们也内容如下： ")]),a("p",[t._v(" 2、如果发布含有违规内容的帖子，将会被删除并处罚，情节严重的还将上报给公安部门，请大家务必遵守他趣圈规，切勿发布违规内容！具体违规内容如下： ")]),a("p",[t._v("3、直接暴露和描写人体性部位的内容；")]),a("p",[t._v("4、表现或隐晦表现性行为、具有挑逗性或者侮辱性的内容；")]),a("p",[t._v("5、以带有性暗示、性挑逗的语言描述性行为、性过程、性方式的内容；")]),a("p",[t._v("6、全身或者隐私部位未着衣物，仅用肢体掩盖隐私部位的内容；")]),a("p",[t._v("7、带有侵犯个人隐私性质的走光、偷拍、露点等内容；")]),a("p",[t._v("8、以庸俗和挑逗性标题吸引点击的内容；")]),a("p",[t._v("9、相关部门禁止传播的色情和有伤社会风化的文字、音视频内容，包括一些电影的删节片段；")]),a("p",[t._v("10、传播一夜情、换 妻、性虐待等的有害信息；")]),a("p",[t._v("11、情色动漫；")]),a("p",[t._v("12、宣扬暴力、恶意谩骂、侮辱他人等的内容；")]),a("p",[t._v("13、非法性药品广告和性病治疗广告等相关内容；")]),a("p",[t._v("14、恶意传播侵害他人隐私的内容；")]),a("p",[t._v("15、严禁推荐淫秽色 情网站和网上低俗信息的链接、图片、文字等内容。")]),a("p",[t._v(" 16、严禁散布色情交易、不正当交友等信息；侵犯他人隐私的内容，包括走光、偷拍、露点，以及利用网络恶意传播他人隐私的信息等；违背正确婚恋观和家庭伦理道德的内容。 ")]),a("p",[t._v(" 17、严打各类小广告：包括但不限于淘宝兼 职、视频自拍、扣 扣群号、网址、网店微店、其他应用信息等。一经发现立即删除并对该账号及设备进行永久封禁。 ")]),a("p",[t._v(" 18、禁止在帖子内留联系方式：包括但不限于手机号、扣 扣、微 信、摩斯密码等，一经发现立即删除并视情况进行处罚。 ")]),a("p",[t._v(" 19、不欢迎布无意义无内容的数字、字母、符号等水贴，如：123456、adsfsdf、，，，，，，、。一经发现立即删除，严重者进行相对应处罚。 ")]),a("p",[t._v(" 20、利用平台漏洞，对平台进行DDoS攻击、扰乱或冲击平台的虚拟货币金融秩序、窃取平台内用户信息、利用平台进行违法犯罪活动。用户进行违规操作的，平台有权违规用户予以警示、限制使用或封禁账号。 ")]),a("p",[t._v("21、欢迎广大朋友们一起维护社区环境，积极举报不良信息。")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("三、用词规范")]),a("p",[t._v(" 请大家尽量使用文明深刻有内涵，通俗易懂显智慧的关于生理健康的字样，不要出现传统的很黄很暴力的话题，回复等描述。不要出现恶意刷楼现象。这样既尊重了看贴的高端女性用户，又彰显您的幽默风趣，还避免了违法或帖子被马赛克转化的面目全非哦～ ")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("四、知识产权")]),a("p",[t._v(" 鼓励原创，同时维护任何一个作者的知识产权，未经作者本人允许，不得转载。 在非商业目的的前提，如将其他渠道的内容转载，请在帖子标题注明【转载】，并在正文部分注明原作者姓名。如非法盗用他人著作，一经发现，立即删除，并对该帐号警告处理。 ")])])])],1)},d=[],v={components:{"c-popup-layout":u["a"]},data:function(){return{visible:!1}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}},f=v,b=(a("7b3b"),a("2877")),m=Object(b["a"])(f,p,d,!1,null,"378fb433",null),h=m.exports,_={components:{"c-popup-layout":u["a"],Rule:h},data:function(){return{visible:!1,form:{content:"",n_img:"",coin:0,c_id:"",sec_img:"",sec_content:""},target:"",fileList:[],lockFileList:[],selectData:[],selectVisible:!1}},computed:{token:function(){return this.$store.state.token}},created:function(){this.getCategory()},methods:{open:function(){this.visible=!0},close:function(){this.onCancel(),this.visible=!1,this.form={content:"",n_img:"",coin:"",c_id:"",sec_img:"",sec_content:""},this.target="",this.fileList=[],this.lockFileList=[]},afterRead:function(t,e){var a=t.file,i=e.index;this.uploadImg(this.fileList,a,i)},lockAfterRead:function(t,e){var a=t.file,i=e.index;this.uploadImg(this.lockFileList,a,i)},uploadImg:function(t,e,a){t.splice(a,1),this.$set(t,a,{});var i=new FormData;i.append("file",e),this.$fetch.post("/Home/Create/upload_ajax_img",i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var i=e.data;t.splice(a,1,{url:i.src,id:i.image_id})})).catch((function(){t.splice(a,1,{status:"failed",message:"上传失败"})}))},relese:function(){var t=this;this.$fetch.form("/Home/Create/pub_add/mcode/ape5ed661dabd73f",Object(r["a"])(Object(r["a"])({},this.form),{},{n_img:this.fileList.map((function(t){return t.id})).join(","),sec_img:this.lockFileList.map((function(t){return t.id})).join(",")})).then((function(){t.$notify({type:"success",message:"发布成功"}),t.onCancel()}))},onConfirm:function(t,e){this.form.c_id=this.selectData[e].c_id,this.target=this.selectData[e].cls_name,this.onCancel()},onCancel:function(){this.selectVisible=!1},openSelect:function(){this.selectVisible=!0},openRule:function(){this.$refs.rule.open()},getCategory:function(){var t=this;this.$fetch.get("/Home/List/index/mcode/ape5ed70984a5af9").then((function(e){var a=e.data;t.selectData=a.table_data,t.selectData.forEach((function(e){"个人分享"===e.cls_name&&(t.target=e.cls_name,t.form.c_id=e.c_id)}))}))}}},y=_,g=(a("8d1e"),Object(b["a"])(y,o,l,!1,null,null,null)),C=g.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service-resource"},[a("b-banner",{attrs:{text:"全心全意为用户服务",src:t.banner}}),a("b-menu",{attrs:{data:t.category}}),a("b-search",{on:{change:t.handleSearch}}),a("c-feed",{ref:"feed",attrs:{data:t.commentList},on:{load:t.load},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data;return["0"===i.v_type&&2!==i.is_conc?a("div",{class:["state","state-"+i.is_conc],on:{click:function(e){return t.handlerAction(i)}}},[t._v(" "+t._s(t.stateMap[i.is_conc])+" ")]):t._e(),"1"===i.v_type?a("div",{staticClass:"state state-2"},[t._v("广告")]):t._e()]}},{key:"detailAction",fn:function(e){var i=e.data;return["0"===i.v_type&&2!==i.is_conc?a("div",{class:["state","state-"+i.is_conc],on:{click:function(e){return t.handlerAction(i)}}},[t._v(" "+t._s(t.stateMap[i.is_conc])+" ")]):t._e(),"1"===i.v_type?a("div",{staticClass:"state state-2"},[t._v("广告")]):t._e()]}}])})],1)},k=[],$=(a("99af"),a("2c4b")),S=a("77d4"),P=a("66b4"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-menu"},[a("div",{staticClass:"menu-list"},t._l(t.data,(function(e,i){return a("div",{key:i,staticClass:"menu-item",on:{click:function(a){return t.toPage(e)}}},[a("div",{staticClass:"img"},[a("img",{attrs:{src:e.cls_img_src,alt:"",srcset:""}})]),a("div",{staticClass:"label"},[t._v(t._s(e.cls_name))])])})),0)])},j=[],A={props:{data:{type:Array,default:function(){return[]}}},methods:{toPage:function(t){this.$router.push({name:"OtherPage",query:{type:t.c_id}})}}},L=A,O=(a("59b5"),Object(b["a"])(L,w,j,!1,null,"c780a228",null)),D=O.exports,V={components:{"c-feed":$["a"],"b-banner":S["a"],"b-search":P["a"],"b-menu":D},props:{banner:{type:String,default:""},category:{type:Array,default:function(){return[]}}},data:function(){return{commentList:[],stateMap:{0:"关注",1:"已关注"},params:{p:0}}},methods:{handlerAction:function(t){var e=this;this.$fetch.form("/Home/Create/pub_add/mcode/ape5f86f3bdec677",{mid:t.uid,log_type:2}).then((function(a){var i=a.code;e.$set(t,"is_conc",-2===i?0:1)}))},load:function(t){var e=this,a=this.params.p,i=0===a?1:a+1;1===i&&(this.commentList=[]),this.$fetch.get("/Home/Api/article",Object(r["a"])(Object(r["a"])({},this.params),{},{p:i})).then((function(a){var s=a.data,n=s.article_data,c=s.totalpages;e.commentList=e.commentList.concat(n),t(c===i),e.params.p=i})).catch((function(){t(!0)}))},handleSearch:function(t){"hot"===t.type?this.params={p:0,order_field:"like_num",order_type:1}:"follow"===t.type?this.params={p:0,is_conc:1}:"new"===t.type&&(this.params={p:0,order_field:"add_time",order_type:1}),this.commentList=[],this.$refs.feed.reset()}}},E=V,F=(a("efb6"),Object(b["a"])(E,x,k,!1,null,"59ef9cac",null)),I=F.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"service-welfare"},[i("div",{staticClass:"card"},[t._m(0),i("img",{staticClass:"price",attrs:{src:a("a19c")}}),i("div",{staticClass:"title"},[t._m(1),i("img",{attrs:{src:a("94e8")}}),i("div",{staticClass:"prompt"},[t._v("<凭本卡片可兑换各种福利>")]),i("div",{staticClass:"buy",on:{click:function(e){return t.handleBuyPopup(!0,2)}}},[t._v("购买")])])]),i("div",{staticClass:"preferential-card"},[t._m(2),i("div",{staticClass:"right preferential-card-buy",on:{click:function(e){return t.handleBuyPopup(!0,.3)}}},[t._v(" 先买后付 ")])]),i("div",{staticClass:"card-list"},[t._m(3),i("div",{staticClass:"card-item"},[i("div",{staticClass:"title"},[t._v("待支付订单")]),i("div",{staticClass:"message"},[t._v(" 无&您有一笔待支付账单，"),i("span",{staticStyle:{"text-decoration":"underline",color:"#6D75F1"},on:{click:t.handleyPay}},[t._v("去支付")])])])]),i("van-popup",{staticClass:"popup-box",attrs:{position:"bottom","safe-area-inset-bottom":!0,"close-on-click-overlay":!1,round:""},model:{value:t.buyPopupVisible,callback:function(e){t.buyPopupVisible=e},expression:"buyPopupVisible"}},[i("div",{staticClass:"my-gold"},[t._v("我的余额：4321231")]),i("div",{staticClass:"title"},[i("span",{staticStyle:{color:"#E91E63"}},[t._v("l")]),i("span",[t._v("福利卡")]),i("span",{staticStyle:{color:"#169BD5"}},[t._v("l")])]),i("div",{staticClass:"stepper"},[t._v("买"),i("van-stepper",{model:{value:t.buyNumber,callback:function(e){t.buyNumber=e},expression:"buyNumber"}}),t._v("张")],1),i("div",{staticClass:"prompt"},[t._v("< "+t._s(t.buyNumber)+"张需要"+t._s(t.totalPrice)+"元 >")]),i("div",{staticClass:"actions"},[i("van-button",{staticClass:"abo-bnt",attrs:{type:"default",size:"small"},on:{click:function(e){return t.handleBuyPopup(!1)}}},[t._v("取消")]),i("van-button",{staticClass:"commit-bnt",attrs:{type:"info",size:"small",loading:t.loading},on:{click:t.buy}},[t._v("确认购买")])],1)]),i("van-popup",{staticClass:"popup-box",attrs:{position:"bottom","safe-area-inset-bottom":!0,"close-on-click-overlay":!1,round:""},model:{value:t.payPopupVisible,callback:function(e){t.payPopupVisible=e},expression:"payPopupVisible"}},[i("div",{staticClass:"my-gold"},[t._v("我的余额：4321231")]),i("div",{staticClass:"title"},[i("span",{staticStyle:{color:"#F56D91"}},[t._v("<")]),i("span",[t._v(" 支付3541元 ")]),i("span",{staticStyle:{color:"#FFD000"}},[t._v(">")])]),i("div",{staticClass:"prompt"},[t._v("该笔账单是您参与优惠活动购买3120张福利卡的费用")]),i("div",{staticClass:"actions"},[i("van-button",{staticClass:"abo-bnt",attrs:{type:"default",size:"small"},on:{click:function(e){return t.handleyPay(!1)}}},[t._v("取消")]),i("van-button",{staticClass:"commit-bnt",attrs:{type:"info",size:"small",loading:t.loading},on:{click:t.buy}},[t._v("确认支付")])],1)])],1)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sline-box"},[a("span",{staticStyle:{color:"#004427",padding:"0 1px"}},[t._v("l")]),a("span",{staticStyle:{color:"#6D75F1",padding:"0 1px"}},[t._v("l")]),a("span",{staticStyle:{color:"#FC8CA8",padding:"0 1px"}},[t._v("l")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"txt"},[a("span",{staticStyle:{color:"#F56D91"}},[t._v("fú")]),a("span",{staticStyle:{color:"#6D75F1"}},[t._v("lì")]),a("span",{staticStyle:{color:"#339933"}},[t._v("kǎ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"left"},[i("p",[i("span",{staticStyle:{color:"#F56D91"}},[t._v("l")]),i("span",{staticStyle:{color:"#004427","font-weight":"900"}},[t._v("福利卡优惠活动")]),i("span",{staticStyle:{color:"#FFD000"}},[t._v("l")])]),i("p",{staticClass:"desc"},[t._v(" <本活动福利卡仅售0.3元一张，可以先购买，然后在圆梦计划→幸运锦鲤页面售完以后再付钱，活动仅限于圆梦计划幸运锦鲤用户参与 > ")]),i("p",{staticClass:"price",staticStyle:{padding:"0",margin:"0"}},[i("img",{attrs:{src:a("c03c")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-item"},[a("div",{staticClass:"title"},[t._v("我的卡片")]),a("div",{staticClass:"message"},[t._v("福利卡"),a("span",{staticStyle:{color:"#336633"}},[t._v("×3000")])])])}],R=a("ca00"),B={data:function(){return{commentList:[{avatar:a("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[a("0ba3"),a("0ba3"),a("0ba3")],state:0,sex:0},{avatar:a("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[a("0ba3"),a("0ba3"),a("0ba3")],state:0,sex:1},{avatar:a("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[a("0ba3"),a("0ba3"),a("0ba3")],state:0,sex:0}],stateMap:{0:"话圈"},buyPopupVisible:!1,buyNumber:1,unitPrice:0,payPopupVisible:!1}},computed:{totalPrice:function(){return Object(R["a"])(this.buyNumber,this.unitPrice)},loading:function(){return this.$store.state.loading}},methods:{openBuyPopup:function(){},handleBuyPopup:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.loading||(this.unitPrice=e,this.buyPopupVisible=t,t||(this.buyNumber=1))},buy:function(){var t=this;this.loading||(this.$store.commit("UPDATE_LOADING",!0),setTimeout((function(){t.$store.commit("UPDATE_LOADING",!1),t.handleBuyPopup(!1)}),500))},handleyPay:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loading||(this.payPopupVisible=t)},pay:function(){var t=this;this.loading||(this.$store.commit("UPDATE_LOADING",!0),setTimeout((function(){t.$store.commit("UPDATE_LOADING",!1),t.handleyPay(!1)}),500))}}},H=B,M=(a("932a"),Object(b["a"])(H,N,T,!1,null,"bdbe7e3a",null)),z=M.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service-about"},[a("b-banner",{attrs:{text:"一切为了用户，一切依靠用户","show-search":!1}}),a("div",{staticClass:"about-item plan-detail",on:{click:function(e){return t.handleOpenPopup("explain")}}},[a("van-divider",[t._v("聚合联创计划说明")])],1),a("div",{staticClass:"about-item project-money",on:{click:function(e){return t.handleOpenPopup("money")}}},[a("div",{staticClass:"title"},[t._v("<项目启动资金>")]),a("div",{staticClass:"money"},[t._v("￥132.132.00")])]),a("div",{staticClass:"about-item project-center",on:{click:function(e){return t.handleOpenPopup("project")}}},[t._v("项目中心")]),a("b-about-popup",{ref:"aboutPopup"})],1)},U=[],J=a("3ee4"),Q={components:{"b-banner":S["a"],"b-about-popup":J["a"]},data:function(){return{projectTabs:[{title:"所有项目",name:"all"},{title:"我入股的项目",name:"my"},{title:"股权交易中心",name:"center"}]}},methods:{handleOpenPopup:function(t){this.$refs.aboutPopup.open({type:t,position:"money"===t?"":"right",tabs:"project"===t?this.projectTabs:[]})}}},q=Q,K=(a("fc2a"),Object(b["a"])(q,G,U,!1,null,"d1ede2e4",null)),W=K.exports,X={name:"ServiceIndex",components:{"c-menu":n["a"],"c-tab":c["a"],"b-message":C},data:function(){return{tabActiveIndex:0,tabs:[{label:"每日福利"},{label:"卡券商城"},{label:"聚合联创"}],category:[],banner:""}},created:function(){this.getCategory()},computed:{currentComponent:function(){return 0===this.tabActiveIndex?I:1===this.tabActiveIndex?z:2==this.tabActiveIndex?W:I}},methods:{getCategory:function(){var t=this;this.$fetch.form("/Home/Api/index").then((function(e){var a=e.data;t.category=a.article_cls,t.banner=a.banner_data[0].shulf_src}))},openMessage:function(){this.$refs.message.open()}}},Y=X,Z=(a("fa3a"),Object(b["a"])(Y,i,s,!1,null,"a98428e8",null));e["default"]=Z.exports},b3b0:function(t,e,a){},c03c:function(t,e,a){t.exports=a.p+"img/bridge-card_price2.d38a49f4.png"},c52c:function(t,e,a){},c9b9:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"menu-list"},t._l(t.menuList,(function(e,i){var s;return a("div",{key:i,staticClass:"menu-item",class:(s={active:i===t.active},s["item-"+i]=i.toString(),s),on:{click:function(a){return t.handleClick(e)}}},[a("span",{staticClass:"label"},[t._v(t._s(e.label))])])})),0)])},s=[],n=(a("b0c0"),a("a9e3"),{props:{active:{type:Number,default:1}},data:function(){return{menuList:[{label:"服务大厅",name:"Service"},{label:"圆梦计划",name:"Plan"},{label:"个人中心",name:"Personal"}]}},methods:{handleClick:function(t){this.$router.push({name:t.name})}}}),c=n,o=(a("8150"),a("2877")),l=Object(o["a"])(c,i,s,!1,null,"6748f9c2",null);e["a"]=l.exports},cbfc:function(t,e,a){"use strict";var i=a("f4ca"),s=a.n(i);s.a},cc93:function(t,e,a){"use strict";var i=a("cc94"),s=a.n(i);s.a},cc94:function(t,e,a){},d2a6:function(t,e,a){},d81d:function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").map,n=a("1dde"),c=a("ae40"),o=n("map"),l=c("map");i({target:"Array",proto:!0,forced:!o||!l},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},efb6:function(t,e,a){"use strict";var i=a("b3b0"),s=a.n(i);s.a},f3db:function(t,e,a){},f4ca:function(t,e,a){},fa3a:function(t,e,a){"use strict";var i=a("1ff7"),s=a.n(i);s.a},fc2a:function(t,e,a){"use strict";var i=a("1057"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-681dbcd7.c9d849af.js.map