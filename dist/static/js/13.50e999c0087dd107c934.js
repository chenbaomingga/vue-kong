webpackJsonp([13],{ycXT:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=t("Hmpo"),o=t.n(l),a=t("vYJH"),u=t.n(a),s=t("gm1x"),i=t("T452"),n=t("rV7I"),m={data:function(){return{rules:{name:[{required:!0,message:"请输入服务名称",trigger:"blur"}],url:{required:!0,message:"请输入域名",trigger:"blur"},protocol:[{required:!1,message:"请输入通信协议",trigger:"blur"}],path:{required:!1,message:"请输入请求路径",trigger:"blur"},port:{required:!1,message:"请输入服务器端口",trigger:"blur"},retries:{required:!1,message:"请输入失败重试次数",trigger:"blur"},connect_timeout:{required:!1,message:"请输入连接超时时间",trigger:"blur"},write_timeout:{required:!1,message:"请输入连续写操作",trigger:"blur"},read_timeout:{required:!1,message:"请输入连续读取操作",trigger:"blur"}},ruleForm:{protocol:"",path:"",port:"",retries:"",connect_timeout:"",write_timeout:"",read_timeout:""}}},created:function(){},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var t=r.ruleForm;r.add(Object(s.a)(t))})},add:function(e){var r=this;return u()(o.a.mark(function t(){var l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e;case 2:l=t.sent,r.loading=!0,l.data.code==i.d?(r.$router.push({path:"kong/service/list"}),r.loading=!1):Object(n.Message)(l.data.message);case 5:case"end":return t.stop()}},t,r)}))()},resetForm:function(e){this.$refs[e].resetFields()}}},p={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"服务名称：",prop:"name"}},[t("el-input",{attrs:{name:"protocol",type:"text",placeholder:"服务名称"},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"域名：",prop:"url"}},[t("el-input",{attrs:{name:"protocol",type:"text",placeholder:"域名"},model:{value:e.ruleForm.url,callback:function(r){e.$set(e.ruleForm,"url",r)},expression:"ruleForm.url"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"通信协议：",prop:"protocol"}},[t("el-input",{attrs:{name:"protocol",type:"text",placeholder:"通信协议"},model:{value:e.ruleForm.protocol,callback:function(r){e.$set(e.ruleForm,"protocol",r)},expression:"ruleForm.protocol"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"请求路径：",prop:"path"}},[t("el-input",{attrs:{name:"path",type:"text",placeholder:"请求路径"},model:{value:e.ruleForm.path,callback:function(r){e.$set(e.ruleForm,"path",r)},expression:"ruleForm.path"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"服务器端口：",prop:"port"}},[t("el-input",{attrs:{name:"port",type:"number",placeholder:"服务器端口"},model:{value:e.ruleForm.port,callback:function(r){e.$set(e.ruleForm,"port",r)},expression:"ruleForm.port"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"失败重试次数：",prop:"retries"}},[t("el-input",{attrs:{name:"text",type:"number",placeholder:"失败重试次数"},model:{value:e.ruleForm.retries,callback:function(r){e.$set(e.ruleForm,"retries",r)},expression:"ruleForm.retries"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"连接超时时间：",prop:"connect_timeout"}},[t("el-input",{attrs:{name:"connect_timeout",type:"number",placeholder:"连接超时时间"},model:{value:e.ruleForm.retries,callback:function(r){e.$set(e.ruleForm,"retries",r)},expression:"ruleForm.retries"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"连续写操作：",prop:"retries"}},[t("el-input",{attrs:{name:"text",type:"number",placeholder:"连续写操作"},model:{value:e.ruleForm.retries,callback:function(r){e.$set(e.ruleForm,"retries",r)},expression:"ruleForm.retries"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"连续读取操作：",prop:"read_timeout"}},[t("el-input",{attrs:{name:"read_timeout",type:"number",placeholder:"连续读取操作"},model:{value:e.ruleForm.retries,callback:function(r){e.$set(e.ruleForm,"retries",r)},expression:"ruleForm.retries"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]},c=t("D8HT")(m,p,!1,null,null,null);r.default=c.exports}});
//# sourceMappingURL=13.50e999c0087dd107c934.js.map