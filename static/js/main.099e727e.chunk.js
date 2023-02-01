(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(27),a=c(10),r=c(2),s=(c(36),c(37),c(12)),i=c.n(s),j=c(3),l=function(){return Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(j.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})},o=(c(39),function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(l,{})})}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(r.b,{})})})]})}),b=c(4),d=c(25),h=c(7),m=c(5),u=c(0),O=(c(40),Object(u.memo)((function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}))),x=Object(u.memo)((function(e){var t=e.person;return Object(j.jsx)(a.b,{to:"/people/".concat(t.slug),className:i()({"has-text-danger":"f"===t.sex}),children:t.name})}));function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var f=Object(u.memo)((function(){var e=Object(u.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],a=Object(u.useState)(!1),s=Object(m.a)(a,2),l=s[0],o=s[1],f=Object(u.useState)(""),v=Object(m.a)(f,2),g=v[0],N=v[1],w=Object(r.q)().slug,y=function(){var e=Object(h.a)(Object(b.a)().mark((function e(){var t,c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,p();case 4:t=e.sent,c=t.map((function(e){var c=t.find((function(t){return t.name===e.fatherName})),n=t.find((function(t){return t.name===e.motherName}));return Object(d.a)(Object(d.a)({},e),{},{father:c,mother:n})})),n(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),N("Something went wrong");case 12:return e.prev=12,o(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){y()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[l&&Object(j.jsx)(O,{}),g&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c.length&&!l&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!l&&Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:[{id:1,fieldName:"Name"},{id:2,fieldName:"Sex"},{id:3,fieldName:"Born"},{id:4,fieldName:"Died"},{id:5,fieldName:"Mother"},{id:6,fieldName:"Father"}].map((function(e){return Object(j.jsx)("th",{children:e.fieldName})}))})}),Object(j.jsx)("tbody",{children:c.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":e.slug===w}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(x,{person:e})}),Object(j.jsx)("td",{children:e.sex}),Object(j.jsx)("td",{children:e.born}),Object(j.jsx)("td",{children:e.died}),Object(j.jsx)("td",{children:e.mother?Object(j.jsx)(x,{person:e.mother}):e.motherName||"-"}),Object(j.jsx)("td",{children:e.father?Object(j.jsx)(x,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})]})})]})})),v=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},g=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(r.e,{children:Object(j.jsxs)(r.c,{path:"/",element:Object(j.jsx)(o,{}),children:[Object(j.jsx)(r.c,{index:!0,element:Object(j.jsx)(v,{})}),Object(j.jsxs)(r.c,{path:"/people",children:[Object(j.jsx)(r.c,{index:!0,element:Object(j.jsx)(f,{})}),Object(j.jsx)(r.c,{path:":slug",element:Object(j.jsx)(f,{})})]}),Object(j.jsx)(r.c,{path:"/home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsx)(r.c,{path:"*",element:Object(j.jsx)(g,{})})]})})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.099e727e.chunk.js.map