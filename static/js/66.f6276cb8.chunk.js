(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[66],{1736:function(e,s,c){"use strict";c.r(s);var t=c(35),a=c(1),l=c(5),i=c.n(l),n=c(2),r=c.n(n),j=c(888),d=c(845),b=c(866),m=c(950),h=c(908),o=c(909),x=c(902),O=c(969),g=c(923),u=c(487),N=c(767),p=c(485),v=c(483),f=c(97),y=(c(668),c(98)),C=c(10);s.default=function(){var e=Object(a.useState)(null),s=Object(t.a)(e,2),c=s[0],l=s[1];Object(a.useEffect)((function(){i.a.get("/blog/list/data/detail").then((function(e){return l(e.data)}))}),[]);var n={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"};return Object(C.jsxs)(a.Fragment,{children:[Object(C.jsx)(v.a,{breadCrumbTitle:"Blog Details",breadCrumbParent:"Pages",breadCrumbParent2:"Blog",breadCrumbActive:"Details"}),Object(C.jsxs)("div",{className:"blog-wrapper",children:[Object(C.jsx)("div",{className:"content-detached content-left",children:Object(C.jsx)("div",{className:"content-body",children:null!==c?Object(C.jsxs)(f.ib,{children:[Object(C.jsx)(f.B,{sm:"12",children:Object(C.jsxs)(f.l,{className:"mb-3",children:[Object(C.jsx)(f.q,{src:c.blog.img,className:"img-fluid",top:!0}),Object(C.jsxs)(f.m,{children:[Object(C.jsx)(f.v,{tag:"h4",children:c.blog.title}),Object(C.jsxs)("div",{className:"d-flex",children:[Object(C.jsx)(p.a,{className:"me-50",img:c.blog.avatar,imgHeight:"24",imgWidth:"24"}),Object(C.jsxs)("div",{children:[Object(C.jsx)("small",{className:"text-muted me-25",children:"by"}),Object(C.jsx)("small",{children:Object(C.jsx)("a",{className:"text-body",href:"/",onClick:function(e){return e.preventDefault()},children:c.blog.userFullName})}),Object(C.jsx)("span",{className:"text-muted ms-50 me-25",children:"|"}),Object(C.jsx)("small",{className:"text-muted",children:c.blog.createdTime})]})]}),Object(C.jsx)("div",{className:"my-1 py-25",children:c.blog.tags.map((function(e,s){return Object(C.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(C.jsx)(f.f,{className:r()({"me-50":s!==c.blog.tags.length-1}),color:n[e],pill:!0,children:e})},s)}))}),Object(C.jsx)("div",{dangerouslySetInnerHTML:{__html:c.blog.content}}),Object(C.jsxs)("div",{className:"d-flex",children:[Object(C.jsx)("div",{children:Object(C.jsx)(p.a,{img:y.default,className:"me-2",imgHeight:"60",imgWidth:"60"})}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h6",{className:"fw-bolder",children:"Willie Clark"}),Object(C.jsx)(f.u,{className:"mb-0",children:"Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world."})]})]}),Object(C.jsx)("hr",{className:"my-2"}),Object(C.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(C.jsxs)("div",{className:"d-flex align-items-center",children:[Object(C.jsxs)("div",{className:"d-flex align-items-center me-1",children:[Object(C.jsx)("a",{className:"me-50",href:"/",onClick:function(e){return e.preventDefault()},children:Object(C.jsx)(d.a,{size:21,className:"text-body align-middle"})}),Object(C.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(C.jsx)("div",{className:"text-body align-middle",children:Object(u.g)(c.blog.comments)})})]}),Object(C.jsxs)("div",{className:"d-flex align-items-cente",children:[Object(C.jsx)("a",{className:"me-50",href:"/",onClick:function(e){return e.preventDefault()},children:Object(C.jsx)(b.a,{size:21,className:"text-body align-middle"})}),Object(C.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(C.jsx)("div",{className:"text-body align-middle",children:c.blog.bookmarked})})]})]}),Object(C.jsxs)(f.wb,{className:"dropdown-icon-wrapper",children:[Object(C.jsx)(f.G,{tag:"span",children:Object(C.jsx)(m.a,{size:21,className:"text-body cursor-pointer"})}),Object(C.jsxs)(f.F,{end:!0,children:[Object(C.jsx)(f.E,{className:"py-50 px-1",children:Object(C.jsx)(h.a,{size:18})}),Object(C.jsx)(f.E,{className:"py-50 px-1",children:Object(C.jsx)(o.a,{size:18})}),Object(C.jsx)(f.E,{className:"py-50 px-1",children:Object(C.jsx)(x.a,{size:18})}),Object(C.jsx)(f.E,{className:"py-50 px-1",children:Object(C.jsx)(O.a,{size:18})}),Object(C.jsx)(f.E,{className:"py-50 px-1",children:Object(C.jsx)(g.a,{size:18})})]})]})]})]})]})}),Object(C.jsxs)(f.B,{sm:"12",id:"blogComment",children:[Object(C.jsx)("h6",{className:"section-label",children:"Comment"}),c.comments.map((function(e){return Object(C.jsx)(f.l,{className:"mb-3",children:Object(C.jsx)(f.m,{children:Object(C.jsxs)("div",{className:"d-flex",children:[Object(C.jsx)("div",{children:Object(C.jsx)(p.a,{className:"me-75",img:e.avatar,imgHeight:"38",imgWidth:"38"})}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h6",{className:"fw-bolder mb-25",children:e.userFullName}),Object(C.jsx)(f.u,{children:e.commentedAt}),Object(C.jsx)(f.u,{children:e.commentText}),Object(C.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(C.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(C.jsx)(j.a,{size:18,className:"me-50"}),Object(C.jsx)("span",{children:"Reply"})]})})]})]})})},e.userFullName)}))]}),Object(C.jsxs)(f.B,{sm:"12",children:[Object(C.jsx)("h6",{className:"section-label",children:"Leave a Comment"}),Object(C.jsx)(f.l,{children:Object(C.jsx)(f.m,{children:Object(C.jsx)(f.H,{className:"form",onSubmit:function(e){return e.preventDefault()},children:Object(C.jsxs)(f.ib,{children:[Object(C.jsx)(f.B,{sm:"6",children:Object(C.jsx)("div",{className:"mb-2",children:Object(C.jsx)(f.K,{placeholder:"Name"})})}),Object(C.jsx)(f.B,{sm:"6",children:Object(C.jsx)("div",{className:"mb-2",children:Object(C.jsx)(f.K,{type:"email",placeholder:"Email"})})}),Object(C.jsx)(f.B,{sm:"6",children:Object(C.jsx)("div",{className:"mb-2",children:Object(C.jsx)(f.K,{type:"url",placeholder:"Website"})})}),Object(C.jsx)(f.B,{sm:"12",children:Object(C.jsx)("div",{className:"mb-2",children:Object(C.jsx)(f.K,{className:"mb-2",type:"textarea",rows:"4",placeholder:"Comment"})})}),Object(C.jsx)(f.B,{sm:"12",children:Object(C.jsxs)("div",{className:"form-check mb-2",children:[Object(C.jsx)(f.K,{type:"checkbox",id:"save-data-checkbox"}),Object(C.jsx)(f.N,{className:"form-check-label",for:"save-data-checkbox",children:"Save my name, email, and website in this browser for the next time I comment."})]})}),Object(C.jsx)(f.B,{sm:"12",children:Object(C.jsx)(f.i,{color:"primary",children:"Post Comment"})})]})})})})]})]}):null})}),Object(C.jsx)(N.a,{})]})]})}},483:function(e,s,c){"use strict";var t=c(484),a=c(911),l=c(844),i=c(845),n=c(843),r=c(869),j=c(97),d=c(10);s.a=function(e){var s=e.breadCrumbTitle,c=e.breadCrumbParent,b=e.breadCrumbParent2,m=e.breadCrumbParent3,h=e.breadCrumbActive;return Object(d.jsxs)("div",{className:"content-header row",children:[Object(d.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(d.jsx)("div",{className:"row breadcrumbs-top",children:Object(d.jsxs)("div",{className:"col-12",children:[s?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:s}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(j.g,{children:[Object(d.jsx)(j.h,{tag:"li",children:Object(d.jsx)(t.b,{to:"/",children:"Home"})}),Object(d.jsx)(j.h,{tag:"li",className:"text-primary",children:c}),b?Object(d.jsx)(j.h,{tag:"li",className:"text-primary",children:b}):"",m?Object(d.jsx)(j.h,{tag:"li",className:"text-primary",children:m}):"",Object(d.jsx)(j.h,{tag:"li",active:!0,children:h})]})})]})})}),Object(d.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(d.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(d.jsxs)(j.tb,{children:[Object(d.jsx)(j.G,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(d.jsx)(a.a,{size:14})}),Object(d.jsxs)(j.F,{tag:"ul",end:!0,children:[Object(d.jsxs)(j.E,{tag:t.b,to:"/apps/todo",children:[Object(d.jsx)(l.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(d.jsxs)(j.E,{tag:t.b,to:"/apps/chat",children:[Object(d.jsx)(i.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(d.jsxs)(j.E,{tag:t.b,to:"/apps/email",children:[Object(d.jsx)(n.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(d.jsxs)(j.E,{tag:t.b,to:"/apps/calendar",children:[Object(d.jsx)(r.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},668:function(e,s,c){},767:function(e,s,c){"use strict";var t=c(35),a=c(484),l=c(1),i=c(5),n=c.n(i),r=c(2),j=c.n(r),d=c(482),b=c(850),m=c(485),h=c(97),o=c(10);s.a=function(){var e=Object(l.useState)(null),s=Object(t.a)(e,2),c=s[0],i=s[1];Object(l.useEffect)((function(){n.a.get("/blog/list/data/sidebar").then((function(e){return i(e.data)}))}),[]);var r={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"};return Object(o.jsx)("div",{className:"sidebar-detached sidebar-right",children:Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)("div",{className:"blog-sidebar right-sidebar my-2 my-lg-0",children:Object(o.jsxs)("div",{className:"right-sidebar-content",children:[Object(o.jsx)("div",{className:"blog-search",children:Object(o.jsxs)(h.L,{className:"input-group-merge",children:[Object(o.jsx)(h.K,{placeholder:"Search here"}),Object(o.jsx)(h.M,{children:Object(o.jsx)(b.a,{size:14})})]})}),null!==c?Object(o.jsxs)(l.Fragment,{children:[Object(o.jsxs)("div",{className:"blog-recent-posts mt-3",children:[Object(o.jsx)("h6",{className:"section-label",children:"Recent Posts"}),Object(o.jsx)("div",{className:"mt-75",children:c.recentPosts.map((function(e,s){return Object(o.jsxs)("div",{className:j()("d-flex",{"mb-2":s!==c.recentPosts.length-1}),children:[Object(o.jsx)(a.b,{className:"me-2",to:"/pages/blog/detail/".concat(e.id),children:Object(o.jsx)("img",{className:"rounded",src:e.img,alt:e.title,width:"100",height:"70"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h6",{className:"blog-recent-post-title",children:Object(o.jsx)(a.b,{className:"text-body-heading",to:"/pages/blog/detail/".concat(e.id),children:e.title})}),Object(o.jsx)("div",{className:"text-muted mb-0",children:e.createdTime})]})]},s)}))})]}),Object(o.jsxs)("div",{className:"blog-categories mt-3",children:[Object(o.jsx)("h6",{className:"section-label",children:"Categories"}),Object(o.jsx)("div",{className:"mt-1",children:c.categories.map((function(e,s){var t=d[e.icon];return Object(o.jsxs)("div",{className:j()("d-flex justify-content-start align-items-center",{"mb-75":s!==c.categories.length-1}),children:[Object(o.jsx)("a",{className:"me-75",href:"/",onClick:function(e){return e.preventDefault()},children:Object(o.jsx)(m.a,{className:"rounded",color:r[e.category],icon:Object(o.jsx)(t,{size:15})})}),Object(o.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(o.jsx)("div",{className:"blog-category-title text-body",children:e.category})})]},s)}))})]})]}):null]})})})})}}}]);
//# sourceMappingURL=66.f6276cb8.chunk.js.map