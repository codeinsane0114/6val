import{a5 as h,bI as G,ar as O,a6 as U,bV as H,aA as K,aB as R,aL as _,bM as $,$ as o,O as Y,ce as z,aN as Q,a0 as u,ac as L,b as v,bY as W,a8 as w,r as X,c8 as Z,q as T,J as p,c1 as ee,F as le,a3 as ae,U as te,b$ as ne,bS as I,bK as oe,aD as ue,cJ as ie,b1 as re}from"./main-BpgBUGps.js";import{V as ce}from"./form-jV7EneQK.js";const M=Symbol.for("vuetify:selection-control-group"),N=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:G,trueIcon:G,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:O},...U(),...H(),...K()},"SelectionControlGroup"),se=h({...N({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),be=R()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:f}=i;const l=_(e,"modelValue"),t=$(),y=o(()=>e.id||`v-selection-control-group-${t}`),c=o(()=>e.name||y.value),a=new Set;return Y(M,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),z(()=>{a.delete(n)})}}),Q({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),L(()=>{var n;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=f.default)==null?void 0:n.call(f)])}),{}}}),de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...U(),...N()},"VSelectionControl");function ve(e){const i=te(M,void 0),{densityClasses:f}=ne(e),l=_(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),y=o(()=>e.falseValue!==void 0?e.falseValue:!1),c=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const m=i?i.modelValue.value:l.value;return c.value?I(m).some(r=>e.valueComparator(r,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const r=m?t.value:y.value;let b=r;c.value&&(b=m?[...I(l.value),r]:I(l.value).filter(s=>!e.valueComparator(s,t.value))),i?i.modelValue.value=b:l.value=b}}),{textColorClasses:n,textColorStyles:C}=oe(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:S}=ue(o(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),k=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:f,trueValue:t,falseValue:y,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,icon:k}}const ye=R()({name:"VSelectionControl",directives:{Ripple:W},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:f,slots:l}=i;const{group:t,densityClasses:y,icon:c,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,trueValue:k}=ve(e),m=$(),r=w(!1),b=w(!1),s=X(),g=o(()=>e.id||`input-${m}`),A=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{s.value&&(s.value.checked=a.value)});function B(d){A.value&&(r.value=!0,ie(d.target,":focus-visible")!==!1&&(b.value=!0))}function F(){r.value=!1,b.value=!1}function j(d){d.stopPropagation()}function q(d){if(!A.value){s.value&&(s.value.checked=a.value);return}e.readonly&&t&&re(()=>t.forceUpdate()),a.value=d.target.checked}return L(()=>{var P,D;const d=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[E,J]=Z(f),x=v("input",T({ref:s,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:F,onFocus:B,onInput:q,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},J),null);return v("div",T({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":b.value,"v-selection-control--inline":e.inline},y.value,e.class]},E,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",n.value],style:C.value},[(P=l.default)==null?void 0:P.call(l,{backgroundColorClasses:V,backgroundColorStyles:S}),p(v("div",{class:["v-selection-control__input"]},[((D=l.input)==null?void 0:D.call(l,{model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,inputNode:x,icon:c.value,props:{onFocus:B,onBlur:F,id:g.value}}))??v(le,null,[c.value&&v(ae,{key:"icon",icon:c.value},null),x])]),[[ee("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),d&&v(ce,{for:g.value,onClick:j},{default:()=>[d]})])}),{isFocused:r,input:s}}});export{ye as V,N as a,be as b,de as m};