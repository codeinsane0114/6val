import{V as T}from"./VTooltip-Cuy6b6Ub.js";import{o as d,f as O,e,b as t,al as p,bi as c,bj as m,q as h,t as n,d as a,r as L,a as w,m as b,be as k,aZ as y,c as f,F as C,h as D,v as P}from"./main-BpgBUGps.js";import{V as r,a as S}from"./VList-Bu48BGuL.js";import{V as l}from"./VMenu-D0wOrHxC.js";import{V as I,d as A}from"./VCard-DPA8ST1d.js";import{V as $}from"./VDivider-CPy3CxIk.js";import{V as j}from"./VCardText-RhVa6W5U.js";import{_ as F}from"./AppCardCode-vSvswVsM.js";import{V as E,a as _}from"./VRow-DcLldsAi.js";import"./VOverlay-BSwVgU5G.js";import"./easing-CjukEv2V.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VImg-MA4fhMLa.js";import"./forwardRefs-C-GTDzx5.js";import"./ssrBoot-Cao_hl35.js";import"./VAvatar-B9R7oHU8.js";import"./dialog-transition-Dw95iG-S.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";/* empty css              */const R=a("span",null,"I am a Tooltip",-1),G={__name:"DemoMenuActivatorAndTooltip",setup(V){const i=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>(d(),O(l,{location:"top"},{activator:e(({props:o})=>[t(T,{location:"top"},{activator:e(({props:s})=>[t(p,c(m(h(o,s))),{default:e(()=>[n(" Dropdown w/ Tooltip ")]),_:2},1040)]),default:e(()=>[R]),_:2},1024)]),default:e(()=>[t(r,{items:i})]),_:1}))}},H={__name:"DemoMenuPopover",setup(V){const i=L(!1);return(v,u)=>{const o=w("IconBtn");return d(),O(l,{modelValue:b(i),"onUpdate:modelValue":u[0]||(u[0]=s=>y(i)?i.value=s:null),location:"top"},{activator:e(({props:s})=>[t(p,c(m(s)),{default:e(()=>[n(" Menu as Popover ")]),_:2},1040)]),default:e(()=>[t(I,{"max-width":"300"},{default:e(()=>[t(r,null,{default:e(()=>[t(S,{"prepend-avatar":b(k),title:"John Leider",subtitle:"Founder of Vuetify",class:"mx-0"},null,8,["prepend-avatar"])]),_:1}),t($),t(j,null,{default:e(()=>[n(" Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. ")]),_:1}),t(A,null,{default:e(()=>[t(o,{icon:"bx-heart"}),t(o,{icon:"bx-bookmark"}),t(o,{icon:"bx-dislike"})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},J={__name:"DemoMenuOpenOnHover",setup(V){const i=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>(d(),O(l,{"open-on-hover":""},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" On hover ")]),_:2},1040)]),default:e(()=>[t(r,{items:i})]),_:1}))}},N={class:"demo-space-x"},X={__name:"DemoMenuLocation",setup(V){const i=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>(d(),f("div",N,[t(l,{location:"top"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Top ")]),_:2},1040)]),default:e(()=>[t(r,{items:i})]),_:1}),t(l,{location:"bottom"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Bottom ")]),_:2},1040)]),default:e(()=>[t(r,{items:i})]),_:1}),t(l,{location:"start"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Start ")]),_:2},1040)]),default:e(()=>[t(r,{items:i})]),_:1}),t(l,{location:"end"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" End ")]),_:2},1040)]),default:e(()=>[t(r,{items:i})]),_:1})]))}},Y={class:"demo-space-x"},U={__name:"DemoMenuCustomTransitions",setup(V){const i=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>(d(),f("div",Y,[t(l,{transition:"scale-transition"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Scale Transition ")]),_:2},1040)]),default:e(()=>[t(r,{items:i})]),_:1}),t(l,{transition:"slide-x-transition"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Slide X Transition ")]),_:2},1040)]),default:e(()=>[t(r,{items:i})]),_:1}),t(l,{transition:"slide-y-transition"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Slide Y Transition ")]),_:2},1040)]),default:e(()=>[t(r,{items:i})]),_:1})]))}},q={class:"demo-space-x"},z={__name:"DemoMenuBasic",setup(V){const i=["primary","secondary","success","info","warning","error"],v=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(u,o)=>(d(),f("div",q,[(d(),f(C,null,D(i,s=>t(l,{key:s},{activator:e(({props:B})=>[t(p,h({color:s,ref_for:!0},B),{default:e(()=>[n(P(s),1)]),_:2},1040,["color"])]),default:e(()=>[t(r,{items:v})]),_:2},1024)),64))]))}},W={ts:`<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},Z={ts:`<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},K={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Q={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},tt={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},et={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="bx-heart" />
        <IconBtn icon="bx-bookmark" />
        <IconBtn icon="bx-dislike" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="bx-heart" />
        <IconBtn icon="bx-bookmark" />
        <IconBtn icon="bx-dislike" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`},ot=a("p",null," Remember to put the element that activates the menu in the activator slot. ",-1),nt=a("p",null,[n("Vuetify comes with 3 standard transitions, "),a("code",null,"scale"),n(", "),a("code",null,"slide-x"),n(" and "),a("code",null,"slide-y"),n(". Use "),a("code",null,"transition"),n(" prop to add transition to a menu.")],-1),it=a("p",null,[n("Menu can be offset relative to the activator by using the "),a("code",null,"location"),n(" prop.")],-1),at=a("p",null,[n("Menus can be accessed using hover instead of clicking with the "),a("code",null,"open-on-hover"),n(" prop.")],-1),st=a("p",null,"A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.",-1),pt=a("p",null,[n("With the new "),a("code",null,"v-slot"),n(" syntax, nested activators such as those seen with a "),a("code",null,"v-menu"),n(" and "),a("code",null,"v-tooltip"),n(" attached to the same activator button, need a particular setup in order to function correctly")],-1),yt={__name:"menu",setup(V){return(i,v)=>{const u=z,o=F,s=U,B=X,M=J,x=H,g=G;return d(),O(E,{class:"match-height"},{default:e(()=>[t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Basic",code:Z},{default:e(()=>[ot,t(u)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Custom transitions",code:K},{default:e(()=>[nt,t(s)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Location",code:Q},{default:e(()=>[it,t(B)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Open on hover",code:tt},{default:e(()=>[at,t(M)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Popover",code:et},{default:e(()=>[st,t(x)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Activator and tooltip",code:W},{default:e(()=>[pt,t(g)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{yt as default};
