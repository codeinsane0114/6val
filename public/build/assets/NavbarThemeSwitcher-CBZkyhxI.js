import{a2 as v,r as V,w as x,a as y,o as i,f as c,e as o,b as a,a3 as d,m as n,d as g,v as h,aZ as k,c as b,F as w,h as B,t as I}from"./main-BpgBUGps.js";import{V as S}from"./VTooltip-Cuy6b6Ub.js";import{V as T}from"./VMenu-D0wOrHxC.js";import{V as C,a as z,b as L}from"./VList-Bu48BGuL.js";import"./VOverlay-BSwVgU5G.js";import"./easing-CjukEv2V.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VImg-MA4fhMLa.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Dw95iG-S.js";import"./ssrBoot-Cao_hl35.js";import"./VAvatar-B9R7oHU8.js";import"./VDivider-CPy3CxIk.js";const N={class:"text-capitalize"},F={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(m){const s=m,t=v(),r=V([t.theme]);return x(()=>t.theme,()=>{r.value=[t.theme]},{deep:!0}),(p,l)=>{const _=y("IconBtn");return i(),c(_,{color:"rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))"},{default:o(()=>{var u;return[a(d,{icon:(u=s.themes.find(e=>e.name===n(t).theme))==null?void 0:u.icon,size:"22"},null,8,["icon"]),a(S,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:o(()=>[g("span",N,h(n(t).theme),1)]),_:1}),a(T,{activator:"parent",offset:"21px",width:180},{default:o(()=>[a(C,{selected:n(r),"onUpdate:selected":l[0]||(l[0]=e=>k(r)?r.value=e:null),mandatory:""},{default:o(()=>[(i(!0),b(w,null,B(s.themes,({name:e,icon:f})=>(i(),c(z,{key:e,value:e,color:"primary",onClick:()=>{n(t).theme=e}},{prepend:o(()=>[a(d,{icon:f,size:"22"},null,8,["icon"])]),default:o(()=>[a(L,{class:"text-capitalize"},{default:o(()=>[I(h(e),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["selected"])]),_:1})]}),_:1})}}},P={__name:"NavbarThemeSwitcher",setup(m){const s=[{name:"light",icon:"bx-sun"},{name:"dark",icon:"bx-moon"},{name:"system",icon:"bx-desktop"}];return(t,r)=>{const p=F;return i(),c(p,{themes:s})}}};export{P as default};
