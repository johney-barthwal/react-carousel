(this["webpackJsonpreact-carousel"]=this["webpackJsonpreact-carousel"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(6),r=c.n(a),i=(c(12),c(13),c(7)),u=c(3),o=(c(14),c(0));var j=function(e){var t=e.url;return Object(o.jsx)("img",{src:t,alt:""})};var l=function(e){var t=e.text,c=e.subText;return Object(o.jsxs)("div",{className:"carousel__text",children:[Object(o.jsx)("h1",{children:t}),Object(o.jsx)("p",{children:c})]})},b=c.p+"static/media/image1.75a97c47.jpg",d=c.p+"static/media/image2.9d3c460e.jpg",x=c.p+"static/media/image3.405d1368.jpg";var O=function(){var e=[{url:b,text:"Pizaa",subText:"Cheese, Tomatos, Capsicum..."},{url:d,text:"Wrap",subText:"Chicken, Egg whites, Yogurt..."},{url:x,text:"Idli",subText:"Rice, Coconut, fenugreek seeds..."}],t=Object(n.useState)([e[0]]),c=Object(u.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(1),O=Object(u.a)(r,2),h=O[0],m=O[1],f=Object(n.useState)(0),g=Object(u.a)(f,2),p=g[0],v=g[1],_=Object(n.useState)(0),C=Object(u.a)(_,2),T=C[0],S=C[1];return Object(n.useEffect)((function(){document.querySelector(".carousel__images").style.transform="translateX(".concat(p,"px)"),document.querySelector(".carousel__info").style.transform="translateX(".concat(T,"px)")}),[p,T]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"carousel",children:[Object(o.jsx)("div",{className:"carousel__images",children:s.map((function(e,t){return Object(o.jsx)(j,{url:e.url},t)}))}),Object(o.jsxs)("div",{className:"carousel__feature",children:[Object(o.jsx)("div",{className:"carousel__info",children:s.map((function(e,t){return Object(o.jsx)(l,{text:e.text,subText:e.subText},t)}))}),Object(o.jsxs)("div",{className:"carousel__buttons",children:[Object(o.jsx)("button",{onClick:function(t){h!==e.length&&(a([].concat(Object(i.a)(s),[e[h]])),m(h+1),window.innerWidth>400?(v(p-400),S(T-400)):(v(p-200),S(T-200)))},children:">"}),Object(o.jsx)("button",{onClick:function(e){1!==h&&(m(h-1),window.innerWidth>400?(v(p+400),S(T+400)):(v(p+200),S(T+200)))},children:"<"})]})]})]})})};var h=function(){return Object(o.jsx)("footer",{children:"\xa9 Johney 2021"})};var m=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(O,{}),Object(o.jsx)(h,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.f98efa0f.chunk.js.map