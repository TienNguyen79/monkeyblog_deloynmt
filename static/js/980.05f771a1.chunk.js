"use strict";(self.webpackChunkreact_monkey_blogging_boilerplate=self.webpackChunkreact_monkey_blogging_boilerplate||[]).push([[980,791],{6791:function(n,e,t){t.r(e);var i,a=t(168),o=(t(2791),t(6871)),r=t(6031),s=t(184),c=r.ZP.div(i||(i=(0,a.Z)(["\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: ",";\n  color: white;\n  .page-content {\n    max-width: 1000px;\n    margin: 0 auto;\n    text-align: center;\n  }\n  .logo {\n    display: inline-block;\n    margin-bottom: 40px;\n  }\n  .heading {\n    font-size: 60px;\n    font-weight: bold;\n    margin-bottom: 20px;\n  }\n  .description {\n    max-width: 800px;\n    margin: 0 auto 40px;\n  }\n  .back {\n    display: inline-block;\n    padding: 15px 30px;\n    color: white;\n    background-image: linear-gradient(\n      to right top,\n      ",",\n      ","\n    );\n    border-radius: 8px;\n    font-weight: 500;\n    cursor: pointer;\n  }\n  .image {\n    max-width: 250px;\n    margin: 0 auto 40px;\n  }\n"])),(function(n){return n.theme.black}),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary}));e.default=function(){var n=(0,o.s0)();return(0,s.jsx)(c,{children:(0,s.jsxs)("div",{className:"page-content",children:[(0,s.jsx)("img",{src:"/404.png",alt:"notfound",className:"image"}),(0,s.jsx)("h1",{className:"heading",children:"404 - Looks like you're lost."}),(0,s.jsx)("p",{className:"description",children:"Maybe this page used to exist or you just spelled something wrong. Chances are your spelled something wrong, so can you double check the URL?"}),(0,s.jsx)("button",{onClick:function(){return n("/")},className:"back",children:"Go back"})]})})}},6980:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var i,a=t(5861),o=t(9439),r=t(168),s=t(7757),c=t.n(s),d=t(2791),l=t(6031),u=t(4631),h=t(7149),p=t(238),x=t(6795),m=t(7386),g=t(9748),f=t(6871),b=t(6791),v=t(3540),j=t(9062),y=t(1199),w=t(1413),k=t(184),N=function(n){var e=n.categoryId,t=void 0===e?"":e,i=(0,d.useState)([]),a=(0,o.Z)(i,2),r=a[0],s=a[1];return(0,d.useEffect)((function(){var n=(0,j.IO)((0,j.hJ)(y.db,"posts"),(0,j.ar)("category.id","==",t));(0,j.cf)(n,(function(n){var e=[];n.forEach((function(n){e.push((0,w.Z)({id:n.id},n.data()))})),s(e)}))}),[t]),!t||r.length<=0?null:(0,k.jsxs)("div",{className:"post-related",children:[(0,k.jsx)(m.Z,{children:"Related Posts"}),(0,k.jsx)("div",{className:"grid-layout grid-layout--primary",children:r.map((function(n){return(0,k.jsx)(g.Z,{data:n},n.id)}))})]})},Z=l.ZP.div(i||(i=(0,r.Z)(["\n  padding-bottom: 100px;\n  .post {\n    &-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      gap: 40px;\n      margin: 40px 0;\n    }\n    &-feature {\n      width: 100%;\n      max-width: 640px;\n      height: 466px;\n      border-radius: 20px;\n    }\n    &-heading {\n      font-weight: bold;\n      font-size: 36px;\n      margin-bottom: 16px;\n    }\n    &-info {\n      flex: 1;\n    }\n    &-content {\n      max-width: 700px;\n      margin: 80px auto;\n    }\n  }\n  .author {\n    margin-top: 40px;\n    margin-bottom: 80px;\n    display: flex;\n    border-radius: 20px;\n    background-color: ",";\n    &-image {\n      width: 200px;\n      height: 200px;\n      flex-shrink: 0;\n      border-radius: inherit;\n    }\n    &-image img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      border-radius: inherit;\n    }\n    &-content {\n      flex: 1;\n      padding: 20px;\n    }\n    &-name {\n      font-weight: bold;\n      margin-bottom: 10px;\n      font-size: 20px;\n    }\n    &-desc {\n      font-size: 14px;\n      line-height: 2;\n    }\n  }\n  @media (max-width: 640px) {\n    padding-bottom: 40px;\n    .post {\n      &-header {\n        flex-direction: column;\n      }\n      &-feature {\n        height: auto;\n      }\n      &-heading {\n        font-size: 26px;\n      }\n      &-content {\n        margin: 40px 0;\n      }\n    }\n    .author {\n      flex-direction: column;\n      &-image {\n        width: 100%;\n        height: auto;\n      }\n    }\n  }\n  /* Tablet styles (>=768px and <1024px) */\n  @media (min-width: 768px) and (max-width: 1023px) {\n    /* Tablet styles */\n    .post-feature {\n      width: 400px;\n      height: 300px;\n    }\n  }\n"])),(function(n){return n.theme.grayF3})),I=function(){var n,e,t,i,r=(0,f.UO)().slug,s=(0,d.useState)({}),l=(0,o.Z)(s,2),m=l[0],g=l[1];return(0,d.useEffect)((function(){function n(){return(n=(0,a.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=2;break}return n.abrupt("return");case 2:e=(0,j.IO)((0,j.hJ)(y.db,"posts"),(0,j.ar)("slug","==",r)),(0,j.cf)(e,(function(n){n.forEach((function(n){n.data()&&g(n.data())}))}));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[r]),(0,d.useEffect)((function(){document.body.scrollIntoView({behavior:"smooth",block:"start"})}),[r]),r?m.title?(0,k.jsx)(Z,{children:(0,k.jsx)(u.Z,{children:(0,k.jsxs)("div",{className:"container-primary",children:[(0,k.jsxs)("div",{className:"post-header",children:[(0,k.jsx)(h.Z,{url:m.image,className:"post-feature"}),(0,k.jsxs)("div",{className:"post-info",children:[(0,k.jsx)(p.Z,{className:"mb-6",to:null===(n=m.category)||void 0===n?void 0:n.slug,children:m.category.name}),(0,k.jsx)("h1",{className:"post-heading",children:m.title}),(0,k.jsx)(x.Z,{to:null===(e=m.user)||void 0===e?void 0:e.username,author:m.user.fullname,date:new Date(1e3*(null===m||void 0===m||null===(t=m.createdAt)||void 0===t?void 0:t.seconds)).toLocaleDateString("vi-VI")})]})]}),(0,k.jsxs)("div",{className:"post-content",children:[(0,k.jsx)("div",{className:"entry-content",children:(0,v.ZP)(m.content||"")}),(0,k.jsxs)("div",{className:"author",children:[(0,k.jsx)("div",{className:"author-image",children:(0,k.jsx)("img",{src:m.user.avatar,alt:""})}),(0,k.jsxs)("div",{className:"author-content",children:[(0,k.jsx)("h3",{className:"author-name",children:m.user.fullname}),(0,k.jsx)("p",{className:"author-desc",children:m.user.description})]})]})]}),(0,k.jsx)(N,{categoryId:null===m||void 0===m||null===(i=m.category)||void 0===i?void 0:i.id})]})})}):null:(0,k.jsx)(b.default,{})}}}]);
//# sourceMappingURL=980.05f771a1.chunk.js.map