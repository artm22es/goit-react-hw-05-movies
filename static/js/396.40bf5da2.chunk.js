"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[396],{687:function(n,e,t){t.d(e,{E3:function(){return f},Hx:function(){return l},PY:function(){return s},Y5:function(){return u},uV:function(){return p}});var r=t(861),o=t(757),i=t.n(o),a=t(294);a.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="879ff30e220a7b6f7fd01273465d82d0",s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/all/day?api_key=".concat(c));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},121:function(n,e,t){t.d(e,{B:function(){return s}});var r,o=t(168),i=t(924),a=t(184),c=i.ZP.p(r||(r=(0,o.Z)(["\n  padding: 20px;\n  color: ",";\n  font-size: 20px;\n"])),(function(n){return n.theme.colors.focusColor})),s=function(){return(0,a.jsx)(c,{children:"Something went wrong..."})}},396:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,o,i,a,c,s,u,p,l,f,d,x=t(861),h=t(439),v=t(757),m=t.n(v),Z=t(687),g=t(168),j=t(87),w=t(924),k=w.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 20px;\n"]))),b=w.ZP.h3(o||(o=(0,g.Z)(["\n  padding-right: 215px;\n  font-size: 20px;\n"]))),y=w.ZP.ul(i||(i=(0,g.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),P=(0,w.ZP)(j.OL)(a||(a=(0,g.Z)(["\n  font-size: 20px;\n  text-transform: uppercase;\n  transition: color 200ms linear;\n\n  &:hover {\n    color: ",";\n  }\n\n  &.active {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.focusColor}),(function(n){return n.theme.colors.focusColor})),_=t(184),C=function(){return(0,_.jsxs)(k,{children:[(0,_.jsx)(b,{children:"Additional information :"}),(0,_.jsxs)(y,{children:[(0,_.jsx)("li",{children:(0,_.jsx)(P,{to:"cast",children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(P,{to:"reviews",children:"Reviews"})})]})]})},z=(0,w.ZP)(j.rU)(c||(c=(0,g.Z)(["\n  text-transform: uppercase;\n  padding: 20px;\n  font-size: 14px;\n  transition: color 200ms linear;\n\n  &:hover,\n  &:focus {\n    color: ",";\n"])),(function(n){return n.theme.colors.focusColor})),L=function(n){var e=n.backLink;return(0,_.jsx)(z,{to:e.current,children:"\u2190 Go back"})},R=t(121),S=t(579),D=w.ZP.div(s||(s=(0,g.Z)(["\n  padding: 30px 20px;\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.colors.focusColor})),U=w.ZP.div(u||(u=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Y=w.ZP.h1(p||(p=(0,g.Z)(["\n  padding-bottom: 40px;\n  font-size: 50px;\n  color: ",";\n"])),(function(n){return n.theme.colors.focusColor})),B=w.ZP.p(l||(l=(0,g.Z)(["\n  font-size: 20px;\n  padding-bottom: 20px;\n  padding-right: 40px;\n"]))),E=w.ZP.div(f||(f=(0,g.Z)(["\n  display: flex;\n  align-iems: center;\n  gap: 10px;\n  font-size: 20px;\n"]))),F=w.ZP.ul(d||(d=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),G=function(n){var e=n.movie,t=e.poster_path,r=e.original_title,o=e.overview,i=e.vote_average,a=e.release_date;return(0,_.jsxs)(D,{children:[(0,_.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w400","/").concat(t):"https://picsum.photos/400/600",width:400,alt:r}),(0,_.jsxs)(U,{children:[(0,_.jsx)(Y,{children:r}),(0,_.jsx)(B,{children:o}),(0,_.jsxs)(B,{children:["Rating: ",i.toFixed(1),"/10"]}),(0,_.jsxs)(B,{children:["Release Date: ",new Date(a).toLocaleDateString()]}),(0,_.jsxs)(E,{children:[(0,_.jsx)("p",{children:"Genre:"}),(0,_.jsx)(F,{children:e.genres.map((function(n){var e=n.id,t=n.name;return(0,_.jsx)("li",{children:t},e)}))})]})]})]})},H=t(791),O=t(689);function q(){var n,e,t=(0,H.useState)(null),r=(0,h.Z)(t,2),o=r[0],i=r[1],a=(0,H.useState)(!1),c=(0,h.Z)(a,2),s=c[0],u=c[1],p=(0,O.UO)().movieId,l=(0,O.TH)(),f=(0,H.useRef)(null!==(n=null===(e=l.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,H.useEffect)((function(){function n(){return(n=(0,x.Z)(m().mark((function n(){var e;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!1),n.next=4,(0,Z.Y5)(p);case 4:e=n.sent,i(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),u(!0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[p]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(L,{backLink:f}),s&&(0,_.jsx)(R.B,{}),o&&(0,_.jsxs)("div",{children:[(0,_.jsx)(G,{movie:o}),(0,_.jsx)(C,{}),(0,_.jsx)(H.Suspense,{fallback:(0,_.jsx)(S.a,{}),children:(0,_.jsx)(O.j3,{})})]})]})}}}]);
//# sourceMappingURL=396.40bf5da2.chunk.js.map