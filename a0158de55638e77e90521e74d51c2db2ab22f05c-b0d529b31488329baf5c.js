(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{C58f:function(e,t,a){e.exports=a.p+"static/front-end-1592bcfa127bf6a1570f091b12eb8ae3.svg"},Cy5E:function(e,t,a){e.exports=a.p+"static/backend-7d1f4fe61f632a9e9e8f32fbc7dd254d.svg"},D5Hz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var n=a("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var r=a("USkh"),l=null,i="https://api.emailjs.com";function o(e,t,a){return void 0===a&&(a={}),new Promise((function(r,l){var i=new XMLHttpRequest;for(var o in i.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?r(t):l(t)})),i.addEventListener("error",(function(e){l(new n.EmailJSResponseStatus(e.target))})),i.open("POST",e,!0),a)i.setRequestHeader(o,a[o]);i.send(t)}))}function s(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function c(e,t){l=e,i=t||"https://api.emailjs.com"}function u(e,t,a,n){var r={lib_version:"2.6.3",user_id:n||l,service_id:e,template_id:t,template_params:s(a)};return o(i+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function d(e,t,a,n){var s;if("string"==typeof a&&(a=document.querySelector("#"!==(s=a)[0]?"#"+s:s)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(a);var c=new FormData(a);return c.append("lib_version","2.6.3"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n||l),o(i+"/api/v1.0/email/send-form",c).then((function(e){return r.UI.successState(a),e}),(function(e){return r.UI.errorState(a),Promise.reject(e)}))}t.init=c,t.send=u,t.sendForm=d,t.default={init:c,send:u,sendForm:d}},MkV5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var n=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=n},PqyB:function(e,t,a){"use strict";a.d(t,"a",(function(){return G}));var n=a("dI71"),r=a("q1tI"),l=a.n(r),i=a("rGDf"),o=a("v7Hm"),s=a("ODXe"),c=a("t6h6");function u(e){void 0===e&&(e=!1);var t=Object(r.useState)(e),a=Object(s.a)(t,2),n=a[0],l=a[1];return[n,{on:Object(r.useCallback)((function(){l(!0)}),[]),off:Object(r.useCallback)((function(){l(!1)}),[]),toggle:Object(r.useCallback)((function(){l((function(e){return!e}))}),[])}]}var d=a("zlS4"),m=a("sKyC"),f=a("U6LL"),p=a("epLR"),b=a("pr4h");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var h={path:r.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},r.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),r.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),r.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},g=Object(m.a)((function(e,t){var a=e.as,n=e.boxSize,l=void 0===n?"1em":n,i=e.viewBox,o=e.color,s=void 0===o?"currentColor":o,c=e.focusable,u=void 0!==c&&c,d=e.children,m=e.className,b=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["as","boxSize","viewBox","color","focusable","children","className"]),g={ref:t,display:"inline-block",lineHeight:"1em",color:s,focusable:u,flexShrink:0,boxSize:l,className:Object(p.b)("chakra-icon",m)},O=null!=i?i:h.viewBox;if(a&&"string"!=typeof a)return r.createElement(f.a.svg,v({as:a},g,b));var E=null!=d?d:h.path;return r.createElement(f.a.svg,v({verticalAlign:"middle",viewBox:O},g,b),E)}));b.a&&(g.displayName="Icon");var O=a("4jWa"),E=a("CRla"),y=a("5+Am"),j=a("JX03"),x=a("BXwj"),w=a("KwD7");function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var I=Object(j.a)({strict:!1,name:"FormControlContext"}),_=Object(s.a)(I,2),C=_[0],N=_[1];var A=Object(m.a)((function(e,t){var a=Object(O.a)("Form",e),n=function(e){var t=e.id,a=e.isRequired,n=e.isInvalid,r=e.isDisabled,l=e.isLoading,i=e.isReadOnly,o=k(e,["id","isRequired","isInvalid","isDisabled","isLoading","isReadOnly"]),d=Object(c.a)(),m=t||"field-"+d,f=m+"-label",p=m+"-feedback",b=m+"-helptext",v=u(),h=Object(s.a)(v,2),g=h[0],O=h[1],E=u(),y=Object(s.a)(E,2),j=y[0],x=y[1];return{isRequired:!!a,isInvalid:!!n,isLoading:!!l,isReadOnly:!!i,isDisabled:!!r,isFocused:!!j,onFocus:x.on,onBlur:x.off,hasHelpText:g,setHasHelpText:O,id:m,labelId:f,feedbackId:p,helpTextId:b,htmlProps:o}}(Object(E.d)(e)),l=n.htmlProps,i=k(n,["htmlProps"]),o=Object(p.b)("chakra-form-control",e.className);return r.createElement(C,{value:i},r.createElement(y.b,{value:a},r.createElement(f.a.div,S({role:"group",ref:t},l,{className:o,__css:{width:"100%",position:"relative"}}))))}));b.a&&(A.displayName="FormControl");var F=Object(m.a)((function(e,t){var a=Object(O.b)("FormLabel",e),n=Object(E.d)(e),l=n.children,i=function(e){var t,a,n=N();return R({},e,{"data-focus":Object(p.c)(null==n?void 0:n.isFocused),"data-disabled":Object(p.c)(null==n?void 0:n.isDisabled),"data-invalid":Object(p.c)(null==n?void 0:n.isInvalid),"data-loading":Object(p.c)(null==n?void 0:n.isLoading),"data-readonly":Object(p.c)(null==n?void 0:n.isReadOnly),id:null!=(t=e.id)?t:null==n?void 0:n.labelId,htmlFor:null!=(a=e.htmlFor)?a:null==n?void 0:n.id})}(k(n,["className","children"])),o=N();return r.createElement(f.a.label,S({ref:t,className:Object(p.b)("chakra-form__label",e.className),__css:S({display:"block",textAlign:"left"},a)},i),l,(null==o?void 0:o.isRequired)&&r.createElement(q,null))}));b.a&&(F.displayName="FormLabel");var q=Object(m.a)((function(e,t){var a=N(),n=Object(y.d)();if(!(null==a?void 0:a.isRequired))return null;var l=Object(p.b)("chakra-form__required-indicator",e.className);return r.createElement(f.a.span,S({role:"presentation","aria-hidden":!0,ref:t},e,{__css:n.requiredIndicator,className:l,children:e.children||"*"}))}));b.a&&(q.displayName="RequiredIndicator");var L=Object(m.a)((function(e,t){var a,n=N(),l=Object(y.d)();Object(d.a)((function(){return null==n||n.setHasHelpText.on(),function(){return null==n?void 0:n.setHasHelpText.off()}}),[]);var i=Object(p.b)("chakra-form__helper-text",e.className);return r.createElement(f.a.div,S({ref:t,__css:l.helperText},e,{className:i,id:null!=(a=e.id)?a:null==n?void 0:n.helpTextId}))}));b.a&&(L.displayName="FormHelperText");var P=Object(m.a)((function(e,t){var a,n=Object(y.d)(),l=N();if(!(null==l?void 0:l.isInvalid))return null;var i=Object(p.b)("chakra-form__error-message",e.className);return r.createElement(f.a.div,S({"aria-live":"polite",ref:t},e,{__css:S({display:"flex",alignItems:"center"},n.errorText),className:i,id:null!=(a=e.id)?a:null==l?void 0:l.feedbackId}))}));b.a&&(P.displayName="FormErrorMessage");var M=Object(m.a)((function(e,t){var a=Object(y.d)(),n=N();if(!(null==n?void 0:n.isInvalid))return null;var l=Object(p.b)("chakra-form__error-icon",e.className);return r.createElement(g,S({ref:t,"aria-hidden":!0},e,{__css:a.errorIcon,className:l}),r.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}b.a&&(M.displayName="FormErrorIcon");var D=Object(m.a)((function(e,t){var a=Object(O.a)("Input",e),n=function(e){var t,a=N(),n=[];(null==a?void 0:a.isInvalid)&&(n.length>0?n.unshift(a.feedbackId):n.push(a.feedbackId)),(null==a?void 0:a.hasHelpText)&&n.push(a.helpTextId);var r=n.join(" ");return R({},Object(x.d)(e,["isInvalid","isDisabled","isReadOnly","isRequired"]),{id:null!=(t=e.id)?t:null==a?void 0:a.id,disabled:e.disabled||e.isDisabled||(null==a?void 0:a.isDisabled),readOnly:e.readOnly||e.isReadOnly||(null==a?void 0:a.isReadOnly),required:e.required||e.isRequired||(null==a?void 0:a.isRequired),"aria-invalid":Object(p.a)(e.isInvalid||(null==a?void 0:a.isInvalid)),"aria-required":Object(p.a)(e.isRequired||(null==a?void 0:a.isRequired)),"aria-readonly":Object(p.a)(e.isReadOnly||(null==a?void 0:a.isReadOnly)),"aria-describedby":r||void 0,onFocus:Object(w.a)(null==a?void 0:a.onFocus,e.onFocus),onBlur:Object(w.a)(null==a?void 0:a.onBlur,e.onBlur)})}(Object(E.d)(e)),l=Object(p.b)("chakra-input",e.className);return r.createElement(f.a.input,T({},n,{__css:a.field,ref:t,className:l}))}));b.a&&(D.displayName="Input"),D.id="Input";var z=a("3L07"),H=a("D5Hz"),B=a.n(H),G=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement(i.a,{as:"h1",mb:5,textAlign:["left","center"]},"Contact Us"),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement(o.a,{padding:"8",bg:"blue.100",width:"92vw",centerContent:!0},l.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),B.a.sendForm("service_7fvgwqf","template_vwtrhbo",e.target,"user_5ER6plW1UcDspryz51fCw").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},l.a.createElement(A,null,l.a.createElement(F,null,"Full Name"),l.a.createElement(D,{name:"name",placeholder:"Enter your full name"})),l.a.createElement("br",null),l.a.createElement(A,null,l.a.createElement(F,null,"Email"),l.a.createElement(D,{name:"email",placeholder:"Enter your email"})),l.a.createElement("br",null),l.a.createElement(A,null,l.a.createElement(F,null,"Message"),l.a.createElement(D,{name:"message",height:"250px",placeholder:"Enter message"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(z.a,{height:"48px",width:"200px",type:"submit",value:"Send"},"Submit")))))},t}(l.a.Component)},USkh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n},"W/9C":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("tofy"),i=a("z0gp"),o=a("v7Hm"),s=a("MAJE");t.a=function(e){e.data;var t=e.year;return r.a.createElement(l.a,{as:"footer",h:20,justifyContent:"center",borderTop:"1px",borderColor:"gray.200",alignItems:"center"},r.a.createElement(i.a,{columns:3,spacing:10},r.a.createElement(o.a,{as:"span"},r.a.createElement(s.a,{style:{textAlign:"left",alignSelf:"stretch"}},"JFSS Vex")),r.a.createElement(o.a,null,"Built by Vex Robotics Team ©",t),r.a.createElement(o.a,null,r.a.createElement("a",{href:"https://www.instagram.com/jfss_royals/"},r.a.createElement(s.a,{style:{textAlign:"right",alignSelf:"stretch"}},"Instagram")))))}},gIaw:function(e,t,a){e.exports=a.p+"static/devops-137064a4741437fdcc7d75521801d2ee.svg"},jZwe:function(e,t,a){"use strict";var n=a("+p43"),r=a("v7Hm"),l=a("rGDf"),i=a("z0gp"),o=a("MAJE"),s=a("q1tI"),c=a.n(s),u=a("gIaw"),d=a.n(u);t.a=function(){var e=Object(n.b)().colorMode;return c.a.createElement(r.a,{px:5,width:"95vw"},c.a.createElement(l.a,{as:"h1",mb:5,textAlign:["left","center"]},"Something Else"),c.a.createElement("br",null),c.a.createElement(i.a,{columns:2,spacing:50,height:{sm:"940px",md:"470px"}},c.a.createElement(r.a,{flex:"1 1 auto"},c.a.createElement("iframe",{title:"3D Model",src:"https://myhub.autodesk360.com/ue2d7bfee/shares/public/SH56a43QTfd62c1cd968ec70f027b19cabfc?mode=embed",width:"100%",height:"100%",allowfullscreen:"true",webkitallowfullscreen:"true",alt:"3D Model",mozallowfullscreen:"true",frameborder:"0"})),c.a.createElement(r.a,{rounded:"lg",pb:8,position:"relative",bg:"blue.100",flex:"1 1 auto"},c.a.createElement(r.a,{as:"img",src:d.a,alt:"Image",pos:"absolute",width:"inherit",height:"100%",opacity:.14,zIndex:205}),c.a.createElement(l.a,{textAlign:"center",as:"h2",fontSize:20,textTransform:"capitalize",my:5,color:e&&"black"},"hedo"),c.a.createElement(o.a,{py:2,textAlign:"center",width:"80%",rounded:"lg",mb:2,mx:"auto",color:"gray.700",fontWeight:"600"},"heyo"))))}},nOYz:function(e,t,a){"use strict";var n=a("+p43"),r=a("v7Hm"),l=a("rGDf"),i=a("z0gp"),o=a("MAJE"),s=a("q1tI"),c=a.n(s),u={Blah:{skills:["something","something 2","something 3","something 4"],color:"blue"},BlahBlah:{skills:["something","something 2","something 3","something 4"],color:"red"},BlahThree:{skills:["something","something 2","something 3","something 4"],color:"green"},BlahFour:{skills:["something","something 2","something 3","something 4"],color:"gray"}},d=a("Cy5E"),m=a.n(d),f=a("gIaw"),p=a.n(f),b=a("nPZk"),v=a.n(b),h=a("C58f"),g=a.n(h);t.a=function(){var e=Object(n.b)().colorMode,t=Object.keys(u),a=[g.a,m.a,p.a,v.a];return c.a.createElement(r.a,{px:5,width:"95vw"},c.a.createElement(l.a,{as:"h1",mb:5,textAlign:["left","center"]},"Something"),c.a.createElement("br",null),c.a.createElement(i.a,{columns:[1,1,2,4],spacing:5},t.map((function(t,n){return c.a.createElement(r.a,{rounded:"lg",pb:8,key:t,position:"relative",bg:u[t].color+".100",zIndex:206},c.a.createElement(r.a,{as:"img",src:a[n],alt:t,pos:"absolute",width:"inherit",height:"100%",opacity:.14,zIndex:205}),c.a.createElement(l.a,{textAlign:"center",as:"h2",fontSize:20,textTransform:"capitalize",my:5,color:e&&"black"},t),u[t].skills.map((function(e){return c.a.createElement(o.a,{py:2,textAlign:"center",width:"80%",rounded:"lg",mb:2,mx:"auto",color:"gray.700",fontWeight:"600",key:e},e)})))}))))}},nPZk:function(e,t,a){e.exports=a.p+"static/extras-1a3698fd42ff392fb6f55072239fc3c6.svg"},z0gp:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("sKyC"),r=a("pr4h"),l=a("x9W9"),i=a("q1tI"),o=a("U6LL");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var u=Object(n.a)((function(e,t){var a=e.area,n=e.templateAreas,r=e.gap,l=e.rowGap,u=e.columnGap,d=e.column,m=e.row,f=e.autoFlow,p=e.autoRows,b=e.templateRows,v=e.autoColumns,h=e.templateColumns,g=c(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]);return i.createElement(o.a.div,s({ref:t,display:"grid",gridArea:a,gridTemplateAreas:n,gridGap:r,gridRowGap:l,gridColumnGap:u,gridAutoColumns:v,gridColumn:d,gridRow:m,gridAutoFlow:f,gridAutoRows:p,gridTemplateRows:b,gridTemplateColumns:h},g))}));r.a&&(u.displayName="Grid");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=Object(n.a)((function(e,t){var a,n,o=e.columns,s=e.spacingX,c=e.spacingY,m=e.spacing,f=e.minChildWidth,p=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["columns","spacingX","spacingY","spacing","minChildWidth"]),b=Boolean(f)?(n=f,Object(l.b)(n,(function(e){return Object(r.e)(e)?null:"repeat(auto-fit, minmax("+(t=e,(Object(r.f)(t)?t+"px":t)+", 1fr))");var t}))):(a=o,Object(l.b)(a,(function(e){return Object(r.e)(e)?null:"repeat("+e+", 1fr)"})));return i.createElement(u,d({ref:t,gap:m,columnGap:s,rowGap:c,templateColumns:b},p))}));r.a&&(m.displayName="SimpleGrid")}}]);
//# sourceMappingURL=a0158de55638e77e90521e74d51c2db2ab22f05c-b0d529b31488329baf5c.js.map