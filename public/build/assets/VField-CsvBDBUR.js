import{a5 as D,a6 as E,aB as T,ac as K,b as l,bI as F,bU as V,cP as Z,ay as ee,aA as le,aC as ae,c6 as ne,aJ as te,aM as ie,$ as c,bM as oe,r as B,aD as se,a0 as re,bK as de,w as ce,cz as ue,c$ as ve,aa as fe,ca as ye,cy as be,J as ge,K as me,bN as Ce,F as ke,q as he}from"./main-BpgBUGps.js";import{V as Ie,m as _e,u as Pe,b as Fe}from"./form-jV7EneQK.js";import{n as Ve,b as Be,s as pe}from"./easing-CjukEv2V.js";const xe=D({floating:Boolean,...E()},"VFieldLabel"),_=T()({name:"VFieldLabel",props:xe(),setup(e,u){let{slots:o}=u;return K(()=>l(Ie,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},o)),{}}}),we=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Le=D({appendInnerIcon:F,bgColor:String,clearable:Boolean,clearIcon:{type:F,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:F,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>we.includes(e)},"onClick:clear":V(),"onClick:appendInner":V(),"onClick:prependInner":V(),...E(),...Z(),...ee(),...le()},"VField"),Se=T()({name:"VField",inheritAttrs:!1,props:{id:String,..._e(),...Le()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:o,emit:$e,slots:a}=u;const{themeClasses:M}=ae(e),{loaderClasses:O}=ne(e),{focusClasses:U,isFocused:p,focus:y,blur:b}=Pe(e),{InputIcon:P}=Fe(e),{roundedClasses:q}=te(e),{rtlClasses:J}=ie(),g=c(()=>e.dirty||e.active),m=c(()=>!e.singleLine&&!!(e.label||a.label)),N=oe(),s=c(()=>e.id||`input-${N}`),W=c(()=>`${s.value}-messages`),x=B(),C=B(),w=B(),L=c(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:j,backgroundColorStyles:z}=se(re(e,"bgColor")),{textColorClasses:S,textColorStyles:$}=de(c(()=>e.error||e.disabled?void 0:g.value&&p.value?e.color:e.baseColor));ce(g,n=>{if(m.value){const t=x.value.$el,r=C.value.$el;requestAnimationFrame(()=>{const d=Ve(t),i=r.getBoundingClientRect(),k=i.x-d.x,h=i.y-d.y-(d.height/2-i.height/2),f=i.width/.75,I=Math.abs(f-d.width)>1?{maxWidth:fe(f)}:void 0,G=getComputedStyle(t),A=getComputedStyle(r),H=parseFloat(G.transitionDuration)*1e3||150,Q=parseFloat(A.getPropertyValue("--v-field-label-scale")),Y=A.getPropertyValue("color");t.style.visibility="visible",r.style.visibility="hidden",Be(t,{transform:`translate(${k}px, ${h}px) scale(${Q})`,color:Y,...I},{duration:H,easing:pe,direction:n?"normal":"reverse"}).finished.then(()=>{t.style.removeProperty("visibility"),r.style.removeProperty("visibility")})})}},{flush:"post"});const v=c(()=>({isActive:g,isFocused:p,controlRef:w,blur:b,focus:y}));function X(n){n.target!==document.activeElement&&n.preventDefault()}function R(n){var t;n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),n.stopPropagation(),(t=e["onClick:clear"])==null||t.call(e,new MouseEvent("click")))}return K(()=>{var k,h,f;const n=e.variant==="outlined",t=!!(a["prepend-inner"]||e.prependInnerIcon),r=!!(e.clearable||a.clear),d=!!(a["append-inner"]||e.appendInnerIcon||r),i=()=>a.label?a.label({...v.value,label:e.label,props:{for:s.value}}):e.label;return l("div",he({class:["v-field",{"v-field--active":g.value,"v-field--appended":d,"v-field--center-affix":e.centerAffix??!L.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":t,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!i(),[`v-field--variant-${e.variant}`]:!0},M.value,j.value,U.value,O.value,q.value,J.value,e.class],style:[z.value,e.style],onClick:X},o),[l("div",{class:"v-field__overlay"},null),l(ye,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),t&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(P,{key:"prepend-icon",name:"prependInner"},null),(k=a["prepend-inner"])==null?void 0:k.call(a,v.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&m.value&&l(_,{key:"floating-label",ref:C,class:[S.value],floating:!0,for:s.value,style:$.value},{default:()=>[i()]}),l(_,{ref:x,for:s.value},{default:()=>[i()]}),(h=a.default)==null?void 0:h.call(a,{...v.value,props:{id:s.value,class:"v-field__input","aria-describedby":W.value},focus:y,blur:b})]),r&&l(be,{key:"clear"},{default:()=>[ge(l("div",{class:"v-field__clearable",onMousedown:I=>{I.preventDefault(),I.stopPropagation()}},[l(Ce,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[a.clear?a.clear({...v.value,props:{onKeydown:R,onFocus:y,onBlur:b,onClick:e["onClick:clear"]}}):l(P,{name:"clear",onKeydown:R,onFocus:y,onBlur:b},null)]})]),[[me,e.dirty]])]}),d&&l("div",{key:"append",class:"v-field__append-inner"},[(f=a["append-inner"])==null?void 0:f.call(a,v.value),e.appendInnerIcon&&l(P,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",S.value],style:$.value},[n&&l(ke,null,[l("div",{class:"v-field__outline__start"},null),m.value&&l("div",{class:"v-field__outline__notch"},[l(_,{ref:C,floating:!0,for:s.value},{default:()=>[i()]})]),l("div",{class:"v-field__outline__end"},null)]),L.value&&m.value&&l(_,{ref:C,floating:!0,for:s.value},{default:()=>[i()]})])])}),{controlRef:w}}});function Ee(e){const u=Object.keys(Se.props).filter(o=>!ue(o)&&o!=="class"&&o!=="style");return ve(e,u)}export{Se as V,Ee as f,Le as m};
