"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[574],{687:function(n,t,e){e.d(t,{Hx:function(){return f},PY:function(){return u},Y5:function(){return s},uV:function(){return p}});var r=e(861),a=e(757),c=e.n(a),o=e(294);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="879ff30e220a7b6f7fd01273465d82d0",u=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},121:function(n,t,e){e.d(t,{B:function(){return a}});var r=e(184),a=function(){return(0,r.jsx)("p",{children:"Something went wrong, please reload this page"})}},574:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,c,o,i,u=e(861),s=e(439),p=e(757),f=e.n(p),l=e(687),h=e(121),d=e(579),m=e(689),x=e(168),v=e(87),g=e(924),w=g.ZP.ul(r||(r=(0,x.Z)(["\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(5)})),Z=g.ZP.li(a||(a=(0,x.Z)(["\n  flex-basis: calc((100% - 100px) / 5);\n  max-height: 100%;\n  min-height: 390px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.shadows.mainShadow})),b=(0,g.ZP)(v.rU)(c||(c=(0,x.Z)(["\n  object-fit: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n\n  &:hover img {\n    filter: grayscale(0);\n  }\n\n  &:hover p {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent})),k=g.ZP.img(o||(o=(0,x.Z)(["\n  margin-bottom: 5px;\n  filter: grayscale(0.4);\n\n  transition: all 200ms ease-in-out;\n"]))),y=g.ZP.p(i||(i=(0,x.Z)(["\n  height: 100%;\n  padding: 10px 8px;\n  font-weight: 500;\n  font-size: 18px;\n  transition: all 200ms ease-in-out;\n"]))),j=e(184),_=function(n){var t=n.movies,e=(0,m.TH)();return(0,j.jsx)(w,{children:t.map((function(n){var t=n.id,r=n.title,a=n.name,c=n.poster_path;return(0,j.jsx)(Z,{children:(0,j.jsxs)(b,{to:"/movies/".concat(t),state:{from:e},children:[(0,j.jsx)(k,{src:c?"".concat("https://image.tmdb.org/t/p/w500","/").concat(c):"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>",alt:"poster"}),(0,j.jsx)(y,{children:null!==r&&void 0!==r?r:a})]})},t)}))})},P=e(791);function S(){var n=(0,P.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,P.useState)(!1),c=(0,s.Z)(a,2),o=c[0],i=c[1],p=(0,P.useState)(!1),m=(0,s.Z)(p,2),x=m[0],v=m[1];return(0,P.useEffect)((function(){function n(){return(n=(0,u.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i(!0),v(!1),n.next=5,(0,l.PY)();case 5:t=n.sent,r(t.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),v(!0);case 12:return n.prev=12,i(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,j.jsxs)(j.Fragment,{children:[x&&(0,j.jsx)(h.B,{}),o&&(0,j.jsx)(d.a,{}),(0,j.jsx)(_,{movies:e})]})}}}]);
//# sourceMappingURL=574.1fb85930.chunk.js.map