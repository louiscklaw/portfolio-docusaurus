"use strict";(self.webpackChunkmy_website_facebook=self.webpackChunkmy_website_facebook||[]).push([[3089],{3146:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),c=a(6742),o=a(5151),m=a(830),s=a(1217),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",E="blogPostDetailsFull_3kfx";var h=function(e){var t,a,h,v=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=e.children,f=e.frontMatter,Z=e.metadata,b=e.truncated,_=e.isBlogPostPage,N=void 0!==_&&_,k=Z.date,y=Z.formattedDate,x=Z.permalink,P=Z.tags,w=Z.readingTime,L=Z.title,T=Z.editUrl,C=f.author,I=f.image,F=f.keywords,A=f.author_url||f.authorURL,R=f.author_title||f.authorTitle,O=f.author_image_url||f.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(s.Z,{keywords:F,image:I}),n.createElement("article",{className:N?void 0:"margin-bottom--xl"},(h=N?"h1":"h2",n.createElement("header",null,n.createElement(h,{className:d},N?L:n.createElement(c.Z,{to:x},L)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},y),w&&n.createElement(n.Fragment,null," \xb7 ",v(w))),n.createElement("div",{className:"avatar margin-vert--md"},O&&n.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:A},n.createElement("img",{src:O,alt:C})),n.createElement("div",{className:"avatar__intro"},C&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(c.Z,{href:A},C)),n.createElement("small",{className:"avatar__subtitle"},R)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:m.Z},p)),(P.length>0||b)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[E]=N,t))},P.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),P.map((function(e){var t=e.label,a=e.permalink;return n.createElement(c.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),N&&T&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:T})),!N&&b&&n.createElement("div",{className:"col text--right"},n.createElement(c.Z,{to:Z.permalink,"aria-label":"Read more about "+L},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},6146:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(4973),l=a(7462),i=a(3366),c=a(6010),o="iconEdit_2_ui",m=["className"],s=function(e){var t=e.className,a=(0,i.Z)(e,m);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(s,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return o},Z:function(){return m}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,c=!1,o=document.getElementsByClassName(e);r<o.length&&!c;){var m=o[r],s=m.href,u=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),m.classList.add(t),i(m),c=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",c="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var m=function(e){var t=e.toc;return l(c,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}},9565:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(3366),r=a(7294),l=a(6010),i=a(446),c=a(6742),o="sidebar_3-2F",m="sidebarItemTitle_10M-",s="sidebarItemList_3L1d",u="sidebarItem_3stU",d="sidebarItemLink_3hZO",g="sidebarItemLinkActive_1XEC",E=a(4973);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,E.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:s},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title,JSON.stringify(e.permalink,null,2)))}))))}var v=a(571),p=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,c=e.children,o=(0,n.Z)(e,p),m=t&&t.items.length>0;return r.createElement(i.Z,o,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m})},c),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.Z,{toc:a})))))}},1729:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(2263),l=a(9565),i=a(3146),c=a(6742),o=a(4973);var m=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(c.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},s=a(5151);var u=function(e){var t=e.metadata,a=e.items,c=e.sidebar,o=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?o:d;return n.createElement(l.Z,{title:g,description:u,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:c},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(m,{metadata:t}))}},4809:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(3366),r=a(7462),l=a(7294),i=a(6010),c=a(4973),o=a(5151),m="enhancedAnchor_3KR1",s="h1Heading_24eg",u=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0,className:s}),t.children))},g=function(e){return"h1"===e?d:(t=e,function(e){var a,r=e.id,s=(0,n.Z)(e,u),d=(0,o.LU)().navbar.hideOnScroll;return r?l.createElement(t,s,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(a={},a[m]=!d,a)),id:r}),s.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,s)});var t}},446:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(94),l=a(8543),i=a(9222),c=a(5151);function o(e){var t=e.children;return n.createElement(l.Z,null,n.createElement(c.pl,null,n.createElement(i.Z,null,n.createElement(c.L5,null,n.createElement(c.Cn,null,t)))))}var m=a(9757),s=a(9586),u=a(4662),d=a(5894),g=a(7272),E=a(5097),h=a(4926);function v(){return n.createElement(n.Fragment,null,n.createElement(d.Z,{style:{height:"33vh"}},n.createElement(s.ZP,{container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",style:{height:"100%"}},n.createElement(s.ZP,{item:!0,xs:!0}),n.createElement(s.ZP,{item:!0,xs:10},n.createElement(d.Z,null,n.createElement(g.Z,{variant:"h4",component:"h1",style:{color:h.F1,textAlign:"center"}},"Hi, I'm louis")),n.createElement(d.Z,{mt:2},n.createElement(s.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center"},n.createElement(s.ZP,{item:!0},n.createElement(E.Z,{alt:"louiscklaw",src:"https://aboutme.louislabs.com/static/590d0885a3f4457b6437115b0e72272d/9dc27/avatar.jpg",style:{width:"100px",height:"100px",alignSelf:"center"}}))))),n.createElement(s.ZP,{item:!0,xs:!0}))))}var p=a(6742);function f(){return n.createElement(n.Fragment,null,n.createElement(d.Z,{style:{height:"34vh"}},n.createElement(s.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{height:"100%"}},n.createElement(d.Z,{mt:2},n.createElement(p.Z,{isNavLink:!0,to:"/",style:{color:h.F1}},"PROJECTS")),n.createElement(d.Z,{mt:2},n.createElement(p.Z,{isNavLink:!0,to:"/docs/about_louis",style:{color:h.F1}},"ABOUT")," "),n.createElement(d.Z,{mt:2},n.createElement(p.Z,{isNavLink:!0,to:"/docs/credits",style:{color:h.F1}},"CREDITS")," "),n.createElement(d.Z,{mt:2},n.createElement(p.Z,{isNavLink:!0,to:"/",style:{color:h.F1}},"TRAVIS BUILD DASHBOARD")))))}function Z(){return n.createElement(n.Fragment,null,n.createElement(d.Z,{style:{height:"33vh",color:h.F1},mt:2},n.createElement(s.ZP,{container:!0,style:{height:"100%"}},n.createElement(s.ZP,{item:!0,xs:12},n.createElement(d.Z,{mt:2},n.createElement(s.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center"},n.createElement(s.ZP,{item:!0},n.createElement(d.Z,{style:{height:"20px",width:"100px",backgroundImage:"url(https://github.com/louiscklaw/portfolio-gatsby/actions/workflows/build.yml/badge.svg)",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})))))," ",n.createElement(s.ZP,{item:!0,xs:12,style:{width:"100%"}},n.createElement(d.Z,{style:{textAlign:"center"}},n.createElement(p.Z,{isNavLink:!0,to:"/",style:{color:h.F1}},"souce code"))),n.createElement(s.ZP,{item:!0,xs:12},n.createElement(d.Z,{style:{textAlign:"center"}},n.createElement(g.Z,{variant:"p"},"\ud83d\udc96 coded by louiscklaw. ",n.createElement("br",null),"Built on the solder of",n.createElement("br",null),n.createElement(p.Z,{isNavLink:!0,to:"/",style:{color:h.F1}},"THESE GIANTS")))),n.createElement(s.ZP,{item:!0,xs:12},n.createElement(d.Z,{style:{textAlign:"center"}},n.createElement(g.Z,{variant:"p",style:{color:h.F1}},"last build: 2021-Jan-11"))))))}function b(){return n.createElement(n.Fragment,null,n.createElement(v,null),n.createElement(f,null),n.createElement(Z,null))}var _=a(67),N=a(1964),k=a.n(N);var y=function(e){var t=e.children,a=(e.noFooter,e.wrapperClassName,e.pageClassName,(0,u.Z)());return(0,_.Z)(a.breakpoints.up("xs")),n.createElement(n.Fragment,null,n.createElement(k(),null,n.createElement(o,null,n.createElement(m.Z,e),n.createElement(r.Z,null),n.createElement(s.ZP,{container:!0,style:{height:"100vh"}},n.createElement(s.ZP,{item:!0,xs:2,style:{height:"100vh",backgroundColor:h.GP}},n.createElement("div",{style:{position:"fixed",height:"100vh",width:"16.666666666666668%",backgroundColor:h.GP}},n.createElement(b,null))),n.createElement(s.ZP,{item:!0,xs:10},t)))))}},830:function(e,t,a){var n=a(7462),r=a(7294),l=a(6742),i=a(2702),c=a(4809),o=a(1181),m=a(4926),s={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(i.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(l.Z,e)},pre:function(e){var t,a=e.children;return(0,r.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:r.createElement(i.Z,(0,r.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((function(e){return e!==a})));return r.createElement(o.Z,(0,n.Z)({},e,{summary:a}),l)},h1:(0,c.Z)("h1"),h2:(0,c.Z)("h2"),h3:(0,c.Z)("h3"),h4:(0,c.Z)("h4"),h5:(0,c.Z)("h5"),h6:(0,c.Z)("h6"),img:function(e){return r.createElement("div",{style:{textAlign:"center"}},r.createElement("img",(0,n.Z)({},e,{style:Object.assign({borderRadius:"0.5rem"},m.lc)})))}};t.Z=s},4926:function(e,t,a){a.d(t,{GP:function(){return n},F1:function(){return r},lc:function(){return l}});var n="#2C3E50",r="white",l={filter:"drop-shadow(0 0 .1rem #555555)"}}}]);