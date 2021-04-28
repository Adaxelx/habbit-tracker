(this["webpackJsonphabbit-tracker"]=this["webpackJsonphabbit-tracker"]||[]).push([[0],{159:function(e,n,t){},460:function(e,n,t){"use strict";t.r(n);var r,o,c,a,i,s,u,d,l,b,m,f,j,h,p=t(0),x=t.n(p),O=t(30),g=t.n(O),v=(t(159),t(16)),w=t(3),y=t(8),k={base:"10px",family:"Arial",light:300,regular:400,medium:500,bold:700,sizes:{xs:"0.75rem",s:"1rem",sm:"1.25rem",m:"1.5rem",ml:"2rem",l:"3rem"}},z={colors:{common:{black:"#000000",white:"#FFFFFF"}},font:k,margin:{xs:"0.5rem",s:"0.75rem",sm:"1rem",m:"1.25rem",ml:"1.5rem",l:"1.75rem"},time:{short:100,medium:300,long:500},zIndex:{max:1e3,medium:500,low:100},chooseFS:function(e){var n=k.sizes,t=Object.keys(n).find((function(n){return n===e}));return void 0!==t?n[t]:n.xs},sizes:{nav:"50px",dot:"20px"},media:{phone:{s:"320px"},tablet:{s:"768px",l:"1024px"},desktop:{s:"1366px",l:"1920px"}}},F="#AFE9FF",E=Object(y.a)(Object(y.a)({},z),{},{gridTile:{size:50},colors:Object(y.a)(Object(y.a)({},z.colors),{},{body:"#F3FFF2",calendar:{navigation:"#EDEFFF"},text:{primary:z.colors.common.black,secondary:"#808080",nav:"#A5A5A5"},button:{background:"#FFC136",text:"#fff"},nav:{topLeft:"#B7FF96",topRight:"#89FFED",bottomLeft:"#FDF194",bottomRight:"#FFADFC",background:"#A4FF9D",button:"#FFED67"},tile:{background:"#FFFCAF",backgroundActive:F},modalBackground:F,error:{main:"#FF9191",border:"#730000",text:"#730000"},loading:{main:"#a6fff9",border:"#1b968e",text:"#1b968e"},border:"#707070"})}),S=t(2),L=Object(p.createContext)(E),D=L.Provider,R=function(e){var n=e.children;return Object(S.jsx)(D,{value:E,children:Object(S.jsx)(w.a,{theme:E,children:n})})},C=t(7),A=new(t(155).a),T=Object(p.createContext)({token:void 0,login:function(){},logout:function(){}}),I=T.Provider,G=function(){var e=new Date;return e.setDate(e.getDate()+14),e},N=function(){return Object(p.useContext)(T)},V=function(e){var n=e.children,t=Object(p.useState)(A.get("token")),r=Object(C.a)(t,2),o=r[0],c=r[1],a={token:o,login:function(e){A.set("token",e,{path:"/",expires:G()}),c(e)},logout:function(){A.remove("token",{path:"/"}),c(void 0)}};return Object(S.jsx)(I,{value:a,children:n})},P=t(4),B=w.c.button(r||(r=Object(P.a)(["\n  position: fixed;\n  height: ",";\n  width: ",";\n  top: ",";\n  background-color: transparent;\n  border: none;\n  right: ",";\n  padding: 0;\n  ","\n  transition: ",";\n  z-index: ",";\n  &:focus {\n    outline: none;\n  }\n"])),(function(e){return e.theme.sizes.nav}),(function(e){return e.theme.sizes.nav}),(function(e){return e.theme.margin.sm}),(function(e){return e.theme.margin.sm}),(function(e){return e.open&&"transform: rotate(-45deg);"}),(function(e){var n=e.theme;return"".concat(n.time.medium,"ms")}),(function(e){return e.theme.zIndex.max})),H=w.c.div(o||(o=Object(P.a)(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  position: absolute;\n  opacity: ",";\n  transition: ",";\n"])),(function(e){return e.theme.sizes.dot}),(function(e){return e.theme.sizes.dot}),(function(e){return e.open?"0":"1"}),(function(e){var n=e.theme;return"".concat(n.time.medium,"ms")})),J=Object(w.c)(H)(c||(c=Object(P.a)(["\n  background-color: ",";\n  top: 0;\n  left: 0;\n"])),(function(e){return e.theme.colors.nav.topLeft})),M=Object(w.c)(H)(a||(a=Object(P.a)(["\n  background-color: ",";\n  top: 0;\n  right: 0;\n"])),(function(e){return e.theme.colors.nav.topRight})),W=Object(w.c)(H)(i||(i=Object(P.a)(["\n  background-color: ",";\n  bottom: 0;\n  left: 0;\n"])),(function(e){return e.theme.colors.nav.bottomLeft})),Y=Object(w.c)(H)(s||(s=Object(P.a)(["\n  background-color: ",";\n  bottom: 0;\n  right: 0;\n"])),(function(e){return e.theme.colors.nav.bottomRight})),q=w.c.div(u||(u=Object(P.a)(["\n  position: absolute;\n  height: 3px;\n  width: ",";\n  background-color: ",";\n  opacity: ",";\n  transition: ",";\n"])),(function(e){return e.theme.sizes.nav}),(function(e){return e.theme.colors.error.main}),(function(e){return e.open?"1":"0"}),(function(e){var n=e.theme;return"".concat(n.time.medium,"ms")})),_=Object(w.c)(q)(d||(d=Object(P.a)(["\n  transform: rotate(90deg);\n  top: 50%;\n"]))),$={DASHBOARD:"/",CALENDAR:"/calendar",LOGIN:"/login",REGISTER:"/register"},U=w.c.section(l||(l=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),K=Object(w.c)(U)(b||(b=Object(P.a)(["\n  height: 100vh;\n  width: 100%;\n  padding: 0 1rem;\n  @media (min-width: ",") {\n    flex-direction: row;\n    justify-content: space-between;\n    max-width: 1000px;\n    margin: 0 auto;\n  }\n"])),(function(e){return e.theme.media.tablet.s})),Q=Object(w.c)(U)(m||(m=Object(P.a)(["\n  @media (min-width: ",") {\n    margin-right: ",";\n  }\n"])),(function(e){return e.theme.media.tablet.s}),(function(e){return e.theme.margin.l})),X=w.c.h2(f||(f=Object(P.a)(["\n  font-size: ",";\n  margin: "," 0;\n  @media (max-width: ",") {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.font.sizes.l}),(function(e){return e.theme.margin.sm}),(function(e){return e.theme.media.phone.s}),(function(e){return e.theme.font.sizes.ml})),Z=w.c.p(j||(j=Object(P.a)(["\n  color: ",";\n  text-align: justify;\n  font-size: ",";\n  margin-bottom: ",";\n  @media (max-width: ",") {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.colors.text.secondary}),(function(e){return e.theme.font.sizes.m}),(function(e){return e.theme.margin.l}),(function(e){return e.theme.media.phone.s}),(function(e){return e.theme.font.sizes.sm})),ee=w.c.p(h||(h=Object(P.a)(["\n  font-size: ",";\n  margin: ",";\n"])),(function(e){return e.theme.font.sizes.sm}),(function(e){return e.theme.margin.s})),ne=function(){return Object(S.jsx)(Cn,{children:Object(S.jsxs)(K,{children:[Object(S.jsxs)(Q,{children:[Object(S.jsx)(X,{children:"Habbit tracker"}),Object(S.jsx)(Z,{children:"Track your progress in very simple and personalized app"})]}),Object(S.jsxs)(U,{children:[Object(S.jsx)(Sn,{as:v.b,to:$.REGISTER,size:"m",children:"Create account for free"}),Object(S.jsx)(ee,{children:"or"}),Object(S.jsx)(Sn,{as:v.b,to:$.LOGIN,size:"m",children:"Log in"})]})]})})},te=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],re=["January","February","March","April","May","Juny","Juni","August","September","October","November","December"],oe=function(e){var n=new Date(e),t=new Date(n.getFullYear(),0,0),r=n-t+60*(t.getTimezoneOffset()-n.getTimezoneOffset())*1e3;return Math.floor(r/864e5)},ce=function(e){return e.toISOString().match(/\d{4}-\d{2}-\d{2}/)[0]},ae=function(e,n,t){var r=Object(p.useState)([]),o=Object(C.a)(r,2),c=o[0],a=o[1];return Object(p.useEffect)((function(){var r=new Date(t,n).getDay(),o=32-new Date(t,n,32).getDate();0===r&&(r=7),r-=1;var c=[];c=e.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{numericStart:oe(e.dateStart),numericEnd:oe(e.dateEnd)})}));for(var i=[],s=[],u=oe("".concat(t,"-").concat(n+1,"-1")),d=0;d<6;d++)for(var l=function(e){if(0===d&&e<r)s.push({id:13*d+17*e+d*e,day:-1,events:[]});else{i=i.filter((function(n){return n.numericEnd>u&&n.daysOfWeek.includes(e)}));var n=7*d+e-r+1;if(n>o)return"break";c=c.filter((function(n){return n.numericStart<=u&&u<=n.numericEnd&&!i.includes(n)&&n.daysOfWeek.includes(e)&&i.push(n),u<=n.numericEnd})),s.push({id:13*d+17*e,day:n,events:i}),u+=1}},b=0;b<7;b++){if("break"===l(b))break}a(s)}),[n,t,e]),[c]},ie=t(5),se=t.n(ie),ue=t(10);var de,le,be=function(e,n){var t=Object(p.useState)(""),r=Object(C.a)(t,2),o=r[0],c=r[1],a=Object(p.useState)(!1),i=Object(C.a)(a,2),s=i[0],u=i[1],d=Object(p.useState)([]),l=Object(C.a)(d,2),b=l[0],m=l[1];return Object(p.useEffect)((function(){(function(){var e=Object(ue.a)(se.a.mark((function e(){var t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,n();case 4:t=e.sent,m(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c(e.t0.message);case 11:u(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),e),[b,s,o]},me=(t(151),t(152),t(59),t(17),t(11)),fe=function(e){return{required:"Field ".concat(e," is required.")}},je={pattern:{value:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,message:"Incorrect characters."}},he=function(e){return Object(y.a)(Object(y.a)({},fe(e)),{},{minLength:{value:6,message:"Field ".concat(e," must have at least 6 characters.")},maxLength:{value:30,message:"Field ".concat(e," must have maximum 30 characters.")}})};!function(e){e[e.LEFT=-1]="LEFT",e[e.RIGHT=1]="RIGHT"}(de||(de={}));var pe,xe,Oe,ge,ve,we,ye,ke,ze,Fe,Ee,Se,Le,De,Re,Ce,Ae,Te,Ie,Ge,Ne,Ve,Pe,Be,He=w.c.div(le||(le=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Je=w.c.div(pe||(pe=Object(P.a)(["\n  width: ",";\n  height: ",";\n  position: relative;\n  overflow: hidden;\n  background-color: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gridTile.size,"px")}),(function(e){var n=e.theme;return"".concat(n.gridTile.size,"px")}),(function(e){return e.theme.colors.common.white})),Me=w.c.div(xe||(xe=Object(P.a)(["\n  position: absolute;\n  border-radius: 50%;\n  width: ",";\n  height: ",";\n  background-color: ",";\n  top: ",";\n  left: ",";\n  ","\n"])),(function(e){var n=e.size,t=e.alone;return"".concat(t?n/1.3:n,"px")}),(function(e){var n=e.size,t=e.alone;return"".concat(t?n/1.3:n,"px")}),(function(e){return e.color}),(function(e){var n=e.position;return"".concat(n,"px")}),(function(e){var n=e.position;return"".concat(n,"px")}),(function(e){return e.alone&&"transform: translate(-50%,-50%);top: 50%;left:50%"})),We=w.c.p(Oe||(Oe=Object(P.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: ",";\n"])),(function(e){return e.theme.zIndex.low})),Ye=function(e,n){var t=n*(1.3+.1*(e.length-2))/e.length,r=(n-t)/(e.length-1),o=-r;return e.map((function(n){return o+=r,Object(S.jsx)(Me,{position:o,alone:1===e.length,color:n.color,size:t},n.id)}))},qe=function(e){var n=e.colors,t=e.day,r=Object(p.useContext)(L).gridTile.size;return Object(S.jsx)(Je,{children:-1===t?null:Object(S.jsxs)(S.Fragment,{children:[n&&Ye(n,r),Object(S.jsx)(We,{"data-testid":"day",children:t})]})})},_e=w.c.div(ge||(ge=Object(P.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  grid-template-rows: auto;\n  max-width: 100%;\n  border: 1px solid ",";\n  border-top: none;\n  background-color: #fff;\n"])),(function(e){return e.theme.colors.border})),$e=Object(w.c)(_e)(ve||(ve=Object(P.a)(["\n  background-color: ",";\n  border-top: 1px solid ",";\n  border-bottom: none;\n"])),(function(e){return e.theme.colors.calendar.navigation}),(function(e){return e.theme.colors.border})),Ue=w.c.div(we||(we=Object(P.a)(["\n  width: ",";\n  padding: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gridTile.size,"px")}),(function(e){return e.theme.margin.s})),Ke=function(e){var n=e.events,t=e.month,r=e.year,o=e.moveDate,c=ae(n,t,r),a=Object(C.a)(c,1)[0];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(tn,{moveDate:o,month:t,year:r}),Object(S.jsx)($e,{children:te.map((function(e){return Object(S.jsx)(Ue,{children:e},e)}))}),Object(S.jsx)(_e,{children:a.map((function(e){var n=e.id,t=e.day,r=e.events;return Object(S.jsx)(qe,{colors:r.map((function(e,n){var t=e.label;return"object"===typeof t?{color:null===t||void 0===t?void 0:t.color,id:n}:{}})),day:t},n)}))})]})},Qe=t(99),Xe=t(100),Ze=w.c.div(ye||(ye=Object(P.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),en=w.c.button(ke||(ke=Object(P.a)(["\n  background-color: transparent;\n  border: none;\n  font-size: ",";\n"])),(function(e){return e.theme.font.sizes.m})),nn=w.c.h3(ze||(ze=Object(P.a)(["\n  width: 200px;\n  text-align: center;\n  line-height: 100%;\n  margin: 0;\n"]))),tn=function(e){var n=e.month,t=e.year,r=e.moveDate;return Object(S.jsxs)(Ze,{children:[Object(S.jsx)(en,{onClick:function(){return r(de.LEFT)},children:Object(S.jsx)(Qe.a,{icon:Xe.a})}),Object(S.jsx)(nn,{children:"".concat(re[n]," ").concat(t)}),Object(S.jsx)(en,{onClick:function(){return r(de.RIGHT)},children:Object(S.jsx)(Qe.a,{icon:Xe.b})})]})},rn="".concat("https://habbit-tracker-back.herokuapp.com","/"),on="".concat(rn,"users/"),cn="".concat(rn,"events/"),an="".concat(rn,"labels/"),sn={LOGIN:"".concat(on,"login/"),REGISTER:"".concat(on,"register/"),LOGOUT:"".concat(on,"logout/"),EVENTS:cn,LABELS:an},un=function(){var e=Object(ue.a)(se.a.mark((function e(n,t,r){var o;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(sn.EVENTS,"?from=").concat(t,"&to=").concat(r),{headers:{"Content-Type":"application/json",Authorization:"".concat(n)},method:"GET"});case 2:if(200!==(o=e.sent).status){e.next=5;break}return e.abrupt("return",o.json());case 5:throw new Error("Something went wrong.");case 6:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),dn=function(){var e=Object(ue.a)(se.a.mark((function e(n){var t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(sn.LABELS),{headers:{"Content-Type":"application/json",Authorization:"".concat(n)},method:"GET"});case 2:if(200!==(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.json());case 5:throw new Error("Something went wrong.");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ln=function(){var e=Object(p.useState)(new Date),n=Object(C.a)(e,2),t=n[0],r=(n[1],Object(p.useState)(t.getMonth())),o=Object(C.a)(r,2),c=o[0],a=o[1],i=Object(p.useState)(t.getFullYear()),s=Object(C.a)(i,2),u=s[0],d=s[1],l=ce(new Date(u,c,2)),b=33-new Date(u,c,32).getDate(),m=ce(new Date(u,c,b)),f=N().token,j=Object(p.useState)([]),h=Object(C.a)(j,2),x=h[0],O=h[1],g=be([l,m,f],(function(){return un(f,l,m)})),v=Object(C.a)(g,3),w=v[0],k=v[1],z=v[2],F=be([f],(function(){return dn(f)})),E=Object(C.a)(F,3),L=E[0],D=E[1],R=E[2];Object(p.useEffect)((function(){var e=null===w||void 0===w?void 0:w.map((function(e){var n=null===L||void 0===L?void 0:L.filter((function(n){return(null===e||void 0===e?void 0:e.label)===(null===n||void 0===n?void 0:n._id)}))[0];return Object(y.a)(Object(y.a)({},e),{},{label:n})}));O(e)}),[w]);return Object(S.jsxs)(He,{children:[Object(S.jsx)(Ke,{events:x,month:c,moveDate:function(e){e===de.LEFT?0===c?(a(11),d((function(e){return e-1}))):a((function(n){return n+e})):11===c?(a(0),d((function(e){return e+1}))):a((function(n){return n+e}))},year:u}),Object(S.jsx)(Mn,{loading:k||D,error:z||R})]})},bn=t(71),mn=Object(w.c)(U)(Fe||(Fe=Object(P.a)(["\n  height: 100vh;\n  width: 100%;\n"]))),fn=function(){var e=Object(ue.a)(se.a.mark((function e(n){var t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(sn.LOGIN,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)});case 2:if(200!==(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.json());case 5:throw new Error("Something went wrong.");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),jn=function(){var e=Object(p.useState)(""),n=Object(C.a)(e,2),t=n[0],r=n[1],o=Object(p.useState)(!1),c=Object(C.a)(o,2),a=c[0],i=c[1],s=N(),u=Object(bn.a)(),d=u.register,l=u.handleSubmit,b=u.errors,m=Object(me.g)(),f=function(){var e=Object(ue.a)(se.a.mark((function e(n){var t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,fn(n);case 4:t=e.sent,i(!1),s.login(t.token),m.push($.CALENDAR),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),r(e.t0.message),i(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return s.token?Object(S.jsx)(me.a,{to:$.CALENDAR}):Object(S.jsx)(Cn,{children:Object(S.jsxs)(mn,{as:"form",onSubmit:l(f),noValidate:!0,children:[Object(S.jsx)(Vn,{name:"login",label:"Login",id:"login",refVal:d(he("login")),minLength:6,maxLength:30,error:b.login,"data-testid":"login"}),Object(S.jsx)(Vn,{name:"password",label:"Password",id:"password",type:"password",refVal:d(he("password")),autoComplete:"on",minLength:6,maxLength:30,error:b.password,"data-testid":"password"}),Object(S.jsx)(Mn,{error:t,loading:a}),Object(S.jsx)(Sn,{size:"m",type:"submit","data-testid":"submit",children:"Log in"})]})})},hn=function(){var e=Object(ue.a)(se.a.mark((function e(n){var t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(sn.REGISTER,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)});case 2:if(200!==(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.json());case 5:throw new Error("Something went wrong.");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),pn=$.DASHBOARD,xn=$.CALENDAR,On=$.LOGIN,gn=$.REGISTER,vn=[{link:pn,name:"Home page"},{link:xn,name:"Your tracker"},{link:On,name:"Login"},{link:gn,name:"Register"}],wn=[{path:pn,Component:ne,exact:!0},{path:xn,Component:ln,isPrivate:!0},{path:On,Component:jn},{path:gn,Component:function(){var e=Object(p.useState)(""),n=Object(C.a)(e,2),t=n[0],r=n[1],o=Object(p.useState)(!1),c=Object(C.a)(o,2),a=c[0],i=c[1],s=N(),u=Object(bn.a)(),d=u.register,l=u.handleSubmit,b=u.errors,m=Object(me.g)(),f=function(){var e=Object(ue.a)(se.a.mark((function e(n){var t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.password!==n.passwordRepeat){e.next=17;break}return i(!0),e.prev=2,e.next=5,hn(n);case 5:t=e.sent,i(!1),s.login(t.token),m.push($.CALENDAR),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),r(e.t0.message),i(!1);case 15:e.next=18;break;case 17:r("Passwords must be equal.");case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(n){return e.apply(this,arguments)}}();return s.token?Object(S.jsx)(me.a,{to:$.CALENDAR}):Object(S.jsx)(Cn,{children:Object(S.jsxs)(mn,{as:"form",onSubmit:l(f),noValidate:!0,children:[Object(S.jsx)("h2",{children:"Create new account"}),Object(S.jsx)(Vn,{name:"login",label:"Login",id:"login",refVal:d(he("login")),minLength:6,maxLength:30,error:b.login,"data-testid":"login"}),Object(S.jsx)(Vn,{name:"email",label:"Email",id:"email",type:"email",refVal:d(Object(y.a)(Object(y.a)({},fe("email")),je)),error:b.email,"data-testid":"email"}),Object(S.jsx)(Vn,{name:"password",label:"Password",id:"password",type:"password",refVal:d(he("password")),autoComplete:"on",minLength:6,maxLength:30,error:b.password,"data-testid":"password"}),Object(S.jsx)(Vn,{name:"passwordRepeat",label:"Repeat password",id:"passwordRepeat",type:"password",refVal:d(he("repeat password")),autoComplete:"on",minLength:6,maxLength:30,error:b.passwordRepeat,"data-testid":"passwordRepeat"}),Object(S.jsx)(Mn,{error:t,loading:a}),Object(S.jsx)(Sn,{size:"m",type:"submit","data-testid":"submit",children:"Create account"})]})})}}],yn=w.c.nav(Ee||(Ee=Object(P.a)(["\n  transform: ",";\n  opacity: ",";\n  transition: ",";\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  position: fixed;\n  background-color: ",";\n  z-index: ",";\n"])),(function(e){var n=e.open;return"scale(".concat(n?"1":"0",")")}),(function(e){return e.open?"1":"0"}),(function(e){var n=e.theme;return"opacity ".concat(n.time.medium,"ms")}),(function(e){return e.theme.colors.nav.background}),(function(e){return e.theme.zIndex.medium})),kn=w.c.div(Se||(Se=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),zn=Object(w.c)(v.b)(Le||(Le=Object(P.a)(["\n  color: ",";\n  text-decoration: none;\n  font-size: ",";\n  margin-bottom: ",";\n  transform: ",";\n  opacity: ",";\n  transition: ",";\n"])),(function(e){return e.theme.colors.text.nav}),(function(e){return e.theme.font.sizes.m}),(function(e){return e.theme.margin.m}),(function(e){var n=e.open;return"scale(".concat(n?"1":"2",") translateY(").concat(n?"0px":"-50px",")")}),(function(e){return e.open?"1":"0"}),(function(e){var n=e.theme;return e.open?"".concat(n.time.medium,"ms"):"0"})),Fn=function(e){var n=e.open,t=e.handleClose;return Object(S.jsx)(yn,{open:n,children:Object(S.jsx)(kn,{children:vn.map((function(e){var r=e.name,o=e.link;return Object(S.jsx)(zn,{open:n,to:o,onClick:function(){return t()},children:r},r)}))})})},En=function(){var e=Object(p.useState)(!1),n=Object(C.a)(e,2),t=n[0],r=n[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(B,{open:t,"data-testid":"navButton",onClick:function(){return r((function(e){return!e}))},children:[Object(S.jsx)(J,{open:t}),Object(S.jsx)(M,{open:t}),Object(S.jsx)(W,{open:t}),Object(S.jsx)(Y,{open:t}),Object(S.jsx)(q,{open:t}),Object(S.jsx)(_,{open:t})]}),Object(S.jsx)(Fn,{open:t,handleClose:function(){return r(!1)}})]})},Sn=w.c.button(De||(De=Object(P.a)(["\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  padding: ",";\n  font-size: ",";\n  min-width: ",";\n  display: inline-block;\n  text-align: center;\n"])),(function(e){return e.theme.colors.button.text}),(function(e){return e.theme.colors.button.background}),(function(e){return e.theme.colors.border}),(function(e){var n=e.theme,t=e.size;return t?n.margin[t]:n.margin.s}),(function(e){var n=e.theme,t=e.size;return t?n.font.sizes[t]:n.font.sizes.s}),(function(e){return e.noMaxWidth?"none":"150px"})),Ln=w.c.header(Re||(Re=Object(P.a)(["\n  position: fixed;\n  top: ",";\n  width: 100%;\n  text-align: center;\n  height: ",";\n  line-height: ",";\n  z-index: ",";\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: ",") {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.margin.sm}),(function(e){return e.theme.sizes.nav}),(function(e){return e.theme.sizes.nav}),(function(e){return e.theme.zIndex.max}),(function(e){return e.theme.media.phone.s}),(function(e){return e.theme.font.sizes.xs})),Dn=Object(w.c)(v.b)(Ce||(Ce=Object(P.a)(["\n  color: ",";\n  text-decoration: none;\n"])),(function(e){return e.theme.colors.common.black})),Rn=function(){return Object(S.jsx)(Ln,{children:Object(S.jsx)(Dn,{to:$.DASHBOARD,children:Object(S.jsx)("h1",{children:"Habbit tracker"})})})},Cn=w.c.main(Ae||(Ae=Object(P.a)(["\n  min-height: 100vh;\n  width: 100%;\n"]))),An=t(72),Tn=w.c.div(Te||(Te=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: ",";\n  width: 100%;\n  max-width: 300px;\n"])),(function(e){return e.theme.margin.sm})),In=w.c.label(Ie||(Ie=Object(P.a)(["\n  font-size: ",";\n  margin-bottom: ",";\n"])),(function(e){return e.theme.font.sizes.m}),(function(e){return e.theme.margin.s})),Gn=w.c.input(Ge||(Ge=Object(P.a)(["\n  font-size: ",";\n  width: 100%;\n  max-width: 300px;\n  border: ",";\n  &:focus {\n    outline: thin dotted;\n  }\n"])),(function(e){return e.theme.font.sizes.sm}),(function(e){var n=e.error,t=e.theme;return n&&"1px solid ".concat(t.colors.error.main)})),Nn=w.c.p(Ne||(Ne=Object(P.a)(["\n  margin-top: ",";\n  color: ",";\n  text-align: justify;\n"])),(function(e){return e.theme.margin.xs}),(function(e){return e.theme.colors.error.main})),Vn=function(e){var n=e.label,t=e.id,r=e.refVal,o=e.error,c=e.type,a=void 0===c?"text":c,i=Object(An.a)(e,["label","id","refVal","error","type"]);return Object(S.jsxs)(Tn,{children:[Object(S.jsx)(In,{htmlFor:t,children:n}),Object(S.jsx)(Gn,Object(y.a)(Object(y.a)({error:!!o,id:t,type:a},i),{},{ref:r})),o&&Object(S.jsx)(Nn,{children:null===o||void 0===o?void 0:o.message})]})};!function(e){e.ERROR="error",e.LOADING="loading"}(Ve||(Ve={}));var Pn,Bn=w.c.div(Pe||(Pe=Object(P.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Hn=w.c.div(Be||(Be=Object(P.a)(["\n  border: ",";\n  background-color: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: ",";\n  font-size: ",";\n  margin-bottom: ",";\n"])),(function(e){var n=e.type,t=e.theme;return"1px solid ".concat(t.colors[n].border)}),(function(e){var n=e.type,t=e.theme;return"".concat(t.colors[n].main)}),(function(e){var n=e.type,t=e.theme;return"".concat(t.colors[n].text)}),(function(e){return e.theme.margin.xs}),(function(e){return e.theme.font.sizes.s}),(function(e){return e.theme.margin.sm})),Jn=function(e){var n=e.children,t=void 0===n?"\u0141adowanie...":n,r=e.type,o=void 0===r?Ve.ERROR:r;return Object(S.jsx)(Bn,{children:Object(S.jsx)(Hn,{"data-testid":"alert",type:o,children:t})})},Mn=function(e){var n=e.error,t=e.loading,r=Object(An.a)(e,["error","loading"]);return n?Object(S.jsx)(Jn,Object(y.a)(Object(y.a)({},r),{},{children:n})):t?Object(S.jsx)(Jn,Object(y.a)(Object(y.a)({},r),{},{type:Ve.LOADING})):null},Wn=Object(w.b)(Pn||(Pn=Object(P.a)(["\n    body{\n        color: ",";\n        background-color: ",";\n        font-family: 'Roboto', sans-serif;\n        overflow-x: hidden;\n    }\n    * {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.body})),Yn=function(){return Object(S.jsx)(R,{children:Object(S.jsxs)(V,{children:[Object(S.jsx)(Wn,{}),Object(S.jsxs)(v.a,{basename:"/habbit-tracker",children:[Object(S.jsx)(Rn,{}),Object(S.jsx)(En,{}),Object(S.jsx)(_n,{})]})]})})},qn=function(e){var n=Object.assign({},e);return N().token?Object(S.jsx)(me.b,Object(y.a)({},n)):Object(S.jsx)(me.a,{to:$.LOGIN})},_n=function(){return Object(S.jsx)(me.d,{children:wn.map((function(e){var n=e.path,t=e.Component;return e.isPrivate?Object(S.jsx)(qn,{path:n,children:Object(S.jsx)(t,{})},n):Object(S.jsx)(me.b,{path:n,exact:!0,children:Object(S.jsx)(t,{})},n)}))})},$n=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,461)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),c(e),a(e)}))};g.a.render(Object(S.jsx)(x.a.StrictMode,{children:Object(S.jsx)(Yn,{})}),document.getElementById("root")),$n()}},[[460,1,2]]]);
//# sourceMappingURL=main.ad5cb628.chunk.js.map