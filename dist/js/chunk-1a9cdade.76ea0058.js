(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a9cdade"],{"128d":function(e,t,r){e.exports=r.p+"img/login_logo.7185fac6.png"},"6c0f":function(e,t,r){},"96fe":function(e,t,r){"use strict";var a=r("a1a4"),o=r.n(a);o.a},"99af":function(e,t,r){"use strict";var a=r("23e7"),o=r("d039"),s=r("e8b5"),i=r("861d"),n=r("7b0b"),l=r("50c4"),c=r("8418"),p=r("65f0"),u=r("1dde"),d=r("b622"),f=r("2d00"),m=d("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",v=f>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),y=u("concat"),_=function(e){if(!i(e))return!1;var t=e[m];return void 0!==t?!!t:s(e)},b=!v||!y;a({target:"Array",proto:!0,forced:b},{concat:function(e){var t,r,a,o,s,i=n(this),u=p(i,0),d=0;for(t=-1,a=arguments.length;t<a;t++)if(s=-1===t?i:arguments[t],_(s)){if(o=l(s.length),d+o>h)throw TypeError(g);for(r=0;r<o;r++,d++)r in s&&c(u,d,s[r])}else{if(d>=h)throw TypeError(g);c(u,d++,s)}return u.length=d,u}})},a1a4:function(e,t,r){},a55b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-wrapper"},[e._m(0),r("div",{staticClass:"body"},[r("c-form",{directives:[{name:"show",rawName:"v-show",value:"login"===e.type,expression:"type === 'login'"}],ref:"loginForm",attrs:{data:e.loginData,form:e.loginColumn,rules:e.loginRules,"label-width":"0px"},scopedSlots:e._u([{key:"after",fn:function(){return[r("div",{staticClass:"actions"},[r("span",{staticClass:"action-item",on:{click:function(t){return e.switchType("register")}}},[e._v("用户注册")]),r("span",{staticClass:"action-item"},[e._v("忘记密码")])]),r("div",[r("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("登录即同意用户协议")])],1)]},proxy:!0}])}),r("c-form",{directives:[{name:"show",rawName:"v-show",value:"register"===e.type,expression:"type === 'register'"}],ref:"registerForm",attrs:{data:e.registerData,form:e.registerColumn,rules:e.registerRules,"label-width":"0px"},scopedSlots:e._u([{key:"after",fn:function(){return[r("div",{staticClass:"actions"},[r("span",{staticClass:"action-item",on:{click:function(t){return e.switchType("login")}}},[e._v("去登录")])])]},proxy:!0}])})],1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("img",{staticClass:"logo",attrs:{src:r("128d")}})])}],s=r("a9a5");function i(e){var t=/^1\d{10}$/;return!!t.test(e)}var n={components:{"c-form":s["a"]},data:function(){return{type:"login",loginData:{username:"",password:""},loginColumn:[{type:"input",prop:"phone",placeholder:"手机号"},{type:"password",prop:"password",placeholder:"密码"},{type:"slot",prop:"after"},{type:"action",data:[{text:"登录",handler:this.submit}]}],loginRules:{phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:this.validatePhone,message:"手机号格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]},registerData:{username:"",phone:"",password:"",com_password:""},registerColumn:[{type:"input",prop:"username",placeholder:"昵称"},{type:"input",prop:"phone",placeholder:"手机号"},{type:"password",prop:"password",placeholder:"登录密码"},{type:"password",prop:"com_password",placeholder:"确认密码"},{type:"slot",prop:"after"},{type:"action",data:[{text:"注册",handler:this.submit}]}],registerRules:{username:[{required:!0,message:"昵称不能为空",trigger:"blur"}],phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:this.validatePhone,message:"手机号格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],com_password:[{validator:this.validatePwd,message:"两次密码不一致",trigger:"blur"}]},checked:!1}},computed:{loading:function(){return this.$store.state.loading}},methods:{switchType:function(e){var t=this;this.type=e,this.$nextTick((function(){t.$refs.registerForm.resetFields(),t.$refs.loginForm.resetFields()}))},submit:function(e,t){if(!this.loading&&(this.$store.commit("UPDATE_LOADING",!1),e))switch(this.type){case"login":this.toLogin(t);break;case"register":this.toRegister(t);break}},toLogin:function(e){var t=this;this.$fetch.form("/home/login/login",e).then((function(e){var r=e.data;t.$notify({type:"success",message:"登录成功"}),t.$store.dispatch("SaveInfo",{token:r.apiAuth}),t.$store.commit("UPDATE_LOADING",!1),t.$router.push({name:"Plan"})})).catch((function(e){var r=e.msg;t.$notify({type:"warning",message:r}),t.$store.commit("UPDATE_LOADING",!1)}))},toRegister:function(e){var t=this;this.$fetch.form("/home/login/reg",e).then((function(){t.$notify({type:"success",message:"注册成功"}),t.switchType("login"),t.$store.commit("UPDATE_LOADING",!1)})).catch((function(e){var r=e.msg;t.$notify({type:"warning",message:r}),t.$store.commit("UPDATE_LOADING",!1)}))},validatePhone:function(e,t,r){i(t)?r():r(new Error)},validatePwd:function(e,t,r){t!==this.registerData.password?r(new Error):r()}}},l=n,c=(r("c7b2"),r("2877")),p=Object(c["a"])(l,a,o,!1,null,"42ce6f36",null);t["default"]=p.exports},a9a5:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",class:e.classs,attrs:{model:e.data,rules:e.rules,"label-width":e.labelWidth}},e._l(e.form,(function(t,a){return r("el-form-item",{key:a,class:["form-item__"+t.prop,"form-item__"+t.type],attrs:{label:t.label,prop:t.prop}},["text"===t.type?[Array.isArray(t.value)?e._l(t.value,(function(t,a){return r("label",{key:a},[e._v(" "+e._s(t)+" ")])})):[e._v(" "+e._s(t.prop?e.data[t.prop]:t.value)+" ")]]:e._e(),"input"===t.type||"password"===t.type?[r("el-input",{attrs:{type:"input"===t.type?"text":t.type,placeholder:t.placeholder,autocomplete:"new-password"},scopedSlots:e._u([t.unit?{key:"suffix",fn:function(){return[e._v(" "+e._s(t.unit)+" ")]},proxy:!0}:null],null,!0),model:{value:e.data[t.prop],callback:function(r){e.$set(e.data,t.prop,r)},expression:"data[formItem.prop]"}})]:e._e(),"radio"===t.type?e._l(t.data,(function(a,o){return r("el-radio",{key:o,attrs:{label:a.label},model:{value:e.data[t.prop],callback:function(r){e.$set(e.data,t.prop,r)},expression:"data[formItem.prop]"}},[e._v(" "+e._s(a.text?a.text:a.label)+" ")])})):e._e(),"date"===t.type?[r("el-date-picker",{attrs:{type:"date",placeholder:t.placeholder,format:t.valueFormat,"value-format":t.valueFormat||"yyyy-MM-dd"},model:{value:e.data[t.prop],callback:function(r){e.$set(e.data,t.prop,r)},expression:"data[formItem.prop]"}})]:e._e(),"select"===t.type?[r("el-select",{attrs:{placeholder:t.placeholder},model:{value:e.data[t.prop],callback:function(r){e.$set(e.data,t.prop,r)},expression:"data[formItem.prop]"}},e._l(t.data,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)]:e._e(),"avatar"===t.type?[r("van-uploader",{ref:"avatar",refInFor:!0,attrs:{"max-count":1,"preview-full-image":!1},on:{delete:e.deleteImg},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}},[r("div",{staticClass:"avatar-mask"},[e._v("点击更换头像")])])]:e._e(),"action"===t.type?[r("div",{staticClass:"btn-group",style:{"text-align":t.position||"center"}},e._l(t.data,(function(t,a){return r("el-button",{key:a,class:t.class,attrs:{type:t.type,icon:t.icon},on:{click:function(r){return e.handelOperation(t)}}},[e._v(" "+e._s(t.text)+" ")])})),1)]:e._e(),"slot"===t.type?["after"===t.prop?[e._t("after")]:e._e()]:e._e()],2)})),1)},o=[],s=(r("99af"),r("4160"),r("159b"),{name:"CForm",props:{data:{required:!0,type:Object,default:function(){return{}}},form:{required:!0,type:Array,default:function(){return[]}},rules:{type:Object,default:function(){return{}}},labelWidth:{type:String,default:"80px"},classs:{type:String}},data:function(){return{avatar:"",countryCodeList:[],fileList:[]}},watch:{form:function(){this.reset()}},methods:{reset:function(){var e=this;this.$nextTick((function(){if(e.$refs.gt){var t=[].concat(e.$refs.gt);t.forEach((function(e){e.init()}))}}))},handelOperation:function(e){this.validator(e)},validator:function(e){var t=this;"undefined"===typeof e.validator||e.validator?this.$refs.form.validate((function(r){if(r){var a=JSON.parse(JSON.stringify(t.data));"function"===typeof e.handler&&e.handler(r,a)}})):"function"===typeof e.handler&&e.handler()},validatateGeetest:function(e){var t=this,r=this.findItem("type","smscode"),a=r.item;4!==a.state?this.$refs.gt.updateCheckState(!0):a.propPhone?a.phone?e(!0):this.$message("手机号不能为空"):this.$refs.resetPwdForm.validateField([a.propPhone],(function(r){r?t.$message(t.message):e(!0)}))},geetestValidate:function(e){console.log(e)},resetFields:function(){var e=this.$refs.form;e.clearValidate(),e.resetFields()},deleteImg:function(){console.log(this.$refs.avatar),this.$refs.avatar[0].chooseFile()},findItem:function(e,t){for(var r=0;r<this.form.length;r++){var a=this.form[r];if(a[e]===t)return{index:r,item:a}}}}}),i=s,n=(r("96fe"),r("2877")),l=Object(n["a"])(i,a,o,!1,null,"5e1610f4",null);t["a"]=l.exports},c7b2:function(e,t,r){"use strict";var a=r("6c0f"),o=r.n(a);o.a}}]);
//# sourceMappingURL=chunk-1a9cdade.76ea0058.js.map