"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{687:function(n,t,r){r.d(t,{E3:function(){return d},Hx:function(){return f},PY:function(){return s},Y5:function(){return o},uV:function(){return p}});var e=r(861),a=r(757),c=r.n(a),u=r(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="879ff30e220a7b6f7fd01273465d82d0",s=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/day?api_key=".concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},247:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e=r(861),a=r(439),c=r(757),u=r.n(c),i=r(687),s=r(791),o=r(689),p=r(811),f=r(184);function d(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),r=t[0],c=t[1],d=(0,o.UO)().movieId;(0,s.useEffect)((function(){var n=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.uV)(d);case 2:t=n.sent,c(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[d]);return(0,f.jsx)(p.Au,{children:r.length>0?(0,f.jsx)(p.ds,{children:r.map((function(n){var t=n.profile_path,r=n.name,e=n.character,a=n.id;return(0,f.jsxs)(p.dh,{children:[(0,f.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w200","/").concat(t):"https://picsum.photos/150/225",alt:"actor"}),(0,f.jsx)("h3",{children:r}),(0,f.jsxs)("p",{children:["Role: ",e]})]},a)}))}):(0,f.jsx)(p.Qf,{children:"Sorry, we didn't find any information for this movie"})})}},811:function(n,t,r){r.d(t,{Au:function(){return o},Qf:function(){return d},dh:function(){return f},ds:function(){return p}});var e,a,c,u,i=r(168),s=r(924),o=s.ZP.div(e||(e=(0,i.Z)(["\n  padding: 20px;\n"]))),p=s.ZP.ul(a||(a=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 30px;\n"]))),f=s.ZP.li(c||(c=(0,i.Z)(["\n  display: inline-block;\n  width: 100%;\n  max-width: 150px;\n\n  h3 {\n    font-size: 16px;\n  }\n\n  p {\n    font-size: 13px;\n  }\n"]))),d=s.ZP.p(u||(u=(0,i.Z)(["\n  font-size: 20px;\n"])))}}]);
//# sourceMappingURL=247.a9e121b0.chunk.js.map