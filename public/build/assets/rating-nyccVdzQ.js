import{r as f,o as r,f as g,e as n,b as e,a3 as w,q as S,m as c,aZ as u,c as h,d as l,v as U,F as R,h as j,t as s}from"./main-BpgBUGps.js";import{V as i}from"./VRating-fP_A_DPb.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as k}from"./VSlider-DS-bwj6B.js";import{_ as F}from"./AppCardCode-vSvswVsM.js";import{V as I,a as p}from"./VRow-DcLldsAi.js";import"./VSliderTrack-CO3WkNiC.js";import"./VInput-h-v4JtUG.js";import"./form-jV7EneQK.js";import"./VImg-MA4fhMLa.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VCard-DPA8ST1d.js";import"./VAvatar-B9R7oHU8.js";import"./VCardText-RhVa6W5U.js";import"./VDivider-CPy3CxIk.js";/* empty css              */const B={__name:"DemoRatingItemSlot",setup(m){const t=f(4.5);return(d,a)=>(r(),g(i,{modelValue:c(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null)},{item:n(o=>[e(w,S(o,{size:25,color:o.isFilled?"success":"secondary",class:"me-3",icon:o.isFilled?"bx-smile":"bx-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}},T={__name:"DemoRatingIncremented",setup(m){const t=f(4.5);return(d,a)=>(r(),g(i,{modelValue:c(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null),"half-increments":"",hover:""},null,8,["modelValue"]))}},L={};function M(m,t){return r(),g(i,{hover:""})}const N=v(L,[["render",M]]),H={};function P(m,t){return r(),g(i,{readonly:"","model-value":4})}const q=v(H,[["render",P]]),A={};function E(m,t){return r(),g(i,{clearable:""})}const Z=v(A,[["render",E]]),G=l("div",{class:"text-caption"}," Custom length ",-1),J={class:"font-weight-medium mb-0"},K={__name:"DemoRatingLength",setup(m){const t=f(5),d=f(2);return(a,o)=>(r(),h(R,null,[G,e(k,{modelValue:c(t),"onUpdate:modelValue":o[0]||(o[0]=_=>u(t)?t.value=_:null),min:1,max:7},null,8,["modelValue"]),e(i,{modelValue:c(d),"onUpdate:modelValue":o[1]||(o[1]=_=>u(d)?d.value=_:null),length:c(t)},null,8,["modelValue","length"]),l("p",J," Model: "+U(c(d)),1)],64))}},O={class:"d-flex flex-column"},Q={__name:"DemoRatingSize",setup(m){const t=f(4);return(d,a)=>(r(),h("div",O,[e(i,{modelValue:c(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null),size:"small"},null,8,["modelValue"]),e(i,{modelValue:c(t),"onUpdate:modelValue":a[1]||(a[1]=o=>u(t)?t.value=o:null)},null,8,["modelValue"]),e(i,{modelValue:c(t),"onUpdate:modelValue":a[2]||(a[2]=o=>u(t)?t.value=o:null),size:"large"},null,8,["modelValue"]),e(i,{modelValue:c(t),"onUpdate:modelValue":a[3]||(a[3]=o=>u(t)?t.value=o:null),size:"x-large"},null,8,["modelValue"])]))}},W={class:"d-flex flex-column"},X={__name:"DemoRatingColors",setup(m){const t=f(4),d=["primary","secondary","success","info","error"];return(a,o)=>(r(),h("div",W,[(r(),h(R,null,j(d,_=>e(i,{key:_,modelValue:c(t),"onUpdate:modelValue":o[0]||(o[0]=V=>u(t)?t.value=V:null),color:_},null,8,["modelValue","color"])),64))]))}},Y={};function ee(m,t){return r(),g(i,{density:"compact"})}const te=v(Y,[["render",ee]]),oe={};function ne(m,t){return r(),g(i)}const le=v(oe,[["render",ne]]),ae={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},se={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},ie={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},re={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},ce={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},me={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},de={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'bx-smile' : 'bx-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'bx-smile' : 'bx-sad'"
      />
    </template>
  </VRating>
</template>
`},pe={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`},ue={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},_e={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`},ge=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component provides a simple interface for gathering user feedback.")],-1),fe=l("p",null,[s("Control the space occupied by "),l("code",null,"v-rating"),s(" items using the "),l("code",null,"density"),s(" prop.")],-1),ve=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component can be colored as you want, you can set both selected and not selected colors.")],-1),he=l("p",null,[s("Utilize the same sizing classes available in "),l("code",null,"v-icon"),s(" or provide your own with the "),l("code",null,"size"),s(" prop.")],-1),Ve=l("p",null,[s("Change the number of items by modifying the the "),l("code",null,"length"),s(" prop.")],-1),Re=l("p",null,[s("Use "),l("code",null,"clearable"),s(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1),xe=l("p",null,[s("For ratings that are not meant to be changed you can use "),l("code",null,"readonly"),s(" prop.")],-1),ye=l("p",null,"Provides visual feedback when hovering over icons",-1),be=l("p",null,[s("The "),l("code",null,"half-increments"),s(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1),ze=l("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1),Pe={__name:"rating",setup(m){return(t,d)=>{const a=le,o=F,_=te,V=X,x=Q,y=K,b=Z,z=q,C=N,$=T,D=B;return r(),g(I,{class:"match-height"},{default:n(()=>[e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Basic",code:ae},{default:n(()=>[ge,e(a)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Density",code:re},{default:n(()=>[fe,e(_)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Colors",code:ie},{default:n(()=>[ve,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Size",code:_e},{default:n(()=>[he,e(x)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Length",code:pe},{default:n(()=>[Ve,e(y)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Clearable",code:se},{default:n(()=>[Re,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Readonly",code:ue},{default:n(()=>[xe,e(z)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Hover",code:ce},{default:n(()=>[ye,e(C)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Incremented",code:me},{default:n(()=>[be,e($)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Item slot",code:de},{default:n(()=>[ze,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Pe as default};
