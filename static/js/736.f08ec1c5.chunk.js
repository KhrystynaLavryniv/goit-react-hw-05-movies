"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r,c,a=e(885),i=e(2791),u=e(6871),o=e(4390),s=e(9168),p=e(8479),f=e(168),h=e(6031),l=h.ZP.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n"]))),d=h.ZP.img(c||(c=(0,f.Z)(["\n  display: block;\n  width: 150px;\n"]))),m=e(184);var v=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],r=n[1],c=(0,u.UO)().movieId,f=(0,i.useState)(!1),h=(0,a.Z)(f,2),v=h[0],x=h[1];return(0,i.useEffect)((function(){x(!0),(0,o.xc)(c).then((function(t){var n=t.data.cast;if(r(n),0===n.length)return p.ZP.error("We don't have any information about the cast for this movie")})).catch((function(t){return p.ZP.error("We don't have any information about the cast for this movie")})).finally(x(!1))}),[c]),(0,m.jsxs)(m.Fragment,{children:[v&&(0,m.jsx)(s.Z,{}),e&&(0,m.jsx)(l,{children:e.map((function(t){var n=t.cast_id,e=t.name,r=t.character,c=t.profile_path;return(0,m.jsxs)("li",{children:[(0,m.jsx)("div",{children:(0,m.jsx)(d,{src:c?"https://image.tmdb.org/t/p/w500"+c:"noPosterImg",alt:e})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{children:e}),r&&(0,m.jsxs)("p",{children:["Character: ",r]})]})]},n)}))})]})}},9168:function(t,n,e){e.d(n,{Z:function(){return o}});var r,c=e(375),a=e(168),i=e(6031).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),u=e(184),o=function(){return(0,u.jsxs)(i,{children:[(0,u.jsx)(c.gy,{color:"#00BFFF",height:80,width:80}),";"]})}},4390:function(t,n,e){e.d(n,{DC:function(){return p},Mc:function(){return h},mv:function(){return d},xc:function(){return v},Hx:function(){return y}});var r=e(5861),c=e(7757),a=e.n(c),i=e(4569),u=e.n(i),o="https://api.themoviedb.org/3",s="958a441e98a3a2e7212356a4dfcbfc32";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(o,"/movie/").concat(n,"?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(n,"&include_adult=false"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=736.f08ec1c5.chunk.js.map