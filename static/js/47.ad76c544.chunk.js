(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[47],{1475:function(e,s,t){},1787:function(e,s,t){"use strict";t.r(s);var c=t(35),a=t(1),i=t(5),l=t.n(i),r=t(574),n=t(483),j=t(97),d=t(2),m=t.n(d),b=t(485),o=t(10),x=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{children:[Object(o.jsx)("h5",{className:"mb-1",children:"Polls"}),Object(o.jsx)(j.u,{className:"mb-0",children:"Who is the best actor in Marvel Cinematic Universe?"}),s.map((function(e,s){return Object(o.jsxs)("div",{className:"profile-polls-info mt-2",children:[Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsxs)("div",{className:"form-check",children:[Object(o.jsx)(j.K,{type:"radio",name:"polls",id:"radio-".concat(e.name.toLowerCase())}),Object(o.jsx)(j.N,{className:"form-check-label",for:"radio-".concat(e.name.toLowerCase()),children:e.name})]}),Object(o.jsx)("div",{className:"text-end",children:e.result})]}),Object(o.jsx)(j.hb,{className:"my-50",value:e.result.replace("%"," ").trim()}),Object(o.jsx)("div",{className:m()("avatar-group",{"mt-1":s>0,"my-1":0===s}),children:e.votedUser.map((function(e){return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(b.a,{imgWidth:"26",imgHeight:"26",img:e.img,className:"pull-up",id:e.username.toLowerCase().split(" ").join("-")}),Object(o.jsx)(j.yb,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)}))})]},e.name)}))]})})},h=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{children:[Object(o.jsx)("h5",{className:"mb-75",children:"About"}),Object(o.jsx)(j.u,{children:s.about}),Object(o.jsxs)("div",{className:"mt-2",children:[Object(o.jsx)("h5",{className:"mb-75",children:"Joined:"}),Object(o.jsx)(j.u,{children:s.joined})]}),Object(o.jsxs)("div",{className:"mt-2",children:[Object(o.jsx)("h5",{className:"mb-75",children:"Lives:"}),Object(o.jsx)(j.u,{children:s.lives})]}),Object(o.jsxs)("div",{className:"mt-2",children:[Object(o.jsx)("h5",{className:"mb-75",children:"Email:"}),Object(o.jsx)(j.u,{children:s.email})]}),Object(o.jsxs)("div",{className:"mt-2",children:[Object(o.jsx)("h5",{className:"mb-75",children:"Website:"}),Object(o.jsx)(j.u,{children:s.website})]})]})})},O=t(838),u=t(845),f=t(950),N=function(e){return e.data.map((function(e){return Object(o.jsx)(j.l,{className:"post",children:Object(o.jsxs)(j.m,{children:[Object(o.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(o.jsx)(b.a,{className:"me-1",img:e.avatar,imgHeight:"50",imgWidth:"50"}),Object(o.jsxs)("div",{className:"profile-user-info",children:[Object(o.jsx)("h6",{className:"mb-0",children:e.username}),Object(o.jsx)("small",{className:"text-muted",children:e.postTime})]})]}),Object(o.jsx)(j.u,{children:e.postText}),e.postImg?Object(o.jsx)("img",{src:e.postImg,alt:e.username,className:"img-fluid rounded mb-75"}):e.postVid?Object(o.jsx)("iframe",{src:"https://www.youtube.com/embed/6stlCkUDG_s",className:"w-100 rounded height-250 mb-50 border-0"}):null,Object(o.jsxs)(j.ib,{className:"d-flex justify-content-start align-items-center flex-wrap pb-50 post-actions",children:[Object(o.jsxs)(j.B,{className:"d-flex justify-content-between justify-content-sm-start mb-2",sm:"6",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center text-muted text-nowrap cursor-pointer",children:[Object(o.jsx)(O.a,{size:18,className:m()("me-50",{"profile-likes":!0===e.youLiked})}),Object(o.jsx)("span",{children:e.likes})]}),Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsx)("div",{className:"avatar-group ms-1",children:e.likedUsers.map((function(e){return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(b.a,{className:"pull-up",img:e.avatar,id:e.username.toLowerCase().split(" ").join("-"),imgHeight:"26",imgWidth:"26"}),Object(o.jsx)(j.yb,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)}))}),Object(o.jsxs)("a",{href:"/",className:"text-muted text-nowrap ms-50",onClick:function(e){return e.preventDefault()},children:["+",e.likedCount," more"]})]})]}),Object(o.jsxs)(j.B,{className:"d-flex justify-content-between justify-content-sm-end align-items-center mb-2",sm:"6",children:[Object(o.jsxs)("a",{href:"/",className:"text-nowrap",onClick:function(e){return e.preventDefault()},children:[Object(o.jsx)(u.a,{size:18,className:"text-body me-50"}),Object(o.jsx)("span",{className:"text-muted me-1",children:e.comments})]}),Object(o.jsxs)("a",{href:"/",className:"text-nowrap share-post",onClick:function(e){return e.preventDefault()},children:[Object(o.jsx)(f.a,{size:18,className:"text-body mx-50"}),Object(o.jsx)("span",{className:"text-muted me-1",children:e.share})]})]})]}),e.detailedComments.map((function(e){return Object(o.jsxs)("div",{className:"d-flex align-items-start mb-1",children:[Object(o.jsx)(b.a,{img:e.avatar,className:"mt-25 me-75",imgHeight:"34",imgWidth:"34"}),Object(o.jsxs)("div",{className:"profile-user-info w-100",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(o.jsx)("h6",{className:"mb-0",children:e.username}),Object(o.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(o.jsx)(O.a,{size:18,className:m()("text-body",{"profile-likes":!0===e.youLiked})}),Object(o.jsx)("span",{className:"align-middle ms-25 text-muted",children:e.commentsLikes})]})]}),Object(o.jsx)("small",{children:e.comment})]})]},e.username)})),Object(o.jsxs)("fieldset",{className:"form-label-group mb-50",children:[Object(o.jsx)(j.N,{className:"form-check-label",for:"add-comment-".concat(e.username),children:"Add Comment"}),Object(o.jsx)(j.K,{id:"add-comment-".concat(e.username),type:"textarea",rows:"3",placeholder:"Add Comment"})]}),Object(o.jsx)(j.i,{color:"primary",size:"sm",children:"Post Comment"})]})},e.username)}))},p=t(854),g=t(946),v=t(916),w=t(914),y=t(975),k=t(898),C=function(e){var s=e.data,t=Object(a.useState)(!1),i=Object(c.a)(t,2),l=i[0],r=i[1];return Object(o.jsxs)(j.l,{className:"profile-header mb-2",children:[Object(o.jsx)(j.q,{src:s.coverImg,alt:"User Profile Image",top:!0}),Object(o.jsx)("div",{className:"position-relative",children:Object(o.jsxs)("div",{className:"profile-img-container d-flex align-items-center",children:[Object(o.jsx)("div",{className:"profile-img",children:Object(o.jsx)("img",{className:"rounded img-fluid",src:s.avatar,alt:"Card image"})}),Object(o.jsxs)("div",{className:"profile-title ms-3",children:[Object(o.jsx)("h2",{className:"text-white",children:s.username}),Object(o.jsx)("p",{className:"text-white",children:s.designation})]})]})}),Object(o.jsx)("div",{className:"profile-header-nav",children:Object(o.jsxs)(j.X,{container:!1,className:"justify-content-end justify-content-md-between w-100",expand:"md",light:!0,children:[Object(o.jsx)(j.i,{color:"",className:"btn-icon navbar-toggler",onClick:function(){return r(!l)},children:Object(o.jsx)(p.a,{size:21})}),Object(o.jsx)(j.C,{isOpen:l,navbar:!0,children:Object(o.jsxs)("div",{className:"profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0",children:[Object(o.jsxs)(j.U,{className:"mb-0",pills:!0,children:[Object(o.jsx)(j.V,{children:Object(o.jsxs)(j.W,{className:"fw-bold",active:!0,children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Feed"}),Object(o.jsx)(g.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(j.V,{children:Object(o.jsxs)(j.W,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"About"}),Object(o.jsx)(v.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(j.V,{children:Object(o.jsxs)(j.W,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Photos"}),Object(o.jsx)(w.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(j.V,{children:Object(o.jsxs)(j.W,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Friends"}),Object(o.jsx)(y.a,{className:"d-block d-md-none",size:14})]})})]}),Object(o.jsxs)(j.i,{color:"primary",children:[Object(o.jsx)(k.a,{className:"d-block d-md-none",size:14}),Object(o.jsx)("span",{className:"fw-bold d-none d-md-block",children:"Edit"})]})]})})]})})]})},z=t(871),P=t(958),W=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{children:[Object(o.jsx)("h5",{children:"Twitter Feeds"}),s.map((function(e,s){return Object(o.jsxs)("div",{className:m()("profile-twitter-feed",{"mt-1":0===s,"mt-2":0!==s}),children:[Object(o.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(o.jsx)(b.a,{className:"me-1",img:e.imgUrl,imgHeight:"40",imgWidth:"40"}),Object(o.jsxs)("div",{className:"profile-user-info",children:[Object(o.jsx)("h6",{className:"mb-0",children:e.title}),Object(o.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(o.jsxs)("small",{className:"text-muted",children:["@",e.id]}),Object(o.jsx)(z.a,{size:14})]})]}),Object(o.jsx)("div",{className:"profile-star ms-auto",children:Object(o.jsx)(P.a,{size:18,className:m()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]}),Object(o.jsx)(j.u,{className:"mb-50",children:e.desc}),Object(o.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(o.jsx)("small",{children:e.tags})})]},s)}))]})})},L=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{children:[Object(o.jsx)("h5",{className:"mb-0",children:"Latest Photos"}),Object(o.jsx)(j.ib,{children:s.map((function(e,s){return Object(o.jsx)(j.B,{md:"4",xs:"6",className:"profile-latest-img",children:Object(o.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(o.jsx)("img",{className:"img-fluid rounded",src:e.img,alt:"latest-photo"})})},s)}))})]})})},F=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{className:"profile-suggestion",children:[Object(o.jsx)("h5",{className:"mb-2",children:"Suggested Pages"}),s.map((function(e,t){return Object(o.jsxs)("div",{className:m()("d-flex justify-content-start align-items-center",{"mb-1":t!==s.length-1}),children:[Object(o.jsx)(b.a,{className:"me-1",img:e.avatar,imgHeight:40,imgWidth:40}),Object(o.jsxs)("div",{className:"profile-user-info",children:[Object(o.jsx)("h6",{className:"mb-0",children:e.username}),Object(o.jsx)("small",{className:"text-muted",children:e.subtitle})]}),Object(o.jsx)("div",{className:"profile-star ms-auto",children:Object(o.jsx)(P.a,{size:18,className:m()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]},t)}))]})})},B=t(973),D=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{children:[Object(o.jsx)("h5",{children:"Suggestions"}),s.map((function(e,s){return Object(o.jsxs)("div",{className:m()("d-flex justify-content-start align-items-center",{"mt-2":0===s,"mt-1":0!==s}),children:[Object(o.jsx)(b.a,{className:"me-75",img:e.avatar,imgHeight:"40",imgWidth:"40"}),Object(o.jsxs)("div",{className:"profile-user-info",children:[Object(o.jsx)("h6",{className:"mb-0",children:e.name}),Object(o.jsx)("small",{className:"text-muted",children:e.mutualFriend})]}),Object(o.jsx)("div",{className:"ms-auto",children:Object(o.jsx)(j.i,{className:"btn-icon",color:"primary",size:"sm",children:Object(o.jsx)(B.a,{size:14})})})]},s)}))]})})};t(1475),s.default=function(){var e=Object(a.useState)(null),s=Object(c.a)(e,2),t=s[0],i=s[1],d=Object(a.useState)(!1),m=Object(c.a)(d,2),b=m[0],O=m[1];return Object(a.useEffect)((function(){l.a.get("/profile/data").then((function(e){return i(e.data)}))}),[]),Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(n.a,{breadCrumbTitle:"Profile",breadCrumbParent:"Pages",breadCrumbActive:"Profile"}),null!==t?Object(o.jsxs)("div",{id:"user-profile",children:[Object(o.jsx)(j.ib,{children:Object(o.jsx)(j.B,{sm:"12",children:Object(o.jsx)(C,{data:t.header})})}),Object(o.jsxs)("section",{id:"profile-info",children:[Object(o.jsxs)(j.ib,{children:[Object(o.jsxs)(j.B,{lg:{size:3,order:1},sm:{size:12},xs:{order:2},children:[Object(o.jsx)(h,{data:t.userAbout}),Object(o.jsx)(F,{data:t.suggestedPages}),Object(o.jsx)(W,{data:t.twitterFeeds})]}),Object(o.jsx)(j.B,{lg:{size:6,order:2},sm:{size:12},xs:{order:1},children:Object(o.jsx)(N,{data:t.post})}),Object(o.jsxs)(j.B,{lg:{size:3,order:3},sm:{size:12},xs:{order:3},children:[Object(o.jsx)(L,{data:t.latestPhotos}),Object(o.jsx)(D,{data:t.suggestions}),Object(o.jsx)(x,{data:t.polls})]})]}),Object(o.jsx)(j.ib,{children:Object(o.jsx)(j.B,{className:"text-center",sm:"12",children:Object(o.jsx)(j.i,{color:"primary",className:"border-0 mb-1 profile-load-more",size:"sm",onClick:function(){O(!0),setTimeout((function(){O(!1)}),2e3)},children:Object(o.jsx)(r.a,{blocking:b,overlayColor:"rgba(255,255,255, .5)",children:Object(o.jsx)("span",{children:" Load More"})})})})})]})]}):null]})}},483:function(e,s,t){"use strict";var c=t(484),a=t(911),i=t(844),l=t(845),r=t(843),n=t(869),j=t(97),d=t(10);s.a=function(e){var s=e.breadCrumbTitle,t=e.breadCrumbParent,m=e.breadCrumbParent2,b=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(d.jsxs)("div",{className:"content-header row",children:[Object(d.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(d.jsx)("div",{className:"row breadcrumbs-top",children:Object(d.jsxs)("div",{className:"col-12",children:[s?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:s}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(j.g,{children:[Object(d.jsx)(j.h,{tag:"li",children:Object(d.jsx)(c.b,{to:"/",children:"Home"})}),Object(d.jsx)(j.h,{tag:"li",className:"text-primary",children:t}),m?Object(d.jsx)(j.h,{tag:"li",className:"text-primary",children:m}):"",b?Object(d.jsx)(j.h,{tag:"li",className:"text-primary",children:b}):"",Object(d.jsx)(j.h,{tag:"li",active:!0,children:o})]})})]})})}),Object(d.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(d.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(d.jsxs)(j.tb,{children:[Object(d.jsx)(j.G,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(d.jsx)(a.a,{size:14})}),Object(d.jsxs)(j.F,{tag:"ul",end:!0,children:[Object(d.jsxs)(j.E,{tag:c.b,to:"/apps/todo",children:[Object(d.jsx)(i.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(d.jsxs)(j.E,{tag:c.b,to:"/apps/chat",children:[Object(d.jsx)(l.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(d.jsxs)(j.E,{tag:c.b,to:"/apps/email",children:[Object(d.jsx)(r.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(d.jsxs)(j.E,{tag:c.b,to:"/apps/calendar",children:[Object(d.jsx)(n.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},574:function(e,s,t){"use strict";var c=t(13),a=t(19),i=t(1),l=t(2),r=t.n(l),n=t(97),j=(t(664),t(10)),d=function(e){var s,t=e.children,l=e.blocking,n=e.loader,d=e.className,m=e.tag,b=e.overlayColor,o=m;return Object(j.jsxs)(o,{className:r()("ui-loader",(s={},Object(a.a)(s,d,d),Object(a.a)(s,"show",l),s)),children:[t,l?Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)("div",Object(c.a)({className:"overlay"},l&&b?{style:{backgroundColor:b}}:{})),Object(j.jsx)("div",{className:"loader",children:n})]}):null]})};s.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(j.jsx)(n.jb,{color:"primary"})}},664:function(e,s,t){}}]);
//# sourceMappingURL=47.ad76c544.chunk.js.map