import{m as X,u as ee,a as le,V as ae,b as Y,g as q}from"./VSliderTrack-CO3WkNiC.js";import{m as te,V as E}from"./VInput-h-v4JtUG.js";import{m as se,u as oe,V as ue}from"./form-jV7EneQK.js";import{a5 as ne,aB as re,r as _,aM as ie,aL as de,$ as Z,ac as ce,b as a,F as me,q as pe,o as g,f as S,m as x,aZ as $,e as d,a3 as ve,d as c,t as v}from"./main-BpgBUGps.js";import{_ as be}from"./AppCardCode-vSvswVsM.js";import{V as Ve,a as R}from"./VRow-DcLldsAi.js";import"./VImg-MA4fhMLa.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VCard-DPA8ST1d.js";import"./VAvatar-B9R7oHU8.js";import"./VCardText-RhVa6W5U.js";import"./VDivider-CPy3CxIk.js";/* empty css              */const fe=ne({...se(),...te(),...X(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),k=re()({name:"VRangeSlider",props:fe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:u,emit:o}=s;const l=_(),i=_(),h=_(),{rtlClasses:U}=ie();function M(m){if(!l.value||!i.value)return;const p=q(m,l.value.$el,e.direction),r=q(m,i.value.$el,e.direction),n=Math.abs(p),b=Math.abs(r);return n<b||n===b&&p<0?l.value.$el:i.value.$el}const C=ee(e),t=de(e,"modelValue",void 0,m=>m!=null&&m.length?m.map(p=>C.roundValue(p)):[0,0]),{activeThumbRef:V,hasLabels:G,max:I,min:j,mousePressed:H,onSliderMousedown:J,onSliderTouchstart:K,position:L,trackContainerRef:Q,readonly:z}=le({props:e,steps:C,onSliderStart:()=>{o("start",t.value)},onSliderEnd:m=>{var n;let{value:p}=m;const r=V.value===((n=l.value)==null?void 0:n.$el)?[p,t.value[1]]:[t.value[0],p];!e.strict&&r[0]<r[1]&&(t.value=r),o("end",t.value)},onSliderMove:m=>{var b,y,w,f;let{value:p}=m;const[r,n]=t.value;!e.strict&&r===n&&r!==j.value&&(V.value=p>r?(b=i.value)==null?void 0:b.$el:(y=l.value)==null?void 0:y.$el,(w=V.value)==null||w.focus()),V.value===((f=l.value)==null?void 0:f.$el)?t.value=[Math.min(p,n),n]:t.value=[r,Math.max(r,p)]},getActiveThumb:M}),{isFocused:P,focus:A,blur:N}=oe(e),O=Z(()=>L(t.value[0])),W=Z(()=>L(t.value[1]));return ce(()=>{const m=E.filterProps(e),p=!!(e.label||u.label||u.prepend);return a(E,pe({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||G.value,"v-slider--focused":P.value,"v-slider--pressed":H.value,"v-slider--disabled":e.disabled},U.value,e.class],style:e.style,ref:h},m,{focused:P.value}),{...u,prepend:p?r=>{var n,b;return a(me,null,[((n=u.label)==null?void 0:n.call(u,r))??(e.label?a(ue,{class:"v-slider__label",text:e.label},null):void 0),(b=u.prepend)==null?void 0:b.call(u,r)])}:void 0,default:r=>{var y,w;let{id:n,messagesId:b}=r;return a("div",{class:"v-slider__container",onMousedown:z.value?void 0:J,onTouchstartPassive:z.value?void 0:K},[a("input",{id:`${n.value}_start`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${n.value}_stop`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[1]},null),a(ae,{ref:Q,start:O.value,stop:W.value},{"tick-label":u["tick-label"]}),a(Y,{ref:l,"aria-describedby":b.value,focused:P&&V.value===((y=l.value)==null?void 0:y.$el),modelValue:t.value[0],"onUpdate:modelValue":f=>t.value=[f,t.value[1]],onFocus:f=>{var D,T,F,B;A(),V.value=(D=l.value)==null?void 0:D.$el,t.value[0]===t.value[1]&&t.value[1]===j.value&&f.relatedTarget!==((T=i.value)==null?void 0:T.$el)&&((F=l.value)==null||F.$el.blur(),(B=i.value)==null||B.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:j.value,max:t.value[1],position:O.value,ripple:e.ripple},{"thumb-label":u["thumb-label"]}),a(Y,{ref:i,"aria-describedby":b.value,focused:P&&V.value===((w=i.value)==null?void 0:w.$el),modelValue:t.value[1],"onUpdate:modelValue":f=>t.value=[t.value[0],f],onFocus:f=>{var D,T,F,B;A(),V.value=(D=i.value)==null?void 0:D.$el,t.value[0]===t.value[1]&&t.value[0]===I.value&&f.relatedTarget!==((T=l.value)==null?void 0:T.$el)&&((F=i.value)==null||F.$el.blur(),(B=l.value)==null||B.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:t.value[0],max:I.value,position:W.value,ripple:e.ripple},{"thumb-label":u["thumb-label"]})])}})}),{}}}),_e={__name:"DemoRangeSliderVertical",setup(e){const s=_([20,40]);return(u,o)=>(g(),S(k,{modelValue:x(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}},he={__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],u=["bx-cloud-snow","bx-leaf","bx-bxs-hot","bx-droplet"],o=_([1,2]);return(l,i)=>(g(),S(k,{modelValue:x(o),"onUpdate:modelValue":i[0]||(i[0]=h=>$(o)?o.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":d(({modelValue:h})=>[a(ve,{icon:u[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}},ge={__name:"DemoRangeSliderStep",setup(e){const s=_([20,40]);return(u,o)=>(g(),S(k,{modelValue:x(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}},Se={__name:"DemoRangeSliderColor",setup(e){const s=_([10,60]);return(u,o)=>(g(),S(k,{modelValue:x(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),color:"success"},null,8,["modelValue"]))}},Re={__name:"DemoRangeSliderDisabled",setup(e){const s=_([30,60]);return(u,o)=>(g(),S(k,{modelValue:x(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},xe={__name:"DemoRangeSliderBasic",setup(e){const s=_([10,60]);return(u,o)=>(g(),S(k,{modelValue:x(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null)},null,8,["modelValue"]))}},$e={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},ke={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`},ye={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},we={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['bx-cloud-snow', 'bx-leaf', 'bx-bxs-hot', 'bx-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'bx-cloud-snow',
  'bx-leaf',
  'bx-bxs-hot',
  'bx-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Te={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Fe=c("p",null,[v("The "),c("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1),Be=c("p",null,[v("You cannot interact with "),c("code",null,"disabled"),v(" sliders.")],-1),Ce=c("p",null,[v("Use "),c("code",null,"color"),v(" prop to the sets the slider color. "),c("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1),Pe=c("p",null,[c("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Ue=c("p",null,[v(" Using the "),c("code",null,"tick-labels"),v(" prop along with the "),c("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1),Me=c("p",null,[v("You can use the "),c("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),He={__name:"range-slider",setup(e){return(s,u)=>{const o=xe,l=be,i=Re,h=Se,U=ge,M=he,C=_e;return g(),S(Ve,null,{default:d(()=>[a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Basic",code:$e},{default:d(()=>[Fe,a(o)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Disabled",code:ye},{default:d(()=>[Be,a(i)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Color",code:ke},{default:d(()=>[Ce,a(h)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Step",code:we},{default:d(()=>[Pe,a(U)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Thumb label",code:De},{default:d(()=>[Ue,a(M)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Vertical",code:Te},{default:d(()=>[Me,a(C)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{He as default};
