"use strict";(self.webpackChunkmy_website_facebook=self.webpackChunkmy_website_facebook||[]).push([[3085],{7979:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),l=n(6010),a=n(446),c=n(3905),i=n(830),o=n(571),m=n(5151),s="mdxPageWrapper_3qD3";var u=function(e){var t=e.content,n=t.frontMatter,u=t.metadata,d=n.title,E=n.description,h=n.wrapperClassName,f=n.hide_table_of_contents,g=u.permalink;return r.createElement(a.Z,{title:d,description:E,permalink:g,wrapperClassName:null!=h?h:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,l.Z)("row",s)},r.createElement("div",{className:(0,l.Z)("col",!f&&"col--8")},r.createElement(c.Zo,{components:i.Z},r.createElement(t,null))),!f&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(o.Z,{toc:t.toc})))))}},571:function(e,t,n){n.d(t,{r:function(){return o},Z:function(){return m}});var r=n(7294),l=n(6010);var a=function(e,t,n){var l=(0,r.useState)(void 0),a=l[0],c=l[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var l=0,i=!1,o=document.getElementsByClassName(e);l<o.length&&!i;){var m=o[l],s=m.href,u=decodeURIComponent(s.substring(s.indexOf("#")+1));r.id===u&&(a&&a.classList.remove(t),m.classList.add(t),c(m),i=!0),l+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},c="tableOfContents_35-E",i="table-of-contents__link";function o(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children}))}))):null}var m=function(e){var t=e.toc;return a(i,"table-of-contents__link--active",100),r.createElement("div",{className:(0,l.Z)(c,"thin-scrollbar")},r.createElement(o,{toc:t}))}},4809:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(3366),l=n(7462),a=n(7294),c=n(6010),i=n(4973),o=n(5151),m="enhancedAnchor_3KR1",s="h1Heading_24eg",u=["id"],d=function(e){var t=Object.assign({},e);return a.createElement("header",null,a.createElement("h1",(0,l.Z)({},t,{id:void 0,className:s}),t.children))},E=function(e){return"h1"===e?d:(t=e,function(e){var n,l=e.id,s=(0,r.Z)(e,u),d=(0,o.LU)().navbar.hideOnScroll;return l?a.createElement(t,s,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,c.Z)("anchor",(n={},n[m]=!d,n)),id:l}),s.children,a.createElement("a",{className:"hash-link",href:"#"+l,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(t,s)});var t}},446:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(7294),l=n(94),a=n(8543),c=n(9222),i=n(5151);function o(e){var t=e.children;return r.createElement(a.Z,null,r.createElement(i.pl,null,r.createElement(c.Z,null,r.createElement(i.L5,null,r.createElement(i.Cn,null,t)))))}var m=n(9757),s=n(9586),u=n(4662),d=n(5894),E=n(7272),h=n(5097),f=n(4926);function g(){return r.createElement(r.Fragment,null,r.createElement(d.Z,{style:{height:"33vh"}},r.createElement(s.ZP,{container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",style:{height:"100%"}},r.createElement(s.ZP,{item:!0,xs:!0}),r.createElement(s.ZP,{item:!0,xs:10},r.createElement(d.Z,null,r.createElement(E.Z,{variant:"h4",component:"h1",style:{color:f.F1,textAlign:"center"}},"Hi, I'm louis")),r.createElement(d.Z,{mt:2},r.createElement(s.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center"},r.createElement(s.ZP,{item:!0},r.createElement(h.Z,{alt:"louiscklaw",src:"https://aboutme.louislabs.com/static/590d0885a3f4457b6437115b0e72272d/9dc27/avatar.jpg",style:{width:"100px",height:"100px",alignSelf:"center"}}))))),r.createElement(s.ZP,{item:!0,xs:!0}))))}var Z=n(6742);function v(){return r.createElement(r.Fragment,null,r.createElement(d.Z,{style:{height:"34vh"}},r.createElement(s.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{height:"100%"}},r.createElement(d.Z,{mt:2},r.createElement(Z.Z,{isNavLink:!0,to:"/",style:{color:f.F1}},"PROJECTS")),r.createElement(d.Z,{mt:2},r.createElement(Z.Z,{isNavLink:!0,to:"/docs/about_louis",style:{color:f.F1}},"ABOUT")," "),r.createElement(d.Z,{mt:2},r.createElement(Z.Z,{isNavLink:!0,to:"/docs/credits",style:{color:f.F1}},"CREDITS")," "),r.createElement(d.Z,{mt:2},r.createElement(Z.Z,{isNavLink:!0,to:"/",style:{color:f.F1}},"TRAVIS BUILD DASHBOARD")))))}function p(){return r.createElement(r.Fragment,null,r.createElement(d.Z,{style:{height:"33vh",color:f.F1},mt:2},r.createElement(s.ZP,{container:!0,style:{height:"100%"}},r.createElement(s.ZP,{item:!0,xs:12},r.createElement(d.Z,{mt:2},r.createElement(s.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center"},r.createElement(s.ZP,{item:!0},r.createElement(d.Z,{style:{height:"20px",width:"100px",backgroundImage:"url(https://github.com/louiscklaw/portfolio-gatsby/actions/workflows/build.yml/badge.svg)",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})))))," ",r.createElement(s.ZP,{item:!0,xs:12,style:{width:"100%"}},r.createElement(d.Z,{style:{textAlign:"center"}},r.createElement(Z.Z,{isNavLink:!0,to:"/",style:{color:f.F1}},"souce code"))),r.createElement(s.ZP,{item:!0,xs:12},r.createElement(d.Z,{style:{textAlign:"center"}},r.createElement(E.Z,{variant:"p"},"\ud83d\udc96 coded by louiscklaw. ",r.createElement("br",null),"Built on the solder of",r.createElement("br",null),r.createElement(Z.Z,{isNavLink:!0,to:"/",style:{color:f.F1}},"THESE GIANTS")))),r.createElement(s.ZP,{item:!0,xs:12},r.createElement(d.Z,{style:{textAlign:"center"}},r.createElement(E.Z,{variant:"p",style:{color:f.F1}},"last build: 2021-Jan-11"))))))}function b(){return r.createElement(r.Fragment,null,r.createElement(g,null),r.createElement(v,null),r.createElement(p,null))}var y=n(67),k=n(1964),x=n.n(k);var P=function(e){var t=e.children,n=(e.noFooter,e.wrapperClassName,e.pageClassName,(0,u.Z)());return(0,y.Z)(n.breakpoints.up("xs")),r.createElement(r.Fragment,null,r.createElement(x(),null,r.createElement(o,null,r.createElement(m.Z,e),r.createElement(l.Z,null),r.createElement(s.ZP,{container:!0,style:{height:"100vh"}},r.createElement(s.ZP,{item:!0,xs:2,style:{height:"100vh",backgroundColor:f.GP}},r.createElement("div",{style:{position:"fixed",height:"100vh",width:"16.666666666666668%",backgroundColor:f.GP}},r.createElement(b,null))),r.createElement(s.ZP,{item:!0,xs:10},t)))))}},830:function(e,t,n){var r=n(7462),l=n(7294),a=n(6742),c=n(2702),i=n(4809),o=n(1181),m=n(4926),s={code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(c.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(a.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:l.createElement(c.Z,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(o.Z,(0,r.Z)({},e,{summary:n}),a)},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6"),img:function(e){return l.createElement("div",{style:{textAlign:"center"}},l.createElement("img",(0,r.Z)({},e,{style:Object.assign({borderRadius:"0.5rem"},m.lc)})))}};t.Z=s},4926:function(e,t,n){n.d(t,{GP:function(){return r},F1:function(){return l},lc:function(){return a}});var r="#2C3E50",l="white",a={filter:"drop-shadow(0 0 .1rem #555555)"}}}]);