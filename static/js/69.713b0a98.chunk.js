(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[69],{1755:function(e,t,n){"use strict";n.r(t);var i=n(133),a=n(35),s=n(1),c=n(489),r=n(97),l=n(821),o=n.n(l),d=n(2),j=n.n(d),u=n(10),b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}];t.default=function(){var e=Object(s.useState)(b),t=Object(a.a)(e,1)[0],n=Object(s.useState)(""),l=Object(a.a)(n,2),d=l[0],h=l[1],m=Object(s.useState)(!1),x=Object(a.a)(m,2),O=x[0],f=x[1],p=Object(s.useState)(""),w=Object(a.a)(p,2),g=w[0],C=w[1],v=Object(s.useState)([]),S=Object(a.a)(v,2),k=S[0],y=S[1],L=Object(s.useState)([]),N=Object(a.a)(L,2),_=N[0],K=N[1],E=Object(s.useState)("xlsx"),D=Object(a.a)(E,2),T=D[0],W=D[1],z=Object(s.useState)([]),B=Object(a.a)(z,2),F=B[0],R=B[1],J=function(){return f(!O)},M=(d?k:t).map((function(e){return Object(u.jsxs)("tr",{className:j()({selected:F.includes(e.id)}),children:[Object(u.jsx)("td",{children:Object(u.jsx)("div",{className:"form-check",children:Object(u.jsx)(r.K,{id:e.id,type:"checkbox",onChange:function(){return function(e){var t=F;if(t.includes(e)){if(!t.includes(e))return null;t.splice(t.indexOf(e),1)}else t.push(e);R(Object(i.a)(t))}(e.id)},checked:!!F.includes(e.id)})})}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.website}),Object(u.jsx)("td",{children:e.id})]},e.id)}));return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)(c.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/SheetJS/sheetjs"}),Object(u.jsx)(r.ib,{className:"export-component",children:Object(u.jsx)(r.B,{sm:"12",children:Object(u.jsxs)(r.l,{children:[Object(u.jsx)(r.m,{className:"pb-0",children:Object(u.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[Object(u.jsx)(r.i,{color:"primary",onClick:function(){return J()},children:"Export Selected"}),Object(u.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[Object(u.jsx)(r.N,{for:"search-input",className:"me-1",children:"Search"}),Object(u.jsx)(r.K,{id:"search-input",bsSize:"sm",type:"text",value:d,onChange:function(e){return function(e){var n=[],i=e.target.value;h(i),i.length&&(n=t.filter((function(e){var t=e.name.toLowerCase().startsWith(i.toLowerCase())||e.email.toLowerCase().startsWith(i.toLowerCase())||e.website.toLowerCase().startsWith(i.toLowerCase())||e.id.toString().toLowerCase().startsWith(i.toLowerCase()),n=e.name.toLowerCase().includes(i.toLowerCase())||e.email.toLowerCase().includes(i.toLowerCase())||e.website.toLowerCase().includes(i.toLowerCase())||e.id.toString().toLowerCase().includes(i.toLowerCase());return t||(!t&&n?n:null)})),h(i),y(n))}(e)}})]})]})}),Object(u.jsxs)(r.mb,{className:"table-hover-animation mt-2",responsive:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:Object(u.jsx)("div",{className:"form-check",children:Object(u.jsx)(r.K,{type:"checkbox",id:"select-all",label:"",checked:!!F.length,onChange:function(){return function(){var e=F;if(e.length<t.length)e=t.map((function(e){return e.id}));else{if(e.length!==t.length)return null;e=[]}R(e)}()}})})}),Object(u.jsx)("th",{children:"Email"}),Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Website"}),Object(u.jsx)("th",{children:"Rank"})]})}),Object(u.jsx)("tbody",{children:M})]})]})})}),Object(u.jsxs)(r.Q,{isOpen:O,toggle:function(){return J()},className:"modal-dialog-centered",onClosed:function(){return C("")},children:[Object(u.jsx)(r.T,{toggle:function(){return J()},children:"Export To Excel"}),Object(u.jsxs)(r.R,{children:[Object(u.jsx)("div",{className:"mb-2",children:Object(u.jsx)(r.K,{type:"text",value:g,onChange:function(e){return C(e.target.value)},placeholder:"Enter File Name"})}),Object(u.jsx)("div",{children:Object(u.jsxs)(r.K,{type:"select",id:"selectFileFormat",name:"customSelect",value:T,onChange:function(e){W(e.target.value)},children:[Object(u.jsx)("option",{children:"xlsx"}),Object(u.jsx)("option",{children:"csv"}),Object(u.jsx)("option",{children:"txt"})]})})]}),Object(u.jsxs)(r.S,{children:[Object(u.jsx)(r.i,{color:"primary",onClick:function(){return function(){var e=_;t.map((function(t){return F.includes(t.id)?e.push(t):null})),K(Object(i.a)(e));var n=g.length?"".concat(g,".").concat(T):"excel-sheet.".concat(T),a=o.a.utils.json_to_sheet(_),s=o.a.utils.book_new();o.a.utils.book_append_sheet(s,a,"test"),o.a.writeFile(s,n),J()}()},children:"Export"}),Object(u.jsx)(r.i,{color:"flat-danger",onClick:function(){return J()},children:"Cancel"})]})]})]})}},489:function(e,t,n){"use strict";var i=n(97),a=n(10);t.a=function(e){return Object(a.jsx)(i.ib,{className:"mb-2",children:Object(a.jsxs)(i.B,{sm:"12",className:"ms-50",children:[Object(a.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(a.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(a.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},714:function(e,t){},822:function(e,t){},823:function(e,t){}}]);
//# sourceMappingURL=69.713b0a98.chunk.js.map