import{o as m,c as u,b as t,e as a,m as n,be as d,al as _,t as o,f as z,F as H,h as k,v as $,r as B,N as h,a3 as f,d as s}from"./main-BpgBUGps.js";import{V as l}from"./VAvatar-B9R7oHU8.js";import{V as i}from"./VImg-MA4fhMLa.js";import{V as e}from"./VBadge-Dzx2jjtl.js";import{a as O,V as S}from"./VTabs-sMqPGO29.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as W}from"./AppCardCode-vSvswVsM.js";import{V as E,a as v}from"./VRow-DcLldsAi.js";import"./forwardRefs-C-GTDzx5.js";import"./easing-CjukEv2V.js";import"./VWindowItem-COAbTIN-.js";import"./lazy-CKzIgbSD.js";import"./ssrBoot-Cao_hl35.js";import"./VSlideGroup-qhrbewnN.js";import"./scopeId-D5DaYZNr.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VCard-DPA8ST1d.js";import"./VCardText-RhVa6W5U.js";import"./VDivider-CPy3CxIk.js";/* empty css              */const C={class:"demo-space-x"},N={__name:"DemoBadgeTonal",setup(p){return(c,g)=>(m(),u("div",C,[t(e,{content:"5",class:"v-badge--tonal"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{content:"1",class:"v-badge--tonal",color:"error"},{default:a(()=>[t(_,{color:"error"},{default:a(()=>[o(" Default ")]),_:1})]),_:1}),t(e,{icon:"bx-lock-open",color:"info",class:"v-badge--tonal"},{default:a(()=>[t(l,null,{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1})]))}},M={class:"demo-space-x"},Y={__name:"DemoBadgeMaximumValue",setup(p){return(c,g)=>(m(),u("div",M,[t(e,{content:"99",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{content:"100",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{content:"1000",max:"999","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1})]))}},P={__name:"DemoBadgeTabs",setup(p){const c=[{badge:"3",content:"Item One"},{badge:"1",content:"Item Two"},{badge:"2",content:"Item Three"}];return(g,V)=>(m(),z(S,{grow:""},{default:a(()=>[(m(),u(H,null,k(c,r=>t(O,{key:r.content,value:r.content},{default:a(()=>[t(e,{content:r.badge,"offset-x":-18,"offset-y":6},{default:a(()=>[o($(r.content),1)]),_:2},1032,["content"])]),_:2},1032,["value"])),64))]),_:1}))}},U={class:"demo-space-x"},F={__name:"DemoBadgeShowOnHover",setup(p){const c=B(),g=B(),V=B(),r=h(g),b=h(c),x=h(V);return(I,A)=>(m(),u("div",U,[t(e,{content:"3",transition:"slide-x-transition","model-value":n(r)},{default:a(()=>[t(f,{ref_key:"tRefTwitterBadge",ref:g,size:"25",icon:"bx-bxl-meta"},null,512)]),_:1},8,["model-value"]),t(e,{content:"5",transition:"scale-transition","model-value":n(b)},{default:a(()=>[t(f,{ref_key:"tRefInstagramBadge",ref:c,size:"25",icon:"bx-bxl-instagram"},null,512)]),_:1},8,["model-value"]),t(e,{content:"1",transition:"slide-x-transition","model-value":n(x)},{default:a(()=>[t(f,{ref_key:"tRefWhatsappBadge",ref:V,size:"25",icon:"bx-bxl-whatsapp"},null,512)]),_:1},8,["model-value"])]))}},L={class:"d-flex align-center"},q={class:"demo-space-x"},G={__name:"DemoBadgeDynamicNotifications",setup(p){const c=B();return(g,V)=>(m(),u("div",L,[t(e,{content:n(c),"model-value":!!n(c),color:"success",class:"me-5"},{default:a(()=>[t(f,{size:"40",icon:"bx-bxl-vuejs"})]),_:1},8,["content","model-value"]),s("div",q,[t(_,{onClick:V[0]||(V[0]=r=>c.value=(n(c)||0)+1)},{default:a(()=>[o(" Send Message ")]),_:1}),t(_,{color:"error",onClick:V[1]||(V[1]=r=>c.value=0)},{default:a(()=>[o(" Clear Notifications ")]),_:1})])]))}},J={class:"demo-space-x"},K={__name:"DemoBadgeAvatarStatus",setup(p){return(c,g)=>(m(),u("div",J,[t(e,{dot:"",bordered:"",color:"success",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(l,{size:"large"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{dot:"",bordered:"",color:"warning",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(l,{size:"large"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{dot:"",bordered:"",color:"error",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(l,{size:"large"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1})]))}},Q={class:"demo-space-x"},X={__name:"DemoBadgeIcon",setup(p){return(c,g)=>(m(),u("div",Q,[t(e,null,{badge:a(()=>[t(f,{icon:"bx-bulb"})]),default:a(()=>[t(l,null,{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{icon:"bx-lock-open"},{default:a(()=>[t(l,null,{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1})]))}},Z={class:"demo-space-x"},tt={__name:"DemoBadgePosition",setup(p){return(c,g)=>(m(),u("div",Z,[t(e,{content:"1",location:"end top"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{location:"bottom start",content:"2"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{location:"bottom end",content:"3"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{location:"top start",content:"4"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1})]))}},at={},et={class:"demo-space-x"};function ot(p,c){return m(),u("div",et,[t(e,{dot:"",color:"primary"},{default:a(()=>[t(f,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(e,{dot:"",color:"secondary"},{default:a(()=>[t(f,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(e,{dot:"",color:"success"},{default:a(()=>[t(f,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(e,{dot:"",color:"info"},{default:a(()=>[t(f,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(e,{dot:"",color:"warning"},{default:a(()=>[t(f,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(e,{dot:"",color:"error"},{default:a(()=>[t(f,{size:"25",icon:"bx-bxl-instagram"})]),_:1})])}const st=j(at,[["render",ot]]),nt={class:"demo-space-x d-flex align-center flex-wrap"},rt={__name:"DemoBadgeStyle",setup(p){return(c,g)=>(m(),u("div",nt,[t(e,{content:"1"},{default:a(()=>[t(_,{variant:"tonal"},{default:a(()=>[o(" Default ")]),_:1})]),_:1}),t(e,{content:"5",bordered:""},{default:a(()=>[t(_,{variant:"tonal"},{default:a(()=>[o(" Border ")]),_:1})]),_:1}),t(e,{dot:"",location:"bottom end","offset-x":"3","offset-y":"3"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{inline:"",content:"5"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{rounded:"sm",content:"5"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(i,{src:n(d)},null,8,["src"])]),_:1})]),_:1})]))}},ct={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},dt={ts:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>
  </div>
</template>
`},lt={ts:`<script lang="ts" setup>
const notifications = ref<number>()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="bx-bxl-vuejs"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`,js:`<script setup>
const notifications = ref()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="bx-bxl-vuejs"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`},it={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="bx-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="bx-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="bx-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="bx-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},mt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},gt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},ft={ts:`<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="bx-bxl-meta"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="bx-bxl-whatsapp"
      />
    </VBadge>
  </div>
</template>
`,js:`<script setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()
const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="bx-bxl-meta"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="bx-bxl-whatsapp"
      />
    </VBadge>
  </div>
</template>
`},pt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},Vt={ts:`<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`,js:`<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`},vt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn color="error">
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="bx-lock-open"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn color="error">
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="bx-lock-open"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},ut=s("p",null,[o("You can use various props like "),s("code",null,"bordered"),o(", "),s("code",null,"dot"),o(", "),s("code",null,"inline"),o(", "),s("code",null,"rounded"),o(" etc. to style the badge.")],-1),_t=s("p",null,[o("Use "),s("code",null,"color"),o(" prop to create various background badges.")],-1),Bt=s("p",null,[o("You can use "),s("code",null,"location"),o(" prop to change the position of the badge. Possible values are "),s("code",null,"top-end"),o(", "),s("code",null,"bottom-end"),o(", "),s("code",null,"bottom-start"),o(", "),s("code",null,"top-start"),o(".")],-1),bt=s("p",null,[o("You can use "),s("code",null,"icon"),o(" prop or use "),s("code",null,"slot"),o(" to render the icon")],-1),xt=s("p",null,"You can use badge with avatar as status.",-1),ht=s("p",null,"You can incorporate badges with dynamic content to make things such as a notification system.",-1),It=s("p",null,"You can do many things with visibility control, for example, show badge on hover.",-1),At=s("p",null,"Badges help convey information to the user in a variety of ways.",-1),zt=s("p",null,[o("Use "),s("code",null,"max"),o(" prop to cap the value of the badge content")],-1),wt=s("p",null,[o("Use class "),s("code",null,"v-badge--tonal"),o(" for using tonal variant badge.")],-1),qt={__name:"badge",setup(p){return(c,g)=>{const V=rt,r=W,b=st,x=tt,I=X,A=K,w=G,y=F,T=P,D=Y,R=N;return m(),z(E,{class:"match-height"},{default:a(()=>[t(v,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Style",code:pt},{default:a(()=>[ut,t(V)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Color",code:dt},{default:a(()=>[_t,t(b)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Position",code:gt},{default:a(()=>[Bt,t(x)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Icon",code:it},{default:a(()=>[bt,t(I)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Avatar Status",code:ct},{default:a(()=>[xt,t(A)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Dynamic notifications",code:lt},{default:a(()=>[ht,t(w)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Show on hover",code:ft},{default:a(()=>[It,t(y)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Tabs",code:Vt},{default:a(()=>[At,t(T)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Maximum Value",code:mt},{default:a(()=>[zt,t(D)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Tonal",code:vt},{default:a(()=>[wt,t(R)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{qt as default};
