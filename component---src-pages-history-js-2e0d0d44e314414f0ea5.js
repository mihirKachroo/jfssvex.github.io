(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Lwbg:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),c=n("rGDf"),i=n("U6LL"),o=n("pr4h"),s=Object(i.a)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});o.a&&(s.displayName="Center");n("nOYz"),n("PqyB"),n("jZwe");var u=n("v7Hm"),f=n("vG+z"),b=n("W/9C"),g=n("Bl7J"),d=n("vrFN");t.default=function(){var e=Object(l.useStaticQuery)("2219330951"),t=(new Date).getFullYear()||"2020";return r.a.createElement(g.a,{heroText:"JFSS Royals"},r.a.createElement(d.a,{title:"History"}),r.a.createElement(u.a,{px:5,width:"95vw"},r.a.createElement("br",null),r.a.createElement(c.a,{as:"h2",size:"lg",style:{textAlign:"center"}},"Royals Timeline"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s,null,r.a.createElement(f.a,{boxSize:"70vw",objectFit:"cover",draggable:!1,src:n("fkRE"),alt:"Dan Abramov"}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(b.a,{data:e,year:t})))}},fkRE:function(e,t,n){e.exports=n.p+"static/vextimeline-e75bb22b57ef8664213ff7850c7267c6.png"},"vG+z":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("sKyC"),r=n("U6LL"),l=n("BXwj"),c=n("pr4h"),i=n("q1tI"),o=n("ODXe"),s=n("zlS4");function u(e){var t=e.src,n=e.srcSet,a=e.onLoad,r=e.onError,l=e.crossOrigin,c=e.sizes,u=e.ignoreFallback,f=Object(i.useState)((function(){return t?"loading":"pending"})),b=Object(o.a)(f,2),g=b[0],d=b[1];Object(i.useEffect)((function(){d(t?"loading":"pending")}),[t]);var m=Object(i.useRef)(),h=Object(i.useCallback)((function(){if(t){v();var e=new Image;e.src=t,l&&(e.crossOrigin=l),n&&(e.srcset=n),c&&(e.sizes=c),e.onload=function(e){v(),d("loaded"),null==a||a(e)},e.onerror=function(e){v(),d("failed"),null==r||r(e)},m.current=e}}),[t,l,n,c,a,r]),v=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return Object(s.a)((function(){if(!u)return"loading"===g&&h(),function(){v()}}),[g,h,u]),u?"loaded":g}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var g=i.forwardRef((function(e,t){var n=e.htmlWidth,a=e.htmlHeight,r=b(e,["htmlWidth","htmlHeight"]);return i.createElement("img",f({width:n,height:a,ref:t},r))})),d=Object(a.a)((function(e,t){var n=e.fallbackSrc,a=e.fallback,c=e.src,o=e.align,s=e.fit,d=e.loading,m=e.ignoreFallback,h=e.crossOrigin,v=b(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),p=null!=d||m,O=u(f({},e,{ignoreFallback:p})),E=f({ref:t,objectFit:s,objectPosition:o},p?v:Object(l.d)(v,["onError","onLoad"]));return"loaded"!==O?a||i.createElement(r.a.img,f({as:g,className:"chakra-image__placeholder",src:n},E)):i.createElement(r.a.img,f({as:g,src:c,crossOrigin:h,loading:d,className:"chakra-image"},E))}));c.a&&(d.displayName="Image")}}]);
//# sourceMappingURL=component---src-pages-history-js-2e0d0d44e314414f0ea5.js.map