(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(47),a=n.n(c),i=(n(99),n(21),n.p+"media/bridgeBuildersLetterHeadLogo.6ca55a20.png"),l=n(11),d=n(6),o=n(12);var j=function(e,t){var n=[];n.push({name:"Hours Mentoring / Coaching",value:t.students.hoursMentoring}),n.push({name:"Grad Rate 6yr (%)",value:t.students.gradRate6yr}),n.push({name:"Grad Rate 4yr (%)",value:t.students.gradRate4yr}),n.push({name:"First Gen College (%)",value:t.students.firstGenCollege}),n.push({name:"Num of Students",value:t.students.numOfStu}),console.log(n);var s,r,c=d.f(e.current),a=932,i=932,l=function(e){return d.a({children:e}).sum((function(e){return e.value}))}(n),o=(s=[450,450],d.d().size(s).padding(3))(l),j=o;console.log(o);var u=d.e().domain([0,5]).range(["hsl(152,80%,80%)","hsl(228,30%,40%)"]).interpolate(d.b);c.selectAll("g").remove(),c.attr("viewBox","-".concat(a/2," -").concat(i/2," ").concat(a," ").concat(i)).style("display","block").style("margin","10 10px").style("background","#5c0a7c").style("cursor","pointer").on("click",(function(e){return O(e,o)}));var b=c.append("g").selectAll("circle").data(o.descendants().slice(1)).join("circle").attr("fill",(function(e){return e.children?u(e.depth):"white"})).attr("pointer-events",(function(e){return e.children?null:"none"})).on("mouseover",(function(){d.f(this).attr("stroke","#000")})).on("mouseout",(function(){d.f(this).attr("stroke",null)})).on("click",(function(e,t){return j!==t&&(O(e,t),e.stopPropagation())})),f=c.append("g").style("font","16px sans-serif").attr("pointer-events","none").attr("text-anchor","middle").selectAll("text").data(o.descendants()).join("text").style("fill-opacity",(function(e){return e.parent===o?1:0})).style("display",(function(e){return e.parent===o?"inline":"none"})).text((function(e){return e.data.name})),x=c.append("g").style("font","22px sans-serif").attr("pointer-events","none").attr("text-anchor","middle").selectAll("text").data(o.descendants()).join("text").style("fill-opacity",(function(e){return e.parent===o?1:0})).style("display",(function(e){return e.parent===o?"inline":"none"})).text((function(e){return e.data.value}));function h(e){var t=a/e[2];r=e,f.attr("transform",(function(n){return"translate(".concat((n.x-e[0])*t,",").concat((n.y-e[1])*t,")")})),x.attr("transform",(function(n){return"translate(".concat((n.x-e[0])*t,",").concat((n.y-e[1]+10)*t,")")})),b.attr("transform",(function(n){return"translate(".concat((n.x-e[0])*t,",").concat((n.y-e[1])*t,")")})),b.attr("r",(function(e){return e.r*t}))}function O(e,t){j=t;var n=c.transition().duration(e.altKey?7500:750).tween("zoom",(function(e){var t=d.c(r,[j.x,j.y,2*j.r]);return function(e){return h(t(e))}}));f.filter((function(e){return e.parent===j||"inline"===this.style.display})).transition(n).style("fill-opacity",(function(e){return e.parent===j?1:0})).on("start",(function(e){e.parent===j&&(this.style.display="inline")})).on("end",(function(e){e.parent!==j&&(this.style.display="none")}))}return h([o.x,o.y,2*o.r]),c.node()};var u=n(0);var b=function(){var e=Object(s.useRef)(),t=(Object(s.useRef)(),Object(s.useState)({})),c=Object(l.a)(t,2),a=(c[0],c[1]);return Object(s.useEffect)((function(){n(27).default.get("/getPostPickle").then((function(t){a(t.data),j(e,t.data)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"flexContainer",children:[Object(u.jsx)("div",{className:"flexside",children:Object(u.jsx)("a",{href:"https://www.bridgebuildersla.org/",children:Object(u.jsx)("img",{src:i,alt:"Bridge Builders",className:"headerImg"})})}),Object(u.jsx)("div",{className:"flexmiddle"}),Object(u.jsx)("div",{className:"flexsideHeader",children:Object(u.jsx)(o.b,{to:"/admin",children:Object(u.jsx)("div",{className:"adminLink",children:Object(u.jsx)("h2",{children:"Admin"})})})})]}),Object(u.jsx)("div",{className:"fullWidth",children:Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)("h2",{children:"Current Cohort Pickle"}),Object(u.jsx)("svg",{id:"bubbleChart",className:"fullWidth",ref:e})]})})]})},f=n(14);var x=function(){var e=n(27).default,t=Object(s.useState)({}),r=Object(l.a)(t,2),c=r[0],a=r[1];return Object(s.useEffect)((function(){e.get("/getPostPickle").then((function(e){a(e.data)}))}),[]),console.log(c),Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"infographicBlock",children:Object(u.jsxs)("div",{className:"flexContainer",children:[Object(u.jsx)("div",{className:"flexside"}),Object(u.jsx)("div",{className:"flexpassword",children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.post("/getPostPickle",c).then((function(e){console.log(e.data)}))},children:[Object(u.jsxs)("div",{class:"form-group row",children:[Object(u.jsx)("label",{for:"numberOfStudents",children:"Number of Students:"}),Object(u.jsx)("div",{class:"col-sm-10",children:Object(u.jsx)("input",{class:"form-control",id:"numberOfStudents",type:"text",onChange:function(e){var t=Object(f.a)({},c);t.students.numOfStu=parseInt(e.target.value),a(t)},name:"numberOfStudents"})})]}),Object(u.jsxs)("div",{class:"form-group row",children:[Object(u.jsx)("label",{for:"gradRate6yr",children:"Six Year Grad Rate:"}),Object(u.jsx)("div",{class:"col-sm-10",children:Object(u.jsx)("input",{class:"form-control",id:"gradRate6yr",type:"text",onChange:function(e){var t=Object(f.a)({},c);t.students.gradRate6yr=parseInt(e.target.value),a(t)},name:"gradRate6yr"})})]}),Object(u.jsxs)("div",{class:"form-group row",children:[Object(u.jsx)("label",{for:"gradRate4yr",children:"Four Year Grad Rate:"}),Object(u.jsx)("div",{class:"col-sm-10",children:Object(u.jsx)("input",{class:"form-control",id:"gradRate4yr",type:"text",onChange:function(e){var t=Object(f.a)({},c);t.students.gradRate4yr=parseInt(e.target.value),a(t)},name:"gradRate4yr"})})]}),Object(u.jsxs)("div",{class:"form-group row",children:[Object(u.jsx)("label",{for:"firstGenCollege",children:"First Gen College %:"}),Object(u.jsx)("div",{class:"col-sm-10",children:Object(u.jsx)("input",{class:"form-control",id:"firstGenCollege",type:"text",onChange:function(e){var t=Object(f.a)({},c);t.students.firstGenCollege=parseInt(e.target.value),a(t)},name:"firstGenCollege"})})]}),Object(u.jsxs)("div",{class:"form-group row",children:[Object(u.jsx)("label",{for:"hoursMentoring",children:"Hours Mentoring:"}),Object(u.jsx)("div",{class:"col-sm-10",children:Object(u.jsx)("input",{class:"form-control",id:"hoursMentoring",type:"text",onChange:function(e){var t=Object(f.a)({},c);t.students.hoursMentoring=parseInt(e.target.value),a(t)},name:"hoursMentoring"})})]}),Object(u.jsx)("div",{class:"form-group row",children:Object(u.jsx)("input",{type:"submit",class:"btn btn-dark",value:"Submit"})})]})}),Object(u.jsx)("div",{className:"flexside"})]})})})};var h=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),r=t[0],c=t[1],a=Object(s.useState)(!1),d=Object(l.a)(a,2),j=d[0],b=d[1],f=Object(s.useState)(!1),h=Object(l.a)(f,2),O=h[0],m=h[1],p=n(27).default;return Object(u.jsx)("div",{children:j?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"flexContainer",children:[Object(u.jsx)("div",{className:"flexside",children:Object(u.jsx)("a",{href:"https://www.bridgebuildersla.org/",children:Object(u.jsx)("img",{src:i,alt:"Bridge Builders",className:"headerImg"})})}),Object(u.jsx)("div",{className:"flexmiddle"}),Object(u.jsx)("div",{className:"flexsideHeader",children:Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("div",{className:"adminLink",children:Object(u.jsx)("h2",{children:"Home"})})})})]})}),Object(u.jsx)(x,{})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"flexContainer",children:[Object(u.jsx)("div",{className:"flexside",children:Object(u.jsx)("a",{href:"https://www.bridgebuildersla.org/",children:Object(u.jsx)("img",{src:i,alt:"Bridge Builders",className:"headerImg"})})}),Object(u.jsx)("div",{className:"flexmiddle"}),Object(u.jsx)("div",{className:"flexsideHeader",children:Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("div",{className:"adminLink",children:Object(u.jsx)("h2",{children:"Home"})})})})]})}),Object(u.jsx)("div",{className:"infographicBlock",children:Object(u.jsxs)("div",{className:"flexContainer",children:[Object(u.jsx)("div",{className:"flexside"}),Object(u.jsx)("div",{className:"flexpassword",children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),p.post("/auth",{password:r}).then((function(e){"1"===e.data?(b(!0),m(!1)):(b(!1),m(!0),c(""))}))},children:Object(u.jsxs)("div",{class:"form-group",children:[Object(u.jsx)("label",{for:"passwordInput",children:"Password:"}),Object(u.jsx)("input",{class:"form-control",id:"passwordInput",type:"password",onChange:function(e){c(e.target.value)},name:"password"}),Object(u.jsx)("input",{type:"submit",class:"btn btn-dark",value:"Sign in"}),O?Object(u.jsx)("h3",{children:"Incorrect Password"}):""]})})}),Object(u.jsx)("div",{className:"flexside"})]})})]})})},O=n(2);var m=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"infographicBlock",children:Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{path:"/admin",children:Object(u.jsx)(h,{})}),Object(u.jsx)(O.a,{path:"/",children:Object(u.jsx)(b,{})})]})})})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),p()},21:function(e,t,n){},99:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.3740eb89.chunk.js.map