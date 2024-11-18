import{_}from"./AppSelect-crBF-FCt.js";import{r as b,o as p,f as d,e as t,b as e,d as o,v as x,m as S,aZ as f,be as D,bf as I,b5 as B,b3 as w,b4 as O,t as s}from"./main-BpgBUGps.js";import{V as k}from"./VChip-Gdsswa87.js";import{V as y}from"./VAvatar-B9R7oHU8.js";import{a as n,V}from"./VRow-DcLldsAi.js";import{V as h}from"./VSelect-CvnWonW6.js";import{_ as G}from"./AppCardCode-vSvswVsM.js";import"./form-jV7EneQK.js";import"./VSlideGroup-qhrbewnN.js";import"./VImg-MA4fhMLa.js";/* empty css              */import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-Bu48BGuL.js";import"./ssrBoot-Cao_hl35.js";import"./VDivider-CPy3CxIk.js";import"./dialog-transition-Dw95iG-S.js";import"./VMenu-D0wOrHxC.js";import"./VOverlay-BSwVgU5G.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VCard-DPA8ST1d.js";import"./VCardText-RhVa6W5U.js";const $={__name:"DemoSelectSelectionSlot",setup(u){const a=[{name:"Sandra Adams",avatar:D},{name:"Ali Connors",avatar:I},{name:"Trevor Hansen",avatar:B},{name:"Tucker Smith",avatar:w},{name:"Britta Holt",avatar:O}],i=b(["Sandra Adams"]);return(m,l)=>{const c=_;return p(),d(c,{modelValue:S(i),"onUpdate:modelValue":l[0]||(l[0]=r=>f(i)?i.value=r:null),items:a,"item-title":"name","item-value":"name",label:"Select Item",placeholder:"Select Item",multiple:"",clearable:"","clear-icon":"bx-x"},{selection:t(({item:r})=>[e(k,null,{prepend:t(()=>[e(y,{start:"",image:r.raw.avatar},null,8,["image"])]),default:t(()=>[o("span",null,x(r.title),1)]),_:2},1024)]),_:1},8,["modelValue"])}}},N={__name:"DemoSelectMultiple",setup(u){const a=b(["Alabama"]),i=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(m,l)=>{const c=_;return p(),d(c,{modelValue:S(a),"onUpdate:modelValue":l[0]||(l[0]=r=>f(a)?a.value=r:null),items:i,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","persistent-hint":"",placeholder:"Select State"},null,8,["modelValue"])}}},j={__name:"DemoSelectMenuProps",setup(u){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=_;return p(),d(l,{items:a,"menu-props":{transition:"scroll-y-transition"},label:"Label",placeholder:"Select Item"})}}},T={__name:"DemoSelectChips",setup(u){const a=["foo","bar","fizz","buzz"],i=b(["foo","bar","fizz","buzz"]);return(m,l)=>{const c=_;return p(),d(c,{modelValue:S(i),"onUpdate:modelValue":l[0]||(l[0]=r=>f(i)?i.value=r:null),items:a,placeholder:"Select Item",label:"Chips",chips:"",multiple:"","closable-chips":""},null,8,["modelValue"])}}},U={__name:"DemoSelectIcons",setup(u){const a=b("Florida"),i=b("Texas"),m=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(l,c)=>{const r=_;return p(),d(V,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{modelValue:S(a),"onUpdate:modelValue":c[0]||(c[0]=v=>f(a)?a.value=v:null),items:m,label:"Select","prepend-icon":"bx-map-alt","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(r,{modelValue:S(i),"onUpdate:modelValue":c[1]||(c[1]=v=>f(i)?i.value=v:null),items:m,"append-icon":"bx-map-alt",label:"Select","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1})]),_:1})}}},M={__name:"DemoSelectCustomTextAndValue",setup(u){const a=b({state:"Florida",abbr:"FL"}),i=[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}];return(m,l)=>{const c=_;return p(),d(c,{modelValue:S(a),"onUpdate:modelValue":l[0]||(l[0]=r=>f(a)?a.value=r:null),hint:`${S(a).state}, ${S(a).abbr}`,items:i,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":"",placeholder:"Select State"},null,8,["modelValue","hint"])}}},R={__name:"DemoSelectVariant",setup(u){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>(p(),d(V,null,{default:t(()=>[e(n,{cols:"12",sm:"6"},{default:t(()=>[e(h,{items:a,label:"Outlined",placeholder:"Select Item"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:t(()=>[e(h,{items:a,label:"Filled",placeholder:"Select Item",variant:"filled"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:t(()=>[e(h,{items:a,label:"Solo",placeholder:"Select Item",variant:"solo"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:t(()=>[e(h,{items:a,label:"Plain",placeholder:"Select Item",variant:"plain"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:t(()=>[e(h,{items:a,label:"Underlined",variant:"underlined",placeholder:"Select Item"})]),_:1})]),_:1}))}},H={__name:"DemoSelectDensity",setup(u){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=_;return p(),d(l,{items:a,label:"Density",density:"compact",placeholder:"Select Item"})}}},L={__name:"DemoSelectBasic",setup(u){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=_;return p(),d(l,{items:a,label:"Standard",placeholder:"Select Item"})}}},P={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`},Y={ts:`<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`},E={ts:`<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`},Z={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`},q={ts:`<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="bx-map-alt"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="bx-map-alt"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="bx-map-alt"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="bx-map-alt"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`},J={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`},K={ts:`<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`},Q={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="bx-x"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="bx-x"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`},W={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`},X=o("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1),ee=o("p",null,[s("You can use "),o("code",null,"density"),s(" prop to reduce the field height and lower max height of list items.")],-1),te=o("p",null,[s(" Use "),o("code",null,"filled"),s(", "),o("code",null,"outlined"),s(", "),o("code",null,"solo"),s(", "),o("code",null,"underlined"),s(" and "),o("code",null,"plain"),s(" options of "),o("code",null,"variant"),s(" prop to change appearance of select. ")],-1),ae=o("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1),le=o("p",null,[s("Use a custom "),o("code",null,"prepend"),s(" or "),o("code",null,"appended"),s(" icon.")],-1),oe=o("p",null,[s("Use "),o("code",null,"chips"),s(" prop to make selected option as chip.")],-1),se=o("p",null,[s("Custom props can be passed directly to "),o("code",null,"v-menu"),s(" using "),o("code",null,"menuProps"),s(" prop.")],-1),ie=o("p",null,[s("Use "),o("code",null,"multiple"),s(" prop to select multiple option.")],-1),ne=o("p",null,[s("The "),o("code",null,"selection"),s(" slot can be used to customize the way selected values are shown in the input.")],-1),Me={__name:"select",setup(u){return(a,i)=>{const m=L,l=G,c=H,r=R,v=M,A=U,C=T,z=j,g=N,F=$;return p(),d(V,null,{default:t(()=>[e(n,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Basic",code:P},{default:t(()=>[X,e(m)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Density",code:Z},{default:t(()=>[ee,e(c)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(l,{title:"Variant",code:W},{default:t(()=>[te,e(r)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Custom text and value",code:E},{default:t(()=>[ae,e(v)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Icons",code:q},{default:t(()=>[le,e(A)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Chips",code:Y},{default:t(()=>[oe,e(C)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Menu Props",code:J},{default:t(()=>[se,e(z)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Multiple",code:K},{default:t(()=>[ie,e(g)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Selection slot",code:Q},{default:t(()=>[ne,e(F)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Me as default};
