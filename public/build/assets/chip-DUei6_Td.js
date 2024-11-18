import{V as o}from"./VChip-Gdsswa87.js";import{V as E,a as W,b as w,d as z}from"./VList-Bu48BGuL.js";import{V as L}from"./VListItemAction-CGBRz6Y6.js";import{r as u,o as c,f as h,e as i,b as e,bi as A,bj as M,t as a,al as J,a3 as f,m as s,aZ as D,c as _,be as T,bf as j,b5 as N,b3 as B,d as t,y as g}from"./main-BpgBUGps.js";import{V as R}from"./VMenu-D0wOrHxC.js";import{_ as F}from"./AppCombobox-uHDMnkwJ.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as S}from"./VAvatar-B9R7oHU8.js";import{_ as U}from"./AppCardCode-vSvswVsM.js";import{V as Y,a as m}from"./VRow-DcLldsAi.js";import"./VSlideGroup-qhrbewnN.js";import"./ssrBoot-Cao_hl35.js";import"./VImg-MA4fhMLa.js";import"./VDivider-CPy3CxIk.js";import"./VOverlay-BSwVgU5G.js";import"./easing-CjukEv2V.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Dw95iG-S.js";import"./form-jV7EneQK.js";import"./VSelect-CvnWonW6.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./VInput-h-v4JtUG.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";import"./filter-BHKMO-vf.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VCard-DPA8ST1d.js";import"./VCardText-RhVa6W5U.js";/* empty css              */const O={__name:"DemoChipExpandable",setup(d){const r=u(!1);return(V,p)=>(c(),h(R,{modelValue:s(r),"onUpdate:modelValue":p[1]||(p[1]=l=>D(r)?r.value=l:null),transition:"scale-transition"},{activator:i(({props:l})=>[e(o,A(M(l)),{default:i(()=>[a(" VueJS ")]),_:2},1040)]),default:i(()=>[e(E,null,{default:i(()=>[e(W,null,{append:i(()=>[e(L,{class:"ms-3"},{default:i(()=>[e(J,{icon:"",variant:"text",size:"x-small",color:"default",onClick:p[0]||(p[0]=l=>r.value=!1)},{default:i(()=>[e(f,{size:"20",icon:"bx-x"})]),_:1})]),_:1})]),default:i(()=>[e(w,{class:"mb-2"},{default:i(()=>[a(" VueJS ")]),_:1}),e(z,null,{default:i(()=>[a("The Progressive JavaScript Framework")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Z={__name:"DemoChipInSelects",setup(d){const r=u(["Programming","Playing games","Sleeping"]),V=u(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(p,l)=>{const v=F;return c(),h(v,{modelValue:s(r),"onUpdate:modelValue":l[0]||(l[0]=b=>D(r)?r.value=b:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"bx-x-circle",items:s(V),label:"Your favorite hobbies","prepend-icon":"bx-filter-alt"},null,8,["modelValue","items"])}}},q={},G={class:"demo-space-x"};function H(d,r){return c(),_("div",G,[e(o,{size:"x-small"},{default:i(()=>[a(" x-small chip ")]),_:1}),e(o,{size:"small"},{default:i(()=>[a(" small chip ")]),_:1}),e(o,{size:"default"},{default:i(()=>[a(" Default ")]),_:1}),e(o,{size:"large"},{default:i(()=>[a(" large chip ")]),_:1}),e(o,{size:"x-large"},{default:i(()=>[a(" x-large chip ")]),_:1})])}const K=y(q,[["render",H]]),Q={class:"demo-space-x"},X=t("span",null,"John Doe",-1),ee=t("span",null,"Darcy Nooser",-1),ie=t("span",null,"Felicia Risker",-1),ae=t("span",null,"Minnie Mostly",-1),oe={__name:"DemoChipWithAvatar",setup(d){return(r,V)=>(c(),_("div",Q,[e(o,null,{default:i(()=>[e(S,{start:"",image:s(T)},null,8,["image"]),X]),_:1}),e(o,null,{default:i(()=>[e(S,{start:"",image:s(j)},null,8,["image"]),ee]),_:1}),e(o,{pill:"",label:!1,"prepend-avatar":s(N)},{default:i(()=>[ie]),_:1},8,["prepend-avatar"]),e(o,{pill:"",label:!1},{default:i(()=>[e(S,{start:"",image:s(B)},null,8,["image"]),ae]),_:1})]))}},te={},le={class:"demo-space-x"};function se(d,r){return c(),_("div",le,[e(o,null,{default:i(()=>[e(f,{start:"",icon:"bx-user"}),a(" Account ")]),_:1}),e(o,{color:"primary"},{default:i(()=>[e(f,{start:"",icon:"bx-star"}),a(" Premium ")]),_:1}),e(o,{color:"secondary"},{default:i(()=>[e(f,{start:"",icon:"bx-cake"}),a(" 1 Year ")]),_:1}),e(o,{color:"success"},{default:i(()=>[e(f,{start:"",icon:"bx-bell"}),a(" Notification ")]),_:1}),e(o,{color:"info"},{default:i(()=>[e(f,{start:"",icon:"bx-message"}),a(" Message ")]),_:1}),e(o,{color:"warning"},{default:i(()=>[e(f,{start:"",icon:"bx-error"}),a(" Warning ")]),_:1}),e(o,{color:"error"},{default:i(()=>[e(f,{start:"",icon:"bx-error-circle"}),a(" Error ")]),_:1})])}const re=y(te,[["render",se]]),ce={class:"demo-space-x"},ne={__name:"DemoChipClosable",setup(d){const r=u(!0),V=u(!0),p=u(!0),l=u(!0),v=u(!0),b=u(!0),x=u(!0);return(I,n)=>(c(),_("div",ce,[s(r)?(c(),h(o,{key:0,closable:"","onClick:close":n[0]||(n[0]=C=>r.value=!s(r))},{default:i(()=>[a(" Default ")]),_:1})):g("",!0),s(V)?(c(),h(o,{key:1,closable:"",color:"primary","onClick:close":n[1]||(n[1]=C=>V.value=!s(V))},{default:i(()=>[a(" Primary ")]),_:1})):g("",!0),s(p)?(c(),h(o,{key:2,closable:"",color:"secondary","onClick:close":n[2]||(n[2]=C=>p.value=!s(p))},{default:i(()=>[a(" Secondary ")]),_:1})):g("",!0),s(l)?(c(),h(o,{key:3,closable:"",color:"success","onClick:close":n[3]||(n[3]=C=>l.value=!s(l))},{default:i(()=>[a(" Success ")]),_:1})):g("",!0),s(v)?(c(),h(o,{key:4,closable:"",color:"info","onClick:close":n[4]||(n[4]=C=>v.value=!s(v))},{default:i(()=>[a(" Info ")]),_:1})):g("",!0),s(b)?(c(),h(o,{key:5,closable:"",color:"warning","onClick:close":n[5]||(n[5]=C=>b.value=!s(b))},{default:i(()=>[a(" Warning ")]),_:1})):g("",!0),s(x)?(c(),h(o,{key:6,closable:"",color:"error","onClick:close":n[6]||(n[6]=C=>x.value=!s(x))},{default:i(()=>[a(" Error ")]),_:1})):g("",!0)]))}},pe={},de={class:"demo-space-x"};function me(d,r){return c(),_("div",de,[e(o,{label:!1},{default:i(()=>[a(" Default ")]),_:1}),e(o,{label:!1,color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{label:!1,color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{label:!1,color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{label:!1,color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{label:!1,color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{label:!1,color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const ue=y(pe,[["render",me]]),he={},Ve={class:"demo-space-x"};function Ce(d,r){return c(),_("div",Ve,[e(o,{variant:"outlined"},{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary",variant:"outlined"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary",variant:"outlined"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success",variant:"outlined"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info",variant:"outlined"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning",variant:"outlined"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error",variant:"outlined"},{default:i(()=>[a(" Error ")]),_:1})])}const fe=y(he,[["render",Ce]]),_e={},ve={class:"demo-space-x"};function be(d,r){return c(),_("div",ve,[e(o,{variant:"elevated"},{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary",variant:"elevated"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary",variant:"elevated"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success",variant:"elevated"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info",variant:"elevated"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning",variant:"elevated"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error",variant:"elevated"},{default:i(()=>[a(" Error ")]),_:1})])}const ge=y(_e,[["render",be]]),ye={},xe={class:"demo-space-x"};function Se(d,r){return c(),_("div",xe,[e(o,null,{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const Ie=y(ye,[["render",Se]]),De={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},ke={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},Pe={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},$e={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="bx-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="bx-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},Ee={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="bx-x-circle"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="bx-filter-alt"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="bx-x-circle"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="bx-filter-alt"
  />
</template>
`},We={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},we={ts:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},ze={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Le={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Ae={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="bx-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="bx-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="bx-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="bx-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="bx-message"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="bx-error"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="bx-error-circle"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="bx-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="bx-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="bx-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="bx-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="bx-message"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="bx-error"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="bx-error-circle"
      />
      Error
    </VChip>
  </div>
</template>
`},Me=t("p",null,[a("Use "),t("code",null,"color"),a(" prop to change the background color of chips.")],-1),Je=t("p",null,[a("Use "),t("code",null,"elevated"),a(" variant option to create filled chips.")],-1),Te=t("p",null,[a("Use "),t("code",null,"outlined"),a(" variant option to create outline border chips.")],-1),je=t("p",null,[a("To use the rounded chip, set "),t("code",null,"label"),a(" props value to "),t("strong",null,"false"),a(".")],-1),Ne=t("p",null,[a("Closable chips can be controlled with a "),t("code",null,"v-model"),a(".")],-1),Be=t("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),Re=t("p",null,[a("Use "),t("code",null,"pill"),a(" prop to remove the "),t("code",null,"v-avatar"),a(" padding.")],-1),Fe=t("p",null,[a("The "),t("code",null,"v-chip"),a(" component can have various sizes from "),t("code",null,"x-small"),a(" to "),t("code",null,"x-large"),a(".")],-1),Ue=t("p",null,[a("Selects can use "),t("code",null,"chips"),a(" to display the selected data. Try adding your own tags below.")],-1),Ye=t("p",null,[a("Chips can be combined with "),t("code",null,"v-menu"),a(" to enable a specific set of actions for a chip.")],-1),ki={__name:"chip",setup(d){return(r,V)=>{const p=Ie,l=U,v=ge,b=fe,x=ue,I=ne,n=re,C=oe,k=K,P=Z,$=O;return c(),h(Y,{class:"match-height"},{default:i(()=>[e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Color",code:ke},{default:i(()=>[Me,e(p)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Elevated",code:Pe},{default:i(()=>[Je,e(v)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Outlined",code:We},{default:i(()=>[Te,e(b)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Rounded",code:we},{default:i(()=>[je,e(x)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Closable",code:De},{default:i(()=>[Ne,e(I)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Icon",code:Ae},{default:i(()=>[Be,e(n)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Avatar",code:Le},{default:i(()=>[Re,e(C)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Sizes",code:ze},{default:i(()=>[Fe,e(k)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"In Selects",code:Ee},{default:i(()=>[Ue,e(P)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Expandable",code:$e},{default:i(()=>[Ye,e($)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ki as default};
