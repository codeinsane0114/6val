import{cz as Ce,cA as Ae,a5 as ee,r as W,c7 as q,cc as ce,w as B,ce as _,cB as We,cC as ye,cD as ne,cE as oe,cF as ge,$ as P,b1 as ue,cG as he,aa as R,a9 as be,cd as fe,cH as Te,bT as pe,U as Le,cI as we,q as D,cJ as De,a8 as K,bh as qe,G as ze,cK as Be,O as $e,bk as je,bm as Ye,a6 as Ge,au as Ke,aA as Ue,aB as Je,aL as Xe,aC as Ze,aM as Qe,aD as et,a0 as tt,aF as nt,bl as ot,ch as at,ac as rt,b as V,bn as it,J as lt,K as st,c1 as ct,F as ut,T as ft,cL as vt}from"./main-BpgBUGps.js";import{g as dt,B as ae,a as Ee,n as mt,b as yt,s as gt}from"./easing-CjukEv2V.js";import{m as ht,u as bt}from"./delay-CiIYTbkJ.js";import{m as wt,u as Et}from"./lazy-CKzIgbSD.js";import{u as St}from"./scopeId-D5DaYZNr.js";import{m as xt,M as Ot}from"./VImg-MA4fhMLa.js";const J=new WeakMap;function kt(e,t){Object.keys(t).forEach(n=>{if(Ce(n)){const o=Ae(n),a=J.get(e);if(t[n]==null)a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===t[n])){e.addEventListener(o,t[n]);const r=a||new Set;r.add([o,t[n]]),J.has(e)||J.set(e,r)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function Pt(e,t){Object.keys(t).forEach(n=>{if(Ce(n)){const o=Ae(n),a=J.get(e);a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(n)})}function Fe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function Ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?At(e):ve(e))return e;e=e.parentElement}return document.scrollingElement}function Z(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ve(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ve(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function At(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function Tt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function re(e,t){return{x:e.x+t.x,y:e.y+t.y}}function pt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Se(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,r=n==="top"?0:n==="bottom"?t.height:n;return re({x:a,y:r},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,r=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return re({x:a,y:r},t)}return re({x:t.width/2,y:t.height/2},t)}const Me={static:Ft,connected:Rt},Lt=ee({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Me},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Bt(e,t){const n=W({}),o=W();q&&ce(()=>!!(t.isActive.value&&e.locationStrategy),r=>{var l,i;B(()=>e.locationStrategy,r),_(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation:o.value=(i=Me[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation});function a(r){var l;(l=o.value)==null||l.call(o,r)}return{contentStyles:n,updateLocation:o}}function Ft(){}function Mt(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=mt(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Rt(e,t,n){(Array.isArray(e.target.value)||Tt(e.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=We(()=>{const f=ye(t.location,e.isRtl.value),c=t.origin==="overlap"?f:t.origin==="auto"?ne(f):ye(t.origin,e.isRtl.value);return f.side===c.side&&f.align===oe(c).align?{preferredAnchor:ge(f),preferredOrigin:ge(c)}:{preferredAnchor:f,preferredOrigin:c}}),[l,i,d,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(f=>P(()=>{const c=parseFloat(t[f]);return isNaN(c)?1/0:c})),m=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const f=t.offset.split(" ").map(parseFloat);return f.length<2&&f.push(0),f}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let h=!1;const C=new ResizeObserver(()=>{h&&S()});B([e.target,e.contentEl],(f,c)=>{let[x,L]=f,[b,w]=c;b&&!Array.isArray(b)&&C.unobserve(b),x&&!Array.isArray(x)&&C.observe(x),w&&C.unobserve(w),L&&C.observe(L)},{immediate:!0}),_(()=>{C.disconnect()});function S(){if(h=!1,requestAnimationFrame(()=>h=!0),!e.target.value||!e.contentEl.value)return;const f=dt(e.target.value),c=Mt(e.contentEl.value,e.isRtl.value),x=Z(e.contentEl.value),L=12;x.length||(x.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(c.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),c.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const b=x.reduce((O,E)=>{const v=E.getBoundingClientRect(),y=new ae({x:E===document.documentElement?0:v.x,y:E===document.documentElement?0:v.y,width:E.clientWidth,height:E.clientHeight});return O?new ae({x:Math.max(O.left,y.left),y:Math.max(O.top,y.top),width:Math.min(O.right,y.right)-Math.max(O.left,y.left),height:Math.min(O.bottom,y.bottom)-Math.max(O.top,y.top)}):y},void 0);b.x+=L,b.y+=L,b.width-=L*2,b.height-=L*2;let w={anchor:a.value,origin:r.value};function H(O){const E=new ae(c),v=Se(O.anchor,f),y=Se(O.origin,E);let{x:k,y:M}=pt(v,y);switch(O.anchor.side){case"top":M-=m.value[0];break;case"bottom":M+=m.value[0];break;case"left":k-=m.value[0];break;case"right":k+=m.value[0];break}switch(O.anchor.align){case"top":M-=m.value[1];break;case"bottom":M+=m.value[1];break;case"left":k-=m.value[1];break;case"right":k+=m.value[1];break}return E.x+=k,E.y+=M,E.width=Math.min(E.width,d.value),E.height=Math.min(E.height,u.value),{overflows:Ee(E,b),x:k,y:M}}let F=0,A=0;const s={x:0,y:0},p={x:!1,y:!1};let Y=-1;for(;!(Y++>10);){const{x:O,y:E,overflows:v}=H(w);F+=O,A+=E,c.x+=O,c.y+=E;{const y=he(w.anchor),k=v.x.before||v.x.after,M=v.y.before||v.y.after;let z=!1;if(["x","y"].forEach(T=>{if(T==="x"&&k&&!p.x||T==="y"&&M&&!p.y){const I={anchor:{...w.anchor},origin:{...w.origin}},$=T==="x"?y==="y"?oe:ne:y==="y"?ne:oe;I.anchor=$(I.anchor),I.origin=$(I.origin);const{overflows:j}=H(I);(j[T].before<=v[T].before&&j[T].after<=v[T].after||j[T].before+j[T].after<(v[T].before+v[T].after)/2)&&(w=I,z=p[T]=!0)}}),z)continue}v.x.before&&(F+=v.x.before,c.x+=v.x.before),v.x.after&&(F-=v.x.after,c.x-=v.x.after),v.y.before&&(A+=v.y.before,c.y+=v.y.before),v.y.after&&(A-=v.y.after,c.y-=v.y.after);{const y=Ee(c,b);s.x=b.width-y.x.before-y.x.after,s.y=b.height-y.y.before-y.y.after,F+=y.x.before,c.x+=y.x.before,A+=y.y.before,c.y+=y.y.before}break}const te=he(w.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${w.anchor.side} ${w.anchor.align}`,transformOrigin:`${w.origin.side} ${w.origin.align}`,top:R(ie(A)),left:e.isRtl.value?void 0:R(ie(F)),right:e.isRtl.value?R(ie(-F)):void 0,minWidth:R(te==="y"?Math.min(l.value,f.width):l.value),maxWidth:R(xe(be(s.x,l.value===1/0?0:l.value,d.value))),maxHeight:R(xe(be(s.y,i.value===1/0?0:i.value,u.value)))}),{available:s,contentBox:c}}return B(()=>[a.value,r.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>S()),ue(()=>{const f=S();if(!f)return;const{available:c,contentBox:x}=f;x.height>c.y&&requestAnimationFrame(()=>{S(),requestAnimationFrame(()=>{S()})})}),{updateLocation:S}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function xe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let le=!0;const Q=[];function Nt(e){!le||Q.length?(Q.push(e),se()):(le=!1,e(),se())}let Oe=-1;function se(){cancelAnimationFrame(Oe),Oe=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?se():le=!0})}const X={none:null,close:It,block:Vt,reposition:Wt},_t=ee({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in X}},"VOverlay-scroll-strategies");function Ht(e,t){if(!q)return;let n;fe(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Te(),await new Promise(o=>setTimeout(o)),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=X[e.scrollStrategy])==null||o.call(X,t,e,n)}))}),_(()=>{n==null||n.stop()})}function It(e){function t(n){e.isActive.value=!1}Re(e.targetEl.value??e.contentEl.value,t)}function Vt(e,t){var l;const n=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...Z(e.targetEl.value,t.contained?n:void 0),...Z(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>ve(i)&&i)(n||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,d)=>{i.style.setProperty("--v-body-scroll-x",R(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",R(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",R(a)),i.classList.add("v-overlay-scroll-blocked")}),_(()=>{o.forEach((i,d)=>{const u=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),m=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),h=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-u,i.scrollTop=-m,i.style.scrollBehavior=h}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Wt(e,t,n){let o=!1,a=-1,r=-1;function l(i){Nt(()=>{var m,h;const d=performance.now();(h=(m=e.updateLocation).value)==null||h.call(m,i),o=(performance.now()-d)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{n.run(()=>{Re(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(i)})})):l(i)})})}),_(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Re(e,t){const n=[document,...Z(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),_(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const Dt=Symbol.for("vuetify:v-menu"),qt=ee({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...ht()},"VOverlay-activator");function zt(e,t){let{isActive:n,isTop:o}=t;const a=pe("useActivator"),r=W();let l=!1,i=!1,d=!0;const u=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),m=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:h,runCloseDelay:C}=bt(e,s=>{s===(e.openOnHover&&l||u.value&&i)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==s&&(d=!0),n.value=s)}),S=W(),f={onClick:s=>{s.stopPropagation(),r.value=s.currentTarget||s.target,n.value||(S.value=[s.clientX,s.clientY]),n.value=!n.value},onMouseenter:s=>{var p;(p=s.sourceCapabilities)!=null&&p.firesTouchEvents||(l=!0,r.value=s.currentTarget||s.target,h())},onMouseleave:s=>{l=!1,C()},onFocus:s=>{De(s.target,":focus-visible")!==!1&&(i=!0,s.stopPropagation(),r.value=s.currentTarget||s.target,h())},onBlur:s=>{i=!1,s.stopPropagation(),C()}},c=P(()=>{const s={};return m.value&&(s.onClick=f.onClick),e.openOnHover&&(s.onMouseenter=f.onMouseenter,s.onMouseleave=f.onMouseleave),u.value&&(s.onFocus=f.onFocus,s.onBlur=f.onBlur),s}),x=P(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{l=!0,h()},s.onMouseleave=()=>{l=!1,C()}),u.value&&(s.onFocusin=()=>{i=!0,h()},s.onFocusout=()=>{i=!1,C()}),e.closeOnContentClick){const p=Le(Dt,null);s.onClick=()=>{n.value=!1,p==null||p.closeParents()}}return s}),L=P(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{d&&(l=!0,d=!1,h())},s.onMouseleave=()=>{l=!1,C()}),s});B(o,s=>{s&&(e.openOnHover&&!l&&(!u.value||!i)||u.value&&!i&&(!e.openOnHover||!l))&&(n.value=!1)}),B(n,s=>{s||setTimeout(()=>{S.value=void 0})},{flush:"post"});const b=we();fe(()=>{b.value&&ue(()=>{r.value=b.el})});const w=we(),H=P(()=>e.target==="cursor"&&S.value?S.value:w.value?w.el:Ne(e.target,a)||r.value),F=P(()=>Array.isArray(H.value)?void 0:H.value);let A;return B(()=>!!e.activator,s=>{s&&q?(A=Te(),A.run(()=>{$t(e,a,{activatorEl:r,activatorEvents:c})})):A&&A.stop()},{flush:"post",immediate:!0}),_(()=>{A==null||A.stop()}),{activatorEl:r,activatorRef:b,target:H,targetEl:F,targetRef:w,activatorEvents:c,contentEvents:x,scrimEvents:L}}function $t(e,t,n){let{activatorEl:o,activatorEvents:a}=n;B(()=>e.activator,(d,u)=>{if(u&&d!==u){const m=i(u);m&&l(m)}d&&ue(()=>r())},{immediate:!0}),B(()=>e.activatorProps,()=>{r()}),_(()=>{l()});function r(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&kt(d,D(a.value,u))}function l(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&Pt(d,D(a.value,u))}function i(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const u=Ne(d,t);return o.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:void 0,o.value}}function Ne(e,t){var o,a;if(!e)return;let n;if(e==="parent"){let r=(a=(o=t==null?void 0:t.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;n=r}else typeof e=="string"?n=document.querySelector(e):"$el"in e?n=e.$el:n=e;return n}function jt(){if(!q)return K(!1);const{ssr:e}=qe();if(e){const t=K(!1);return ze(()=>{t.value=!0}),t}else return K(!0)}const ke=Symbol.for("vuetify:stack"),G=Be([]);function Yt(e,t,n){const o=pe("useStack"),a=!n,r=Le(ke,void 0),l=Be({activeChildren:new Set});$e(ke,l);const i=K(+t.value);ce(e,()=>{var h;const m=(h=G.at(-1))==null?void 0:h[1];i.value=m?m+10:+t.value,a&&G.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),_(()=>{if(a){const C=je(G).findIndex(S=>S[0]===o.uid);G.splice(C,1)}r==null||r.activeChildren.delete(o.uid)})});const d=K(!0);a&&fe(()=>{var h;const m=((h=G.at(-1))==null?void 0:h[0])===o.uid;setTimeout(()=>d.value=m)});const u=P(()=>!l.activeChildren.size);return{globalTop:Ye(d),localTop:u,stackStyles:P(()=>({zIndex:i.value}))}}function Gt(e){return{teleportTarget:P(()=>{const n=e.value;if(n===!0||!q)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Kt(){return!0}function _e(e,t,n){if(!e||He(e,n)===!1)return!1;const o=Fe(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(r=>r==null?void 0:r.contains(e.target))}function He(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Kt)(e)}function Ut(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&_e(e,t,n)&&setTimeout(()=>{He(e,n)&&o&&o(e)},0)}function Pe(e,t){const n=Fe(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Jt={mounted(e,t){const n=a=>Ut(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=_e(a,e,t)};Pe(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(Pe(e,n=>{var r;if(!n||!((r=e._clickOutside)!=null&&r[t.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Xt(e){const{modelValue:t,color:n,...o}=e;return V(ft,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&V("div",D({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Zt=ee({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...qt(),...Ge(),...Ke(),...wt(),...Lt(),..._t(),...Ue(),...xt()},"VOverlay"),rn=Je()({name:"VOverlay",directives:{ClickOutside:Jt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Zt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const r=Xe(e,"modelValue"),l=P({get:()=>r.value,set:g=>{g&&e.disabled||(r.value=g)}}),{themeClasses:i}=Ze(e),{rtlClasses:d,isRtl:u}=Qe(),{hasContent:m,onAfterLeave:h}=Et(e,l),C=et(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:S,localTop:f,stackStyles:c}=Yt(l,tt(e,"zIndex"),e._disableGlobalStack),{activatorEl:x,activatorRef:L,target:b,targetEl:w,targetRef:H,activatorEvents:F,contentEvents:A,scrimEvents:s}=zt(e,{isActive:l,isTop:f}),p=P(()=>{var g;return(g=x==null?void 0:x.value)==null?void 0:g.getRootNode()}),{teleportTarget:Y}=Gt(P(()=>e.attach||e.contained||p.value instanceof ShadowRoot?p.value:!1)),{dimensionStyles:te}=nt(e),O=jt(),{scopeId:E}=St();B(()=>e.disabled,g=>{g&&(l.value=!1)});const v=W(),y=W(),k=W(),{contentStyles:M,updateLocation:z}=Bt(e,{isRtl:u,contentEl:k,target:b,isActive:l});Ht(e,{root:v,contentEl:k,targetEl:w,isActive:l,updateLocation:z});function T(g){a("click:outside",g),e.persistent?U():l.value=!1}function I(g){return l.value&&S.value&&(!e.scrim||g.target===y.value)}q&&B(l,g=>{g?window.addEventListener("keydown",$):window.removeEventListener("keydown",$)},{immediate:!0}),ot(()=>{q&&window.removeEventListener("keydown",$)});function $(g){var N,me;g.key==="Escape"&&S.value&&(e.persistent?U():(l.value=!1,(N=k.value)!=null&&N.contains(document.activeElement)&&((me=x.value)==null||me.focus())))}const j=at();ce(()=>e.closeOnBack,()=>{vt(j,g=>{S.value&&l.value?(g(!1),e.persistent?U():l.value=!1):g()})});const de=W();B(()=>l.value&&(e.absolute||e.contained)&&Y.value==null,g=>{if(g){const N=Ct(v.value);N&&N!==document.scrollingElement&&(de.value=N.scrollTop)}});function U(){e.noClickAnimation||k.value&&yt(k.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:gt})}function Ie(){a("afterEnter")}function Ve(){h(),a("afterLeave")}return rt(()=>{var g;return V(ut,null,[(g=n.activator)==null?void 0:g.call(n,{isActive:l.value,targetRef:H,props:D({ref:L},F.value,e.activatorProps)}),O.value&&m.value&&V(it,{disabled:!Y.value,to:Y.value},{default:()=>[V("div",D({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},i.value,d.value,e.class],style:[c.value,{"--v-overlay-opacity":e.opacity,top:R(de.value)},e.style],ref:v},E,o),[V(Xt,D({color:C,modelValue:l.value&&!!e.scrim,ref:y},s.value),null),V(Ot,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterEnter:Ie,onAfterLeave:Ve},{default:()=>{var N;return[lt(V("div",D({ref:k,class:["v-overlay__content",e.contentClass],style:[te.value,M.value]},A.value,e.contentProps),[(N=n.default)==null?void 0:N.call(n,{isActive:l})]),[[st,l.value],[ct("click-outside"),{handler:T,closeConditional:I,include:()=>[x.value]}]])]}})])]})])}),{activatorEl:x,scrimEl:y,target:b,animateClick:U,contentEl:k,globalTop:S,localTop:f,updateLocation:z}}});export{rn as V,Dt as a,Ct as g,Zt as m};