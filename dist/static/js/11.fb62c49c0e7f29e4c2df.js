webpackJsonp([11],{o6O0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Hmpo"),r=a.n(n),o=a("vYJH"),s=a.n(o),l=a("BXx+");var i=a("T452"),c=a("rV7I"),u={name:"routes",data:function(){return{routesData:[]}},created:function(){this.apisLists()},methods:{apisLists:function(){var t=this;return s()(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)({url:"/kong/routes/lists",method:"get",params:{}});case 2:a=e.sent,t.loading=!0,a.data.code==i.d?(t.routesData=a.data.data,console.log(t.routesData.data),t.loading=!1):Object(c.Message)(a.data.message);case 5:case"end":return e.stop()}},e,t)}))()}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t._m(0),t._v(" "),a("div",{staticClass:"ibox-content"},[a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleAdd()}}},[t._v("新建路由")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:t.routesData.data,border:""}},[a("el-table-column",{attrs:{label:"发送方式"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.methods,function(n,r){return a("span",{key:r},[t._v(t._s(n)),r!=e.row.methods.length-1?a("em",[t._v("，")]):t._e()])})}}])}),t._v(" "),a("el-table-column",{attrs:{label:"匹配路径"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.protocols,function(n,r){return a("span",{key:r},[t._v(t._s(n)),r!=e.row.protocols.length-1?a("em",[t._v("，")]):t._e()])})}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"service.id",label:"服务id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"hosts",label:"域"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleEdit(e.row.id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ibox-title"},[e("h3",[this._v("路由列表")])])}]},p=a("D8HT")(u,d,!1,null,null,null);e.default=p.exports}});
//# sourceMappingURL=11.fb62c49c0e7f29e4c2df.js.map