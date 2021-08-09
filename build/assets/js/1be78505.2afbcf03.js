"use strict";(self.webpackChunkmy_website_facebook=self.webpackChunkmy_website_facebook||[]).push([[9514,4608],{4608:function(e,t,n){n.r(t);var r=n(7294),l=n(446),a=n(4973);t.default=function(){return r.createElement(l.Z,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},3783:function(e,t,n){var r=n(7294),l=n(412),a="desktop",c="mobile",i="ssr";function o(){return l.Z.canUseDOM?window.innerWidth>996?a:c:i}t.Z=function(){var e=(0,r.useState)((function(){return o()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){if(l.Z.canUseDOM){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}function e(){n(o())}}),[]),t}},4323:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(7294),l=n(3905),a=n(2263),c=n(6291),i=n(446),o=n(5151),u=(n(3783),n(412)),s=function(){return u.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null},m=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(s()),l=function(){var t=s();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return l(),window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t)};n(6742),n(5350),n(4996),n(4973);var d=n(830),h=n(4608),E=n(6010),f="backToTopButton_35hR",v="backToTopButtonShow_18ls";function g(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Z=function(){var e,t=g(),n=t.smoothScrollTop,l=t.cancelScrollToTop,a=(0,r.useState)(!1),c=a[0],i=a[1];return m((function(e,t){var n=e.scrollY;if(t){var r=n<t.scrollY;if(r||l(),n<300)i(!1);else if(r){var a=document.documentElement.scrollHeight;n+window.innerHeight<a&&i(!0)}else i(!1)}}),[]),r.createElement("button",{className:(0,E.Z)("clean-btn",f,(e={},e[v]=c,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},r.createElement("svg",{viewBox:"0 0 24 24",width:"28"},r.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},p=n(5977),w="docPage_3AUJ";function b(e){var t=e.currentDocRoute,n=e.versionMetadata,c=e.children,u=(0,a.Z)().isClient,s=n.pluginId,m=n.version,h=t.sidebar,E=(h&&n.docsSidebars[h],(0,r.useState)(!1)),f=E[0],v=E[1],g=(0,r.useState)(!1),p=g[0],b=g[1];(0,r.useCallback)((function(){p&&b(!1),v(!f)}),[p]);return r.createElement(i.Z,{key:u,wrapperClassName:o.kM.wrapper.docPages,pageClassName:o.kM.page.docPage,searchMetadatas:{version:m,tag:(0,o.os)(s,m)}},r.createElement("div",{className:w},r.createElement(Z,null),r.createElement("main",null,r.createElement(l.Zo,{components:d.Z},c))))}var k=function(e){var t=e.route.routes,n=e.versionMetadata,l=e.location,a=t.find((function(e){return(0,p.LX)(l.pathname,e)}));return a?r.createElement(r.Fragment,null,r.createElement(b,{currentDocRoute:a,versionMetadata:n},(0,c.Z)(t,{versionMetadata:n}))):r.createElement(h.default,e)}},4809:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(3366),l=n(7462),a=n(7294),c=n(6010),i=n(4973),o=n(5151),u="enhancedAnchor_3KR1",s="h1Heading_24eg",m=["id"],d=function(e){var t=Object.assign({},e);return a.createElement("header",null,a.createElement("h1",(0,l.Z)({},t,{id:void 0,className:s}),t.children))},h=function(e){return"h1"===e?d:(t=e,function(e){var n,l=e.id,s=(0,r.Z)(e,m),d=(0,o.LU)().navbar.hideOnScroll;return l?a.createElement(t,s,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,c.Z)("anchor",(n={},n[u]=!d,n)),id:l}),s.children,a.createElement("a",{className:"hash-link",href:"#"+l,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(t,s)});var t}},446:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(7294),l=n(94),a=n(8543),c=n(9222),i=n(5151);function o(e){var t=e.children;return r.createElement(a.Z,null,r.createElement(i.pl,null,r.createElement(c.Z,null,r.createElement(i.L5,null,r.createElement(i.Cn,null,t)))))}var u=n(9757),s=n(9586),m=n(4662),d=n(5894),h=n(7272),E=n(5097),f=n(4926);function v(){return r.createElement(r.Fragment,null,r.createElement(d.Z,{style:{height:"33vh"}},r.createElement(s.ZP,{container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",style:{height:"100%"}},r.createElement(s.ZP,{item:!0,xs:!0}),r.createElement(s.ZP,{item:!0,xs:10},r.createElement(d.Z,null,r.createElement(h.Z,{variant:"h4",component:"h1",style:{color:f.F1,textAlign:"center"}},"Hi, I'm louis")),r.createElement(d.Z,{mt:2},r.createElement(s.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center"},r.createElement(s.ZP,{item:!0},r.createElement(E.Z,{alt:"louiscklaw",src:"https://aboutme.louislabs.com/static/590d0885a3f4457b6437115b0e72272d/9dc27/avatar.jpg",style:{width:"100px",height:"100px",alignSelf:"center"}}))))),r.createElement(s.ZP,{item:!0,xs:!0}))))}var g=n(6742);function Z(){return r.createElement(r.Fragment,null,r.createElement(d.Z,{style:{height:"34vh"}},r.createElement(s.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{height:"100%"}},r.createElement(d.Z,{mt:2},r.createElement(g.Z,{isNavLink:!0,to:"/",style:{color:f.F1}},"PROJECTS")),r.createElement(d.Z,{mt:2},r.createElement(g.Z,{isNavLink:!0,to:"/docs/about_louis",style:{color:f.F1}},"ABOUT")," "),r.createElement(d.Z,{mt:2},r.createElement(g.Z,{isNavLink:!0,to:"/docs/credits",style:{color:f.F1}},"CREDITS")," "),r.createElement(d.Z,{mt:2},r.createElement(g.Z,{isNavLink:!0,to:"/",style:{color:f.F1}},"TRAVIS BUILD DASHBOARD")))))}function p(){return r.createElement(r.Fragment,null,r.createElement(d.Z,{style:{height:"33vh",color:f.F1},mt:2},r.createElement(s.ZP,{container:!0,style:{height:"100%"}},r.createElement(s.ZP,{item:!0,xs:12},r.createElement(d.Z,{mt:2},r.createElement(s.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center"},r.createElement(s.ZP,{item:!0},r.createElement(d.Z,{style:{height:"20px",width:"100px",backgroundImage:"url(https://github.com/louiscklaw/portfolio-gatsby/actions/workflows/build.yml/badge.svg)",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})))))," ",r.createElement(s.ZP,{item:!0,xs:12,style:{width:"100%"}},r.createElement(d.Z,{style:{textAlign:"center"}},r.createElement(g.Z,{isNavLink:!0,to:"/",style:{color:f.F1}},"souce code"))),r.createElement(s.ZP,{item:!0,xs:12},r.createElement(d.Z,{style:{textAlign:"center"}},r.createElement(h.Z,{variant:"p"},"\ud83d\udc96 coded by louiscklaw. ",r.createElement("br",null),"Built on the solder of",r.createElement("br",null),r.createElement(g.Z,{isNavLink:!0,to:"/",style:{color:f.F1}},"THESE GIANTS")))),r.createElement(s.ZP,{item:!0,xs:12},r.createElement(d.Z,{style:{textAlign:"center"}},r.createElement(h.Z,{variant:"p",style:{color:f.F1}},"last build: 2021-Jan-11"))))))}function w(){return r.createElement(r.Fragment,null,r.createElement(v,null),r.createElement(Z,null),r.createElement(p,null))}var b=n(67),k=n(1964),y=n.n(k);var P=function(e){var t=e.children,n=(e.noFooter,e.wrapperClassName,e.pageClassName,(0,m.Z)());return(0,b.Z)(n.breakpoints.up("xs")),r.createElement(r.Fragment,null,r.createElement(y(),null,r.createElement(o,null,r.createElement(u.Z,e),r.createElement(l.Z,null),r.createElement(s.ZP,{container:!0,style:{height:"100vh"}},r.createElement(s.ZP,{item:!0,xs:2,style:{height:"100vh",backgroundColor:f.GP}},r.createElement("div",{style:{position:"fixed",height:"100vh",width:"16.666666666666668%",backgroundColor:f.GP}},r.createElement(w,null))),r.createElement(s.ZP,{item:!0,xs:10},t)))))}},830:function(e,t,n){var r=n(7462),l=n(7294),a=n(6742),c=n(2702),i=n(4809),o=n(1181),u=n(4926),s={code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(c.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(a.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:l.createElement(c.Z,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(o.Z,(0,r.Z)({},e,{summary:n}),a)},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6"),img:function(e){return l.createElement("div",{style:{textAlign:"center"}},l.createElement("img",(0,r.Z)({},e,{style:Object.assign({borderRadius:"0.5rem"},u.lc)})))}};t.Z=s},4926:function(e,t,n){n.d(t,{GP:function(){return r},F1:function(){return l},lc:function(){return a}});var r="#2C3E50",l="white",a={filter:"drop-shadow(0 0 .1rem #555555)"}}}]);