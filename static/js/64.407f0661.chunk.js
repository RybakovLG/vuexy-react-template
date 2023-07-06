(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[64],{1845:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s(483),r=s(13),n=s(35),l=s(2),i=s.n(l),d=s(574),j=s(873),o=s(832),b=s(945),h=s(97),m=s(10),O=function(e){var c=e.title,s=e.actions,a=e.children,l=e.collapseIcon,O=e.reloadIcon,x=e.removeIcon,u=e.endReload,p=Object(t.useState)(!1),g=Object(n.a)(p,2),v=g[0],N=g[1],f=Object(t.useState)(!0),C=Object(n.a)(f,2),y=C[0],z=C[1],k=Object(t.useState)(!0),w=Object(n.a)(k,2),R=w[0],A=w[1],E={collapse:l||j.a,remove:x||o.a,reload:O||b.a},T=function(e){switch(e){case"collapse":return z(!y);case"remove":return A(!1);case"reload":return N(!0)}},F=function(){N(!1)};Object(t.useEffect)((function(){v&&u(F)}));var P="collapse"===s||s.includes("collapse")?h.C:t.Fragment,B="reload"===s||s.includes("reload")?d.a:t.Fragment;return Object(m.jsx)(B,Object(r.a)(Object(r.a)({},"reload"===s||s.includes("reload")?{blocking:v}:{}),{},{children:Object(m.jsxs)(h.l,{className:i()("card-action",{"d-none":!R}),children:[Object(m.jsxs)(h.p,{children:[Object(m.jsx)(h.v,{tag:"h4",children:c}),Object(m.jsx)("div",{className:"action-icons",children:function(){if(Array.isArray(s))return s.map((function(e,c){var t=E[e];return Object(m.jsx)(t,{className:i()("cursor-pointer",{"me-50":c<s.length-1}),size:15,onClick:function(){return T(e)}},c)}));var e=E[s];return Object(m.jsx)(e,{className:"cursor-pointer",size:15,onClick:function(){return T(s)}})}()})]}),Object(m.jsx)(P,Object(r.a)(Object(r.a)({},"collapse"===s||s.includes("collapse")?{isOpen:y}:{}),{},{children:a}))]})}))};c.default=function(){return Object(m.jsxs)(t.Fragment,{children:[Object(m.jsx)(a.a,{breadCrumbTitle:"Card Actions",breadCrumbParent:"Card",breadCrumbActive:"Card Actions"}),Object(m.jsx)(h.ib,{children:Object(m.jsx)(h.B,{sm:"12",children:Object(m.jsx)(O,{title:"Card Actions",actions:["collapse","reload","remove"],endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(m.jsx)(h.m,{className:"pt-0",children:Object(m.jsxs)(h.mb,{responsive:!0,bordered:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Action"}),Object(m.jsx)("th",{children:"Icon"}),Object(m.jsx)("th",{children:"Details"})]})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Collapse"}),Object(m.jsx)("td",{className:"text-center",children:Object(m.jsx)(j.a,{className:"collapse-icon",size:15})}),Object(m.jsx)("td",{children:" Collapse card content using collapse action."})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Refresh Content"}),Object(m.jsx)("td",{className:"text-center",children:Object(m.jsx)(b.a,{size:15})}),Object(m.jsx)("td",{children:"Refresh your card content using refresh action."})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Remove Card"}),Object(m.jsx)("td",{className:"text-center",children:Object(m.jsx)(o.a,{size:15})}),Object(m.jsx)("td",{children:" Remove card from page using remove card action"})]})]})]})})})})}),Object(m.jsxs)(h.ib,{children:[Object(m.jsx)(h.B,{md:"6",sm:"12",children:Object(m.jsx)(O,{title:"Collapse",actions:"collapse",children:Object(m.jsxs)(h.m,{className:"pt-0",children:[Object(m.jsxs)(h.u,{children:["You can create a collapsible content by using our ",Object(m.jsx)("code",{children:"CardAction"})," component and by passing prop"," ",Object(m.jsx)("code",{children:"actions='collapse'"}),"."]}),Object(m.jsxs)(h.u,{className:"mb-0",children:["Click on ",Object(m.jsx)(j.a,{size:15})," to see card collapse in action"]})]})})}),Object(m.jsx)(h.B,{md:"6",sm:"12",children:Object(m.jsx)(O,{title:"Reload",actions:"reload",endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(m.jsxs)(h.m,{className:"pt-0",children:[Object(m.jsxs)(h.u,{children:["To create a re-loadable card pass prop ",Object(m.jsx)("code",{children:"actions='reload'"})," and pass prop"," ",Object(m.jsx)("code",{children:"endReload"})," to end the loading."]}),Object(m.jsxs)(h.u,{className:"mb-0",children:["Click on ",Object(m.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})}),Object(m.jsx)(h.B,{md:"6",sm:"12",children:Object(m.jsx)(O,{title:"Remove",actions:"remove",children:Object(m.jsxs)(h.m,{className:"pt-0",children:[Object(m.jsxs)(h.u,{children:["You can add refresh content action to card by adding class ",Object(m.jsx)("code",{children:".card-reload"})," with your card tag, and add conditional spinner into card body to show when card is refreshing."]}),Object(m.jsxs)(h.u,{className:"mb-0",children:["Click on ",Object(m.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})})]})]})}},483:function(e,c,s){"use strict";var t=s(484),a=s(911),r=s(844),n=s(845),l=s(843),i=s(869),d=s(97),j=s(10);c.a=function(e){var c=e.breadCrumbTitle,s=e.breadCrumbParent,o=e.breadCrumbParent2,b=e.breadCrumbParent3,h=e.breadCrumbActive;return Object(j.jsxs)("div",{className:"content-header row",children:[Object(j.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(j.jsx)("div",{className:"row breadcrumbs-top",children:Object(j.jsxs)("div",{className:"col-12",children:[c?Object(j.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(j.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(j.jsxs)(d.g,{children:[Object(j.jsx)(d.h,{tag:"li",children:Object(j.jsx)(t.b,{to:"/",children:"Home"})}),Object(j.jsx)(d.h,{tag:"li",className:"text-primary",children:s}),o?Object(j.jsx)(d.h,{tag:"li",className:"text-primary",children:o}):"",b?Object(j.jsx)(d.h,{tag:"li",className:"text-primary",children:b}):"",Object(j.jsx)(d.h,{tag:"li",active:!0,children:h})]})})]})})}),Object(j.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(j.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(j.jsxs)(d.tb,{children:[Object(j.jsx)(d.G,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(j.jsx)(a.a,{size:14})}),Object(j.jsxs)(d.F,{tag:"ul",end:!0,children:[Object(j.jsxs)(d.E,{tag:t.b,to:"/apps/todo",children:[Object(j.jsx)(r.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(j.jsxs)(d.E,{tag:t.b,to:"/apps/chat",children:[Object(j.jsx)(n.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(j.jsxs)(d.E,{tag:t.b,to:"/apps/email",children:[Object(j.jsx)(l.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(j.jsxs)(d.E,{tag:t.b,to:"/apps/calendar",children:[Object(j.jsx)(i.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},574:function(e,c,s){"use strict";var t=s(13),a=s(19),r=s(1),n=s(2),l=s.n(n),i=s(97),d=(s(664),s(10)),j=function(e){var c,s=e.children,n=e.blocking,i=e.loader,j=e.className,o=e.tag,b=e.overlayColor,h=o;return Object(d.jsxs)(h,{className:l()("ui-loader",(c={},Object(a.a)(c,j,j),Object(a.a)(c,"show",n),c)),children:[s,n?Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)("div",Object(t.a)({className:"overlay"},n&&b?{style:{backgroundColor:b}}:{})),Object(d.jsx)("div",{className:"loader",children:i})]}):null]})};c.a=j,j.defaultProps={tag:"div",blocking:!1,loader:Object(d.jsx)(i.jb,{color:"primary"})}},664:function(e,c,s){}}]);
//# sourceMappingURL=64.407f0661.chunk.js.map