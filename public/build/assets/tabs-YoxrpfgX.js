import{a as r,V}from"./VTabs-sMqPGO29.js";import{r as h,o as c,c as b,d as s,b as e,e as a,a3 as y,t as l,m as u,aZ as m,F as p,h as f,v as w,w as A,f as T,al as $}from"./main-BpgBUGps.js";import{V as k}from"./VCardText-RhVa6W5U.js";import{V as I,a as v}from"./VWindowItem-COAbTIN-.js";import{V as C}from"./VCard-DPA8ST1d.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as U}from"./AppCardCode-vSvswVsM.js";import{V as N,a as g}from"./VRow-DcLldsAi.js";import"./forwardRefs-C-GTDzx5.js";import"./easing-CjukEv2V.js";import"./VSlideGroup-qhrbewnN.js";import"./scopeId-D5DaYZNr.js";import"./lazy-CKzIgbSD.js";import"./ssrBoot-Cao_hl35.js";import"./VImg-MA4fhMLa.js";import"./VAvatar-B9R7oHU8.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VDivider-CPy3CxIk.js";/* empty css              */const E={class:"d-flex gap-6"},M=s("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),G=s("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et. ",-1),H=s("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),R=s("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),L={__name:"DemoTabsVerticalPill",setup(_){const t=h("window-1");return(d,n)=>(c(),b("div",E,[s("div",null,[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null),direction:"vertical",class:"v-tabs-pill"},{default:a(()=>[e(r,null,{default:a(()=>[e(y,{start:"",icon:"bx-user"}),l(" Option 1 ")]),_:1}),e(r,null,{default:a(()=>[e(y,{start:"",icon:"bx-lock"}),l(" Option 2 ")]),_:1}),e(r,null,{default:a(()=>[e(y,{start:"",icon:"bx-broadcast"}),l(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),e(C,null,{default:a(()=>[e(k,null,{default:a(()=>[e(I,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null)},{default:a(()=>[e(v,{value:"window-1"},{default:a(()=>[M,G]),_:1}),e(v,{value:"window-2"},{default:a(()=>[H]),_:1}),e(v,{value:"window-3"},{default:a(()=>[R]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]))}},Z="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",J={__name:"DemoTabsBasicPill",setup(_){const t=h("window1");return(d,n)=>(c(),b(p,null,[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null),class:"v-tabs-pill"},{default:a(()=>[e(r,null,{default:a(()=>[l("Tab One")]),_:1}),e(r,null,{default:a(()=>[l("Tab Two")]),_:1}),e(r,null,{default:a(()=>[l("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(C,{class:"mt-5"},{default:a(()=>[e(k,null,{default:a(()=>[e(I,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(3,o=>e(v,{key:`window${o}`},{default:a(()=>[l(w(Z))]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}},K={__name:"DemoTabsDynamic",setup(_){const t=h(3),d=h(0);return A(t,n=>{d.value=n-1}),(n,o)=>(c(),T(C,null,{default:a(()=>[e(V,{modelValue:u(d),"onUpdate:modelValue":o[0]||(o[0]=i=>m(d)?d.value=i:null)},{default:a(()=>[(c(!0),b(p,null,f(u(t),i=>(c(),T(r,{key:i,value:i},{default:a(()=>[l(" Tab "+w(i),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(k,{class:"text-center d-flex items-center gap-y-2 flex-wrap"},{default:a(()=>[e($,{disabled:!u(t),class:"me-4",variant:u(t)?void 0:"tonal",onClick:o[1]||(o[1]=i=>t.value--)},{default:a(()=>[l(" Remove Tab ")]),_:1},8,["disabled","variant"]),e($,{onClick:o[2]||(o[2]=i=>t.value++)},{default:a(()=>[l(" Add Tab ")]),_:1})]),_:1})]),_:1}))}},Q={class:"d-flex justify-center gap-4 mt-3"},X="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",Y={__name:"DemoTabsProgrammaticNavigation",setup(_){const t=h(1),d=["Appetizers","Entrees","Deserts","Cocktails"],n=d.length,o=()=>{t.value!==1&&(t.value-=1)},i=()=>{t.value!==n&&(t.value+=1)};return(q,W)=>(c(),T(C,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":W[0]||(W[0]=x=>m(t)?t.value=x:null),grow:""},{default:a(()=>[(c(!0),b(p,null,f(d.length,x=>(c(),T(r,{key:x,value:x},{default:a(()=>[l(w(d[x-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(k,null,{default:a(()=>[e(I,{modelValue:u(t),"onUpdate:modelValue":W[1]||(W[1]=x=>m(t)?t.value=x:null)},{default:a(()=>[(c(!0),b(p,null,f(d.length,x=>(c(),T(v,{key:x,value:x},{default:a(()=>[l(w(X))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),s("div",Q,[e($,{disabled:u(t)===1,onClick:o},{default:a(()=>[l(" Previous ")]),_:1},8,["disabled"]),e($,{disabled:u(t)===u(n),onClick:i},{default:a(()=>[l(" Next ")]),_:1},8,["disabled"])])]),_:1})]),_:1}))}},ee="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",ae={__name:"DemoTabsGrow",setup(_){const t=h("Appetizers"),d=["Appetizers","Entrees","Deserts","Cocktails"];return(n,o)=>(c(),T(C,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":o[0]||(o[0]=i=>m(t)?t.value=i:null),grow:""},{default:a(()=>[(c(),b(p,null,f(d,i=>e(r,{key:i},{default:a(()=>[l(w(i),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(k,null,{default:a(()=>[e(I,{modelValue:u(t),"onUpdate:modelValue":o[1]||(o[1]=i=>m(t)?t.value=i:null)},{default:a(()=>[(c(),b(p,null,f(d,i=>e(v,{key:i,value:i},{default:a(()=>[l(w(ee))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},te="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",oe={__name:"DemoTabsFixed",setup(_){const t=h("Appetizers"),d=["Fixed Tab 1","Fixed Tab 2","Fixed Tab 3","Fixed Tab 4"];return(n,o)=>(c(),T(C,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":o[0]||(o[0]=i=>m(t)?t.value=i:null),"fixed-tabs":""},{default:a(()=>[(c(),b(p,null,f(d,i=>e(r,{key:i,value:i},{default:a(()=>[l(w(i),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(k,null,{default:a(()=>[e(I,{modelValue:u(t),"onUpdate:modelValue":o[1]||(o[1]=i=>m(t)?t.value=i:null)},{default:a(()=>[(c(),b(p,null,f(d,i=>e(v,{key:i,value:i},{default:a(()=>[l(w(te))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},le="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.",ne={__name:"DemoTabsCustomIcons",setup(_){const t=h(0);return(d,n)=>(c(),T(C,null,{default:a(()=>[e(V,{"next-icon":"bx-right-arrow-alt","prev-icon":"bx-left-arrow-alt"},{default:a(()=>[(c(),b(p,null,f(10,o=>e(r,{key:o},{default:a(()=>[l(" Item "+w(o),1)]),_:2},1024)),64))]),_:1}),e(k,null,{default:a(()=>[e(I,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(10,o=>e(v,{key:o,value:o},{default:a(()=>[l(w(le))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},se="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.",ie={__name:"DemoTabsPagination",setup(_){const t=h("item1");return(d,n)=>(c(),T(C,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(10,o=>e(r,{key:o},{default:a(()=>[l(" Item "+w(o),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(k,null,{default:a(()=>[e(I,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(10,o=>e(v,{key:o,value:`item${o}`},{default:a(()=>[l(w(se))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},re={};function ce(_,t){return c(),T(C,null,{default:a(()=>[e(k,{class:"d-flex flex-column gap-4"},{default:a(()=>[s("div",null,[e(V,null,{default:a(()=>[e(r,null,{default:a(()=>[l("Home")]),_:1}),e(r,null,{default:a(()=>[l("Service")]),_:1}),e(r,null,{default:a(()=>[l("Account")]),_:1})]),_:1})]),s("div",null,[e(V,{"align-tabs":"center"},{default:a(()=>[e(r,null,{default:a(()=>[l("Home")]),_:1}),e(r,null,{default:a(()=>[l("Service")]),_:1}),e(r,null,{default:a(()=>[l("Account")]),_:1})]),_:1})]),s("div",null,[e(V,{"align-tabs":"end"},{default:a(()=>[e(r,null,{default:a(()=>[l("Home")]),_:1}),e(r,null,{default:a(()=>[l("Service")]),_:1}),e(r,null,{default:a(()=>[l("Account")]),_:1})]),_:1})])]),_:1})]),_:1})}const ue=O(re,[["render",ce]]),de={class:"d-flex"},me=s("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),be=s("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. ",-1),pe=s("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper. ",-1),Ve={__name:"DemoTabsVertical",setup(_){const t=h("tab-1");return(d,n)=>(c(),T(C,null,{default:a(()=>[s("div",de,[s("div",null,[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null),direction:"vertical"},{default:a(()=>[e(r,null,{default:a(()=>[e(y,{start:"",icon:"bx-user"}),l(" Option 1 ")]),_:1}),e(r,null,{default:a(()=>[e(y,{start:"",icon:"bx-lock"}),l(" Option 2 ")]),_:1}),e(r,null,{default:a(()=>[e(y,{start:"",icon:"bx-broadcast"}),l(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),e(k,null,{default:a(()=>[e(I,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null),class:"ms-3"},{default:a(()=>[e(v,{value:"tab-1"},{default:a(()=>[me]),_:1}),e(v,{value:"tab-2"},{default:a(()=>[be]),_:1}),e(v,{value:"tab-3"},{default:a(()=>[pe]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1}))}},Te=s("span",null,"Recent",-1),ve=s("span",null,"Favorites",-1),fe=s("span",null,"Nearby",-1),we="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.",_e={__name:"DemoTabsStacked",setup(_){const t=h("tab-1");return(d,n)=>(c(),T(C,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null),grow:"",stacked:""},{default:a(()=>[e(r,null,{default:a(()=>[e(y,{icon:"bx-phone",class:"mb-2"}),Te]),_:1}),e(r,null,{default:a(()=>[e(y,{icon:"bx-heart",class:"mb-2"}),ve]),_:1}),e(r,null,{default:a(()=>[e(y,{icon:"bx-user",class:"mb-2"}),fe]),_:1})]),_:1},8,["modelValue"]),e(k,null,{default:a(()=>[e(I,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(3,o=>e(v,{key:o,value:`tab-${o}`},{default:a(()=>[l(w(we))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},xe="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",ge={__name:"DemoTabsBasic",setup(_){const t=h("item-1");return(d,n)=>(c(),T(C,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null)},{default:a(()=>[e(r,null,{default:a(()=>[l("Tab One")]),_:1}),e(r,null,{default:a(()=>[l("Tab Two")]),_:1}),e(r,null,{default:a(()=>[l("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(k,null,{default:a(()=>[e(I,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(3,o=>e(v,{key:o,value:`item-${o}`},{default:a(()=>[l(w(xe))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},he={ts:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`},ke={ts:`<script lang="ts" setup>
const currentTab = ref('item-1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
          :value="\`item-\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('item-1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
          :value="\`item-\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Ce={ts:`<script lang="ts" setup>
const currentTab = ref('window1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="\`window\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('window1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="\`window\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Ie={ts:`<script setup lang="ts">
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="bx-right-arrow-alt"
      prev-icon="bx-left-arrow-alt"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="bx-right-arrow-alt"
      prev-icon="bx-left-arrow-alt"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},ye={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},We={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Fixed Tab 1', 'Fixed Tab 2', 'Fixed Tab 3', 'Fixed Tab 4']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Fixed Tab 1',
  'Fixed Tab 2',
  'Fixed Tab 3',
  'Fixed Tab 4',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},$e={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},qe={ts:`<script setup lang="ts">
const currentTab = ref('item1')
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="\`item\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('item1')
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="\`item\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},De={ts:`<script lang="ts" setup>
const currentTab = ref(1)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(1)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`},Pe={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab>
        <VIcon
          icon="bx-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab>
        <VIcon
          icon="bx-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab>
        <VIcon
          icon="bx-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
          :value="\`tab-\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab>
        <VIcon
          icon="bx-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab>
        <VIcon
          icon="bx-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab>
        <VIcon
          icon="bx-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
          :value="\`tab-\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Se={ts:`<script setup lang="ts">
const currentTab = ref('tab-1')
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="bx-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="bx-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="bx-broadcast"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem value="tab-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="bx-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="bx-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="bx-broadcast"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem value="tab-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`},je={ts:`<script setup lang="ts">
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="bx-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-broadcast"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem value="window-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
            </p>
          </VWindowItem>

          <VWindowItem value="window-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem value="window-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="bx-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-broadcast"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem value="window-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
            </p>
          </VWindowItem>

          <VWindowItem value="window-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem value="window-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`},Be=s("p",null,[l("The "),s("code",null,"v-tabs"),l(" component is used for hiding content behind a selectable item.")],-1),Fe=s("p",null,[l("Using "),s("code",null,"stacked"),l(" prop you can have buttons that use both icons and text.")],-1),ze=s("p",null,[l("The "),s("code",null,"vertical"),l(" prop allows for "),s("code",null,"v-tab"),l(" components to stack vertically.")],-1),Ae=s("p",null,[l("Use "),s("code",null,"align-tabs"),l(" prop to change the tabs alignment.")],-1),Oe=s("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),Ue=s("p",null,[s("code",null,"prev-icon"),l(" and "),s("code",null,"next-icon"),l(" props can be used for applying custom pagination icons.")],-1),Ne=s("p",null,[l("The "),s("code",null,"fixed-tabs"),l(" prop forces "),s("code",null,"v-tab"),l(" to take up all available space up to the maximum width (300px).")],-1),Ee=s("p",null,[l("The "),s("code",null,"grow"),l(" prop will make the tab items take up all available space with no limit.")],-1),Me=s("p",null,[l("Tabs can be dynamically added and removed. This allows you to update to any number and the "),s("code",null,"v-tabs"),l(" component will react.")],-1),Ge=s("p",null,[l("Use our custom class "),s("code",null,".v-tabs-pill"),l(" along with "),s("code",null,"v-tabs"),l(" component to style pill tabs.")],-1),He=s("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),da={__name:"tabs",setup(_){return(t,d)=>{const n=ge,o=U,i=_e,q=Ve,W=ue,x=ie,D=ne,P=oe,S=ae,j=Y,B=K,F=J,z=L;return c(),T(N,{class:"match-height"},{default:a(()=>[e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Basic",variant:"outlined",code:ke},{default:a(()=>[Be,e(n)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Stacked",variant:"outlined",code:Pe},{default:a(()=>[Fe,e(i)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Vertical",variant:"outlined",code:Se},{default:a(()=>[ze,e(q)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Alignment",variant:"outlined",code:he},{default:a(()=>[Ae,e(W)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Pagination",variant:"outlined",code:qe},{default:a(()=>[Oe,e(x)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Custom Icons",variant:"outlined",code:Ie},{default:a(()=>[Ue,e(D)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Fixed",variant:"outlined",code:We},{default:a(()=>[Ne,e(P)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Grow",variant:"outlined",code:$e},{default:a(()=>[Ee,e(S)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Programmatic Navigation",variant:"outlined",code:De},{default:a(()=>[e(j)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Dynamic",variant:"outlined",code:ye},{default:a(()=>[Me,e(B)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Basic Pill",variant:"outlined",code:Ce},{default:a(()=>[Ge,e(F)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Vertical Pill",variant:"outlined",code:je},{default:a(()=>[He,e(z)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{da as default};
