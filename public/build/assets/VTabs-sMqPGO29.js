import{a5 as k,aK as D,d3 as O,aB as P,bK as X,r as z,$ as C,ac as W,al as E,b as i,F as G,q as h,U as Y,aL as A,bV as L,az as J,b$ as Q,aD as Z,a0 as f,aN as ee,aa as ae,d4 as te}from"./main-BpgBUGps.js";import{f as oe}from"./forwardRefs-C-GTDzx5.js";import{b as se,s as le}from"./easing-CjukEv2V.js";import{m as ne,V as M,b as re,a as R}from"./VWindowItem-COAbTIN-.js";import{m as ie,V as U}from"./VSlideGroup-qhrbewnN.js";import{u as de}from"./scopeId-D5DaYZNr.js";const I=Symbol.for("vuetify:v-tabs"),ue=k({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...D(O({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ce=P()({name:"VTab",props:ue(),setup(e,l){let{slots:n,attrs:a}=l;const{textColorClasses:r,textColorStyles:v}=X(e,"sliderColor"),s=z(),u=z(),c=C(()=>e.direction==="horizontal"),x=C(()=>{var m,t;return((t=(m=s.value)==null?void 0:m.group)==null?void 0:t.isSelected.value)??!1});function $(m){var o,b;let{value:t}=m;if(t){const d=(b=(o=s.value)==null?void 0:o.$el.parentElement)==null?void 0:b.querySelector(".v-tab--selected .v-tab__slider"),B=u.value;if(!d||!B)return;const F=getComputedStyle(d).color,g=d.getBoundingClientRect(),V=B.getBoundingClientRect(),T=c.value?"x":"y",S=c.value?"X":"Y",p=c.value?"right":"bottom",w=c.value?"width":"height",N=g[T],j=V[T],y=N>j?g[p]-V[p]:g[T]-V[T],q=Math.sign(y)>0?c.value?"right":"bottom":Math.sign(y)<0?c.value?"left":"top":"center",H=(Math.abs(y)+(Math.sign(y)<0?g[w]:V[w]))/Math.max(g[w],V[w])||0,K=g[w]/V[w]||0,_=1.5;se(B,{backgroundColor:[F,"currentcolor"],transform:[`translate${S}(${y}px) scale${S}(${K})`,`translate${S}(${y/_}px) scale${S}(${(H-1)/_+1})`,"none"],transformOrigin:Array(3).fill(q)},{duration:225,easing:le})}}return W(()=>{const m=E.filterProps(e);return i(E,h({symbol:I,ref:s,class:["v-tab",e.class],style:e.style,tabindex:x.value?0:-1,role:"tab","aria-selected":String(x.value),active:!1},m,a,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":$}),{...n,default:()=>{var t;return i(G,null,[((t=n.default)==null?void 0:t.call(n))??e.text,!e.hideSlider&&i("div",{ref:u,class:["v-tab__slider",r.value],style:v.value},null)])}})}),oe({},s)}}),me=k({...D(ne(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),be=P()({name:"VTabsWindow",props:me(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:n}=l;const a=Y(I,null),r=A(e,"modelValue"),v=C({get(){var s;return r.value!=null||!a?r.value:(s=a.items.value.find(u=>a.selected.value.includes(u.id)))==null?void 0:s.value},set(s){r.value=s}});return W(()=>{const s=M.filterProps(e);return i(M,h({_as:"VTabsWindow"},s,{modelValue:v.value,"onUpdate:modelValue":u=>v.value=u,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),n)}),{}}}),ve=k({...re()},"VTabsWindowItem"),fe=P()({name:"VTabsWindowItem",props:ve(),setup(e,l){let{slots:n}=l;return W(()=>{const a=R.filterProps(e);return i(R,h({_as:"VTabsWindowItem"},a,{class:["v-tabs-window-item",e.class],style:e.style}),n)}),{}}});function ge(e){return e?e.map(l=>te(l)?l:{text:l,value:l}):[]}const Ve=k({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ie({mandatory:"force",selectedClass:"v-tab-item--selected"}),...L(),...J()},"VTabs"),ke=P()({name:"VTabs",props:Ve(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:n,slots:a}=l;const r=A(e,"modelValue"),v=C(()=>ge(e.items)),{densityClasses:s}=Q(e),{backgroundColorClasses:u,backgroundColorStyles:c}=Z(f(e,"bgColor")),{scopeId:x}=de();return ee({VTab:{color:f(e,"color"),direction:f(e,"direction"),stacked:f(e,"stacked"),fixed:f(e,"fixedTabs"),sliderColor:f(e,"sliderColor"),hideSlider:f(e,"hideSlider")}}),W(()=>{const $=U.filterProps(e),m=!!(a.window||e.items.length>0);return i(G,null,[i(U,h($,{modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,u.value,e.class],style:[{"--v-tabs-height":ae(e.height)},c.value,e.style],role:"tablist",symbol:I},x,n),{default:()=>{var t;return[((t=a.default)==null?void 0:t.call(a))??v.value.map(o=>{var b;return((b=a.tab)==null?void 0:b.call(a,{item:o}))??i(ce,h(o,{key:o.text,value:o.value}),{default:a[`tab.${o.value}`]?()=>{var d;return(d=a[`tab.${o.value}`])==null?void 0:d.call(a,{item:o})}:void 0})})]}}),m&&i(be,h({modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,key:"tabs-window"},x),{default:()=>{var t;return[v.value.map(o=>{var b;return((b=a.item)==null?void 0:b.call(a,{item:o}))??i(fe,{value:o.value},{default:()=>{var d;return(d=a[`item.${o.value}`])==null?void 0:d.call(a,{item:o})}})}),(t=a.window)==null?void 0:t.call(a)]}})])}),{}}});export{ke as V,ce as a};