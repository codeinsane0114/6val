import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as V,$ as g,o as _,c as k,d as o,v as R,m as i,b as e,e as t,f,I as T,y as M,cR as L,a3 as O,al as w,aZ as m,F as D,Q as E,R as Y,t as c}from"./main-BpgBUGps.js";import{V as G}from"./VAvatar-B9R7oHU8.js";import{V as p}from"./VSlider-DS-bwj6B.js";import{a as N}from"./VImg-MA4fhMLa.js";import{a as u,V as b}from"./VRow-DcLldsAi.js";import{V as y}from"./VTextField-DNnTNwAs.js";import{_ as Q}from"./AppTextField-CidaaHzM.js";import{_ as Z}from"./AppCardCode-vSvswVsM.js";import"./VSliderTrack-CO3WkNiC.js";import"./VInput-h-v4JtUG.js";import"./form-jV7EneQK.js";/* empty css              *//* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./forwardRefs-C-GTDzx5.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VCard-DPA8ST1d.js";import"./VCardText-RhVa6W5U.js";import"./VDivider-CPy3CxIk.js";const q=v=>(E("data-v-ed60dc38"),v=v(),Y(),v),H={class:"d-flex justify-space-between ma-4"},J=["textContent"],K=q(()=>o("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),z=40,$=218,W={__name:"DemoSliderAppendAndPrepend",setup(v){const l=V(40),a=V(!1),n=g(()=>l.value<100?"primary":l.value<125?"success":l.value<140?"info":l.value<175?"warning":"error"),r=g(()=>`${60/l.value}s`),s=()=>{l.value>z&&(l.value-=1)},d=()=>{l.value<$&&(l.value+=1)};return(x,h)=>(_(),k(D,null,[o("div",H,[o("div",null,[o("span",{class:"text-6xl font-weight-light",textContent:R(i(l))},null,8,J),K,e(L,null,{default:t(()=>[i(a)?(_(),f(G,{key:0,color:i(n),style:T({animationDuration:i(r)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):M("",!0)]),_:1})]),o("div",null,[e(w,{color:i(n),icon:"",elevation:"0",onClick:h[0]||(h[0]=C=>a.value=!i(a))},{default:t(()=>[e(O,{size:"large",icon:i(a)?"bx-pause":"bx-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:i(l),"onUpdate:modelValue":h[1]||(h[1]=C=>m(l)?l.value=C:null),color:i(n),step:1,min:z,max:$,"track-color":"secondary"},{prepend:t(()=>[e(w,{size:"small",variant:"text",icon:"bx-minus",color:i(n),onClick:s},null,8,["color"])]),append:t(()=>[e(w,{size:"small",variant:"text",icon:"bx-plus",color:i(n),onClick:d},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}},X=S(W,[["__scopeId","data-v-ed60dc38"]]),ee={class:"d-flex align-center justify-space-between"},le=o("span",{class:"me-1"},"R",-1),te={class:"d-flex align-center justify-space-between"},oe=o("span",{class:"me-1"},"G",-1),se={class:"d-flex align-center justify-space-between"},ae=o("span",{class:"me-1"},"B",-1),ne={__name:"DemoSliderAppendTextField",setup(v){const l=V(161),a=V(105),n=V(225);return(r,s)=>(_(),k(D,null,[e(N,{style:T({background:`rgb(${i(l)}, ${i(a)}, ${i(n)})`}),height:"150px"},null,8,["style"]),e(b,{class:"mt-5"},{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[o("div",ee,[le,e(p,{modelValue:i(l),"onUpdate:modelValue":s[0]||(s[0]=d=>m(l)?l.value=d:null),max:255,step:1},null,8,["modelValue"]),e(y,{modelValue:i(l),"onUpdate:modelValue":s[1]||(s[1]=d=>m(l)?l.value=d:null),type:"number",placeholder:"10",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(u,{cols:"12"},{default:t(()=>[o("div",te,[oe,e(p,{modelValue:i(a),"onUpdate:modelValue":s[2]||(s[2]=d=>m(a)?a.value=d:null),max:255,step:1},null,8,["modelValue"]),e(y,{modelValue:i(a),"onUpdate:modelValue":s[3]||(s[3]=d=>m(a)?a.value=d:null),type:"number",placeholder:"20",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(u,{cols:"12"},{default:t(()=>[o("div",se,[ae,e(p,{modelValue:i(n),"onUpdate:modelValue":s[4]||(s[4]=d=>m(n)?n.value=d:null),max:255,step:1},null,8,["modelValue"]),e(y,{modelValue:i(n),"onUpdate:modelValue":s[5]||(s[5]=d=>m(n)?n.value=d:null),type:"number",placeholder:"30",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1})]),_:1})],64))}},ie={__name:"DemoSliderVertical",setup(v){const l=V(10);return(a,n)=>(_(),f(p,{modelValue:i(l),"onUpdate:modelValue":n[0]||(n[0]=r=>m(l)?l.value=r:null),direction:"vertical"},null,8,["modelValue"]))}},re=o("div",{class:"text-caption"}," Show ticks when using slider ",-1),de=o("div",{class:"text-caption"}," Always show ticks ",-1),ce=o("div",{class:"text-caption"}," Tick size ",-1),ue=o("div",{class:"text-caption"}," Tick labels ",-1),me={__name:"DemoSliderTicks",setup(v){const l=V(0),a=V(1),n={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(r,s)=>(_(),f(b,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[re,e(p,{modelValue:i(l),"onUpdate:modelValue":s[0]||(s[0]=d=>m(l)?l.value=d:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[de,e(p,{modelValue:i(l),"onUpdate:modelValue":s[1]||(s[1]=d=>m(l)?l.value=d:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ce,e(p,{modelValue:i(l),"onUpdate:modelValue":s[2]||(s[2]=d=>m(l)?l.value=d:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ue,e(p,{modelValue:i(a),"onUpdate:modelValue":s[3]||(s[3]=d=>m(a)?a.value=d:null),ticks:n,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}},pe=o("div",{class:"text-caption"}," Show thumb when using slider ",-1),Ve=o("div",{class:"text-caption"}," Always show thumb label ",-1),ve=o("div",{class:"text-caption"}," Custom thumb size ",-1),_e=o("div",{class:"text-caption"}," Custom thumb label ",-1),fe={__name:"DemoSliderThumb",setup(v){const l=["😭","😢","😔","🙁","😐","🙂","😊","😁","😄","😍"],a=V(45);return(n,r)=>(_(),f(b,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[pe,e(p,{modelValue:i(a),"onUpdate:modelValue":r[0]||(r[0]=s=>m(a)?a.value=s:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[Ve,e(p,{modelValue:i(a),"onUpdate:modelValue":r[1]||(r[1]=s=>m(a)?a.value=s:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ve,e(p,{modelValue:i(a),"onUpdate:modelValue":r[2]||(r[2]=s=>m(a)?a.value=s:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[_e,e(p,{modelValue:i(a),"onUpdate:modelValue":r[3]||(r[3]=s=>m(a)?a.value=s:null),"thumb-label":"always"},{"thumb-label":t(({modelValue:s})=>[c(R(l[Math.min(Math.floor(s/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},be={};function xe(v,l){return _(),f(p,{step:10,"show-ticks":"","thumb-size":18,"tick-size":3,"track-size":2})}const he=S(be,[["render",xe]]),Ce={class:"d-flex justify-space-between"},we={__name:"DemoSliderMinAndMax",setup(v){const l=V(-50),a=V(90),n=V(40);return(r,s)=>{const d=Q;return _(),k("div",Ce,[e(p,{modelValue:i(n),"onUpdate:modelValue":s[0]||(s[0]=x=>m(n)?n.value=x:null),max:i(a),min:i(l),step:1},null,8,["modelValue","max","min"]),e(d,{modelValue:i(n),"onUpdate:modelValue":s[1]||(s[1]=x=>m(n)?n.value=x:null),type:"number",placeholder:"10",style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])}}},ye={__name:"DemoSliderValidation",setup(v){const l=V(30),a=[n=>n<=40||"Only 40 in stock"];return(n,r)=>(_(),f(p,{modelValue:i(l),"onUpdate:modelValue":r[0]||(r[0]=s=>m(l)?l.value=s:null),error:i(l)>40,rules:a,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}},Se={__name:"DemoSliderStep",setup(v){const l=V(0);return(a,n)=>(_(),f(p,{modelValue:i(l),"onUpdate:modelValue":n[0]||(n[0]=r=>m(l)?l.value=r:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue"]))}},ke={__name:"DemoSliderIcons",setup(v){const l=V(0),a=V(0),n=V(10);return(r,s)=>(_(),f(b,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:i(l),"onUpdate:modelValue":s[0]||(s[0]=d=>m(l)?l.value=d:null),"prepend-icon":"bx-volume-full"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:i(a),"onUpdate:modelValue":s[1]||(s[1]=d=>m(a)?a.value=d:null),"append-icon":"bx-alarm"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:i(n),"onUpdate:modelValue":s[2]||(s[2]=d=>m(n)?n.value=d:null),"append-icon":"bx-minus","prepend-icon":"bx-plus"},null,8,["modelValue"])]),_:1})]),_:1}))}},ge=o("div",{class:"text-caption"}," Color ",-1),ze=o("div",{class:"text-caption"}," Track-color ",-1),$e=o("div",{class:"text-caption"}," Thumb-color ",-1),Re={__name:"DemoSliderColors",setup(v){const l=V(25),a=V(75),n=V(50);return(r,s)=>(_(),f(b,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[ge,e(p,{modelValue:i(l),"onUpdate:modelValue":s[0]||(s[0]=d=>m(l)?l.value=d:null),color:"error"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ze,e(p,{modelValue:i(a),"onUpdate:modelValue":s[1]||(s[1]=d=>m(a)?a.value=d:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[$e,e(p,{modelValue:i(n),"onUpdate:modelValue":s[2]||(s[2]=d=>m(n)?n.value=d:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}},Te={},De=o("div",{class:"text-caption"}," Disabled ",-1),je=o("div",{class:"text-caption"}," Readonly ",-1);function Ae(v,l){return _(),f(b,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[De,e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(u,{cols:"12"},{default:t(()=>[je,e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const Ue=S(Te,[["render",Ae]]),Be={__name:"DemoSliderBasic",setup(v){const l=V(30);return(a,n)=>(_(),f(b,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(p)]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:i(l),"onUpdate:modelValue":n[0]||(n[0]=r=>m(l)?l.value=r:null)},null,8,["modelValue"])]),_:1})]),_:1}))}},Fe={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'bx-pause' : 'bx-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="bx-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="bx-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'bx-pause' : 'bx-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="bx-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="bx-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},Pe={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">R</span>
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">G</span>
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">B</span>
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">R</span>
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">G</span>
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">B</span>
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`},Ie={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`},Me={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Le={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Oe={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="bx-volume-full"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="bx-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="bx-minus"
        prepend-icon="bx-plus"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="bx-volume-full"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="bx-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="bx-minus"
        prepend-icon="bx-plus"
      />
    </VCol>
  </VRow>
</template>
`},Ee={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`},Ye={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},Ge={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Ne={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '😔', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '😔',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Qe={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Ze={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},qe={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},He=o("p",null,[c("The "),o("code",null,"v-slider"),c(" component is a better visualization of the number input.")],-1),Je=o("p",null,[c("You cannot interact with "),o("code",null,"disabled"),c(" and "),o("code",null,"readonly"),c(" sliders.")],-1),Ke=o("p",null,[c("You can set the colors of the slider using the props "),o("code",null,"color"),c(", "),o("code",null,"track-color"),c(" and "),o("code",null,"thumb-color"),c(".")],-1),We=o("p",null,[c("You can add icons to the slider with the "),o("code",null,"append-icon"),c(" and "),o("code",null,"prepend-icon"),c(" props.")],-1),Xe=o("p",null,[c("Using the "),o("code",null,"step"),c(" prop you can control the precision of the slider, and how much it should move each step.")],-1),el=o("p",null,[c("Vuetify includes simple validation through the "),o("code",null,"rules"),c(" prop.")],-1),ll=o("p",null,[c("You can set "),o("code",null,"min"),c(" and "),o("code",null,"max"),c(" values of sliders.")],-1),tl=o("p",null,[c("Use "),o("code",null,"thumb-size"),c(", "),o("code",null,"tick-size"),c(", and "),o("code",null,"track-size"),c(" prop to increase and decrease the size of thumb, tick and track. ")],-1),ol=o("p",null,[c("You can display a thumb label while sliding or always with the "),o("code",null,"thumb-label"),c(" prop.")],-1),sl=o("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),al=o("p",null,[c(" You can use the "),o("code",null,"vertical"),c(" prop to switch sliders to a vertical orientation. ")],-1),nl=o("p",null,[c("Sliders can be combined with other components in its "),o("code",null,"append"),c(" slot, such as "),o("code",null,"v-text-field"),c(", to add additional functionality to the component.")],-1),il=o("p",null,[c("Use slots such as "),o("code",null,"append"),c(" and "),o("code",null,"prepend"),c(" to easily customize the "),o("code",null,"v-slider"),c(" to fit any situation.")],-1),Tl={__name:"slider",setup(v){return(l,a)=>{const n=Be,r=Z,s=Ue,d=Re,x=ke,h=Se,C=ye,j=we,A=he,U=fe,B=me,F=ie,P=ne,I=X;return _(),f(b,{class:"match-height"},{default:t(()=>[e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Basic",code:Ie},{default:t(()=>[He,e(n)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Disabled and Readonly",code:Le},{default:t(()=>[Je,e(s)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Colors",code:Me},{default:t(()=>[Ke,e(d)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Icons",code:Oe},{default:t(()=>[We,e(x)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Step",code:Ge},{default:t(()=>[Xe,e(h)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Validation",code:Ze},{default:t(()=>[el,e(C)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Min and Max",code:Ee},{default:t(()=>[ll,e(j)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Size",code:Ye},{default:t(()=>[tl,e(A)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Thumb",code:Ne},{default:t(()=>[ol,e(U)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Ticks",code:Qe},{default:t(()=>[sl,e(B)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Vertical",code:qe},{default:t(()=>[al,e(F)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Append text field",code:Pe},{default:t(()=>[nl,e(P)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Append and prepend",code:Fe},{default:t(()=>[il,e(I)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Tl as default};
