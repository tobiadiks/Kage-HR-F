(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var n,i=c(1),s=c(29),r=c.n(s),a=c(6),j=c(18),l=c(19),o=c(20),d=c(4),u=c(5),b=c.n(u),O=c(17),h=c(2),p=c(8),x=c(7),f=(c(38),c(10)),m=(c(39),c(0)),v=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("section",{className:"gradient"}),Object(m.jsxs)("header",{children:[Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsxs)(f.b,{to:"/",children:[Object(m.jsx)(x.a,{icon:p.c,color:"#fff"})," Kage-HR"]})})}),Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsx)(f.b,{to:"/signup",children:"Sign up"})})})]})]})},g=c(11),y=c.n(g),_=c(12),N=Object(_.b)({key:"user",default:{},effects_UNSTABLE:[(n="user",function(e){var t=e.setSelf,c=e.onSet,i=localStorage.getItem(n);null!=i&&t(i),c((function(e){localStorage.setItem(n,e)}))})]}),S=function(){var e=Object(i.useState)(""),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(""),r=Object(h.a)(s,2),a=r[0],j=r[1],l=Object(_.c)(N),o=Object(h.a)(l,2),d=(o[0],o[1]),u=function(e){y.a.post("https://kagehr.herokuapp.com/api/company/login",e).then((function(e){return e.data})).then((function(e){return!0===e.success?d(e.id):console.log("Failed")}))};function g(){return(g=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u({email:c,password:a});case 3:window.location="/";case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsxs)("div",{className:"login_container",children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)(x.a,{icon:p.c,color:"#3ec78e"})," Kage-HR"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Sign in to your account"}),Object(m.jsx)("br",{}),Object(m.jsxs)("h6",{children:["Don't have an account? ",Object(m.jsx)("span",{children:Object(m.jsx)(f.b,{to:"/signup",children:"Start free trial"})})," "]})]}),Object(m.jsxs)("form",{children:[Object(m.jsx)("label",{children:"Email address"}),Object(m.jsx)("input",{onInput:function(e){return n(e.target.value)},type:"email"}),Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{onInput:function(e){return j(e.target.value)},type:"password"}),Object(m.jsx)("button",{onClick:function(e){return g.apply(this,arguments)},children:"Sign in"})]}),Object(m.jsx)("div",{})]})]})},I=function(){var e=Object(i.useState)(""),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(""),r=Object(h.a)(s,2),a=r[0],j=r[1],l=Object(i.useState)(""),o=Object(h.a)(l,2),d=o[0],u=o[1],g=Object(i.useState)(""),_=Object(h.a)(g,2),N=_[0],S=_[1],I=Object(i.useState)(""),k=Object(h.a)(I,2),T=k[0],w=k[1],C=Object(i.useState)(""),L=Object(h.a)(C,2),R=L[0],E=L[1],A=function(e){y.a.post("https://kagehr.herokuapp.com/api/company/signup",JSON.stringify(e)).then((function(e){return e.data})).then((function(e){return!0===e.success?console.log("Success"):console.log("Failed")})).finally(alert("Opps! Still at Beta, Login with \n email: 'test@mail.com' \n password:'1234'"))};function P(){return(P=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,A({email:c,password:a,name:N,phone:d,location:T,country:R});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsxs)("div",{className:"login_container",children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)(x.a,{icon:p.c,color:"#3ec78e"})," Kage-HR"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Create a new profile"}),Object(m.jsx)("br",{}),Object(m.jsxs)("h6",{children:["Have an account? ",Object(m.jsx)("span",{children:Object(m.jsx)(f.b,{to:"/login",children:"Login"})})," "]})]}),Object(m.jsxs)("form",{children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{onInput:function(e){return S(e.target.value)},type:"text"}),Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("input",{onInput:function(e){return n(e.target.value)},type:"email"}),Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{onInput:function(e){return j(e.target.value)},type:"password"}),Object(m.jsx)("label",{children:"Phone"}),Object(m.jsx)("input",{onInput:function(e){return u(e.target.value)},type:"text"}),Object(m.jsx)("label",{children:"Location"}),Object(m.jsx)("input",{onInput:function(e){return w(e.target.value)},type:"text"}),Object(m.jsx)("label",{children:"Country"}),Object(m.jsx)("input",{onInput:function(e){return E(e.target.value)},type:"text"}),Object(m.jsx)("button",{onClick:function(e){return P.apply(this,arguments)},children:"Sign up"})]}),Object(m.jsx)("div",{})]})]})},k=function(){var e=Object(_.c)(N),t=Object(h.a)(e,2),c=(t[0],t[1]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("section",{className:"gradient"}),Object(m.jsxs)("header",{children:[Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsxs)(f.b,{to:"/",children:[Object(m.jsx)(x.a,{icon:p.c,color:"#fff"})," Kage-HR"]})}),Object(m.jsx)("li",{children:Object(m.jsx)(f.b,{to:"/",children:"Jobs"})}),Object(m.jsx)("li",{children:Object(m.jsx)(f.b,{to:"/candidates",children:"Candidates"})}),Object(m.jsx)("li",{children:Object(m.jsx)(f.b,{to:"#",children:"Widgets"})})]}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(f.b,{to:"/profile",children:Object(m.jsx)(x.a,{icon:p.h})})}),Object(m.jsx)("li",{onClick:c,children:Object(m.jsx)(f.b,{to:"/login",children:Object(m.jsx)(x.a,{icon:p.e})})})]})]})]})},T=(c(80),function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"candidate_card",onClick:e.click,children:[Object(m.jsx)("div",{className:"avatar",children:Object(m.jsx)(x.a,{icon:p.g,size:"2x"})}),Object(m.jsxs)("div",{className:"texts",children:[Object(m.jsxs)("span",{children:[e.name,Object(m.jsx)("div",{className:"candidate_status_".concat(e.status)})]}),Object(m.jsx)("span",{children:e.role}),Object(m.jsxs)("span",{children:["Applied ",e.time]})]})]})})}),w=(c(81),c(50)),C=c.n(w),L=function(e){var t=Object(i.useState)([]),c=Object(h.a)(t,2),n=c[0],s=c[1],r=Object(i.useState)([]),a=Object(h.a)(r,2),j=a[0],l=a[1],o=Object(_.d)(N),d=Object(i.useRef)(null),u=Object(i.useRef)(null);return Object(i.useEffect)((function(){y.a.get("https://kagehr.herokuapp.com/api/employee?employer=".concat(o)).then((function(e){return e.data})).then((function(e){s(e)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"emphasis_candidate",children:"Candidates"}),Object(m.jsxs)("section",{id:"column_head",children:[Object(m.jsxs)("div",{id:"left_side",children:[Object(m.jsx)("span",{children:Object(m.jsx)(x.a,{icon:p.b})}),Object(m.jsxs)("select",{onInput:function(e){return l(e.target.value||"")},children:[Object(m.jsx)("option",{value:"position",children:"Role"}),Object(m.jsx)("option",{value:"code",children:"Code"}),Object(m.jsx)("option",{value:"location",children:"Location"})]}),Object(m.jsx)("select",{children:n.map((function(e){return Object(m.jsx)("option",{value:e[j],children:e[j]})}))})]}),Object(m.jsx)("div",{id:"right_side",children:Object(m.jsx)("span",{children:"Candidate details"})})]}),Object(m.jsxs)("section",{id:"column",children:[Object(m.jsx)("div",{id:"left_side",children:n.length>0?n.map((function(e){return Object(m.jsx)(T,{name:"".concat(e.firstname," ").concat(e.lastname),role:"Software Developer",time:C()("".concat(e.createdAt)).fromNow(),status:"".concat(e.interview&&!0===e.hired?"success":!0===e.rejected?"reject":!0===e.interview?"progress":"new"),click:function(){return t=e._id,d.current.style.display="none",u.current.style.display="none",d.current.style.display="block",void y.a.get("https://kagehr.herokuapp.com/api/employee?employer=".concat(o,"&_id=").concat(t)).then((function(e){return e.data})).then((function(e){d.current.children[0].children[0].children[1].children[0].innerHTML="".concat(!0===e[0].interview?"In Progress":"Interview"),d.current.children[0].children[0].children[1].children[1].innerHTML="".concat(!0===e[0].rejected?"Rejected":"Reject"),d.current.children[0].children[0].children[0].innerHTML="".concat(e[0].firstname," ").concat(e[0].lastname),d.current.children[3].children[1].innerHTML=e[0].phone,d.current.children[4].children[1].innerHTML=e[0].email,d.current.children[5].children[1].innerHTML=e[0].location,d.current.children[6].children[1].innerHTML=e[0].social,d.current.children[7].children[1].innerHTML=e[0].website}));var t}},e._id)})):Object(m.jsx)("span",{className:"empty",children:"Opps! No Candidates Yet..."})}),Object(m.jsx)("div",{ref:u,className:"empty_detail",children:" Click card to see detail..."}),Object(m.jsxs)("div",{ref:d,id:"right_side",children:[Object(m.jsx)("div",{className:"candidate_head",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Arash Hussein"}),Object(m.jsxs)("li",{children:[Object(m.jsx)("div",{children:"Interview"}),Object(m.jsx)("div",{children:"Reject"})]})]})}),Object(m.jsx)("div",{id:"candidate_card_detail",children:" General Information"}),Object(m.jsxs)("div",{id:"candidate_card_detail",children:[" ",Object(m.jsx)("span",{children:"Role :"}),Object(m.jsx)("span",{children:" UI/UX Designer"})]}),Object(m.jsxs)("div",{id:"candidate_card_detail",children:[" ",Object(m.jsx)("span",{children:"Phone :"}),Object(m.jsx)("span",{children:" +2348112806410"})]}),Object(m.jsxs)("div",{id:"candidate_card_detail",children:[" ",Object(m.jsx)("span",{children:"Email :"}),Object(m.jsx)("span",{children:" test@mail.com"})]}),Object(m.jsxs)("div",{id:"candidate_card_detail",children:[" ",Object(m.jsx)("span",{children:"Location :"}),Object(m.jsx)("span",{children:" Lagos"})]}),Object(m.jsxs)("div",{id:"candidate_card_detail",children:[" ",Object(m.jsx)("span",{children:"Social :"}),Object(m.jsx)("span",{children:" Visit "})]}),Object(m.jsxs)("div",{id:"candidate_card_detail",children:[" ",Object(m.jsx)("span",{children:"Website :"}),Object(m.jsx)("span",{children:" https://www.portfolio.io"})]})]})]})]})},R=(c(83),c(84),function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"large_card_container",id:e.id,children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:["Code: \xa0 ",Object(m.jsx)("span",{children:e.code}),Object(m.jsx)("b",{onClick:e.property,children:Object(m.jsx)(x.a,{color:"black",icon:p.a})})]}),Object(m.jsxs)("li",{children:["Position : \xa0 ",Object(m.jsx)("span",{children:e.position})]}),Object(m.jsxs)("li",{children:["Position Type : \xa0 ",Object(m.jsx)("span",{children:e.positionType})]}),Object(m.jsxs)("li",{children:["Department : \xa0 ",Object(m.jsx)("span",{children:e.department})]}),Object(m.jsxs)("li",{children:["Experience : \xa0 ",Object(m.jsx)("span",{children:e.experience})]}),Object(m.jsxs)("li",{children:["Location : \xa0 ",Object(m.jsx)("span",{children:e.location})]}),Object(m.jsxs)("li",{children:["Country : \xa0 ",Object(m.jsx)("span",{children:e.country})]}),Object(m.jsxs)("li",{children:["Remote : \xa0 ",Object(m.jsx)("span",{children:e.remote})," ",Object(m.jsx)("b",{onClick:function(){return y.a.post("http://127.0.0.1:9000/api/job/delete/".concat(e.id)).then((function(e){return alert("Deleted Successfully")}))},children:Object(m.jsx)(x.a,{color:"red",icon:p.f})})]})]})})})}),E=function(){var e=Object(i.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(_.d)(N),r=Object(i.useState)(),a=Object(h.a)(r,2),j=a[0],l=a[1],o=Object(i.useState)("Full Time"),d=Object(h.a)(o,2),u=d[0],f=d[1],v=Object(i.useState)(),g=Object(h.a)(v,2),S=g[0],I=g[1],T=Object(i.useState)(),w=Object(h.a)(T,2),C=w[0],L=w[1],E=Object(i.useState)(),A=Object(h.a)(E,2),P=A[0],F=A[1],H=Object(i.useState)(),D=Object(h.a)(H,2),M=D[0],U=D[1],G=Object(i.useState)("IT"),J=Object(h.a)(G,2),W=J[0],V=J[1],Y=Object(i.useState)(!1),B=Object(h.a)(Y,2),K=B[0],z=B[1],X=Object(i.useState)(),q=Object(h.a)(X,2),Q=q[0],Z=q[1],$={creator_id:s,position:j,location:C,country:P,experience:M,department:W,positionType:u,description:S,remote:K},ee=function(){y.a.post("https://kagehr.herokuapp.com/api/job/create",JSON.stringify($),{headers:{"content-type":"application/json"}}).then((function(e){return e.data})).then((function(e){return alert("Created Successfully")})).catch((function(e){return alert("Oops! an error occurred")}))},te=function(e){y.a.post("https://kagehr.herokuapp.com/api/job/update/".concat(e),JSON.stringify($),{headers:{"content-type":"application/json"}}).then((function(e){return e.data})).then((function(e){return console.log(e)})).catch((function(e){return alert("Oops! an error occurred")}))};function ce(){return(ce=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return(ne=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=Object(i.useRef)(null),se=Object(i.useRef)(null);return Object(i.useEffect)((function(){y.a.get("https://kagehr.herokuapp.com/api/job?creator_id=".concat(s)).then((function(e){return e.data})).then((function(e){return n(e)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{}),Object(m.jsxs)("div",{className:"job_container",children:[Object(m.jsx)("div",{className:"button_container",children:Object(m.jsxs)("button",{onClick:function(){ie.current.style.display="flex"},children:["Create new \xa0"," ",Object(m.jsx)(x.a,{icon:p.d,color:"rgb(5, 25, 42)"})]})}),Object(m.jsx)("span",{className:"emphasis",children:"Roles"}),Object(m.jsxs)("div",{className:"content",children:[c.length>0?c.map((function(e){return Object(m.jsx)(R,{property:function(){return y.a.get("https://kagehr.herokuapp.com/api/job?_id=".concat(e._id)).then((function(e){return e.data})).then((function(e){se.current[0].value=e[0].position,l(e[0].position),se.current[1].value=e[0].positionType,f(e[0].positionType),se.current[2].value=e[0].department,V(e[0].department),se.current[3].value=e[0].description,I(e[0].description),se.current[4].value=e[0].experience,U(e[0].experience),se.current[5].value=e[0].location,L(e[0].location),se.current[6].value=e[0].country,F(e[0].country),se.current[7].checked=e[0].remote,z(e[0].remote),Z(e[0]._id),se.current.style.display="flex"}))},id:e._id,code:e.code,position:e.position,positionType:e.positionType,department:e.department,experience:e.experience,location:e.location,country:e.country,remote:String(e.remote)},e._id)})):" Oops theres no job yet...",Object(m.jsxs)("form",{ref:ie,children:[Object(m.jsxs)("div",{className:"layout",children:[Object(m.jsxs)("div",{className:"form_contain",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Position"}),Object(m.jsx)("input",{type:"text",onInput:function(e){l(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Position Type"}),Object(m.jsxs)("select",{value:u,onInput:function(e){f(e.target.value)},children:[Object(m.jsx)("option",{value:"Full Time",children:"Full Time"}),Object(m.jsx)("option",{value:"Part Time",children:"Part Time"}),Object(m.jsx)("option",{value:"Internship",children:"Internship"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Department"}),Object(m.jsxs)("select",{value:W,onInput:function(e){V(e.target.value)},children:[Object(m.jsx)("option",{value:"Sales & Marketing",children:"Sales & Marketing"}),Object(m.jsx)("option",{value:"IT",children:"IT"}),Object(m.jsx)("option",{value:"Human Resource",children:"Human Resource"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Description"}),Object(m.jsx)("textarea",{onInput:function(e){I(e.target.value)}})]})]}),Object(m.jsxs)("div",{className:"form_contain",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Experience"}),Object(m.jsx)("input",{type:"number",onInput:function(e){U(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Location"}),Object(m.jsx)("input",{type:"text",onInput:function(e){L(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Country"}),Object(m.jsx)("input",{type:"text",onInput:function(e){F(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Remote"}),Object(m.jsx)("input",{type:"checkbox",onInput:function(e){z("on"===e.target.value)}})]})]}),Object(m.jsx)("div",{})]}),Object(m.jsxs)("div",{className:"button_actions",children:[Object(m.jsx)("button",{onClick:function(e){ie.current.style.display="none",function(){ce.apply(this,arguments)}()},children:"Submit"}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),ie.current.style.display="none"},children:"Cancel"})]})]}),Object(m.jsxs)("form",{ref:se,children:[Object(m.jsxs)("div",{className:"layout",children:[Object(m.jsxs)("div",{className:"form_contain",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Position"}),Object(m.jsx)("input",{type:"text",onInput:function(e){l(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Position Type"}),Object(m.jsxs)("select",{onInput:function(e){f(e.target.value)},children:[Object(m.jsx)("option",{value:"Full Time",children:"Full Time"}),Object(m.jsx)("option",{value:"Part Time",children:"Part Time"}),Object(m.jsx)("option",{value:"Internship",children:"Internship"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Department"}),Object(m.jsxs)("select",{onInput:function(e){V(e.target.value)},children:[Object(m.jsx)("option",{value:"Sales & Marketing",children:"Sales & Marketing"}),Object(m.jsx)("option",{value:"IT",children:"IT"}),Object(m.jsx)("option",{value:"Human Resource",children:"Human Resource"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Description"}),Object(m.jsx)("textarea",{onInput:function(e){I(e.target.value)}})]})]}),Object(m.jsxs)("div",{className:"form_contain",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Experience"}),Object(m.jsx)("input",{type:"number",onInput:function(e){U(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Location"}),Object(m.jsx)("input",{type:"text",onInput:function(e){L(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Country"}),Object(m.jsx)("input",{type:"text",onInput:function(e){F(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Remote"}),Object(m.jsx)("input",{type:"checkbox",onInput:function(e){z(!0===e.target.checked)}})]})]}),Object(m.jsx)("div",{})]}),Object(m.jsxs)("div",{className:"button_actions",children:[Object(m.jsx)("button",{onClick:function(){!function(e){ne.apply(this,arguments)}(Q),se.current.style.display="none"},children:"Update"}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),se.current.style.display="none"},children:"Cancel"})]})]})]})]})]})},A=(c(85),c.p+"static/media/logo.88be4221.png"),P=function(){var e=Object(_.d)(N),t=Object(i.useState)([{name:"",location:"",country:""}]),c=Object(h.a)(t,2),n=c[0],s=c[1];return Object(i.useEffect)((function(){y.a.get("https://kagehr.herokuapp.com/api/company/?_id=".concat(e)).then((function(e){return e.data})).then((function(e){s(e._id)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{}),Object(m.jsxs)("div",{className:"profile_container",children:[Object(m.jsx)("div",{className:"left_content",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h6",{children:"My Profile"}),Object(m.jsxs)("div",{className:"profile_x",children:[Object(m.jsx)("div",{className:"profile_img",children:Object(m.jsx)("img",{alt:"icon",src:A})}),Object(m.jsxs)("div",{className:"profile_actions",children:[Object(m.jsx)("span",{children:"UPLOAD LOGO"}),Object(m.jsx)("input",{id:"upload",type:"file"})]})]}),Object(m.jsx)("div",{className:"action_navigation",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{className:"active",children:[Object(m.jsx)("span",{children:"GENERAL INFORMATION"}),Object(m.jsx)("span",{children:"PLEASE FILL ALL DETAILS"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"BEGIN VERIFICATION"}),Object(m.jsx)("span",{children:"VERIFY YOU COMPANY"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"CHANGE PASSWORD"}),Object(m.jsx)("span",{children:"CREATE A NEW PASSWORD"})]})]})})]})}),Object(m.jsx)("div",{className:"right_content",children:Object(m.jsxs)("div",{className:"general_form_container",children:[Object(m.jsx)("h6",{children:"GENERAL INFORMATION"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{value:n[0].name,placeholder:"Name"}),Object(m.jsxs)("div",{className:"input_flex",children:[Object(m.jsx)("input",{value:n[0].email,placeholder:"Email"}),Object(m.jsx)("input",{value:n[0].phone,placeholder:"Phone"})," "]}),Object(m.jsxs)("div",{className:"input_flex",children:[Object(m.jsx)("input",{value:null===n[0].social?"":n[0].social,placeholder:"Social Media"}),Object(m.jsx)("input",{value:null===n[0].website?"":n[0].website,placeholder:"Website"})]}),Object(m.jsxs)("div",{className:"input_flex",children:[Object(m.jsx)("input",{value:null===n[0].location?"":n[0].location.toUpperCase(),placeholder:"Location"}),Object(m.jsx)("input",{value:null===n[0].country?"":n[0].country.toUpperCase(),placeholder:"Country"})]}),Object(m.jsx)("textarea",{value:null===n[0].about?"":n[0].about,placeholder:"Tell Applicants About Your Company..."}),Object(m.jsxs)("div",{className:"verify_status",children:[Object(m.jsx)("span",{children:"Status"}),!0===n[0].verified?Object(m.jsx)("span",{children:"Verified"}):Object(m.jsx)("span",{style:{color:"rgb(255, 51, 51)"},children:"Unverified"})]}),Object(m.jsx)("button",{children:"SAVE ALL CHANGES"})]})]})})]})]})},F=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{path:"/login",component:S}),Object(m.jsx)(d.a,{path:"/signup",component:I}),Object(m.jsx)(d.a,{path:"/candidates",component:L}),Object(m.jsx)(d.a,{path:"/profile",component:P}),Object(m.jsx)(d.a,{path:"/",component:E,exact:!0})]})}}]),c}(i.Component);c(86);r.a.render(Object(m.jsx)(f.a,{children:Object(m.jsx)(_.a,{children:Object(m.jsx)(F,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.61a60103.chunk.js.map