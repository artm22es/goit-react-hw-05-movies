"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{687:function(t,n,r){r.d(n,{E3:function(){return h},Hx:function(){return p},PY:function(){return i},Y5:function(){return o},uV:function(){return f}});var e=r(861),a=r(757),u=r.n(a),c=r(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="879ff30e220a7b6f7fd01273465d82d0",i=function(){var t=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/all/day?api_key=".concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},186:function(t,n,r){r.r(n),r.d(n,{default:function(){return p}});var e=r(861),a=r(439),u=r(757),c=r.n(u),s=r(687),i=r(791),o=r(689),f=r(184);function p(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),r=n[0],u=n[1],p=(0,o.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Hx)(p);case 2:n=t.sent,u(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[p]),(0,f.jsx)("div",{children:r.length>0?(0,f.jsx)("ul",{children:r.map((function(t){var n=t.author,r=t.content,e=t.id;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",n]}),(0,f.jsx)("p",{children:r})]},e)}))}):(0,f.jsx)("p",{children:"There is nothing to show"})})}}}]);
//# sourceMappingURL=186.d78abde3.chunk.js.map