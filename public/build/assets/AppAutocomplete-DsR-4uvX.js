import{a as we,V as xe}from"./form-jV7EneQK.js";import{m as _e,u as Ae,a as Fe}from"./VSelect-CvnWonW6.js";import{m as Pe,V as Q}from"./VTextField-DNnTNwAs.js";import{a5 as Ie,aK as De,aB as Re,bJ as Me,r as M,a8 as P,aL as U,$ as V,bK as Te,bS as Le,w as T,b1 as X,c7 as Be,ac as Ne,b as o,F as B,q as _,a3 as Y,dc as Ee,bN as Ke,t as Oe,dz as $e,cJ as Z,dd as ee,o as le,c as ze,m as L,f as Ue,y as je,b9 as qe,h as He,e as Je,z as We,bi as te,bj as ae,x as Ge}from"./main-BpgBUGps.js";import{m as Qe,u as Xe}from"./filter-BHKMO-vf.js";import{f as Ye}from"./forwardRefs-C-GTDzx5.js";import{u as Ze,V as el,a as ne}from"./VList-Bu48BGuL.js";import{m as ll}from"./VImg-MA4fhMLa.js";import{V as tl}from"./VMenu-D0wOrHxC.js";import{V as al}from"./VCheckboxBtn-KnKlC77n.js";import{V as nl}from"./VAvatar-B9R7oHU8.js";import{V as ul}from"./VChip-Gdsswa87.js";function ol(e,g,t){if(g==null)return e;if(Array.isArray(g))throw new Error("Multiple matches is not implemented");return typeof g=="number"&&~g?o(B,null,[o("span",{class:"v-autocomplete__unmask"},[e.substr(0,g)]),o("span",{class:"v-autocomplete__mask"},[e.substr(g,t)]),o("span",{class:"v-autocomplete__unmask"},[e.substr(g+t)])]):e}const sl=Ie({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Qe({filterKeys:["title"]}),..._e(),...De(Pe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ll({transition:!1})},"VAutocomplete"),il=Re()({name:"VAutocomplete",props:sl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,g){let{slots:t}=g;const{t:y}=Me(),m=M(),k=P(!1),b=P(!0),A=P(!1),j=M(),q=M(),N=U(e,"menu"),c=V({get:()=>N.value,set:l=>{var a;N.value&&!l&&((a=j.value)!=null&&a.ΨopenChildren)||(N.value=l)}}),r=P(-1),ue=V(()=>{var l;return(l=m.value)==null?void 0:l.color}),H=V(()=>c.value?e.closeText:e.openText),{items:J,transformIn:oe,transformOut:se}=Ze(e),{textColorClasses:ie,textColorStyles:re}=Te(ue),v=U(e,"search",""),u=U(e,"modelValue",[],l=>oe(l===null?[null]:Le(l)),l=>{const a=se(l);return e.multiple?a:a[0]??null}),ce=V(()=>typeof e.counterValue=="function"?e.counterValue(u.value):typeof e.counterValue=="number"?e.counterValue:u.value.length),x=we(),{filteredItems:E,getMatches:ve}=Xe(e,J,()=>b.value?"":v.value),S=V(()=>e.hideSelected?E.value.filter(l=>!u.value.some(a=>a.value===l.value)):E.value),I=V(()=>!!(e.chips||t.chip)),F=V(()=>I.value||!!t.selection),de=V(()=>u.value.map(l=>l.props.value)),K=V(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((a=S.value[0])==null?void 0:a.title))&&S.value.length>0&&!b.value&&!A.value}),O=V(()=>e.hideNoData&&!S.value.length||e.readonly||(x==null?void 0:x.isReadonly.value)),$=M(),{onListScroll:fe,onListKeydown:me}=Ae($,m);function pe(l){e.openOnClear&&(c.value=!0),v.value=""}function he(){O.value||(c.value=!0)}function ge(l){O.value||(k.value&&(l.preventDefault(),l.stopPropagation()),c.value=!c.value)}function Ve(l){var n,s,p;if(e.readonly||x!=null&&x.isReadonly.value)return;const a=m.value.selectionStart,i=u.value.length;if((r.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(c.value=!0),["Escape"].includes(l.key)&&(c.value=!1),K.value&&["Enter","Tab"].includes(l.key)&&!u.value.some(d=>{let{value:f}=d;return f===S.value[0].value})&&C(S.value[0]),l.key==="ArrowDown"&&K.value&&((n=$.value)==null||n.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&F.value&&u.value.length>0&&!v.value)return C(u.value[0],!1);if(~r.value){const d=r.value;C(u.value[r.value],!1),r.value=d>=i-1?i-2:d}else l.key==="Backspace"&&!v.value&&(r.value=i-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(r.value<0&&a>0)return;const d=r.value>-1?r.value-1:i-1;u.value[d]?r.value=d:(r.value=-1,m.value.setSelectionRange((s=v.value)==null?void 0:s.length,(p=v.value)==null?void 0:p.length))}if(l.key==="ArrowRight"){if(r.value<0)return;const d=r.value+1;u.value[d]?r.value=d:(r.value=-1,m.value.setSelectionRange(0,0))}}}function ye(l){if(Z(m.value,":autofill")||Z(m.value,":-webkit-autofill")){const a=J.value.find(i=>i.title===l.target.value);a&&C(a)}}function be(){var l;k.value&&(b.value=!0,(l=m.value)==null||l.focus())}function ke(l){k.value=!0,setTimeout(()=>{A.value=!0})}function Se(l){A.value=!1}function Ce(l){(l==null||l===""&&!e.multiple&&!F.value)&&(u.value=[])}const z=P(!1);function C(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const i=u.value.findIndex(s=>e.valueComparator(s.value,l.value)),n=a??!~i;if(~i){const s=n?[...u.value,l]:[...u.value];s.splice(i,1),u.value=s}else n&&(u.value=[...u.value,l]);e.clearOnSelect&&(v.value="")}else{const i=a!==!1;u.value=i?[l]:[],v.value=i&&!F.value?l.title:"",X(()=>{c.value=!1,b.value=!0})}}return T(k,(l,a)=>{var i;l!==a&&(l?(z.value=!0,v.value=e.multiple||F.value?"":String(((i=u.value.at(-1))==null?void 0:i.props.title)??""),b.value=!0,X(()=>z.value=!1)):(!e.multiple&&v.value==null&&(u.value=[]),c.value=!1,u.value.some(n=>{let{title:s}=n;return s===v.value})||(v.value=""),r.value=-1))}),T(v,l=>{!k.value||z.value||(l&&(c.value=!0),b.value=!l)}),T(c,()=>{if(!e.hideSelected&&c.value&&u.value.length){const l=S.value.findIndex(a=>u.value.some(i=>a.value===i.value));Be&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=q.value)==null||a.scrollToIndex(l))})}}),T(()=>e.items,(l,a)=>{c.value||k.value&&!a.length&&l.length&&(c.value=!0)}),Ne(()=>{const l=!!(!e.hideNoData||S.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),a=u.value.length>0,i=Q.filterProps(e);return o(Q,_({ref:m},i,{modelValue:v.value,"onUpdate:modelValue":[n=>v.value=n,Ce],focused:k.value,"onUpdate:focused":n=>k.value=n,validationValue:u.externalValue,counterValue:ce.value,dirty:a,onChange:ye,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":c.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!F.value,"v-autocomplete--selecting-index":r.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:a?void 0:e.placeholder,"onClick:clear":pe,"onMousedown:control":he,onKeydown:Ve}),{...t,default:()=>o(B,null,[o(tl,_({ref:j,modelValue:c.value,"onUpdate:modelValue":n=>c.value=n,activator:"parent",contentClass:"v-autocomplete__content",disabled:O.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:be},e.menuProps),{default:()=>[l&&o(el,_({ref:$,selected:de.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),onKeydown:me,onFocusin:ke,onFocusout:Se,onScrollPassive:fe,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var n,s,p;return[(n=t["prepend-item"])==null?void 0:n.call(t),!S.value.length&&!e.hideNoData&&(((s=t["no-data"])==null?void 0:s.call(t))??o(ne,{title:y(e.noDataText)},null)),o(Fe,{ref:q,renderless:!0,items:S.value},{default:d=>{var G;let{item:f,index:w,itemRef:h}=d;const W=_(f.props,{ref:h,key:w,active:K.value&&w===0?!0:void 0,onClick:()=>C(f,null)});return((G=t.item)==null?void 0:G.call(t,{item:f,index:w,props:W}))??o(ne,_(W,{role:"option"}),{prepend:D=>{let{isSelected:R}=D;return o(B,null,[e.multiple&&!e.hideSelected?o(al,{key:f.value,modelValue:R,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependAvatar&&o(nl,{image:f.props.prependAvatar},null),f.props.prependIcon&&o(Y,{icon:f.props.prependIcon},null)])},title:()=>{var D,R;return b.value?f.title:ol(f.title,(D=ve(f))==null?void 0:D.title,((R=v.value)==null?void 0:R.length)??0)}})}}),(p=t["append-item"])==null?void 0:p.call(t)]}})]}),u.value.map((n,s)=>{function p(h){h.stopPropagation(),h.preventDefault(),C(n,!1)}const d={"onClick:close":p,onKeydown(h){h.key!=="Enter"&&h.key!==" "||(h.preventDefault(),h.stopPropagation(),p(h))},onMousedown(h){h.preventDefault(),h.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=I.value?!!t.chip:!!t.selection,w=f?Ee(I.value?t.chip({item:n,index:s,props:d}):t.selection({item:n,index:s})):void 0;if(!(f&&!w))return o("div",{key:n.value,class:["v-autocomplete__selection",s===r.value&&["v-autocomplete__selection--selected",ie.value]],style:s===r.value?re.value:{}},[I.value?t.chip?o(Ke,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>[w]}):o(ul,_({key:"chip",closable:e.closableChips,size:"small",text:n.title,disabled:n.props.disabled},d),null):w??o("span",{class:"v-autocomplete__selection-text"},[n.title,e.multiple&&s<u.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[Oe(",")])])])})]),"append-inner":function(){var d;for(var n=arguments.length,s=new Array(n),p=0;p<n;p++)s[p]=arguments[p];return o(B,null,[(d=t["append-inner"])==null?void 0:d.call(t,...s),e.menuIcon?o(Y,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:ge,onClick:$e,"aria-label":y(H.value),title:y(H.value),tabindex:"-1"},null):void 0])}})}),Ye({isFocused:k,isPristine:b,menu:c,search:v,filteredItems:E,select:C},m)}}),kl=Object.assign({name:"AppAutocomplete",inheritAttrs:!1},{__name:"AppAutocomplete",setup(e){const g=V(()=>{const y=ee(),m=y.id||y.label;return m?`app-autocomplete-${m}-${Math.random().toString(36).slice(2,7)}`:void 0}),t=V(()=>ee().label);return(y,m)=>(le(),ze("div",{class:Ge(["app-autocomplete flex-grow-1",y.$attrs.class])},[L(t)?(le(),Ue(xe,{key:0,for:L(g),class:"mb-1 text-body-2",style:{"line-height":"15px"},text:L(t)},null,8,["for","text"])):je("",!0),o(il,te(ae({...y.$attrs,class:null,label:void 0,id:L(g),variant:"outlined",menuProps:{contentClass:["app-inner-list","app-autocomplete__content","v-autocomplete__content"]}})),qe({_:2},[He(y.$slots,(k,b)=>({name:b,fn:Je(A=>[We(y.$slots,b,te(ae(A||{})))])}))]),1040)],2))}});export{il as V,kl as _};