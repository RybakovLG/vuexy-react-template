(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[52],{1388:function(e,t,c){},1809:function(e,t,c){"use strict";c.r(t);var s=c(35),a=c(1),i=c(558),r=c(1025),l=c.n(r),n=c(2),d=c.n(n),j=c(958),o=c(549),b=c.n(o),m=c(97),h=(c(735),c(10)),O=function(e){var t=e.sidebarOpen,c=Object(i.a)(),a=Object(s.a)(c,1)[0];return Object(h.jsx)("div",{className:"sidebar-detached sidebar-left",children:Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsxs)("div",{className:d()("sidebar-shop",{show:t}),children:[Object(h.jsx)(m.ib,{children:Object(h.jsx)(m.B,{sm:"12",children:Object(h.jsx)("h6",{className:"filter-heading d-none d-lg-block",children:"Filters"})})}),Object(h.jsx)(m.l,{children:Object(h.jsxs)(m.m,{children:[Object(h.jsxs)("div",{className:"multi-range-price",children:[Object(h.jsx)("h6",{className:"filter-title mt-0",children:"Multi Range"}),Object(h.jsxs)("ul",{className:"list-unstyled price-range",children:[Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)(m.K,{type:"radio",id:"all",name:"price-range-radio",defaultChecked:!0}),Object(h.jsx)(m.N,{className:"form-check-label",for:"all",children:"All"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)(m.K,{type:"radio",id:"10-dollars-below",name:"price-range-radio"}),Object(h.jsx)(m.N,{className:"form-check-label",for:"10-dollars-below",children:"<=$10"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)(m.K,{type:"radio",id:"10-100-dollars",name:"price-range-radio"}),Object(h.jsx)(m.N,{className:"form-check-label",for:"10-100-dollars",children:"$10-$100"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)(m.K,{type:"radio",id:"100-500-dollars",name:"price-range-radio"}),Object(h.jsx)(m.N,{className:"form-check-label",for:"100-500-dollars",children:"$100-$500"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)(m.K,{type:"radio",id:"500-dollars-above",name:"price-range-radio"}),Object(h.jsx)(m.N,{className:"form-check-label",for:"500-dollars-above",children:">=$500"})]})})]})]}),Object(h.jsxs)("div",{className:"price-slider",children:[Object(h.jsx)("h6",{className:"filter-title",children:"Price Range"}),Object(h.jsx)("div",{className:"price-slider",children:Object(h.jsx)(b.a,{className:"range-slider mt-2",direction:a?"rtl":"ltr",start:[1500,3500],connect:!0,tooltips:[!0,!0],format:l()({decimals:0}),range:{min:51,max:5e3}})})]}),Object(h.jsxs)("div",{id:"product-categories",children:[Object(h.jsx)("h6",{className:"filter-title",children:"Categories"}),Object(h.jsx)("ul",{className:"list-unstyled categories-list",children:[{id:"appliances",title:"Appliances",defaultChecked:!0},{id:"audio",title:"Audio"},{id:"camera-camcorders",title:"Camera & Camcorders"},{id:"car-electronics",title:"Car Electronics & Gps"},{id:"cellphones",title:"Cell Phones"},{id:"computers",title:"Computers & Tablets"},{id:"health-fitness-beauty",title:"Health, Fitness & Beauty"},{id:"office-school",title:"Office & School Supplies"},{id:"tv-home-theater",title:"TV & Home Theater"},{id:"video-games",title:"Video Games"}].map((function(e){return Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)(m.K,{type:"radio",id:e.id,name:"category-radio",defaultChecked:e.defaultChecked}),Object(h.jsx)(m.N,{className:"form-check-label",for:e.id,children:e.title})]})},e.id)}))})]}),Object(h.jsxs)("div",{className:"brands",children:[Object(h.jsx)("h6",{className:"filter-title",children:"Brands"}),Object(h.jsx)("ul",{className:"list-unstyled brand-list",children:[{title:"Insignia\u2122",total:746},{title:"Samsung",total:633,checked:!0},{title:"Metra",total:591},{title:"HP",total:530},{title:"Apple",total:422,checked:!0},{title:"GE",total:394},{title:"Sony",total:350},{title:"Incipio",total:320},{title:"KitchenAid",total:318},{title:"Whirlpool",total:298}].map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)(m.K,{type:"checkbox",id:e.title,defaultChecked:e.checked}),Object(h.jsx)(m.N,{className:"form-check-label",for:e.title,children:e.title})]}),Object(h.jsx)("span",{children:e.total})]},e.title)}))})]}),Object(h.jsxs)("div",{id:"ratings",children:[Object(h.jsx)("h6",{className:"filter-title",children:"Ratings"}),[{ratings:4,total:160},{ratings:3,total:176},{ratings:2,total:291},{ratings:1,total:190}].map((function(e){return Object(h.jsxs)("div",{className:"ratings-list",children:[Object(h.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(h.jsxs)("ul",{className:"unstyled-list list-inline",children:[new Array(5).fill().map((function(t,c){return Object(h.jsx)("li",{className:"ratings-list-item me-25",children:Object(h.jsx)(j.a,{className:d()({"filled-star":c+1<=e.ratings,"unfilled-star":c+1>e.ratings})})},c)})),Object(h.jsx)("li",{children:"& up"})]})}),Object(h.jsx)("div",{className:"stars-received",children:e.total})]},e.total)}))]}),Object(h.jsx)("div",{id:"clear-filters",children:Object(h.jsx)(m.i,{color:"primary",block:!0,children:"Clear All Filters"})})]})})]})})})},u=c(13),x=c(484),p=c(838),g=c(841),N=function(e){var t=e.store,c=e.products,s=e.dispatch,a=e.addToCart,i=e.activeView,r=e.getProducts,l=e.getCartItems,n=e.addToWishlist,o=e.deleteWishlistItem;return Object(h.jsx)("div",{className:d()({"grid-view":"grid"===i,"list-view":"list"===i}),children:function(){if(c.length)return c.map((function(e){var c=e.isInCart?x.b:"button";return Object(h.jsxs)(m.l,{className:"ecommerce-card",children:[Object(h.jsx)("div",{className:"item-img text-center mx-auto",children:Object(h.jsx)(x.b,{to:"/apps/ecommerce/product-detail/".concat(e.slug),children:Object(h.jsx)("img",{className:"img-fluid card-img-top",src:e.image,alt:e.name})})}),Object(h.jsxs)(m.m,{children:[Object(h.jsxs)("div",{className:"item-wrapper",children:[Object(h.jsx)("div",{className:"item-rating",children:Object(h.jsx)("ul",{className:"unstyled-list list-inline",children:new Array(5).fill().map((function(t,c){return Object(h.jsx)("li",{className:"ratings-list-item me-25",children:Object(h.jsx)(j.a,{className:d()({"filled-star":c+1<=e.rating,"unfilled-star":c+1>e.rating})})},c)}))})}),Object(h.jsx)("div",{className:"item-cost",children:Object(h.jsxs)("h6",{className:"item-price",children:["$",e.price]})})]}),Object(h.jsxs)("h6",{className:"item-name",children:[Object(h.jsx)(x.b,{className:"text-body",to:"/apps/ecommerce/product-detail/".concat(e.slug),children:e.name}),Object(h.jsxs)(m.u,{tag:"span",className:"item-company",children:["By"," ",Object(h.jsx)("a",{className:"company-name",href:"/",onClick:function(e){return e.preventDefault()},children:e.brand})]})]}),Object(h.jsx)(m.u,{className:"item-description",children:e.description})]}),Object(h.jsxs)("div",{className:"item-options text-center",children:[Object(h.jsx)("div",{className:"item-wrapper",children:Object(h.jsxs)("div",{className:"item-cost",children:[Object(h.jsxs)("h4",{className:"item-price",children:["$",e.price]}),e.hasFreeShipping?Object(h.jsx)(m.u,{className:"shipping",children:Object(h.jsx)(m.f,{color:"light-success",children:"Free Shipping"})}):null]})}),Object(h.jsxs)(m.i,{className:"btn-wishlist",color:"light",onClick:function(){return c=e.id,a=e.isInWishlist,s(a?o(c):n(c)),void s(r(t.params));var c,a},children:[Object(h.jsx)(p.a,{className:d()("me-50",{"text-danger":e.isInWishlist}),size:14}),Object(h.jsx)("span",{children:"Wishlist"})]}),Object(h.jsxs)(m.i,Object(u.a)(Object(u.a)({color:"primary",tag:c,className:"btn-cart move-cart",onClick:function(){return c=e.id,!1===e.isInCart&&s(a(c)),s(l()),void s(r(t.params));var c}},e.isInCart?{to:"/apps/ecommerce/checkout"}:{}),{},{children:[Object(h.jsx)(g.a,{className:"me-50",size:14}),Object(h.jsx)("span",{children:e.isInCart?"View In Cart":"Add To Cart"})]}))]})]},e.name)}))}()})},f=c(929),v=c(911),C=c(924),k=function(e){var t=e.activeView,c=e.setActiveView,s=e.dispatch,a=e.getProducts,i=e.store,r=e.setSidebarOpen;return Object(h.jsx)("div",{className:"ecommerce-header",children:Object(h.jsx)(m.ib,{children:Object(h.jsx)(m.B,{sm:"12",children:Object(h.jsxs)("div",{className:"ecommerce-header-items",children:[Object(h.jsxs)("div",{className:"result-toggler",children:[Object(h.jsx)("button",{className:"navbar-toggler shop-sidebar-toggler",onClick:function(){return r(!0)},children:Object(h.jsx)("span",{className:"navbar-toggler-icon d-block d-lg-none",children:Object(h.jsx)(f.a,{size:14})})}),Object(h.jsxs)("span",{className:"search-results",children:[i.totalProducts," Results Found"]})]}),Object(h.jsxs)("div",{className:"view-options d-flex",children:[Object(h.jsxs)(m.tb,{className:"dropdown-sort",children:[Object(h.jsx)(m.G,{className:"text-capitalize me-1",color:"primary",outline:!0,caret:!0,children:{"price-desc":"Highest","price-asc":"Lowest",featured:"Featured"}[i.params.sortBy]}),Object(h.jsxs)(m.F,{children:[Object(h.jsx)(m.E,{className:"w-100",onClick:function(){return s(a(Object(u.a)(Object(u.a)({},i.params),{},{sortBy:"featured"})))},children:"Featured"}),Object(h.jsx)(m.E,{className:"w-100",onClick:function(){return s(a(Object(u.a)(Object(u.a)({},i.params),{},{sortBy:"price-asc"})))},children:"Lowest"}),Object(h.jsx)(m.E,{className:"w-100",onClick:function(){return s(a(Object(u.a)(Object(u.a)({},i.params),{},{sortBy:"price-desc"})))},children:"Highest"})]})]}),Object(h.jsxs)(m.k,{children:[Object(h.jsx)(m.i,{tag:"label",className:d()("btn-icon view-btn grid-view-btn",{active:"grid"===t}),color:"primary",outline:!0,onClick:function(){return c("grid")},children:Object(h.jsx)(v.a,{size:18})}),Object(h.jsx)(m.i,{tag:"label",className:d()("btn-icon view-btn list-view-btn",{active:"list"===t}),color:"primary",outline:!0,onClick:function(){return c("list")},children:Object(h.jsx)(C.a,{size:18})})]})]})]})})})})},y=c(850),w=function(e){var t=e.dispatch,c=e.getProducts,s=e.store;return Object(h.jsx)("div",{id:"ecommerce-searchbar",className:"ecommerce-searchbar",children:Object(h.jsx)(m.ib,{className:"mt-1",children:Object(h.jsx)(m.B,{sm:"12",children:Object(h.jsxs)(m.L,{className:"input-group-merge",children:[Object(h.jsx)(m.K,{className:"search-product",placeholder:"Search Product",onChange:function(e){return t(c(Object(u.a)(Object(u.a)({},s.params),{},{q:e.target.value})))}}),Object(h.jsx)(m.M,{children:Object(h.jsx)(y.a,{className:"text-muted",size:14})})]})})})})},P=function(e){var t=e.store,c=e.dispatch,s=e.addToCart,i=e.activeView,r=e.sidebarOpen,l=e.getProducts,n=e.getCartItems,j=e.addToWishlist,o=e.setActiveView,b=e.deleteCartItem,O=e.setSidebarOpen,x=e.deleteWishlistItem,p=function(e){c(l("next"===e?Object(u.a)(Object(u.a)({},t.params),{},{page:t.params.page+1}):"prev"===e?Object(u.a)(Object(u.a)({},t.params),{},{page:t.params.page-1}):Object(u.a)(Object(u.a)({},t.params),{},{page:e})))};return Object(h.jsx)("div",{className:"content-detached content-right",children:Object(h.jsxs)("div",{className:"content-body",children:[Object(h.jsx)(k,{store:t,dispatch:c,activeView:i,getProducts:l,setActiveView:o,setSidebarOpen:O}),Object(h.jsx)("div",{className:d()("body-content-overlay",{show:r}),onClick:function(){return O(!1)}}),Object(h.jsx)(w,{dispatch:c,getProducts:l,store:t}),t.products.length?Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(N,{store:t,dispatch:c,addToCart:s,activeView:i,products:t.products,getProducts:l,getCartItems:n,addToWishlist:j,deleteCartItem:b,deleteWishlistItem:x}),Object(h.jsxs)(m.bb,{className:"d-flex justify-content-center ecommerce-shop-pagination mt-2",children:[Object(h.jsx)(m.cb,{disabled:1===t.params.page,className:"prev-item",onClick:function(){return 1!==t.params.page?p("prev"):null},children:Object(h.jsx)(m.db,{href:"/",onClick:function(e){return e.preventDefault()}})}),function(){var e=0!==t.totalProducts&&0!==t.products.length?Number(t.totalProducts)/t.products.length:3;return new Array(Math.trunc(e)).fill().map((function(e,c){return Object(h.jsx)(m.cb,{active:t.params.page===c+1,onClick:function(){return p(c+1)},children:Object(h.jsx)(m.db,{href:"/",onClick:function(e){return e.preventDefault()},children:c+1})},c)}))}(),Object(h.jsx)(m.cb,{className:"next-item",onClick:function(){t.params.page!==Number(t.totalProducts)/t.products.length&&p("next")},disabled:t.params.page===Number(t.totalProducts)/t.products.length,children:Object(h.jsx)(m.db,{href:"/",onClick:function(e){return e.preventDefault()}})})]})]}):Object(h.jsx)("div",{className:"d-flex justify-content-center mt-2",children:Object(h.jsx)("p",{children:"No Results"})})]})})},I=c(483),A=c(135),S=c(145);c(1388),t.default=function(){var e=Object(a.useState)("grid"),t=Object(s.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)(!1),l=Object(s.a)(r,2),n=l[0],d=l[1],j=Object(A.b)(),o=Object(A.c)((function(e){return e.ecommerce}));return Object(a.useEffect)((function(){j(Object(S.h)({q:"",sortBy:"featured",perPage:9,page:1}))}),[j]),Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(I.a,{breadCrumbTitle:"Shop",breadCrumbParent:"eCommerce",breadCrumbActive:"Shop"}),Object(h.jsx)(P,{store:o,dispatch:j,addToCart:S.a,activeView:c,getProducts:S.h,sidebarOpen:n,getCartItems:S.f,setActiveView:i,addToWishlist:S.b,setSidebarOpen:d,deleteCartItem:S.d,deleteWishlistItem:S.e}),Object(h.jsx)(O,{sidebarOpen:n})]})}},483:function(e,t,c){"use strict";var s=c(484),a=c(911),i=c(844),r=c(845),l=c(843),n=c(869),d=c(97),j=c(10);t.a=function(e){var t=e.breadCrumbTitle,c=e.breadCrumbParent,o=e.breadCrumbParent2,b=e.breadCrumbParent3,m=e.breadCrumbActive;return Object(j.jsxs)("div",{className:"content-header row",children:[Object(j.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(j.jsx)("div",{className:"row breadcrumbs-top",children:Object(j.jsxs)("div",{className:"col-12",children:[t?Object(j.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(j.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(j.jsxs)(d.g,{children:[Object(j.jsx)(d.h,{tag:"li",children:Object(j.jsx)(s.b,{to:"/",children:"Home"})}),Object(j.jsx)(d.h,{tag:"li",className:"text-primary",children:c}),o?Object(j.jsx)(d.h,{tag:"li",className:"text-primary",children:o}):"",b?Object(j.jsx)(d.h,{tag:"li",className:"text-primary",children:b}):"",Object(j.jsx)(d.h,{tag:"li",active:!0,children:m})]})})]})})}),Object(j.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(j.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(j.jsxs)(d.tb,{children:[Object(j.jsx)(d.G,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(j.jsx)(a.a,{size:14})}),Object(j.jsxs)(d.F,{tag:"ul",end:!0,children:[Object(j.jsxs)(d.E,{tag:s.b,to:"/apps/todo",children:[Object(j.jsx)(i.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(j.jsxs)(d.E,{tag:s.b,to:"/apps/chat",children:[Object(j.jsx)(r.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(j.jsxs)(d.E,{tag:s.b,to:"/apps/email",children:[Object(j.jsx)(l.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(j.jsxs)(d.E,{tag:s.b,to:"/apps/calendar",children:[Object(j.jsx)(n.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},735:function(e,t,c){}}]);
//# sourceMappingURL=52.f3725b38.chunk.js.map