(this["webpackJsonpsimple-nav"]=this["webpackJsonpsimple-nav"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(2),c=n.n(o),l=(n(14),n(15),n(3)),r=n(4),s=n(7),u=n(5),m=n(8),d=n(6),p=n.n(d),h=(n(16),function(e){return i.a.createElement("div",{className:"logo__container"},i.a.createElement("img",{className:"logo__img",src:p.a,alt:"Logo"}))}),b=(n(17),function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"menu__container--md"},i.a.createElement("div",{className:"menu__items--md"},e.buildItems(e.items))),i.a.createElement("div",{className:"menu__container--sm"},i.a.createElement("div",{className:"button-hm",onClick:e.handlerClickMenuMobile},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))))}),f=(n(18),function(e){return i.a.createElement("div",{className:"menu__mobile ".concat(e.display?"show":"hidden")},e.buildItems(e.items))}),g=(n(19),function(e){return i.a.createElement("div",{className:"item item--".concat(e.type," item--").concat(e.position," ").concat(e.customClass?e.customClass:""),action:e.action,name:e.name,url:e.url,onClick:e.handler},e.label)}),y=[{type:"first",label:"About us",position:"right",handler:function(){},name:"about-us",action:"redirect",url:"https://www.youtube.com.mx/"},{type:"first",label:"Login",position:"right",handler:function(){},name:"login",action:"redirect",url:"/login"},{type:"secondary",label:"Contact us",position:"right",handler:function(){},name:"contact-us",action:"redirect",url:"/contact"}],E=[{type:"first",label:"About us",position:"right",handler:function(){},name:"about-us",action:"redirect",url:"https://www.youtube.com.mx/",customClass:"item--mobile"},{type:"first",label:"Login",position:"right",handler:function(){},name:"login",action:"redirect",url:"/login",customClass:"item--mobile"},{type:"secondary",label:"Contact us",position:"right",handler:function(){},name:"contact-us",action:"redirect",url:"/contact",customClass:"item--mobile"}],v=(n(20),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handlerClickMenuMobile=function(e){n.setState({openMenuMobile:!n.state.openMenuMobile}),e.stopPropagation()},n.handlerClick=function(e){switch(e.target.getAttribute("action")){case"redirect":window.open(e.target.getAttribute("url"),"_blank");break;default:console.log("No action pass")}},n.isEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},n.checkHandlerEmpty=function(e){return e.map((function(e){return n.isEmpty(e.handler)&&(e.handler=n.handlerClick),e}))},n.buildItems=function(e){if(e)return e.map((function(e,t){return i.a.createElement(g,{key:"".concat(t,"--").concat(e.name),type:e.type,label:e.label,position:e.position,handler:e.handler,name:e.name,customClass:e.customClass?e.customClass:"",action:e.action,url:e.url})}))},n.state={openMenuMobile:!1},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"navbar__container"},i.a.createElement(h,null),i.a.createElement("div",{className:"menu__wrapper"},i.a.createElement(b,{items:this.checkHandlerEmpty(y),buildItems:this.buildItems,handlerClickMenuMobile:this.handlerClickMenuMobile})))),i.a.createElement(f,{items:this.checkHandlerEmpty(E),buildItems:this.buildItems,display:this.state.openMenuMobile}))}}]),t}(a.Component));v.defaultProps={items:[{type:"first",label:"About us",position:"right",handler:function(){},name:"about-us",action:"redirect",url:"https://www.youtube.com.mx/"},{type:"first",label:"Login",position:"right",handler:function(){},name:"login",action:"redirect",url:"/login"},{type:"secondary",label:"Contact us",position:"right",handler:function(){},name:"contact-us",action:"redirect",url:"/contact"}]};var w=v;var C=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a956658c.chunk.js.map