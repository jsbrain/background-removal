(function(t){function e(e){for(var r,a,s=e[0],u=e[1],l=e[2],c=0,d=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"94369204","chunk-6b4ba5f5":"887447b4"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=a(t);var l=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/background-removal/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"381b":function(t,e,n){},"4dd1":function(t,e,n){"use strict";var r=n("9fc2"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("289d"),i=(n("5abe"),n("bc3a")),a=n.n(i),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n(t.layout,{tag:"component"},[n("router-view")],1)],1)},u=[],l="default",c={computed:{layout:function(){return"".concat(this.$route.meta.layout||l,"-layout")}}},f=c,d=(n("034f"),n("2877")),h=Object(d["a"])(f,s,u,!1,null,null,null),m=h.exports,p=(n("d3b7"),n("8c4f"));r["a"].use(p["a"]);var v="/background-removal/",b=new p["a"]({mode:"history",base:v,routes:[{path:"/",name:"home",meta:{layout:"default"},component:n("bb51").default},{path:"/upload",name:"upload",meta:{layout:"default"},component:function(){return n.e("chunk-6b4ba5f5").then(n.bind(null,"2679"))}},{path:"/about",name:"about",meta:{layout:"default"},component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}]}),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),n("section",{staticClass:"hero is-fullheight-with-navbar"},[n("div",{staticClass:"hero-body has-bg-img"},[t._t("default")],2)])],1)},g=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{shadow:""}},[n("template",{slot:"brand"},[n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png",alt:"Lightweight UI components for Vue.js based on Bulma"}})])],1),n("template",{slot:"end"},[n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/upload"}}},[n("strong",[t._v("Upload")])]),n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/about"}}},[n("strong",[t._v("About")])])],1)],2)},S=[],_={name:"Navbar",data:function(){return{open:!1}}},O=_,x=Object(d["a"])(O,w,S,!1,null,null,null),C=x.exports,L={components:{Navbar:C}},j=L,k=(n("4dd1"),Object(d["a"])(j,y,g,!1,null,null,null)),E=k.exports;r["a"].use(o["a"],a.a),r["a"].component("default-layout",E),r["a"].config.productionTip=!1,new r["a"]({router:b,render:function(t){return t(m)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},"9fc2":function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container has-text-centered"},[n("div",{staticClass:"columns is-vcentered"},[n("div",{staticClass:"column is-half"},[n("div",[n("ImageSlider",{staticClass:"transparent",attrs:{offset:"0.58",before:"https://i.ibb.co/PzsvZtV/emily.jpg",after:"https://i.ibb.co/Km2QXwx/emily-res.png"}})],1)]),n("div",{staticClass:"column is-half"},[n("h1",{staticClass:"title is-2"},[t._v("Remove background from image")]),n("br"),n("h2",{staticClass:"subtitle is-4"},[t._v("Free and automatic background removal service. Without resizing.")]),n("b-button",{attrs:{tag:"router-link",to:"/upload",type:"is-primary is-rounded"}},[n("strong",[t._v("Upload image")])])],1)])])},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twentytwenty-container",style:t.containerStyle,on:{touchstart:t.startSlide,mousedown:t.startSlide}},[n("img",{attrs:{src:t.after,alt:"after"},on:{mousedown:function(t){t.preventDefault()},load:t.setDimensions}}),n("img",{style:t.beforeImgStyle,attrs:{src:t.before,alt:"before"},on:{mousedown:function(t){t.preventDefault()}}}),n("div",{staticClass:"twentytwenty-overlay",style:t.overlayStyle},[t.beforeLabel?n("div",{staticClass:"twentytwenty-before-label"},[t._v(t._s(t.beforeLabel))]):t._e(),t.afterLabel?n("div",{staticClass:"twentytwenty-after-label"},[t._v(t._s(t.afterLabel))]):t._e()]),n("div",{staticClass:"twentytwenty-handle",style:t.handleStyle},[n("div",{staticClass:"twentytwenty-arrow-left"}),n("div",{staticClass:"twentytwenty-arrow-right"})])])},a=[],s=(n("99af"),n("a9e3"),{data:function(){return{imgOffset:null,slideOffset:this.offset,sliding:!1,containerStyle:{},overlayStyle:{}}},props:{before:{type:String,required:!0},beforeLabel:{type:String},after:{type:String,required:!0},afterLabel:{type:String},offset:{type:[String,Number],default:.5,validator:function(t){return t>0&&t<=1}}},methods:{setDimensions:function(){var t=this.$el.querySelector("img");this.imgOffset=t.getBoundingClientRect(),this.containerStyle={width:"".concat(this.w,"px"),height:"".concat(this.h,"px")}},startSlide:function(t){this.sliding=!0,this.moveSlide(t),this.overlayStyle={opacity:0}},moveSlide:function(t){if(this.sliding){var e=(t.touches?t.touches[0].pageX:t.pageX)-this.imgOffset.left;e=e<0?0:e>this.w?this.w:e,this.slideOffset=e/this.w}},endSlide:function(){this.sliding=!1,this.overlayStyle={}},resize:function(){var t=this;this.containerStyle={},this.$nextTick((function(){return t.setDimensions()}))}},computed:{beforeImgStyle:function(){return{clip:"rect(0, ".concat(this.x,"px, ").concat(this.h,"px, 0)")}},handleStyle:function(){var t=44;return{width:"".concat(t,"px"),height:"".concat(t,"px"),top:"calc(50% - ".concat(t/2,"px)"),left:"calc(".concat(100*this.slideOffset,"% - ").concat(t/2,"px)")}},x:function(){return this.w*this.slideOffset},w:function(){if(this.imgOffset)return this.imgOffset.width},h:function(){if(this.imgOffset)return this.imgOffset.height}},mounted:function(){document.addEventListener("touchmove",this.moveSlide),document.addEventListener("touchend",this.endSlide),document.addEventListener("mousemove",this.moveSlide),document.addEventListener("mouseup",this.endSlide),window.addEventListener("resize",this.resize)},beforeDestroy:function(){document.removeEventListener("touchmove",this.moveSlide),document.removeEventListener("touchend",this.endSlide),document.removeEventListener("mousemove",this.moveSlide),document.removeEventListener("mouseup",this.endSlide),window.removeEventListener("resize",this.resize)}}),u=s,l=(n("e2f5"),n("2877")),c=Object(l["a"])(u,i,a,!1,null,null,null),f=c.exports,d={components:{ImageSlider:f}},h=d,m=(n("cccb"),Object(l["a"])(h,r,o,!1,null,null,null));e["default"]=m.exports},cccb:function(t,e,n){"use strict";var r=n("5ced"),o=n.n(r);o.a},e2f5:function(t,e,n){"use strict";var r=n("381b"),o=n.n(r);o.a}});
//# sourceMappingURL=app.5d08ee7c.js.map