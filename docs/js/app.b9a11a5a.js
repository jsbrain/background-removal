(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/test-vue/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2647:function(t,e,a){},"4d1c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{attrs:{name:"header"}}),a("main",[a("fade-transition",{attrs:{origin:"center",mode:"out-in",duration:250}},[a("router-view")],1)],1),a("router-view",{attrs:{name:"footer"}})],1)},i=[],o=a("7c76"),r={components:{FadeTransition:o["a"]}},l=r,c=a("2877"),d=Object(c["a"])(l,s,i,!1,null,null,null),u=d.exports,p=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header-global"},[a("base-nav",{staticClass:"navbar-main",attrs:{transparent:"",type:"",effect:"light",expand:""},scopedSlots:t._u([{key:"content-header",fn:function(e){var n=e.closeMenu;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 collapse-brand"},[a("router-link",{staticClass:"heading text-danger",attrs:{to:"/",role:"button"}},[t._v("Background Removal")])],1),a("div",{staticClass:"col-6 collapse-close"},[a("close-button",{on:{click:n}})],1)])}}])},[a("router-link",{staticClass:"navbar-brand mr-lg-5",attrs:{slot:"brand",to:"/"},slot:"brand"},[a("img",{staticClass:"rounded-circle img-fluid shadow",attrs:{src:"img/brand/youngman.jpg",alt:"logo"}})]),a("ul",{staticClass:"navbar-nav navbar-nav-hover align-items-lg-center"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/upload",role:"button"}},[t._v("Upload")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/about",role:"button"}},[t._v("About")])],1),a("ul",{staticClass:"navbar-nav align-items-lg-center ml-lg-auto"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://github.com/aquadzn/test-vue",target:"_blank",rel:"noopener","data-toggle":"tooltip",title:"Star us on Github"}},[a("i",{staticClass:"fa fa-github"}),a("span",{staticClass:"nav-link-inner--text d-lg-none"},[t._v("Github")])])]),a("li",{staticClass:"nav-item d-none d-lg-block ml-lg-4"},[a("router-link",{staticClass:"nav-item btn outline btn-neutral btn-icon text-dark",attrs:{to:"/upload"}},[a("span",{staticClass:"btn-inner--icon"},[a("i",{staticClass:"fa fa-upload mr-2"})]),a("span",{staticClass:"nav-link-inner--text"},[t._v("Upload")])])],1)])],1)],1)},f=[],b=function(){var t,e,a=this,n=a.$createElement,s=a._self._c||n;return s("nav",{staticClass:"navbar",class:[{"navbar-expand-lg":a.expand},(t={},t["navbar-"+a.effect]=a.effect,t),{"navbar-transparent":a.transparent},(e={},e["bg-"+a.type]=a.type,e),{rounded:a.round}]},[s("div",{staticClass:"container"},[a._t("container-pre"),a._t("brand",[s("a",{staticClass:"navbar-brand",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),a.onTitleClick(t)}}},[a._v(" "+a._s(a.title)+" ")])]),s("navbar-toggle-button",{attrs:{toggled:a.toggled,target:a.contentId},nativeOn:{click:function(t){t.stopPropagation(),a.toggled=!a.toggled}}}),a._t("container-after"),s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:a.closeMenu,expression:"closeMenu"}],staticClass:"collapse navbar-collapse",class:{show:a.toggled},attrs:{id:a.contentId}},[s("div",{staticClass:"navbar-collapse-header"},[a._t("content-header",null,{closeMenu:a.closeMenu})],2),a._t("default",null,{closeMenu:a.closeMenu})],2)],2)])},h=[],m=(a("a9e3"),a("d3b7"),a("25f0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":t.target,"aria-controls":t.target,"aria-expanded":t.toggled,"aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}),v=[],y={props:{target:{type:[String,Number],description:"Button target element"},toggled:{type:Boolean,default:!1,description:"Whether button is toggled"}}},C=y,_=Object(c["a"])(C,m,v,!1,null,null,null),w=_.exports,x={name:"base-nav",components:{NavbarToggleButton:w},props:{type:{type:String,default:"primary",description:"Navbar type (e.g default, primary etc)"},title:{type:String,default:"",description:"Title of navbar"},contentId:{type:[String,Number],default:Math.random().toString(),description:"Explicit id for the menu. By default it's a generated random number"},effect:{type:String,default:"dark",description:"Effect of the navbar (light|dark)"},round:{type:Boolean,default:!1,description:"Whether nav has rounded corners"},transparent:{type:Boolean,default:!1,description:"Whether navbar is transparent"},expand:{type:Boolean,default:!1,description:"Whether navbar should contain `navbar-expand-lg` class"}},data:function(){return{toggled:!1}},methods:{onTitleClick:function(t){this.$emit("title-click",t)},closeMenu:function(){this.toggled=!1}}},k=x,S=Object(c["a"])(k,b,h,!1,null,null,null),B=S.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#"+t.target,"aria-controls":t.target,"aria-expanded":t.expanded,"aria-label":"Toggle navigation"},on:{click:t.handleClick}},[a("span"),a("span")])},O=[],$={name:"close-button",props:{target:{type:[String,Number],description:"Close button target element"},expanded:{type:Boolean,description:"Whether button is expanded (aria-expanded attribute)"}},methods:{handleClick:function(t){this.$emit("click",t)}}},E=$,z=Object(c["a"])(E,j,O,!1,null,null,null),P=z.exports,W={components:{BaseNav:B,CloseButton:P}},A=W,I=Object(c["a"])(A,g,f,!1,null,null,null),T=I.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("carousel")],1)},M=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section-shaped section-lg my-0",attrs:{id:"carousel-bg"}},[a("div",{staticClass:"container py-0 pt-sm pb-md"},[a("div",{staticClass:"row justify-content-between align-items-center"},[a("div",{staticClass:"col-lg-7 mb-5 mb-lg-0"},[a("h1",{staticClass:"text-white font-weight-bold"},[t._v(" Remove background from your image ")]),a("p",{staticClass:"lead text-white mt-4"},[t._v(" Free and automatic image background removal service. Without resizing. ")]),a("router-link",{staticClass:"nav-item btn btn-white text-dark mt-4",attrs:{to:"/upload"}},[a("span",{staticClass:"nav-link-inner--text"},[t._v("Try by yourself !")])])],1),a("div",{staticClass:"col-lg-5 mb-lg-auto"},[a("div",{staticClass:"rounded shadow-lg overflow-hidden transform-perspective-right"},[a("b-carousel",{attrs:{id:"carousel1",background:"#fff",controls:"",indicators:""}},[a("b-carousel-slide",{attrs:{"img-src":"https://i.ibb.co/PzsvZtV/emily.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.ibb.co/Km2QXwx/emily-res.png"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.ibb.co/T22gfLY/godfather.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.ibb.co/Bs2MYpJ/godfather-res.png"}})],1)],1)])])])])},U=[],D=a("d3b4"),R=a("febd"),q={components:{BCarousel:D["a"],BCarouselSlide:R["a"]}},L=q,G=Object(c["a"])(L,N,U,!1,null,null,null),J=G.exports,V={name:"home",components:{Carousel:J}},Y=V,H=Object(c["a"])(Y,F,M,!1,null,null,null),K=H.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section-shaped section-xl my-0",attrs:{id:"upload-bg"}},[a("div",{staticClass:"container mt-lg mb-lg"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8"},[a("card",{staticClass:"border-0",attrs:{type:"secondary",shadow:"","header-classes":"bg-white pb-5","body-classes":"px-lg-5 py-lg-5"}},[a("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"d-flex flex-column mb-3"},[a("b-form-file",{staticClass:"w-auto flex-grow-1",attrs:{accept:".jpg, .jpeg, .png",placeholder:"Choose or drop an image"},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}}),t.hasImage?a("b-button",{staticClass:"btn btn-danger mt-3",on:{click:t.clearImage}},[t._v("Clear image")]):t._e()],1),t.hasImage?a("b-img",{staticClass:"mb-3",class:{transparent:t.imageSrc},attrs:{src:t.imageSrc,fluid:"",block:"",rounded:""}}):t._e(),a("div",{staticClass:"d-flex flex-column"},[a("b-button",{staticClass:"btn btn-dark mb-2",attrs:{disabled:!t.hasImage,type:"submit"}},[t._v(" Remove background ")]),t.hasFailed?a("base-alert",{staticClass:"mt-2",attrs:{type:"danger",icon:"ni ni-bell-55",dismissible:""}},[a("span",{attrs:{slot:"text"},slot:"text"},[a("strong",[t._v("Request failed!")]),t._v(" Please try again.")])]):t._e(),t.hasPredicted?a("base-alert",{staticClass:"mt-2",attrs:{type:"success",icon:"ni ni-like-2",dismissible:""}},[a("span",{attrs:{slot:"text"},slot:"text"},[a("strong",[t._v("Background removed!")])])]):t._e(),a("b-button",{staticClass:"btn btn-success",attrs:{disabled:!t.hasPredicted},on:{click:function(e){return t.downloadPredictedImage(t.imageSrc)}}},[t._v(" Download result ")])],1)],1)],1)],1)])])])},X=[],Z=(a("c19f"),a("ac1f"),a("1276"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("4918")),tt=a("1947"),et=a("11de"),at=a("c43f"),nt=a("bc3a"),st=a.n(nt),it=a("21a6"),ot=function(t){return new Promise((function(e,a){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return a(t)}}))},rt={data:function(){return{image:null,imageSrc:null,hasPredicted:!1,hasClicked:!0,hasFailed:!1}},components:{BImg:Z["a"],BButton:tt["a"],BForm:et["a"],BFormFile:at["a"]},computed:{hasImage:function(){return!!this.image}},watch:{image:function(t,e){var a=this;t!==e&&(t?ot(t).then((function(t){a.imageSrc=t})).catch((function(){a.imageSrc=null})):this.imageSrc=null)}},methods:{clearImage:function(){this.image=null,this.hasPredicted=!1,this.hasFailed=!1},onSubmit:function(){var t=this;if(this.image){var e=new FormData;e.append("file",this.image),st.a.post("http://0.0.0.0:8080/predict",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.imageSrc=e.data,t.hasPredicted=!0,console.log("Success")})).catch((function(e){console.log(e),t.hasFailed=!0}))}else alert("Please select an image.")},downloadPredictedImage:function(t){for(var e=atob(t.split(",")[1]),a=t.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(e.length),s=new Uint8Array(n),i=0;i<e.length;i++)s[i]=e.charCodeAt(i);var o=new Blob([n],{type:a});it.saveAs(o,"result.png")}}},lt=rt,ct=(a("5c3d"),Object(c["a"])(lt,Q,X,!1,null,null,null)),dt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section-shaped section-lg my-0",attrs:{id:"about-bg"}},[a("div",{staticClass:"bg-gradient-default"}),a("div",{staticClass:"container pt-1"},[a("div",{staticClass:"row text-center justify-content-center"},[a("div",{staticClass:"col-lg-10"},[a("h2",{staticClass:"display-3 text-white"},[t._v("Background Removal")]),a("p",{staticClass:"lead text-white"},[t._v(" This is a project made by "),a("badge",{staticClass:"text-uppercase",attrs:{type:"primary"}},[a("a",{attrs:{href:"https://github.com/aquadzn",target:"_blank"}},[a("b",[t._v("aquadzn")])])]),t._v(" using "),a("badge",{staticClass:"text-uppercase mt-2",attrs:{type:"primary"}},[a("a",{attrs:{href:"https://github.com/NathanUA/U-2-Net",target:"_blank"}},[a("b",[t._v("U^2-Net: Going Deeper with Nested U-Structure "),a("br"),t._v(" for Salient Object Detection")])])]),a("br"),a("badge",{staticClass:"text-uppercase m-2",attrs:{type:"primary"}},[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[a("b",[t._v("Vue")])])]),a("badge",{staticClass:"text-uppercase m-2",attrs:{type:"primary"}},[a("a",{attrs:{href:"https://bootstrap-vue.org",target:"_blank"}},[a("b",[t._v("Bootstrap Vue")])])]),a("badge",{staticClass:"text-uppercase m-2",attrs:{type:"primary"}},[a("a",{attrs:{href:"https://github.com/creativetimofficial/vue-argon-design-system",target:"_blank"}},[a("b",[t._v("Argon")])])]),a("badge",{staticClass:"text-uppercase m-2",attrs:{type:"primary"}},[a("a",{attrs:{href:"https://github.com/pallets/flask",target:"_blank"}},[a("b",[t._v("Flask")])])])],1)])]),a("div",{staticClass:"row row-grid mt-sm"},[a("div",{staticClass:"col-lg-4"},[a("icon",{attrs:{name:"fa fa-bolt",size:"lg",gradient:"white",shadow:"",round:"",color:"primary"}}),a("h5",{staticClass:"text-white mt-3"},[t._v("Fast")]),a("p",{staticClass:"text-white mt-3"},[t._v(" It only takes a few seconds to remove the background from your image. ")])],1),a("div",{staticClass:"col-lg-4"},[a("icon",{attrs:{name:"fa fa-image",size:"lg",gradient:"white",shadow:"",round:"",color:"primary"}}),a("h5",{staticClass:"text-white mt-3"},[t._v("Full-resolution")]),a("p",{staticClass:"text-white mt-3"},[t._v(" The output image resolution remains the same as the input. ")])],1),a("div",{staticClass:"col-lg-4"},[a("icon",{attrs:{name:"fa fa-eye-slash",size:"lg",gradient:"white",shadow:"",round:"",color:"primary"}}),a("h5",{staticClass:"text-white mt-3"},[t._v("On the fly")]),a("p",{staticClass:"text-white mt-3"},[t._v(" Your image isn't stored anywhere because computation is done on the fly. ")])],1)])])])},pt=[],gt={},ft=Object(c["a"])(gt,ut,pt,!1,null,null,null),bt=ft.exports;n["a"].use(p["a"]);var ht="/test-vue/",mt=new p["a"]({mode:"history",base:ht,linkExactActiveClass:"active",routes:[{path:"/",name:"home",components:{header:T,default:K}},{path:"/about",name:"about",components:{header:T,default:bt}},{path:"/upload",name:"upload",components:{header:T,default:dt}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),vt=(a("4d1c"),a("d5a0"),a("a4d4"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"badge",class:["badge-"+t.type,t.rounded?"badge-pill":"",t.circle&&"badge-circle"]},[t._t("default",[t.icon?a("i",{class:t.icon}):t._e()])],2)}),yt=[],Ct={name:"badge",props:{tag:{type:String,default:"span",description:"Html tag to use for the badge."},rounded:{type:Boolean,default:!1,description:"Whether badge is of pill type"},circle:{type:Boolean,default:!1,description:"Whether badge is circle"},icon:{type:String,default:"",description:"Icon name. Will be overwritten by slot if slot is used"},type:{type:String,default:"default",description:"Badge type (primary|info|danger|default|warning|success)"}}},_t=Ct,wt=Object(c["a"])(_t,vt,yt,!1,null,null,null),xt=wt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"btn",class:t.classes,attrs:{type:"button"===t.tag?t.nativeType:""},on:{click:t.handleClick}},[t.$slots.icon||t.icon&&t.$slots.default?a("span",{staticClass:"btn-inner--icon"},[t._t("icon",[a("i",{class:t.icon})])],2):t._e(),t.$slots.default?t._e():a("i",{class:t.icon}),t.$slots.icon||t.icon&&t.$slots.default?a("span",{staticClass:"btn-inner--text"},[t._t("default",[t._v(" "+t._s(t.text)+" ")])],2):t._e(),t.$slots.icon||t.icon?t._e():t._t("default")],2)},St=[],Bt=a("ade3"),jt={name:"base-button",props:{tag:{type:String,default:"button",description:"Button tag (default -> button)"},type:{type:String,default:"default",description:"Button type (e,g primary, danger etc)"},size:{type:String,default:"",description:"Button size lg|sm"},textColor:{type:String,default:"",description:"Button text color (e.g primary, danger etc)"},nativeType:{type:String,default:"button",description:"Button native type (e.g submit,button etc)"},icon:{type:String,default:"",description:"Button icon"},text:{type:String,default:"",description:"Button text in case not provided via default slot"},outline:{type:Boolean,default:!1,description:"Whether button style is outline"},rounded:{type:Boolean,default:!1,description:"Whether button style is rounded"},iconOnly:{type:Boolean,default:!1,description:"Whether button contains only an icon"},block:{type:Boolean,default:!1,description:"Whether button is of block type"}},computed:{classes:function(){var t=[{"btn-block":this.block},{"rounded-circle":this.rounded},{"btn-icon-only":this.iconOnly},Object(Bt["a"])({},"text-".concat(this.textColor),this.textColor),{"btn-icon":this.icon||this.$slots.icon},this.type&&!this.outline?"btn-".concat(this.type):"",this.outline?"btn-outline-".concat(this.type):""];return this.size&&t.push("btn-".concat(this.size)),t}},methods:{handleClick:function(t){this.$emit("click",t)}}},Ot=jt,$t=Object(c["a"])(Ot,kt,St,!1,null,null,null),Et=$t.exports,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fade-transition",[t.visible?a("div",{staticClass:"alert",class:["alert-"+t.type,{"alert-dismissible":t.dismissible}],attrs:{role:"alert"}},[t.dismissible?[t._t("default",[t.icon?a("span",{staticClass:"alert-inner--icon"},[a("i",{class:t.icon})]):t._e(),t.$slots.text?a("span",{staticClass:"alert-inner--text"},[t._t("text")],2):t._e()]),t._t("dismiss-icon",[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:t.dismissAlert}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]:t._t("default",[t.icon?a("span",{staticClass:"alert-inner--icon"},[a("i",{class:t.icon})]):t._e(),t.$slots.text?a("span",{staticClass:"alert-inner--text"},[t._t("text")],2):t._e()])],2):t._e()])},Pt=[],Wt={name:"base-alert",components:{FadeTransition:o["a"]},props:{type:{type:String,default:"default",description:"Alert type"},icon:{type:String,default:"",description:"Alert icon. Will be overwritten by default slot"},dismissible:{type:Boolean,default:!1,description:"Whether alert is closes when clicking"}},data:function(){return{visible:!0}},methods:{dismissAlert:function(){this.visible=!1}}},At=Wt,It=Object(c["a"])(At,zt,Pt,!1,null,null,null),Tt=It.exports,Ft=function(){var t,e,a,n=this,s=n.$createElement,i=n._self._c||s;return i("div",{staticClass:"card",class:[{"card-lift--hover":n.hover},{shadow:n.shadow},(t={},t["shadow-"+n.shadowSize]=n.shadowSize,t),(e={},e["bg-gradient-"+n.gradient]=n.gradient,e),(a={},a["bg-"+n.type]=n.type,a)]},[n.$slots.header?i("div",{staticClass:"card-header",class:n.headerClasses},[n._t("header")],2):n._e(),n.noBody?n._e():i("div",{staticClass:"card-body",class:n.bodyClasses},[n._t("default")],2),n.noBody?n._t("default"):n._e(),n.$slots.footer?i("div",{staticClass:"card-footer",class:n.footerClasses},[n._t("footer")],2):n._e()],2)},Mt=[],Nt={name:"card",props:{type:{type:String,description:"Card type"},gradient:{type:String,description:"Card background gradient type (warning,danger etc)"},hover:{type:Boolean,description:"Whether card should move on hover"},shadow:{type:Boolean,description:"Whether card has shadow"},shadowSize:{type:String,description:"Card shadow size"},noBody:{type:Boolean,default:!1,description:"Whether card should have wrapper body class"},bodyClasses:{type:[String,Object,Array],description:"Card body css classes"},headerClasses:{type:[String,Object,Array],description:"Card header css classes"},footerClasses:{type:[String,Object,Array],description:"Card footer css classes"}}},Ut=Nt,Dt=Object(c["a"])(Ut,Ft,Mt,!1,null,null,null),Rt=Dt.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon icon-shape",class:[t.size&&"icon-"+t.size,t.type&&"icon-shape-"+t.type,t.gradient&&"bg-gradient-"+t.gradient,t.shadow&&"shadow",t.rounded&&"rounded-circle",t.color&&"text-"+t.color]},[t._t("default",[a("i",{class:t.name})])],2)},Lt=[],Gt={name:"icon",props:{name:{type:String,default:"",description:"Icon name"},size:{type:String,default:"",description:"Icon size"},type:{type:String,default:"",description:"Icon type (primary, warning etc)"},gradient:{type:String,default:"",description:"Icon gradient type (primary, warning etc)"},color:{type:String,default:"",description:"Icon color (primary, warning etc)"},shadow:{type:Boolean,default:!1,description:"Whether icon has shadow"},rounded:{type:Boolean,default:!1,description:"Whether icon is rounded"}}},Jt=Gt,Vt=Object(c["a"])(Jt,qt,Lt,!1,null,null,null),Yt=Vt.exports,Ht={install:function(t){t.component(xt.name,xt),t.component(Et.name,Et),t.component(Tt.name,Tt),t.component(Rt.name,Rt),t.component(Yt.name,Yt)}},Kt={bind:function(t,e,a){t.clickOutsideEvent=function(n){t==n.target||t.contains(n.target)||a.context[e.expression](n)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}},Qt={install:function(t){t.directive("click-outside",Kt)}},Xt=Qt,Zt=a("caf9"),te={install:function(t){t.use(Ht),t.use(Xt),t.use(Zt["a"])}},ee=a("9483");Object(ee["a"])("".concat("/test-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,n["a"].use(te),new n["a"]({router:mt,render:function(t){return t(u)}}).$mount("#app")},"5c3d":function(t,e,a){"use strict";var n=a("2647"),s=a.n(n);s.a},a4d4:function(t,e,a){},d5a0:function(t,e,a){}});
//# sourceMappingURL=app.b9a11a5a.js.map