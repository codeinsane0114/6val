import{N as F,V as A,F as $}from"./front-page-navbar-DI9CUVsm.js";import{a5 as x,a6 as I,aB as S,ac as D,b as a,bW as z,az as N,bZ as H,$ as B,bK as M,bI as q,bV as E,ay as J,aD as K,a0 as g,b$ as Q,aJ as U,aN as W,a3 as R,bN as Z,F as T,q as j,a2 as G,r as O,o as C,c as k,e as m,m as d,d as u,x as X,v as y,h as Y,f as ee,y as te,Q as ae,R as re}from"./main-BpgBUGps.js";import{u as se}from"./useApi-DdK-gkOH.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as oe,a as w}from"./VRow-DcLldsAi.js";import{V as le}from"./VDivider-CPy3CxIk.js";import{V as L}from"./VImg-MA4fhMLa.js";import{V as ce}from"./VTextField-DNnTNwAs.js";import{V as ne,a as de}from"./VList-Bu48BGuL.js";import"./AppTextField-CidaaHzM.js";import"./form-jV7EneQK.js";import"./VNodeRenderer-BTYogJaJ.js";import"./useGenerateImageVariant-DW3DZK7L.js";import"./VForm-HbYQbjWg.js";import"./forwardRefs-C-GTDzx5.js";import"./VChip-Gdsswa87.js";import"./VSlideGroup-qhrbewnN.js";import"./VAvatar-B9R7oHU8.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./NavbarThemeSwitcher-CBZkyhxI.js";import"./VTooltip-Cuy6b6Ub.js";import"./VOverlay-BSwVgU5G.js";import"./easing-CjukEv2V.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VMenu-D0wOrHxC.js";import"./dialog-transition-Dw95iG-S.js";import"./ssrBoot-Cao_hl35.js";import"./VNavigationDrawer-BkJcA9O0.js";import"./VToolbar-B7FHY1-l.js";import"./VCard-DPA8ST1d.js";import"./VCardText-RhVa6W5U.js";import"./VSpacer-BwkbVUnR.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./VInput-h-v4JtUG.js";const ue=x({divider:[Number,String],...I()},"VBreadcrumbsDivider"),me=S()({name:"VBreadcrumbsDivider",props:ue(),setup(e,v){let{slots:t}=v;return D(()=>{var r;return a("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((r=t==null?void 0:t.default)==null?void 0:r.call(t))??e.divider])}),{}}}),ve=x({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...I(),...z(),...N({tag:"li"})},"VBreadcrumbsItem"),be=S()({name:"VBreadcrumbsItem",props:ve(),setup(e,v){let{slots:t,attrs:r}=v;const l=H(e,r),o=B(()=>{var i;return e.active||((i=l.isActive)==null?void 0:i.value)}),f=B(()=>o.value?e.activeColor:e.color),{textColorClasses:c,textColorStyles:s}=M(f);return D(()=>a(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":o.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:o.value&&e.activeClass},c.value,e.class],style:[s.value,e.style],"aria-current":o.value?"page":void 0},{default:()=>{var i,b;return[l.isLink.value?a("a",{class:"v-breadcrumbs-item--link",href:l.href.value,"aria-current":o.value?"page":void 0,onClick:l.navigate},[((b=t.default)==null?void 0:b.call(t))??e.title]):((i=t.default)==null?void 0:i.call(t))??e.title]}})),{}}}),pe=x({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:q,items:{type:Array,default:()=>[]},...I(),...E(),...J(),...N({tag:"ul"})},"VBreadcrumbs"),fe=S()({name:"VBreadcrumbs",props:pe(),setup(e,v){let{slots:t}=v;const{backgroundColorClasses:r,backgroundColorStyles:l}=K(g(e,"bgColor")),{densityClasses:o}=Q(e),{roundedClasses:f}=U(e);W({VBreadcrumbsDivider:{divider:g(e,"divider")},VBreadcrumbsItem:{activeClass:g(e,"activeClass"),activeColor:g(e,"activeColor"),color:g(e,"color"),disabled:g(e,"disabled")}});const c=B(()=>e.items.map(s=>typeof s=="string"?{item:{title:s},raw:s}:{item:s,raw:s}));return D(()=>{const s=!!(t.prepend||e.icon);return a(e.tag,{class:["v-breadcrumbs",r.value,o.value,f.value,e.class],style:[l.value,e.style]},{default:()=>{var i;return[s&&a("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?a(Z,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):a(R,{key:"prepend-icon",start:!0,icon:e.icon},null)]),c.value.map((b,n,h)=>{var P;let{item:p,raw:V}=b;return a(T,null,[((P=t.item)==null?void 0:P.call(t,{item:p,index:n}))??a(be,j({key:n,disabled:n>=h.length-1},typeof p=="string"?{title:p}:p),{default:t.title?()=>{var _;return(_=t.title)==null?void 0:_.call(t,{item:p,index:n})}:void 0}),n<h.length-1&&a(me,null,{default:t.divider?()=>{var _;return(_=t.divider)==null?void 0:_.call(t,{item:V,index:n})}:void 0})])}),(i=t.default)==null?void 0:i.call(t)]}})}),{}}}),ge=e=>(ae("data-v-5b68dbcb"),e=e(),re(),e),he={class:"bg-surface help-center-article"},_e={key:0,class:"article-section"},ye={class:"text-h4 mb-2"},Ce={class:"text-body-1"},Ve=["innerHTML"],ke={class:"my-6 text-body-1"},Be=ge(()=>u("h5",{class:"text-h5 px-6 py-2 mb-4 rounded",style:{background:"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"}}," Articles in this section ",-1)),xe={class:"text-body-1 text-high-emphasis"},Ie={__name:"[title]",setup(e){const v=G();v.skin="default";const t=[{title:"Help Center",to:{name:"front-pages-help-center"}},{title:"Buying and item support"},{title:"Template kits"}],r=O();return setTimeout(async()=>{const{data:l,error:o}=await se("/pages/help-center/article");o.value?console.log(o.value):r.value=l.value},1e3),(l,o)=>(C(),k("div",he,[a(F),a(A,null,{default:m(()=>{var f;return[d(r)&&((f=d(r))!=null&&f.title)?(C(),k("div",_e,[a(oe,null,{default:m(()=>[a(w,{cols:"12",md:"8"},{default:m(()=>{var c,s,i,b,n,h;return[u("div",null,[a(fe,{class:"px-0 pb-2 pt-0 flex-wrap",items:t},{item:m(({item:p,index:V})=>[u("div",{class:X(["text-body-1",V===t.length-1?"text-high-emphasis":"text-medium-emphasis"])},y(p.title),3)]),_:1}),u("h4",ye,y((c=d(r))==null?void 0:c.title),1),u("div",Ce,y((s=d(r))==null?void 0:s.lastUpdated),1)]),a(le,{class:"my-6"}),u("div",{class:"mb-6 text-body-1",innerHTML:(i=d(r))==null?void 0:i.productContent},null,8,Ve),a(L,{class:"rounded-lg",src:(b=d(r))==null?void 0:b.productImg},null,8,["src"]),u("p",ke,y((n=d(r))==null?void 0:n.checkoutContent),1),a(L,{class:"rounded-lg",src:(h=d(r))==null?void 0:h.checkoutImg},null,8,["src"])]}),_:1}),a(w,{cols:"12",md:"4"},{default:m(()=>[a(ce,{"prepend-inner-icon":"bx-search",placeholder:"Search...",class:"mb-6"}),u("div",null,[Be,a(ne,{class:"card-list"},{default:m(()=>{var c;return[(C(!0),k(T,null,Y((c=d(r))==null?void 0:c.articleList,(s,i)=>(C(),ee(de,{key:i,link:"",class:"text-disabled"},{append:m(()=>[a(R,{icon:l.$vuetify.locale.isRtl?"bx-chevron-left":"bx-chevron-right",size:"20"},null,8,["icon"])]),default:m(()=>[u("div",xe,y(s),1)]),_:2},1024))),128))]}),_:1})])]),_:1})]),_:1})])):te("",!0)]}),_:1}),a($)]))}},mt=ie(Ie,[["__scopeId","data-v-5b68dbcb"]]);export{mt as default};
