import{o as s,c as _,b as o,e as t,t as n,al as l,m as V,b3 as b,a3 as u,q as T,d as a,r as g,f}from"./main-BpgBUGps.js";import{V as i}from"./VTooltip-Cuy6b6Ub.js";import{V as $}from"./VImg-MA4fhMLa.js";import{V as S}from"./VAvatar-B9R7oHU8.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as H}from"./AppCardCode-vSvswVsM.js";import{V as D,a as d}from"./VRow-DcLldsAi.js";import"./VOverlay-BSwVgU5G.js";import"./easing-CjukEv2V.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./forwardRefs-C-GTDzx5.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VCard-DPA8ST1d.js";import"./VCardText-RhVa6W5U.js";import"./VDivider-CPy3CxIk.js";/* empty css              */const k={class:"demo-space-x"},E=a("span",null,"Tooltip on Icon",-1),I={__name:"DemoTooltipTooltipOnVariousElements",setup(r){return(e,m)=>(s(),_("div",k,[o(l,null,{default:t(()=>[n(" Button "),o(i,{location:"top",activator:"parent"},{default:t(()=>[n(" Tooltip ")]),_:1})]),_:1}),o(S,{color:"info"},{default:t(()=>[o($,{src:V(b)},null,8,["src"]),o(i,{location:"top",activator:"parent"},{default:t(()=>[n(" Tooltip on Avatar ")]),_:1})]),_:1}),o(i,{location:"top"},{activator:t(({props:c})=>[o(u,T(c,{size:"30",icon:"bx-user"}),null,16)]),default:t(()=>[E]),_:1})]))}},A={},w={class:"demo-space-x"},j=a("span",null,"Scale Transition",-1),F=a("span",null,"Scroll X Transition",-1),X=a("span",null,"Scroll Y Transition",-1);function C(r,e){return s(),_("div",w,[o(l,null,{default:t(()=>[n(" scale transition "),o(i,{location:"top",transition:"scale-transition",activator:"parent"},{default:t(()=>[j]),_:1})]),_:1}),o(l,null,{default:t(()=>[n(" scroll X transition "),o(i,{location:"top",activator:"parent",transition:"scroll-x-transition"},{default:t(()=>[F]),_:1})]),_:1}),o(l,null,{default:t(()=>[n(" scroll y transition "),o(i,{location:"top",activator:"parent",transition:"scroll-y-transition"},{default:t(()=>[X]),_:1})]),_:1})])}const M=v(A,[["render",C]]),P={class:"demo-space-x"},z=a("span",null,"Programmatic tooltip",-1),N={__name:"DemoTooltipVModelSupport",setup(r){const e=g(!1);return(m,c)=>(s(),_("div",P,[o(l,{onClick:c[0]||(c[0]=p=>e.value=!V(e))},{default:t(()=>[n(" toggle tooltip ")]),_:1}),o(i,{"model-value":V(e),location:"top"},{activator:t(({props:p})=>[o(u,T(p,{icon:"bx-bxl-instagram"}),null,16)]),default:t(()=>[z]),_:1},8,["model-value"])]))}},Y={},L=a("span",null,"Open Delay On Hover",-1),U=a("span",null,"Open Delay On Hover",-1);function q(r,e){return s(),f(l,{variant:"outlined"},{default:t(()=>[L,n(),o(i,{"open-delay":"500",location:"top",activator:"parent"},{default:t(()=>[U]),_:1})]),_:1})}const R=v(Y,[["render",q]]),G={},J={class:"demo-space-x"},K=a("span",null,"Open On Hover",-1),Q=a("span",null,"Open On click",-1),W=a("span",null,"Open On Hover + Focus",-1);function Z(r,e){return s(),_("div",J,[o(l,{variant:"outlined"},{default:t(()=>[K,o(i,{activator:"parent",location:"top"},{default:t(()=>[n(" Open On Hover ")]),_:1})]),_:1}),o(l,{variant:"outlined",color:"primary"},{default:t(()=>[Q,o(i,{"open-on-click":"","open-on-hover":!1,location:"top",activator:"parent"},{default:t(()=>[n(" Open On click ")]),_:1})]),_:1}),o(l,{variant:"outlined"},{default:t(()=>[W,o(i,{"open-on-focus":"",location:"top",activator:"parent"},{default:t(()=>[n(" Open On Hover + Focus ")]),_:1})]),_:1})])}const oo=v(G,[["render",Z]]),to={},no={class:"demo-space-x"};function ao(r,e){return s(),_("div",no,[o(l,{variant:"tonal"},{default:t(()=>[n(" Tooltip on End "),o(i,{activator:"parent",location:"end"},{default:t(()=>[n(" End Tooltip ")]),_:1})]),_:1}),o(l,{variant:"tonal"},{default:t(()=>[n(" Tooltip on Start "),o(i,{activator:"parent",location:"start"},{default:t(()=>[n(" Start Tooltip ")]),_:1})]),_:1}),o(l,{variant:"tonal"},{default:t(()=>[n(" Tooltip on Top "),o(i,{activator:"parent",location:"top"},{default:t(()=>[n(" Top Tooltip ")]),_:1})]),_:1}),o(l,{variant:"tonal"},{default:t(()=>[n(" Tooltip on Bottom "),o(i,{activator:"parent",location:"bottom"},{default:t(()=>[n(" Bottom Tooltip ")]),_:1})]),_:1})])}const io=v(to,[["render",ao]]),lo={ts:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`,js:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`},eo={ts:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`},po={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`},so={ts:`<script setup lang="ts">
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="bx-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="bx-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`},ro={ts:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`},co={ts:`<script lang="ts" setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="bx-bxl-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="bx-bxl-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`},_o=a("p",null,[n("Use the "),a("code",null,"location"),n(" prop to specify on which side of the element the tooltip should show")],-1),vo=a("p",null,[n("Delay (in ms) after which tooltip opens (when "),a("code",null,"open-on-hover"),n(" prop is set to true)")],-1),Vo=a("p",null,[n("Tooltip visibility can be programmatically changed using "),a("code",null,"v-model"),n(".")],-1),mo=a("p",null,[n("Use "),a("code",null,"transition"),n(" prop to sets the component transition.")],-1),uo=a("p",null,"Tooltips can wrap any element.",-1),jo={__name:"tooltip",setup(r){return(e,m)=>{const c=io,p=H,B=oo,O=R,h=N,x=M,y=I;return s(),f(D,null,{default:t(()=>[o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Location",code:po},{default:t(()=>[_o,o(c)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Events",code:eo},{default:t(()=>[o(B)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Delay On Hover",code:lo},{default:t(()=>[vo,o(O)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"V-Model Support",code:co},{default:t(()=>[Vo,o(h)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Transition",code:ro},{default:t(()=>[mo,o(x)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Tooltip on Various Elements",code:so},{default:t(()=>[uo,o(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{jo as default};
