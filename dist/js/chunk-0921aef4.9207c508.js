(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0921aef4"],{"128d":function(e,t,a){e.exports=a.p+"img/login_logo.7185fac6.png"},"23f2":function(e,t,a){},"4d41":function(e,t,a){},"68c3":function(e,t,a){"use strict";var r=a("23f2"),o=a.n(r);o.a},a434:function(e,t,a){"use strict";var r=a("23e7"),o=a("23cb"),i=a("a691"),s=a("50c4"),n=a("7b0b"),l=a("65f0"),c=a("8418"),p=a("1dde"),u=a("ae40"),d=p("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,m=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!f},{splice:function(e,t){var a,r,p,u,d,f,y=n(this),_=s(y.length),b=o(e,_),w=arguments.length;if(0===w?a=r=0:1===w?(a=0,r=_-b):(a=w-2,r=m(h(i(t),0),_-b)),_+a-r>g)throw TypeError(v);for(p=l(y,r),u=0;u<r;u++)d=b+u,d in y&&c(p,u,y[d]);if(p.length=r,a<r){for(u=b;u<_-r;u++)d=u+r,f=u+a,d in y?y[f]=y[d]:delete y[f];for(u=_;u>_-r+a;u--)delete y[u-1]}else if(a>r)for(u=_-r;u>b;u--)d=u+r-1,f=u+a-1,d in y?y[f]=y[d]:delete y[f];for(u=0;u<a;u++)y[u+b]=arguments[u+2];return y.length=_-r+a,p}})},a55b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-wrapper"},[e._m(0),a("div",{staticClass:"body"},[a("c-form",{directives:[{name:"show",rawName:"v-show",value:"login"===e.type,expression:"type === 'login'"}],ref:"loginForm",attrs:{data:e.loginData,form:e.loginColumn,rules:e.loginRules,"label-width":"0px"},scopedSlots:e._u([{key:"after",fn:function(){return[a("div",{staticClass:"actions"},[a("span",{staticClass:"action-item",on:{click:function(t){return e.switchType("register")}}},[e._v("用户注册")]),a("span",{staticClass:"action-item"},[e._v("忘记密码")])]),a("div",[a("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("登录即同意用户协议")])],1)]},proxy:!0}])}),a("c-form",{directives:[{name:"show",rawName:"v-show",value:"register"===e.type,expression:"type === 'register'"}],ref:"registerForm",attrs:{data:e.registerData,form:e.registerColumn,rules:e.registerRules,"label-width":"0px"},scopedSlots:e._u([{key:"after",fn:function(){return[a("div",{staticClass:"actions"},[a("span",{staticClass:"action-item",on:{click:function(t){return e.switchType("login")}}},[e._v("去登录")])])]},proxy:!0}])})],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("img",{staticClass:"logo",attrs:{src:a("128d")}})])}],i=a("a9a5");function s(e){var t=/^1\d{10}$/;return!!t.test(e)}var n={components:{"c-form":i["a"]},data:function(){return{type:"login",loginData:{username:"",password:""},loginColumn:[{type:"input",prop:"phone",placeholder:"手机号"},{type:"password",prop:"password",placeholder:"密码"},{type:"slot",prop:"after"},{type:"action",data:[{text:"登录",handler:this.submit}]}],loginRules:{phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:this.validatePhone,message:"手机号格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]},registerData:{username:"",phone:"",password:"",com_password:""},registerColumn:[{type:"input",prop:"username",placeholder:"昵称"},{type:"input",prop:"phone",placeholder:"手机号"},{type:"password",prop:"password",placeholder:"登录密码"},{type:"password",prop:"com_password",placeholder:"确认密码"},{type:"slot",prop:"after"},{type:"action",data:[{text:"注册",handler:this.submit}]}],registerRules:{username:[{required:!0,message:"昵称不能为空",trigger:"blur"}],phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:this.validatePhone,message:"手机号格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],com_password:[{validator:this.validatePwd,message:"两次密码不一致",trigger:"blur"}]},checked:!1}},computed:{loading:function(){return this.$store.state.loading}},methods:{switchType:function(e){var t=this;this.type=e,this.$nextTick((function(){t.$refs.registerForm.resetFields(),t.$refs.loginForm.resetFields()}))},submit:function(e,t){if(!this.loading&&(this.$store.commit("UPDATE_LOADING",!1),e))switch(this.type){case"login":if(!this.checked)return void this.$notify({type:"danger",message:"请查看用户协议并勾选同意"});this.toLogin(t);break;case"register":this.toRegister(t);break}},toLogin:function(e){var t=this;this.$fetch.form("/Home/login/login",e).then((function(e){var a=e.data;t.$store.dispatch("SaveInfo",{token:a.apiAuth,userInfo:a.user_info}),t.$store.commit("UPDATE_LOADING",!1),t.$router.push({name:"Plan"})})).catch((function(e){var a=e.msg;t.$notify({type:"warning",message:a}),t.$store.commit("UPDATE_LOADING",!1)}))},toRegister:function(e){var t=this;this.$fetch.form("/home/login/reg",e).then((function(){t.$notify({type:"success",message:"注册成功"}),t.switchType("login"),t.$store.commit("UPDATE_LOADING",!1)})).catch((function(e){var a=e.msg;t.$notify({type:"warning",message:a}),t.$store.commit("UPDATE_LOADING",!1)}))},validatePhone:function(e,t,a){s(t)?a():a(new Error)},validatePwd:function(e,t,a){t!==this.registerData.password?a(new Error):a()}}},l=n,c=(a("68c3"),a("2877")),p=Object(c["a"])(l,r,o,!1,null,"b1fb8260",null);t["default"]=p.exports},a9a5:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",class:e.classs,attrs:{model:e.data,rules:e.rules,"label-width":e.labelWidth,"label-position":e.labelPosition}},e._l(e.form,(function(t,r){return a("el-form-item",{key:r,class:["form-item__"+t.prop,"form-item__"+t.type],attrs:{label:t.label,prop:t.prop}},["text"===t.type?[Array.isArray(t.value)?e._l(t.value,(function(t,r){return a("label",{key:r},[e._v(" "+e._s(t)+" ")])})):[e._v(" "+e._s(t.prop?e.data[t.prop]:t.value)+" ")]]:e._e(),"input"===t.type||"password"===t.type?[a("el-input",{attrs:{type:"input"===t.type?"text":t.type,placeholder:t.placeholder,autocomplete:"new-password"},on:{input:t.input},scopedSlots:e._u([t.unit?{key:"suffix",fn:function(){return[e._v(" "+e._s(t.unit)+" ")]},proxy:!0}:null],null,!0),model:{value:e.data[t.prop],callback:function(a){e.$set(e.data,t.prop,a)},expression:"data[formItem.prop]"}})]:e._e(),"textarea"===t.type?[a("el-input",{attrs:{type:"textarea",placeholder:t.placeholder,rows:5},model:{value:e.data[t.prop],callback:function(a){e.$set(e.data,t.prop,a)},expression:"data[formItem.prop]"}})]:e._e(),"radio"===t.type?e._l(t.data,(function(r,o){return a("el-radio",{key:o,attrs:{label:r.label},model:{value:e.data[t.prop],callback:function(a){e.$set(e.data,t.prop,a)},expression:"data[formItem.prop]"}},[e._v(" "+e._s(r.text?r.text:r.label)+" ")])})):e._e(),"date"===t.type?[a("el-date-picker",{attrs:{type:"date",placeholder:t.placeholder,format:t.valueFormat,"value-format":t.valueFormat||"yyyy-MM-dd"},model:{value:e.data[t.prop],callback:function(a){e.$set(e.data,t.prop,a)},expression:"data[formItem.prop]"}})]:e._e(),"select"===t.type?[a("el-select",{attrs:{placeholder:t.placeholder},model:{value:e.data[t.prop],callback:function(a){e.$set(e.data,t.prop,a)},expression:"data[formItem.prop]"}},e._l(t.data,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)]:e._e(),"avatar"===t.type?[a("van-uploader",{ref:"avatar",refInFor:!0,attrs:{"max-count":1,"preview-full-image":!1,"after-read":t.upload},on:{delete:e.deleteImg},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}},[a("div",{staticClass:"avatar-mask"},[e._v(e._s(t.placeholder||"点击更换头像"))])])]:e._e(),"action"===t.type?[a("div",{staticClass:"btn-group",style:{"text-align":t.position||"center"}},e._l(t.data,(function(t,r){return a("el-button",{key:r,class:t.class,attrs:{type:t.type,icon:t.icon},on:{click:function(a){return e.handelOperation(t)}}},[e._v(" "+e._s(t.text)+" ")])})),1)]:e._e(),"slot"===t.type?["after"===t.prop?[e._t("after")]:e._e()]:e._e()],2)})),1)},o=[],i=(a("99af"),a("4160"),a("a434"),a("159b"),{name:"CForm",props:{data:{required:!0,type:Object,default:function(){return{}}},form:{required:!0,type:Array,default:function(){return[]}},rules:{type:Object,default:function(){return{}}},labelWidth:{type:String,default:"80px"},classs:{type:String},labelPosition:{type:String,default:"right"}},data:function(){return{avatar:"",countryCodeList:[],fileList:[]}},watch:{form:function(){this.reset()}},methods:{a:function(e){console.log(e)},reset:function(){var e=this;this.$nextTick((function(){if(e.$refs.gt){var t=[].concat(e.$refs.gt);t.forEach((function(e){e.init()}))}}))},handelOperation:function(e){this.validator(e)},validator:function(e){var t=this;"undefined"===typeof e.validator||e.validator?this.$refs.form.validate((function(a){if(a){var r=JSON.parse(JSON.stringify(t.data));"function"===typeof e.handler&&e.handler(a,r)}})):"function"===typeof e.handler&&e.handler()},validatateGeetest:function(e){var t=this,a=this.findItem("type","smscode"),r=a.item;4!==r.state?this.$refs.gt.updateCheckState(!0):r.propPhone?r.phone?e(!0):this.$message("手机号不能为空"):this.$refs.resetPwdForm.validateField([r.propPhone],(function(a){a?t.$message(t.message):e(!0)}))},geetestValidate:function(e){console.log(e)},resetFields:function(){var e=this.$refs.form;e.clearValidate(),e.resetFields()},deleteImg:function(){console.log(this.$refs.avatar),this.$refs.avatar[0].chooseFile()},findItem:function(e,t){for(var a=0;a<this.form.length;a++){var r=this.form[a];if(r[e]===t)return{index:a,item:r}}},updateField:function(e,t,a){var r=this;"del"===a?this.fileList.splice(e,1):this.$set(this.fileList,e,t),this.form.forEach((function(e){"avatar"===e.type&&(r.data[e.prop]=[].concat(r.fileList))}))}}}),s=i,n=(a("cb17"),a("2877")),l=Object(n["a"])(s,r,o,!1,null,"3a6121ee",null);t["a"]=l.exports},cb17:function(e,t,a){"use strict";var r=a("4d41"),o=a.n(r);o.a}}]);
//# sourceMappingURL=chunk-0921aef4.9207c508.js.map