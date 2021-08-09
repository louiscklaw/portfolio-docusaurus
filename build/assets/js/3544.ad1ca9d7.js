/*! For license information please see 3544.ad1ca9d7.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website_facebook=self.webpackChunkmy_website_facebook||[]).push([[3544],{5097:function(e,t,n){n.d(t,{Z:function(){return X}});var r=n(3366),o=n(7462),i=n(7294),l=(n(5697),n(6010)),a=n(7828),s=n(9612),c=n(6915),u=n(3353),h=n(5664),d=n(742);function f(e){return(0,h.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=n(5893);const m=["children","className","color","component","fontSize","htmlColor","titleAccess","viewBox"],v=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,u.Z)(n.color)}`],t[`fontSize${(0,u.Z)(n.fontSize)}`]]}})((({theme:e,styleProps:t})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter}),fontSize:{inherit:"inherit",small:e.typography.pxToRem(20),medium:e.typography.pxToRem(24),large:e.typography.pxToRem(35)}[t.fontSize],color:{primary:e.palette.primary.main,secondary:e.palette.secondary.main,info:e.palette.info.main,success:e.palette.success.main,warning:e.palette.warning.main,action:e.palette.action.active,error:e.palette.error.main,disabled:e.palette.action.disabled,inherit:void 0}[t.color]}))),b=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:h="inherit",component:d="svg",fontSize:b="medium",htmlColor:g,titleAccess:y,viewBox:w="0 0 24 24"}=n,S=(0,r.Z)(n,m),R=(0,o.Z)({},n,{color:h,component:d,fontSize:b,viewBox:w}),E=(e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&`color${(0,u.Z)(t)}`,`fontSize${(0,u.Z)(n)}`]};return(0,a.Z)(o,f,r)})(R);return(0,p.jsxs)(v,(0,o.Z)({as:d,className:(0,l.Z)(E.root,s),styleProps:R,focusable:"false",viewBox:w,color:g,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:t},S,{children:[i,y?(0,p.jsx)("title",{children:y}):null]}))}));b.muiName="SvgIcon";var g=b;var y=function(e,t){const n=(n,r)=>(0,p.jsx)(g,(0,o.Z)({"data-testid":`${t}Icon`,ref:r},n,{children:e}));return n.muiName=g.muiName,i.memo(i.forwardRef(n))}((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function w(e){return(0,h.Z)("MuiAvatar",e)}(0,d.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const S=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],R=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:n}=e;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})((({theme:e,styleProps:t})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:e.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:e.palette.background.default,backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),E=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Y=(0,s.ZP)(y,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});var X=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:u,className:h,component:d="div",imgProps:f,sizes:m,src:v,srcSet:b,variant:g="circular"}=n,y=(0,r.Z)(n,S);let X=null;const T=function({crossOrigin:e,referrerPolicy:t,src:n,srcSet:r}){const[o,l]=i.useState(!1);return i.useEffect((()=>{if(!n&&!r)return;l(!1);let o=!0;const i=new Image;return i.onload=()=>{o&&l("loaded")},i.onerror=()=>{o&&l("error")},i.crossOrigin=e,i.referrerPolicy=t,i.src=n,r&&(i.srcset=r),()=>{o=!1}}),[e,t,n,r]),o}((0,o.Z)({},f,{src:v,srcSet:b})),L=v||b,W=L&&"error"!==T,k=(0,o.Z)({},n,{colorDefault:!W,component:d,variant:g}),P=(e=>{const{classes:t,variant:n,colorDefault:r}=e,o={root:["root",n,r&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,a.Z)(o,w,t)})(k);return X=W?(0,p.jsx)(E,(0,o.Z)({alt:s,src:v,srcSet:b,sizes:m,styleProps:k,className:P.img},f)):null!=u?u:L&&s?s[0]:(0,p.jsx)(Y,{className:P.fallback}),(0,p.jsx)(R,(0,o.Z)({as:d,styleProps:k,className:(0,l.Z)(P.root,h),ref:t},y,{children:X}))}))},4662:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(1539),o=(n(7294),n(2719));function i(){return(0,r.Z)(o.Z)}},67:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),o=n(7294),i=n(7361),l=n(5485);var a="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function s(e,t={}){const n=(0,i.Z)(),s=(0,l.Z)({name:"MuiUseMediaQuery",props:{},theme:n});let c="function"==typeof e?e(n):e;c=c.replace(/^@media( ?)/m,"");const u="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:h=!1,matchMedia:d=(u?window.matchMedia:null),noSsr:f=!1,ssrMatchMedia:p=null}=(0,r.Z)({},s,t),[m,v]=o.useState((()=>f&&u?d(c).matches:p?p(c).matches:h));return a((()=>{let e=!0;if(!u)return;const t=d(c),n=()=>{e&&v(t.matches)};return n(),t.addListener(n),()=>{e=!1,t.removeListener(n)}}),[c,d,u]),m}},94:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7294),o=n(6010),i=n(5151),l=n(4973),a="announcementBar_3WsW",s="announcementBarClose_38nx",c="announcementBarContent_3EUC",u="announcementBarCloseable_3myR";var h=function(){var e,t=(0,i.nT)(),n=t.isClosed,h=t.close,d=(0,i.LU)().announcementBar;if(!d)return null;var f=d.content,p=d.backgroundColor,m=d.textColor,v=d.isCloseable;return!f||v&&n?null:r.createElement("div",{className:a,style:{backgroundColor:p,color:m},role:"banner"},r.createElement("div",{className:(0,o.Z)(c,(e={},e[u]=v,e)),dangerouslySetInnerHTML:{__html:f}}),v?r.createElement("button",{type:"button",className:(0,o.Z)(s,"clean-btn"),onClick:h,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)}},9757:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),o=n(7294),i=n(9105),l=n(2263),a=n(4996);function s(e){var t=e.locale,n=e.version,r=e.tag;return o.createElement(i.Z,null,t&&o.createElement("meta",{name:"docusaurus_locale",content:t}),n&&o.createElement("meta",{name:"docusaurus_version",content:n}),r&&o.createElement("meta",{name:"docusaurus_tag",content:r}))}var c=n(1217),u=n(5151),h=n(5977);function d(){var e=(0,l.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,u.l5)();return o.createElement(i.Z,null,n.map((function(e){return o.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),o.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function f(e){var t=e.permalink,n=(0,l.Z)().siteConfig.url,r=function(){var e=(0,l.Z)().siteConfig.url,t=(0,h.TH)().pathname;return e+(0,a.Z)(t)}(),s=t?""+n+t:r;return o.createElement(i.Z,null,o.createElement("meta",{property:"og:url",content:s}),o.createElement("link",{rel:"canonical",href:s}))}function p(e){var t=(0,l.Z)(),n=t.siteConfig,h=n.favicon,p=n.themeConfig,m=p.metadatas,v=p.image,b=t.i18n,g=b.currentLocale,y=b.localeConfigs,w=e.title,S=e.description,R=e.image,E=e.keywords,Y=e.searchMetadatas,X=(0,a.Z)(h),T=(0,u.pe)(w),L=g,W=y[g].direction;return o.createElement(o.Fragment,null,o.createElement(i.Z,null,o.createElement("html",{lang:L,dir:W}),h&&o.createElement("link",{rel:"shortcut icon",href:X}),o.createElement("title",null,T),o.createElement("meta",{property:"og:title",content:T}),R||v&&o.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o.createElement(c.Z,{description:S,keywords:E,image:R}),o.createElement(f,null),o.createElement(d,null),o.createElement(s,(0,r.Z)({tag:u.HX,locale:g},Y)),o.createElement(i.Z,null,m.map((function(e,t){return o.createElement("meta",(0,r.Z)({key:"metadata_"+t},e))}))))}},2924:function(e,t,n){var r=n(7294).createContext(void 0);t.Z=r},8543:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),o=n(412),i=n(5151),l=(0,i.WA)("theme"),a="light",s="dark",c=function(e){return e===s?s:a},u=function(e){(0,i.WA)("theme").set(c(e))},h=function(){var e=(0,i.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,h=e.respectPrefersColorScheme,d=(0,r.useState)(function(e){return o.Z.canUseDOM?c(document.documentElement.getAttribute("data-theme")):c(e)}(t)),f=d[0],p=d[1],m=(0,r.useCallback)((function(){p(a),u(a)}),[]),v=(0,r.useCallback)((function(){p(s),u(s)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",c(f))}),[f]),(0,r.useEffect)((function(){if(!n)try{var e=l.get();null!==e&&p(c(e))}catch(t){console.error(t)}}),[p]),(0,r.useEffect)((function(){n&&!h||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;p(t?s:a)}))}),[]),{isDarkTheme:f===s,setLightTheme:m,setDarkTheme:v}},d=n(2924);var f=function(e){var t=h(),n=t.isDarkTheme,o=t.setLightTheme,i=t.setDarkTheme;return r.createElement(d.Z.Provider,{value:{isDarkTheme:n,setLightTheme:o,setDarkTheme:i}},e.children)}},9222:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),o=n(5151),i="docusaurus.tab.",l=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],l=(0,r.useCallback)((function(e,t){(0,o.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,o._f)().forEach((function(t){if(t.startsWith(i)){var n=t.substring(i.length);e[n]=(0,o.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),l(e,t)}}},a=(0,r.createContext)(void 0);var s=function(e){var t=l(),n=t.tabGroupChoices,o=t.setTabGroupChoices;return r.createElement(a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:o}},e.children)}},4772:function(e,t,n){function r(e){return getComputedStyle(e)}function o(e,t){for(var n in t){var r=t[n];"number"==typeof r&&(r+="px"),e.style[n]=r}return e}function i(e){var t=document.createElement("div");return t.className=e,t}n.r(t);var l="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function a(e,t){if(!l)throw new Error("No element matching method supported");return l.call(e,t)}function s(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e)}function c(e,t){return Array.prototype.filter.call(e.children,(function(e){return a(e,t)}))}var u="ps",h="ps__rtl",d={thumb:function(e){return"ps__thumb-"+e},rail:function(e){return"ps__rail-"+e},consuming:"ps__child--consume"},f={focus:"ps--focus",clicking:"ps--clicking",active:function(e){return"ps--active-"+e},scrolling:function(e){return"ps--scrolling-"+e}},p={x:null,y:null};function m(e,t){var n=e.element.classList,r=f.scrolling(t);n.contains(r)?clearTimeout(p[t]):n.add(r)}function v(e,t){p[t]=setTimeout((function(){return e.isAlive&&e.element.classList.remove(f.scrolling(t))}),e.settings.scrollingThreshold)}var b=function(e){this.element=e,this.handlers={}},g={isEmpty:{configurable:!0}};b.prototype.bind=function(e,t){void 0===this.handlers[e]&&(this.handlers[e]=[]),this.handlers[e].push(t),this.element.addEventListener(e,t,!1)},b.prototype.unbind=function(e,t){var n=this;this.handlers[e]=this.handlers[e].filter((function(r){return!(!t||r===t)||(n.element.removeEventListener(e,r,!1),!1)}))},b.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)},g.isEmpty.get=function(){var e=this;return Object.keys(this.handlers).every((function(t){return 0===e.handlers[t].length}))},Object.defineProperties(b.prototype,g);var y=function(){this.eventElements=[]};function w(e){if("function"==typeof window.CustomEvent)return new CustomEvent(e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,void 0),t}function S(e,t,n,r,o){var i;if(void 0===r&&(r=!0),void 0===o&&(o=!1),"top"===t)i=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==t)throw new Error("A proper axis should be provided");i=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(e,t,n,r,o){var i=n[0],l=n[1],a=n[2],s=n[3],c=n[4],u=n[5];void 0===r&&(r=!0);void 0===o&&(o=!1);var h=e.element;e.reach[s]=null,h[a]<1&&(e.reach[s]="start");h[a]>e[i]-e[l]-1&&(e.reach[s]="end");t&&(h.dispatchEvent(w("ps-scroll-"+s)),t<0?h.dispatchEvent(w("ps-scroll-"+c)):t>0&&h.dispatchEvent(w("ps-scroll-"+u)),r&&function(e,t){m(e,t),v(e,t)}(e,s));e.reach[s]&&(t||o)&&h.dispatchEvent(w("ps-"+s+"-reach-"+e.reach[s]))}(e,n,i,r,o)}function R(e){return parseInt(e,10)||0}y.prototype.eventElement=function(e){var t=this.eventElements.filter((function(t){return t.element===e}))[0];return t||(t=new b(e),this.eventElements.push(t)),t},y.prototype.bind=function(e,t,n){this.eventElement(e).bind(t,n)},y.prototype.unbind=function(e,t,n){var r=this.eventElement(e);r.unbind(t,n),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)},y.prototype.unbindAll=function(){this.eventElements.forEach((function(e){return e.unbindAll()})),this.eventElements=[]},y.prototype.once=function(e,t,n){var r=this.eventElement(e),o=function(e){r.unbind(t,o),n(e)};r.bind(t,o)};var E={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function Y(e){var t=e.element,n=Math.floor(t.scrollTop),r=t.getBoundingClientRect();e.containerWidth=Math.round(r.width),e.containerHeight=Math.round(r.height),e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight,t.contains(e.scrollbarXRail)||(c(t,d.rail("x")).forEach((function(e){return s(e)})),t.appendChild(e.scrollbarXRail)),t.contains(e.scrollbarYRail)||(c(t,d.rail("y")).forEach((function(e){return s(e)})),t.appendChild(e.scrollbarYRail)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=X(e,R(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=R((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=X(e,R(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=R(n*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),function(e,t){var n={width:t.railXWidth},r=Math.floor(e.scrollTop);t.isRtl?n.left=t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth-t.contentWidth:n.left=e.scrollLeft;t.isScrollbarXUsingBottom?n.bottom=t.scrollbarXBottom-r:n.top=t.scrollbarXTop+r;o(t.scrollbarXRail,n);var i={top:r,height:t.railYHeight};t.isScrollbarYUsingRight?t.isRtl?i.right=t.contentWidth-(t.negativeScrollAdjustment+e.scrollLeft)-t.scrollbarYRight-t.scrollbarYOuterWidth-9:i.right=t.scrollbarYRight-e.scrollLeft:t.isRtl?i.left=t.negativeScrollAdjustment+e.scrollLeft+2*t.containerWidth-t.contentWidth-t.scrollbarYLeft-t.scrollbarYOuterWidth:i.left=t.scrollbarYLeft+e.scrollLeft;o(t.scrollbarYRail,i),o(t.scrollbarX,{left:t.scrollbarXLeft,width:t.scrollbarXWidth-t.railBorderXWidth}),o(t.scrollbarY,{top:t.scrollbarYTop,height:t.scrollbarYHeight-t.railBorderYWidth})}(t,e),e.scrollbarXActive?t.classList.add(f.active("x")):(t.classList.remove(f.active("x")),e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=!0===e.isRtl?e.contentWidth:0),e.scrollbarYActive?t.classList.add(f.active("y")):(t.classList.remove(f.active("y")),e.scrollbarYHeight=0,e.scrollbarYTop=0,t.scrollTop=0)}function X(e,t){return e.settings.minScrollbarLength&&(t=Math.max(t,e.settings.minScrollbarLength)),e.settings.maxScrollbarLength&&(t=Math.min(t,e.settings.maxScrollbarLength)),t}function T(e,t){var n=t[0],r=t[1],o=t[2],i=t[3],l=t[4],a=t[5],s=t[6],c=t[7],u=t[8],h=e.element,d=null,p=null,b=null;function g(t){t.touches&&t.touches[0]&&(t[o]=t.touches[0].pageY),h[s]=d+b*(t[o]-p),m(e,c),Y(e),t.stopPropagation(),t.preventDefault()}function y(){v(e,c),e[u].classList.remove(f.clicking),e.event.unbind(e.ownerDocument,"mousemove",g)}function w(t,l){d=h[s],l&&t.touches&&(t[o]=t.touches[0].pageY),p=t[o],b=(e[r]-e[n])/(e[i]-e[a]),l?e.event.bind(e.ownerDocument,"touchmove",g):(e.event.bind(e.ownerDocument,"mousemove",g),e.event.once(e.ownerDocument,"mouseup",y),t.preventDefault()),e[u].classList.add(f.clicking),t.stopPropagation()}e.event.bind(e[l],"mousedown",(function(e){w(e)})),e.event.bind(e[l],"touchstart",(function(e){w(e,!0)}))}var L={"click-rail":function(e){e.element,e.event.bind(e.scrollbarY,"mousedown",(function(e){return e.stopPropagation()})),e.event.bind(e.scrollbarYRail,"mousedown",(function(t){var n=t.pageY-window.pageYOffset-e.scrollbarYRail.getBoundingClientRect().top>e.scrollbarYTop?1:-1;e.element.scrollTop+=n*e.containerHeight,Y(e),t.stopPropagation()})),e.event.bind(e.scrollbarX,"mousedown",(function(e){return e.stopPropagation()})),e.event.bind(e.scrollbarXRail,"mousedown",(function(t){var n=t.pageX-window.pageXOffset-e.scrollbarXRail.getBoundingClientRect().left>e.scrollbarXLeft?1:-1;e.element.scrollLeft+=n*e.containerWidth,Y(e),t.stopPropagation()}))},"drag-thumb":function(e){T(e,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),T(e,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(e){var t=e.element;e.event.bind(e.ownerDocument,"keydown",(function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||n.defaultPrevented)&&(a(t,":hover")||a(e.scrollbarX,":focus")||a(e.scrollbarY,":focus"))){var r,o=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(o){if("IFRAME"===o.tagName)o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(a(r=o,"input,[contenteditable]")||a(r,"select,[contenteditable]")||a(r,"textarea,[contenteditable]")||a(r,"button,[contenteditable]"))return}var i=0,l=0;switch(n.which){case 37:i=n.metaKey?-e.contentWidth:n.altKey?-e.containerWidth:-30;break;case 38:l=n.metaKey?e.contentHeight:n.altKey?e.containerHeight:30;break;case 39:i=n.metaKey?e.contentWidth:n.altKey?e.containerWidth:30;break;case 40:l=n.metaKey?-e.contentHeight:n.altKey?-e.containerHeight:-30;break;case 32:l=n.shiftKey?e.containerHeight:-e.containerHeight;break;case 33:l=e.containerHeight;break;case 34:l=-e.containerHeight;break;case 36:l=e.contentHeight;break;case 35:l=-e.contentHeight;break;default:return}e.settings.suppressScrollX&&0!==i||e.settings.suppressScrollY&&0!==l||(t.scrollTop-=l,t.scrollLeft+=i,Y(e),function(n,r){var o=Math.floor(t.scrollTop);if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&n<0||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}(i,l)&&n.preventDefault())}}))},wheel:function(e){var t=e.element;function n(n){var o=function(e){var t=e.deltaX,n=-1*e.deltaY;return void 0!==t&&void 0!==n||(t=-1*e.wheelDeltaX/6,n=e.wheelDeltaY/6),e.deltaMode&&1===e.deltaMode&&(t*=10,n*=10),t!=t&&n!=n&&(t=0,n=e.wheelDelta),e.shiftKey?[-n,-t]:[t,n]}(n),i=o[0],l=o[1];if(!function(e,n,o){if(!E.isWebKit&&t.querySelector("select:focus"))return!0;if(!t.contains(e))return!1;for(var i=e;i&&i!==t;){if(i.classList.contains(d.consuming))return!0;var l=r(i);if(o&&l.overflowY.match(/(scroll|auto)/)){var a=i.scrollHeight-i.clientHeight;if(a>0&&(i.scrollTop>0&&o<0||i.scrollTop<a&&o>0))return!0}if(n&&l.overflowX.match(/(scroll|auto)/)){var s=i.scrollWidth-i.clientWidth;if(s>0&&(i.scrollLeft>0&&n<0||i.scrollLeft<s&&n>0))return!0}i=i.parentNode}return!1}(n.target,i,l)){var a=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(l?t.scrollTop-=l*e.settings.wheelSpeed:t.scrollTop+=i*e.settings.wheelSpeed,a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(i?t.scrollLeft+=i*e.settings.wheelSpeed:t.scrollLeft-=l*e.settings.wheelSpeed,a=!0):(t.scrollTop-=l*e.settings.wheelSpeed,t.scrollLeft+=i*e.settings.wheelSpeed),Y(e),(a=a||function(n,r){var o=Math.floor(t.scrollTop),i=0===t.scrollTop,l=o+t.offsetHeight===t.scrollHeight,a=0===t.scrollLeft,s=t.scrollLeft+t.offsetWidth===t.scrollWidth;return!(Math.abs(r)>Math.abs(n)?i||l:a||s)||!e.settings.wheelPropagation}(i,l))&&!n.ctrlKey&&(n.stopPropagation(),n.preventDefault())}}void 0!==window.onwheel?e.event.bind(t,"wheel",n):void 0!==window.onmousewheel&&e.event.bind(t,"mousewheel",n)},touch:function(e){if(E.supportsTouch||E.supportsIePointer){var t=e.element,n={},o=0,i={},l=null;E.supportsTouch?(e.event.bind(t,"touchstart",u),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",f)):E.supportsIePointer&&(window.PointerEvent?(e.event.bind(t,"pointerdown",u),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",f)):window.MSPointerEvent&&(e.event.bind(t,"MSPointerDown",u),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",f)))}function a(n,r){t.scrollTop-=r,t.scrollLeft-=n,Y(e)}function s(e){return e.targetTouches?e.targetTouches[0]:e}function c(e){return(!e.pointerType||"pen"!==e.pointerType||0!==e.buttons)&&(!(!e.targetTouches||1!==e.targetTouches.length)||!(!e.pointerType||"mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))}function u(e){if(c(e)){var t=s(e);n.pageX=t.pageX,n.pageY=t.pageY,o=(new Date).getTime(),null!==l&&clearInterval(l)}}function h(l){if(c(l)){var u=s(l),h={pageX:u.pageX,pageY:u.pageY},f=h.pageX-n.pageX,p=h.pageY-n.pageY;if(function(e,n,o){if(!t.contains(e))return!1;for(var i=e;i&&i!==t;){if(i.classList.contains(d.consuming))return!0;var l=r(i);if(o&&l.overflowY.match(/(scroll|auto)/)){var a=i.scrollHeight-i.clientHeight;if(a>0&&(i.scrollTop>0&&o<0||i.scrollTop<a&&o>0))return!0}if(n&&l.overflowX.match(/(scroll|auto)/)){var s=i.scrollWidth-i.clientWidth;if(s>0&&(i.scrollLeft>0&&n<0||i.scrollLeft<s&&n>0))return!0}i=i.parentNode}return!1}(l.target,f,p))return;a(f,p),n=h;var m=(new Date).getTime(),v=m-o;v>0&&(i.x=f/v,i.y=p/v,o=m),function(n,r){var o=Math.floor(t.scrollTop),i=t.scrollLeft,l=Math.abs(n),a=Math.abs(r);if(a>l){if(r<0&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return 0===window.scrollY&&r>0&&E.isChrome}else if(l>a&&(n<0&&i===e.contentWidth-e.containerWidth||n>0&&0===i))return!0;return!0}(f,p)&&l.preventDefault()}}function f(){e.settings.swipeEasing&&(clearInterval(l),l=setInterval((function(){e.isInitialized?clearInterval(l):i.x||i.y?Math.abs(i.x)<.01&&Math.abs(i.y)<.01?clearInterval(l):e.element?(a(30*i.x,30*i.y),i.x*=.8,i.y*=.8):clearInterval(l):clearInterval(l)}),10))}}},W=function(e,t){var n=this;if(void 0===t&&(t={}),"string"==typeof e&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var l in this.element=e,e.classList.add(u),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},t)this.settings[l]=t[l];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var a,s,c=function(){return e.classList.add(f.focus)},p=function(){return e.classList.remove(f.focus)};this.isRtl="rtl"===r(e).direction,!0===this.isRtl&&e.classList.add(h),this.isNegativeScroll=(s=e.scrollLeft,e.scrollLeft=-1,a=e.scrollLeft<0,e.scrollLeft=s,a),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new y,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=i(d.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=i(d.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",c),this.event.bind(this.scrollbarX,"blur",p),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var m=r(this.scrollbarXRail);this.scrollbarXBottom=parseInt(m.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=R(m.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=R(m.borderLeftWidth)+R(m.borderRightWidth),o(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=R(m.marginLeft)+R(m.marginRight),o(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=i(d.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=i(d.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",c),this.event.bind(this.scrollbarY,"blur",p),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var v=r(this.scrollbarYRail);this.scrollbarYRight=parseInt(v.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=R(v.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(e){var t=r(e);return R(t.width)+R(t.paddingLeft)+R(t.paddingRight)+R(t.borderLeftWidth)+R(t.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=R(v.borderTopWidth)+R(v.borderBottomWidth),o(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=R(v.marginTop)+R(v.marginBottom),o(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(e){return L[e](n)})),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",(function(e){return n.onScroll(e)})),Y(this)};W.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,o(this.scrollbarXRail,{display:"block"}),o(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=R(r(this.scrollbarXRail).marginLeft)+R(r(this.scrollbarXRail).marginRight),this.railYMarginHeight=R(r(this.scrollbarYRail).marginTop)+R(r(this.scrollbarYRail).marginBottom),o(this.scrollbarXRail,{display:"none"}),o(this.scrollbarYRail,{display:"none"}),Y(this),S(this,"top",0,!1,!0),S(this,"left",0,!1,!0),o(this.scrollbarXRail,{display:""}),o(this.scrollbarYRail,{display:""}))},W.prototype.onScroll=function(e){this.isAlive&&(Y(this),S(this,"top",this.element.scrollTop-this.lastScrollTop),S(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},W.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),s(this.scrollbarX),s(this.scrollbarY),s(this.scrollbarXRail),s(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},W.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(e){return!e.match(/^ps([-_].+|)$/)})).join(" ")},t.default=W},1964:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(6120),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default,e.exports=t.default},6120:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(7294),l=c(i),a=n(5697),s=c(n(4772));function c(e){return e&&e.__esModule?e:{default:e}}var u={"ps-scroll-y":"onScrollY","ps-scroll-x":"onScrollX","ps-scroll-up":"onScrollUp","ps-scroll-down":"onScrollDown","ps-scroll-left":"onScrollLeft","ps-scroll-right":"onScrollRight","ps-y-reach-start":"onYReachStart","ps-y-reach-end":"onYReachEnd","ps-x-reach-start":"onXReachStart","ps-x-reach-end":"onXReachEnd"};Object.freeze(u);var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleRef=n.handleRef.bind(n),n._handlerByEvent={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.option&&console.warn('react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"'),this._ps=new s.default(this._container,this.props.options||this.props.option),this._updateEventHook(),this._updateClassName()}},{key:"componentDidUpdate",value:function(e){this._updateEventHook(e),this.updateScroll(),e.className!==this.props.className&&this._updateClassName()}},{key:"componentWillUnmount",value:function(){var e=this;Object.keys(this._handlerByEvent).forEach((function(t){var n=e._handlerByEvent[t];n&&e._container.removeEventListener(t,n,!1)})),this._handlerByEvent={},this._ps.destroy(),this._ps=null}},{key:"_updateEventHook",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.keys(u).forEach((function(n){var r=e.props[u[n]],o=t[u[n]];if(r!==o){if(o){var i=e._handlerByEvent[n];e._container.removeEventListener(n,i,!1),e._handlerByEvent[n]=null}if(r){var l=function(){return r(e._container)};e._container.addEventListener(n,l,!1),e._handlerByEvent[n]=l}}}))}},{key:"_updateClassName",value:function(){var e=this.props.className,t=this._container.className.split(" ").filter((function(e){return e.match(/^ps([-_].+|)$/)})).join(" ");this._container&&(this._container.className="scrollbar-container"+(e?" "+e:"")+(t?" "+t:""))}},{key:"updateScroll",value:function(){this.props.onSync(this._ps)}},{key:"handleRef",value:function(e){this._container=e,this.props.containerRef(e)}},{key:"render",value:function(){var e=this.props,t=(e.className,e.style),n=(e.option,e.options,e.containerRef,e.onScrollY,e.onScrollX,e.onScrollUp,e.onScrollDown,e.onScrollLeft,e.onScrollRight,e.onYReachStart,e.onYReachEnd,e.onXReachStart,e.onXReachEnd,e.component),o=(e.onSync,e.children),i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["className","style","option","options","containerRef","onScrollY","onScrollX","onScrollUp","onScrollDown","onScrollLeft","onScrollRight","onYReachStart","onYReachEnd","onXReachStart","onXReachEnd","component","onSync","children"]),a=n;return l.default.createElement(a,r({style:t,ref:this.handleRef},i),o)}}]),t}(i.Component);t.default=h,h.defaultProps={className:"",style:void 0,option:void 0,options:void 0,containerRef:function(){},onScrollY:void 0,onScrollX:void 0,onScrollUp:void 0,onScrollDown:void 0,onScrollLeft:void 0,onScrollRight:void 0,onYReachStart:void 0,onYReachEnd:void 0,onXReachStart:void 0,onXReachEnd:void 0,onSync:function(e){return e.update()},component:"div"},h.propTypes={children:a.PropTypes.node.isRequired,className:a.PropTypes.string,style:a.PropTypes.object,option:a.PropTypes.object,options:a.PropTypes.object,containerRef:a.PropTypes.func,onScrollY:a.PropTypes.func,onScrollX:a.PropTypes.func,onScrollUp:a.PropTypes.func,onScrollDown:a.PropTypes.func,onScrollLeft:a.PropTypes.func,onScrollRight:a.PropTypes.func,onYReachStart:a.PropTypes.func,onYReachEnd:a.PropTypes.func,onXReachStart:a.PropTypes.func,onXReachEnd:a.PropTypes.func,onSync:a.PropTypes.func,component:a.PropTypes.string},e.exports=t.default}}]);