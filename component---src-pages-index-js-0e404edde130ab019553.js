(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2W6z":function(e,t,a){"use strict";var n=function(){};e.exports=n},C58f:function(e,t,a){e.exports=a.p+"static/front-end-1592bcfa127bf6a1570f091b12eb8ae3.svg"},Cy5E:function(e,t,a){e.exports=a.p+"static/backend-7d1f4fe61f632a9e9e8f32fbc7dd254d.svg"},D5Hz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var n=a("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var r=a("USkh"),l=null,i="https://api.emailjs.com";function o(e,t,a){return void 0===a&&(a={}),new Promise((function(r,l){var i=new XMLHttpRequest;for(var o in i.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?r(t):l(t)})),i.addEventListener("error",(function(e){l(new n.EmailJSResponseStatus(e.target))})),i.open("POST",e,!0),a)i.setRequestHeader(o,a[o]);i.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function s(e,t){l=e,i=t||"https://api.emailjs.com"}function u(e,t,a,n){var r={lib_version:"2.6.3",user_id:n||l,service_id:e,template_id:t,template_params:c(a)};return o(i+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function d(e,t,a,n){var c;if("string"==typeof a&&(a=document.querySelector("#"!==(c=a)[0]?"#"+c:c)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(a);var s=new FormData(a);return s.append("lib_version","2.6.3"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",n||l),o(i+"/api/v1.0/email/send-form",s).then((function(e){return r.UI.successState(a),e}),(function(e){return r.UI.errorState(a),Promise.reject(e)}))}t.init=s,t.send=u,t.sendForm=d,t.default={init:s,send:u,sendForm:d}},MkV5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var n=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=n},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("rGDf"),o=a("MAJE"),c=a("+p43"),s=a("v7Hm"),u=a("z0gp"),d={Blah:{skills:["something","something 2","something 3","something 4"],color:"blue"},BlahBlah:{skills:["something","something 2","something 3","something 4"],color:"red"},BlahThree:{skills:["something","something 2","something 3","something 4"],color:"green"},BlahFour:{skills:["something","something 2","something 3","something 4"],color:"gray"}},m=a("Cy5E"),p=a.n(m),f=a("gIaw"),b=a.n(f),h=a("nPZk"),v=a.n(h),g=a("C58f"),O=a.n(g),y=function(){var e=Object(c.b)().colorMode,t=Object.keys(d),a=[O.a,p.a,b.a,v.a];return r.a.createElement(s.a,{px:5,width:"95vw"},r.a.createElement(i.a,{as:"h1",mb:5,textAlign:["left","center"]},"Something"),r.a.createElement("br",null),r.a.createElement(u.a,{columns:[1,1,2,4],spacing:5},t.map((function(t,n){return r.a.createElement(s.a,{rounded:"lg",pb:8,key:t,position:"relative",bg:d[t].color+".100",zIndex:206},r.a.createElement(s.a,{as:"img",src:a[n],alt:t,pos:"absolute",width:"inherit",height:"100%",opacity:.14,zIndex:205}),r.a.createElement(i.a,{textAlign:"center",as:"h2",fontSize:20,textTransform:"capitalize",my:5,color:e&&"black"},t),d[t].skills.map((function(e){return r.a.createElement(o.a,{py:2,textAlign:"center",width:"80%",rounded:"lg",mb:2,mx:"auto",color:"gray.700",fontWeight:"600",key:e},e)})))}))))},E=a("dI71"),j=a("ODXe"),w=(a("2W6z"),x()?r.a.useLayoutEffect:r.a.useEffect);"undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math&&self;function x(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}var S=!1,R=0,_=function(){return++R};function k(e,t){return e+"-"+t}function N(e,t){var a=function(e){var t=e||(S?_():null),a=Object(n.useState)(t),r=a[0],l=a[1];return w((function(){null===r&&l(_())}),[]),Object(n.useEffect)((function(){!1===S&&(S=!0)}),[]),null!=r?String(r):void 0}(),r=null!=e?e:a;return t?k(t,r):r}function I(e){void 0===e&&(e=!1);var t=Object(n.useState)(e),a=Object(j.a)(t,2),r=a[0],l=a[1];return[r,{on:Object(n.useCallback)((function(){l(!0)}),[]),off:Object(n.useCallback)((function(){l(!1)}),[]),toggle:Object(n.useCallback)((function(){l((function(e){return!e}))}),[])}]}var C=a("zlS4"),A=a("sKyC"),F=a("U6LL"),L=a("epLR"),z=a("pr4h");function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var D={path:n.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},n.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),n.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),n.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},M=Object(A.a)((function(e,t){var a=e.as,r=e.boxSize,l=void 0===r?"1em":r,i=e.viewBox,o=e.color,c=void 0===o?"currentColor":o,s=e.focusable,u=void 0!==s&&s,d=e.children,m=e.className,p=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["as","boxSize","viewBox","color","focusable","children","className"]),f={ref:t,display:"inline-block",lineHeight:"1em",color:c,focusable:u,flexShrink:0,boxSize:l,className:Object(L.b)("chakra-icon",m)},b=null!=i?i:D.viewBox;if(a&&"string"!=typeof a)return n.createElement(F.a.svg,B({as:a},f,p));var h=null!=d?d:D.path;return n.createElement(F.a.svg,B({verticalAlign:"middle",viewBox:b},f,p),h)}));z.a&&(M.displayName="Icon");var T=a("4jWa"),P=a("CRla"),q=a("5+Am"),H=a("JX03"),G=a("BXwj"),W=a("KwD7");function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var X=Object(H.a)({strict:!1,name:"FormControlContext"}),K=Object(j.a)(X,2),Z=K[0],Y=K[1];var Q=Object(A.a)((function(e,t){var a=Object(T.a)("Form",e),r=function(e){var t=e.id,a=e.isRequired,n=e.isInvalid,r=e.isDisabled,l=e.isLoading,i=e.isReadOnly,o=V(e,["id","isRequired","isInvalid","isDisabled","isLoading","isReadOnly"]),c=N(),s=t||"field-"+c,u=s+"-label",d=s+"-feedback",m=s+"-helptext",p=I(),f=Object(j.a)(p,2),b=f[0],h=f[1],v=I(),g=Object(j.a)(v,2),O=g[0],y=g[1];return{isRequired:!!a,isInvalid:!!n,isLoading:!!l,isReadOnly:!!i,isDisabled:!!r,isFocused:!!O,onFocus:y.on,onBlur:y.off,hasHelpText:b,setHasHelpText:h,id:s,labelId:u,feedbackId:d,helpTextId:m,htmlProps:o}}(Object(P.d)(e)),l=r.htmlProps,i=V(r,["htmlProps"]),o=Object(L.b)("chakra-form-control",e.className);return n.createElement(Z,{value:i},n.createElement(q.b,{value:a},n.createElement(F.a.div,U({role:"group",ref:t},l,{className:o,__css:{width:"100%",position:"relative"}}))))}));z.a&&(Q.displayName="FormControl");var $=Object(A.a)((function(e,t){var a=Object(T.b)("FormLabel",e),r=Object(P.d)(e),l=r.children,i=function(e){var t,a,n=Y();return J({},e,{"data-focus":Object(L.c)(null==n?void 0:n.isFocused),"data-disabled":Object(L.c)(null==n?void 0:n.isDisabled),"data-invalid":Object(L.c)(null==n?void 0:n.isInvalid),"data-loading":Object(L.c)(null==n?void 0:n.isLoading),"data-readonly":Object(L.c)(null==n?void 0:n.isReadOnly),id:null!=(t=e.id)?t:null==n?void 0:n.labelId,htmlFor:null!=(a=e.htmlFor)?a:null==n?void 0:n.id})}(V(r,["className","children"])),o=Y();return n.createElement(F.a.label,U({ref:t,className:Object(L.b)("chakra-form__label",e.className),__css:U({display:"block",textAlign:"left"},a)},i),l,(null==o?void 0:o.isRequired)&&n.createElement(ee,null))}));z.a&&($.displayName="FormLabel");var ee=Object(A.a)((function(e,t){var a=Y(),r=Object(q.d)();if(!(null==a?void 0:a.isRequired))return null;var l=Object(L.b)("chakra-form__required-indicator",e.className);return n.createElement(F.a.span,U({role:"presentation","aria-hidden":!0,ref:t},e,{__css:r.requiredIndicator,className:l,children:e.children||"*"}))}));z.a&&(ee.displayName="RequiredIndicator");var te=Object(A.a)((function(e,t){var a,r=Y(),l=Object(q.d)();Object(C.a)((function(){return null==r||r.setHasHelpText.on(),function(){return null==r?void 0:r.setHasHelpText.off()}}),[]);var i=Object(L.b)("chakra-form__helper-text",e.className);return n.createElement(F.a.div,U({ref:t,__css:l.helperText},e,{className:i,id:null!=(a=e.id)?a:null==r?void 0:r.helpTextId}))}));z.a&&(te.displayName="FormHelperText");var ae=Object(A.a)((function(e,t){var a,r=Object(q.d)(),l=Y();if(!(null==l?void 0:l.isInvalid))return null;var i=Object(L.b)("chakra-form__error-message",e.className);return n.createElement(F.a.div,U({"aria-live":"polite",ref:t},e,{__css:U({display:"flex",alignItems:"center"},r.errorText),className:i,id:null!=(a=e.id)?a:null==l?void 0:l.feedbackId}))}));z.a&&(ae.displayName="FormErrorMessage");var ne=Object(A.a)((function(e,t){var a=Object(q.d)(),r=Y();if(!(null==r?void 0:r.isInvalid))return null;var l=Object(L.b)("chakra-form__error-icon",e.className);return n.createElement(M,U({ref:t,"aria-hidden":!0},e,{__css:a.errorIcon,className:l}),n.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}z.a&&(ne.displayName="FormErrorIcon");var le=Object(A.a)((function(e,t){var a=Object(T.a)("Input",e),r=function(e){var t,a=Y(),n=[];(null==a?void 0:a.isInvalid)&&(n.length>0?n.unshift(a.feedbackId):n.push(a.feedbackId)),(null==a?void 0:a.hasHelpText)&&n.push(a.helpTextId);var r=n.join(" ");return J({},Object(G.d)(e,["isInvalid","isDisabled","isReadOnly","isRequired"]),{id:null!=(t=e.id)?t:null==a?void 0:a.id,disabled:e.disabled||e.isDisabled||(null==a?void 0:a.isDisabled),readOnly:e.readOnly||e.isReadOnly||(null==a?void 0:a.isReadOnly),required:e.required||e.isRequired||(null==a?void 0:a.isRequired),"aria-invalid":Object(L.a)(e.isInvalid||(null==a?void 0:a.isInvalid)),"aria-required":Object(L.a)(e.isRequired||(null==a?void 0:a.isRequired)),"aria-readonly":Object(L.a)(e.isReadOnly||(null==a?void 0:a.isReadOnly)),"aria-describedby":r||void 0,onFocus:Object(W.a)(null==a?void 0:a.onFocus,e.onFocus),onBlur:Object(W.a)(null==a?void 0:a.onBlur,e.onBlur)})}(Object(P.d)(e)),l=Object(L.b)("chakra-input",e.className);return n.createElement(F.a.input,re({},r,{__css:a.field,ref:t,className:l}))}));z.a&&(le.displayName="Input"),le.id="Input";var ie=a("qKvR"),oe={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},ce=Object(F.a)("span",{baseStyle:oe});z.a&&(ce.displayName="VisuallyHidden");var se=Object(F.a)("input",{baseStyle:oe});z.a&&(se.displayName="VisuallyHiddenInput");function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var de=Object(ie.c)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),me=Object(A.a)((function(e,t){var a=Object(T.b)("Spinner",e),r=Object(P.d)(e),l=r.label,i=void 0===l?"Loading...":l,o=r.thickness,c=void 0===o?"2px":o,s=r.speed,u=void 0===s?"0.45s":s,d=r.color,m=r.emptyColor,p=void 0===m?"transparent":m,f=r.className,b=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(r,["label","thickness","speed","color","emptyColor","className"]),h=Object(L.b)("chakra-spinner",f),v=ue({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:c,borderBottomColor:p,borderLeftColor:p,color:d,animation:de+" "+u+" linear infinite"},a);return n.createElement(F.a.div,ue({ref:t,__css:v,className:h},b),i&&n.createElement(ce,null,i))}));z.a&&(me.displayName="Spinner");var pe=a("2oH+"),fe=a.n(pe);function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var he=Object(H.a)({strict:!1,name:"ButtonGroupContext"}),ve=Object(j.a)(he,2),ge=ve[0],Oe=ve[1],ye=Object(A.a)((function(e,t){var a=e.size,r=e.colorScheme,l=e.variant,i=e.className,o=e.spacing,c=void 0===o?"0.5rem":o,s=e.isAttached,u=e.isDisabled,d=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),m=Object(L.b)("chakra-button__group",i),p=n.useMemo((function(){return{size:a,colorScheme:r,variant:l,isDisabled:u}}),[a,r,l,u]),f={display:"inline-flex"};return f=be({},f,s?{"> *:first-of-type:not(:last-of-type)":{borderRightRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderLeftRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginLeft:c}}),n.createElement(ge,{value:p},n.createElement(F.a.div,be({ref:t,role:"group",__css:f,className:m},d)))}));function Ee(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}z.a&&(ye.displayName="ButtonGroup");var we=Object(A.a)((function(e,t){var a,r=Oe(),l=Object(T.b)("Button",je({},r,e)),i=Object(P.d)(e),o=i.isDisabled,c=void 0===o?null==r?void 0:r.isDisabled:o,s=i.isLoading,u=i.isActive,d=i.isFullWidth,m=i.children,p=i.leftIcon,f=i.rightIcon,b=i.loadingText,h=i.iconSpacing,v=void 0===h?"0.5rem":h,g=i.type,O=void 0===g?"button":g,y=i.spinner,E=i.className,j=i.as,w=Ee(i,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","className","as"]),x=fe()({},null!=(a=null==l?void 0:l._focus)?a:{},{zIndex:1}),S=je({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:d?"100%":"auto"},l,!!r&&{_focus:x});return n.createElement(F.a.button,je({disabled:c||s,ref:t,as:j,type:j?void 0:O,"data-active":Object(L.c)(u),"data-loading":Object(L.c)(s),__css:S,className:Object(L.b)("chakra-button",E)},w),p&&!s&&n.createElement(xe,{mr:v,children:p}),s&&n.createElement(Se,{__css:{fontSize:"1em",lineHeight:"normal"},spacing:v,label:b,children:y}),s?b||n.createElement(F.a.span,{opacity:0,children:m}):m,f&&!s&&n.createElement(xe,{ml:v,children:f}))}));z.a&&(we.displayName="Button");var xe=function(e){var t=e.children,a=e.className,r=Ee(e,["children","className"]),l=n.isValidElement(t)?n.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=Object(L.b)("chakra-button__icon",a);return n.createElement(F.a.span,je({},r,{className:i,children:l}))};z.a&&(xe.displayName="ButtonIcon");var Se=function(e){var t=e.label,a=e.spacing,r=e.children,l=void 0===r?n.createElement(me,{color:"currentColor",width:"1em",height:"1em"}):r,i=e.className,o=e.__css,c=Ee(e,["label","spacing","children","className","__css"]),s=Object(L.b)("chakra-button__spinner",i),u=je({display:"flex",alignItems:"center",position:t?"relative":"absolute",mr:t?a:0},o);return n.createElement(F.a.div,je({className:s},c,{__css:u,children:l}))};z.a&&(Se.displayName="ButtonSpinner");var Re=a("D5Hz"),_e=a.n(Re),ke=function(e){function t(){return e.apply(this,arguments)||this}return Object(E.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{as:"h1",mb:5,textAlign:["left","center"]},"Contact Us"),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(s.a,{padding:"8",bg:"blue.100",width:"92vw",centerContent:!0},r.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),_e.a.sendForm("service_7fvgwqf","template_vwtrhbo",e.target,"user_5ER6plW1UcDspryz51fCw").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},r.a.createElement(Q,null,r.a.createElement($,null,"Full Name"),r.a.createElement(le,{name:"name",placeholder:"Enter your full name"})),r.a.createElement("br",null),r.a.createElement(Q,null,r.a.createElement($,null,"Email"),r.a.createElement(le,{name:"email",placeholder:"Enter your email"})),r.a.createElement("br",null),r.a.createElement(Q,null,r.a.createElement($,null,"Message"),r.a.createElement(le,{name:"message",height:"250px",placeholder:"Enter message"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(we,{height:"48px",width:"200px",type:"submit",value:"Send"},"Submit")))))},t}(r.a.Component),Ne=function(){var e=Object(c.b)().colorMode;return r.a.createElement(s.a,{px:5,width:"95vw"},r.a.createElement(i.a,{as:"h1",mb:5,textAlign:["left","center"]},"Something Else"),r.a.createElement("br",null),r.a.createElement(u.a,{columns:2,spacing:5},r.a.createElement(s.a,null,r.a.createElement("iframe",{title:"3D Model",src:"https://myhub.autodesk360.com/ue2d7bfee/shares/public/SH56a43QTfd62c1cd968ec70f027b19cabfc?mode=embed",width:"640",height:"470",allowfullscreen:"true",webkitallowfullscreen:"true",alt:"3D Model",mozallowfullscreen:"true",frameborder:"0"})),r.a.createElement(s.a,{rounded:"lg",pb:8,position:"relative",bg:"blue.100",width:"640px",height:"470px"},r.a.createElement(s.a,{as:"img",src:b.a,alt:"Image",pos:"absolute",width:"inherit",height:"100%",opacity:.14,zIndex:205}),r.a.createElement(i.a,{textAlign:"center",as:"h2",fontSize:20,textTransform:"capitalize",my:5,color:e&&"black"},"hedo"),r.a.createElement(o.a,{py:2,textAlign:"center",width:"80%",rounded:"lg",mb:2,mx:"auto",color:"gray.700",fontWeight:"600"},"heyo"))))},Ie=a("W/9C"),Ce=a("Bl7J"),Ae=a("vrFN");t.default=function(){var e=Object(l.useStaticQuery)("2219330951"),t=(new Date).getFullYear()||"2020";return r.a.createElement(Ce.a,{heroImage:e.heroImage,heroText:"JFSS Royals"},r.a.createElement(Ae.a,{title:"Home"}),r.a.createElement(s.a,{px:5,width:"95vw"},r.a.createElement(i.a,{as:"h2",size:"lg"},"What is VEX?"),r.a.createElement(o.a,null,"VEX is a popular robotics competition held worldwide. Teams build a robot with provided parts and program it to run through a course and complete objectives, such as throwing a ball in a hoop and moving objects. You do not need to have prior experience with the competition to apply to the club, but be sure to learn as much as you can so you can lead the team to success in the coming year."),r.a.createElement(o.a,{as:"a",href:"https://www.vexrobotics.com/"},"Learn more at the VEX robotics website."," ")),r.a.createElement("center",null,r.a.createElement(s.a,{mt:20},r.a.createElement(Ne,null)),r.a.createElement(s.a,{mt:20},r.a.createElement(y,null)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ke,null),r.a.createElement("br",null),r.a.createElement(Ie.a,{data:e,year:t})))}},USkh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n},"W/9C":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("tofy"),i=a("z0gp"),o=a("v7Hm"),c=a("MAJE");t.a=function(e){e.data;var t=e.year;return r.a.createElement(l.a,{as:"footer",h:20,justifyContent:"center",borderTop:"1px",borderColor:"gray.200",alignItems:"center"},r.a.createElement(i.a,{columns:3,spacing:10},r.a.createElement(o.a,{as:"span"},r.a.createElement(c.a,{style:{textAlign:"left",alignSelf:"stretch"}},"JFSS Vex")),r.a.createElement(o.a,null,"Built by Vex Robotics Team ©",t),r.a.createElement(o.a,null,r.a.createElement("a",{href:"https://www.instagram.com/jfss_royals/"},r.a.createElement(c.a,{style:{textAlign:"right",alignSelf:"stretch"}},"Instagram")))))}},gIaw:function(e,t,a){e.exports=a.p+"static/devops-137064a4741437fdcc7d75521801d2ee.svg"},nPZk:function(e,t,a){e.exports=a.p+"static/extras-1a3698fd42ff392fb6f55072239fc3c6.svg"},z0gp:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("sKyC"),r=a("pr4h"),l=a("x9W9"),i=a("q1tI"),o=a("U6LL");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var u=Object(n.a)((function(e,t){var a=e.area,n=e.templateAreas,r=e.gap,l=e.rowGap,u=e.columnGap,d=e.column,m=e.row,p=e.autoFlow,f=e.autoRows,b=e.templateRows,h=e.autoColumns,v=e.templateColumns,g=s(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]);return i.createElement(o.a.div,c({ref:t,display:"grid",gridArea:a,gridTemplateAreas:n,gridGap:r,gridRowGap:l,gridColumnGap:u,gridAutoColumns:h,gridColumn:d,gridRow:m,gridAutoFlow:p,gridAutoRows:f,gridTemplateRows:b,gridTemplateColumns:v},g))}));r.a&&(u.displayName="Grid");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=Object(n.a)((function(e,t){var a,n,o=e.columns,c=e.spacingX,s=e.spacingY,m=e.spacing,p=e.minChildWidth,f=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["columns","spacingX","spacingY","spacing","minChildWidth"]),b=Boolean(p)?(n=p,Object(l.b)(n,(function(e){return Object(r.e)(e)?null:"repeat(auto-fit, minmax("+(t=e,(Object(r.f)(t)?t+"px":t)+", 1fr))");var t}))):(a=o,Object(l.b)(a,(function(e){return Object(r.e)(e)?null:"repeat("+e+", 1fr)"})));return i.createElement(u,d({ref:t,gap:m,columnGap:c,rowGap:s,templateColumns:b},f))}));r.a&&(m.displayName="SimpleGrid")}}]);
//# sourceMappingURL=component---src-pages-index-js-0e404edde130ab019553.js.map