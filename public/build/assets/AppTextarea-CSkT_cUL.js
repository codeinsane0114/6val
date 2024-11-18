import{u as le,V as oe}from"./form-jV7EneQK.js";import{a5 as re,aB as se,aL as ie,$ as x,r as g,a8 as ue,cd as ce,G as de,w as h,bl as fe,ac as ve,c8 as me,b as l,q as S,F as B,J as G,c1 as xe,dg as ge,b1 as A,c_ as he,aa as Ve,a9 as we,dd as E,o as D,c as ye,m as P,f as be,y as Ce,b9 as Fe,h as Pe,e as ke,z as Ie,bi as U,bj as O,x as pe}from"./main-BpgBUGps.js";/* empty css                   */import{V as _e}from"./VCounter-B6UOvRBl.js";import{m as Re,f as Se,V as Be}from"./VField-CsvBDBUR.js";import{m as Ae,V as j}from"./VInput-h-v4JtUG.js";import{f as ze}from"./forwardRefs-C-GTDzx5.js";import{I as Me}from"./VImg-MA4fhMLa.js";const Te=re({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Ae(),...Re()},"VTextarea"),Ne=se()({name:"VTextarea",directives:{Intersect:Me},inheritAttrs:!1,props:Te(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,V){let{attrs:f,emit:s,slots:n}=V;const o=ie(e,"modelValue"),{isFocused:u,focus:k,blur:L}=le(e),q=x(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),J=x(()=>{if(f.maxlength)return f.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function K(t,r){var a,i;!e.autofocus||!t||(i=(a=r[0].target)==null?void 0:a.focus)==null||i.call(a)}const z=g(),w=g(),M=ue(""),y=g(),Q=x(()=>e.persistentPlaceholder||u.value||e.active);function I(){var t;y.value!==document.activeElement&&((t=y.value)==null||t.focus()),u.value||k()}function W(t){I(),s("click:control",t)}function X(t){s("mousedown:control",t)}function Y(t){t.stopPropagation(),I(),A(()=>{o.value="",he(e["onClick:clear"],t)})}function Z(t){var a;const r=t.target;if(o.value=r.value,(a=e.modelModifiers)!=null&&a.trim){const i=[r.selectionStart,r.selectionEnd];A(()=>{r.selectionStart=i[0],r.selectionEnd=i[1]})}}const v=g(),b=g(+e.rows),p=x(()=>["plain","underlined"].includes(e.variant));ce(()=>{e.autoGrow||(b.value=+e.rows)});function m(){e.autoGrow&&A(()=>{if(!v.value||!w.value)return;const t=getComputedStyle(v.value),r=getComputedStyle(w.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=v.value.scrollHeight,C=parseFloat(t.lineHeight),_=Math.max(parseFloat(e.rows)*C+a,parseFloat(r.getPropertyValue("--v-input-control-height"))),R=parseFloat(e.maxRows)*C+a||1/0,d=we(i??0,_,R);b.value=Math.floor((d-a)/C),M.value=Ve(d)})}de(m),h(o,m),h(()=>e.rows,m),h(()=>e.maxRows,m),h(()=>e.density,m);let c;return h(v,t=>{t?(c=new ResizeObserver(m),c.observe(v.value)):c==null||c.disconnect()}),fe(()=>{c==null||c.disconnect()}),ve(()=>{const t=!!(n.counter||e.counter||e.counterValue),r=!!(t||n.details),[a,i]=me(f),{modelValue:C,..._}=j.filterProps(e),R=Se(e);return l(j,S({ref:z,modelValue:o.value,"onUpdate:modelValue":d=>o.value=d,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":p.value},e.class],style:e.style},a,_,{centerAffix:b.value===1&&!p.value,focused:u.value}),{...n,default:d=>{let{id:F,isDisabled:T,isDirty:N,isReadonly:ee,isValid:te}=d;return l(Be,S({ref:w,style:{"--v-textarea-control-height":M.value},onClick:W,onMousedown:X,"onClick:clear":Y,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},R,{id:F.value,active:Q.value||N.value,centerAffix:b.value===1&&!p.value,dirty:N.value||e.dirty,disabled:T.value,focused:u.value,error:te.value===!1}),{...n,default:ae=>{let{props:{class:$,...H}}=ae;return l(B,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),G(l("textarea",S({ref:y,class:$,value:o.value,onInput:Z,autofocus:e.autofocus,readonly:ee.value,disabled:T.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:I,onBlur:L},H,i),null),[[xe("intersect"),{handler:K},null,{once:!0}]]),e.autoGrow&&G(l("textarea",{class:[$,"v-textarea__sizer"],id:`${H.id}-sizer`,"onUpdate:modelValue":ne=>o.value=ne,ref:v,readonly:!0,"aria-hidden":"true"},null),[[ge,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:r?d=>{var F;return l(B,null,[(F=n.details)==null?void 0:F.call(n,d),t&&l(B,null,[l("span",null,null),l(_e,{active:e.persistentCounter||u.value,value:q.value,max:J.value,disabled:e.disabled},n.counter)])])}:void 0})}),ze({},z,w,y)}}),Le=Object.assign({name:"AppTextarea",inheritAttrs:!1},{__name:"AppTextarea",setup(e){const V=x(()=>{const s=E(),n=s.id||s.label;return n?`app-textarea-${n}-${Math.random().toString(36).slice(2,7)}`:void 0}),f=x(()=>E().label);return(s,n)=>(D(),ye("div",{class:pe(["app-textarea flex-grow-1",s.$attrs.class])},[P(f)?(D(),be(oe,{key:0,for:P(V),class:"mb-1 text-body-2",text:P(f)},null,8,["for","text"])):Ce("",!0),l(Ne,U(O({...s.$attrs,class:null,label:void 0,variant:"outlined",id:P(V)})),Fe({_:2},[Pe(s.$slots,(o,u)=>({name:u,fn:ke(k=>[Ie(s.$slots,u,U(O(k||{})))])}))]),1040)],2))}});export{Ne as V,Le as _};
