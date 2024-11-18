import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as p,V as v}from"./VRow-DcLldsAi.js";import{V as k}from"./form-jV7EneQK.js";import{V as y}from"./VCheckbox-DLyduI3k.js";import{o as i,f as u,e as n,c as _,F as R,h as w,q as f,b as c,x as W,d,z as $,t as D,v as b,y as x,r as g,m as h,aZ as C,a3 as V}from"./main-BpgBUGps.js";import{_ as j}from"./CustomRadiosWithImage-B1lRb5-G.js";import{_ as B}from"./CustomRadiosWithIcon-DkGM1zg8.js";import{V as U}from"./VSpacer-BwkbVUnR.js";import{_ as G}from"./AppCardCode-vSvswVsM.js";import{_ as F}from"./CustomRadios-CwFztzc9.js";/* empty css              */import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";import"./VInput-h-v4JtUG.js";import"./VImg-MA4fhMLa.js";import"./VRadioGroup-Dii_hqxm.js";import"./VAvatar-B9R7oHU8.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VCard-DPA8ST1d.js";import"./VCardText-RhVa6W5U.js";import"./VDivider-CPy3CxIk.js";const q=["src"],E={__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(r,{emit:a}){const e=r,m=a,o=t=>{typeof t!="boolean"&&t!==null&&m("update:selectedCheckbox",t)};return(t,l)=>e.checkboxContent&&e.selectedCheckbox?(i(),u(v,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(i(!0),_(R,null,w(e.checkboxContent,s=>(i(),u(p,f({key:s.value,ref_for:!0},r.gridColumn),{default:n(()=>[c(k,{class:W(["custom-input custom-checkbox rounded cursor-pointer w-100",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[d("div",null,[c(y,{id:`custom-checkbox-with-img-${s.value}`,"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["id","model-value","value"])]),d("img",{src:s.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,q)]),_:2},1032,["class"]),s.label||t.$slots.label?(i(),u(k,{key:0,for:`custom-checkbox-with-img-${s.value}`,class:"cursor-pointer"},{default:n(()=>[$(t.$slots,"label",{label:s.label},()=>[D(b(s.label),1)],!0)]),_:2},1032,["for"])):x("",!0)]),_:2},1040))),128))]),_:3})):x("",!0)}},A=I(E,[["__scopeId","data-v-6d5a10d4"]]),P="/build/assets/custom-checkbox-img-1-CN62rwL8.png",N="/build/assets/custom-checkbox-img-2-CESZ7JlS.png",T="/build/assets/custom-checkbox-img-3-CFGEoD3K.png",L={__name:"DemoCustomInputCustomCheckboxesWithImage",setup(r){const a=[{bgImage:P,value:"basic"},{bgImage:N,value:"premium"},{bgImage:T,value:"enterprise"}],e=g(["basic"]);return(m,o)=>{const t=A;return i(),u(t,{"selected-checkbox":h(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=l=>C(e)?e.value=l:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}},J="/build/assets/custom-radio-img-1-YrBKH0Sm.png",O="/build/assets/custom-radio-img-2-Ph1YXgv1.png",K="/build/assets/custom-radio-img-3-Bg8gANbN.png",Y={__name:"DemoCustomInputCustomRadiosWithImage",setup(r){const a=[{bgImage:J,value:"basic"},{bgImage:O,value:"premium"},{bgImage:K,value:"enterprise"}],e=g("basic");return(m,o)=>{const t=j;return i(),u(t,{"selected-radio":h(e),"onUpdate:selectedRadio":o[0]||(o[0]=l=>C(e)?e.value=l:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}},Z={class:"d-flex flex-column align-center text-center gap-2"},H={class:"cr-title text-base"},X={class:"text-sm clamp-text mb-0"},M={__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(r,{emit:a}){const e=r,m=a,o=t=>{typeof t!="boolean"&&t!==null&&m("update:selectedCheckbox",t)};return(t,l)=>e.checkboxContent&&e.selectedCheckbox?(i(),u(v,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(i(!0),_(R,null,w(e.checkboxContent,s=>(i(),u(p,f({key:s.title,ref_for:!0},r.gridColumn),{default:n(()=>[c(k,{class:W(["custom-input custom-checkbox-icon rounded cursor-pointer",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[$(t.$slots,"default",{item:s},()=>[d("div",Z,[c(V,f({ref_for:!0},s.icon,{class:"text-high-emphasis"}),null,16),d("h6",H,b(s.title),1),d("p",X,b(s.desc),1)])],!0),d("div",null,[c(y,{"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["model-value","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):x("",!0)}},Q=I(M,[["__scopeId","data-v-69e92a1d"]]),ee={__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(r){const a=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:{icon:"bx-server",size:"28"}},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:{icon:"bx-block",size:"28"}},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:{icon:"bx-lock",size:"28"}}],e=g(["backup"]);return(m,o)=>{const t=Q;return i(),u(t,{"selected-checkbox":h(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=l=>C(e)?e.value=l:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}},te={__name:"DemoCustomInputCustomRadiosWithIcon",setup(r){const a=[{title:"Starter",desc:"For freelancers who work with multiple clients",value:"starter",icon:{icon:"bx-rocket",size:"28"}},{title:"Personal",desc:"Join our talented community of talented digital agencies",value:"personal",icon:{icon:"bx-star",size:"28"}},{title:"Enterprise",desc:"Team plan for free upto 15 seats",value:"enterprise",icon:{icon:"bx-crown",size:"28"}}],e=g("starter");return(m,o)=>{const t=B;return i(),u(t,{"selected-radio":h(e),"onUpdate:selectedRadio":o[0]||(o[0]=l=>C(e)?e.value=l:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}},oe={class:"flex-grow-1"},se={class:"d-flex align-center mb-2"},ce={class:"cr-title text-base"},ne={key:0,class:"text-disabled text-body-2"},ae={class:"text-sm mb-0"},ie={__name:"CustomCheckboxes",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(r,{emit:a}){const e=r,m=a,o=t=>{typeof t!="boolean"&&t!==null&&m("update:selectedCheckbox",t)};return(t,l)=>e.checkboxContent&&e.selectedCheckbox?(i(),u(v,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(i(!0),_(R,null,w(e.checkboxContent,s=>(i(),u(p,f({key:s.title,ref_for:!0},r.gridColumn),{default:n(()=>[c(k,{class:W(["custom-input custom-checkbox rounded cursor-pointer",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[d("div",null,[c(y,{"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["model-value","value"])]),$(t.$slots,"default",{item:s},()=>[d("div",oe,[d("div",se,[d("h6",ce,b(s.title),1),c(U),s.subtitle?(i(),_("span",ne,b(s.subtitle),1)):x("",!0)]),d("p",ae,b(s.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):x("",!0)}},le=I(ie,[["__scopeId","data-v-9e4223c1"]]),re={__name:"DemoCustomInputCustomCheckboxes",setup(r){const a=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],e=g(["discount"]);return(m,o)=>{const t=le;return i(),u(t,{"selected-checkbox":h(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=l=>C(e)?e.value=l:null),"checkbox-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}},ue={__name:"DemoCustomInputCustomRadios",setup(r){const a=[{title:"Basic",subtitle:"Free",desc:"Get 1 project with 1 team member.",value:"basic"},{title:"Premium",subtitle:"$45.80",value:"premium",desc:"Get 5 projects with 5 team members."}],e=g("basic");return(m,o)=>{const t=F;return i(),u(t,{"selected-radio":h(e),"onUpdate:selectedRadio":o[0]||(o[0]=l=>C(e)?e.value=l:null),"radio-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}},me={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},de={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: { icon: 'bx-server', size: '28' },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: { icon: 'bx-block', size: '28' },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: { icon: 'bx-lock', size: '28' },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: {
      icon: 'bx-server',
      size: '28',
    },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: {
      icon: 'bx-block',
      size: '28',
    },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: {
      icon: 'bx-lock',
      size: '28',
    },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},pe={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},be={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},ge={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: { icon: 'bx-rocket', size: '28' },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: { icon: 'bx-star', size: '28' },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: { icon: 'bx-crown', size: '28' },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: {
      icon: 'bx-rocket',
      size: '28',
    },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: {
      icon: 'bx-star',
      size: '28',
    },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: {
      icon: 'bx-crown',
      size: '28',
    },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},he={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},qe={__name:"custom-input",setup(r){return(a,e)=>{const m=ue,o=G,t=re,l=te,s=ee,z=Y,S=L;return i(),u(v,null,{default:n(()=>[c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios",code:be},{default:n(()=>[c(m)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes",code:me},{default:n(()=>[c(t)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios With Icon",code:ge},{default:n(()=>[c(l)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes With Icon",code:de},{default:n(()=>[c(s)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios With Image",code:he},{default:n(()=>[c(z)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes With Image",code:pe},{default:n(()=>[c(S)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{qe as default};
