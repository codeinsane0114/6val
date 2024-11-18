import{_ as r}from"./AppFileInput-BhjMFI0l.js";import{r as F,w as D,o as c,f as s,m as b,aZ as I,e as n,c as j,F as S,h as N,t,v as L,b as e,d as l}from"./main-BpgBUGps.js";import{V as U}from"./VChip-Gdsswa87.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a,V as g}from"./VRow-DcLldsAi.js";import{V as h}from"./VFileInput-DLFE1sHG.js";import{_ as k}from"./AppCardCode-vSvswVsM.js";import"./form-jV7EneQK.js";import"./VSlideGroup-qhrbewnN.js";import"./VAvatar-B9R7oHU8.js";import"./VImg-MA4fhMLa.js";/* empty css              */import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";import"./VCounter-B6UOvRBl.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VCard-DPA8ST1d.js";import"./VCardText-RhVa6W5U.js";import"./VDivider-CPy3CxIk.js";const B={__name:"DemoFileInputLoading",setup(u){const i=F(),o=F(!0);return D(i,()=>{o.value=!i.value[0]}),(_,p)=>{const d=r;return c(),s(d,{modelValue:b(i),"onUpdate:modelValue":p[0]||(p[0]=f=>I(i)?i.value=f:null),loading:b(o),color:"primary",label:"File input",variant:"outlined"},null,8,["modelValue","loading"])}}},P={__name:"DemoFileInputSelectionSlot",setup(u){const i=F([]);return(o,_)=>{const p=r;return c(),s(p,{modelValue:b(i),"onUpdate:modelValue":_[0]||(_[0]=d=>I(i)?i.value=d:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-inner-icon":"bx-paperclip"},{selection:n(({fileNames:d})=>[(c(!0),j(S,null,N(d,f=>(c(),s(U,{key:f,label:"",size:"small",color:"primary",class:"me-2"},{default:n(()=>[t(L(f),1)]),_:2},1024))),128))]),_:1},8,["modelValue"])}}},R={__name:"DemoFileInputValidation",setup(u){const i=[o=>!o||!o.length||o[0].size<1e6||"Avatar size should be less than 1 MB!"];return(o,_)=>{const p=r;return c(),s(p,{rules:i,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-inner-icon":"bx-camera",variant:"outlined"})}}},M={};function T(u,i){const o=r;return c(),s(o,{"show-size":"",label:"File input"})}const O=m(M,[["render",T]]),Y={};function E(u,i){const o=r;return c(),s(o,{label:"File input","prepend-icon":"bx-camera"})}const W=m(Y,[["render",E]]),Z={};function q(u,i){const o=r;return c(),s(o,{multiple:"",label:"File input"})}const G=m(Z,[["render",q]]),H={};function J(u,i){const o=r;return c(),s(o,{"show-size":"",counter:"",multiple:"",label:"File input"})}const K=m(H,[["render",J]]),Q={};function X(u,i){const o=r;return c(),s(o,{chips:"",label:"File input w/ chips"})}const ee=m(Q,[["render",X]]),te={};function le(u,i){const o=r;return c(),s(o,{accept:"image/*",label:"File input"})}const ne=m(te,[["render",le]]),oe={};function ie(u,i){return c(),s(g,null,{default:n(()=>[e(a,{cols:"12",sm:"6"},{default:n(()=>[e(h,{label:"Outlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(h,{label:"Filled",variant:"filled"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(h,{label:"Solo",variant:"solo"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(h,{label:"Plain",variant:"plain"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(h,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const pe=m(oe,[["render",ie]]),ae={};function ce(u,i){const o=r;return c(),s(o,{label:"File input",density:"compact"})}const se=m(ae,[["render",ce]]),ue={};function re(u,i){const o=r;return c(),s(o,{label:"File input"})}const me=m(ue,[["render",re]]),de={ts:`<template>
  <AppFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},_e={ts:`<template>
  <AppFileInput label="File input" />
</template>
`,js:`<template>
  <AppFileInput label="File input" />
</template>
`},fe={ts:`<template>
  <AppFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <AppFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},he={ts:`<template>
  <AppFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},Fe={ts:`<template>
  <AppFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <AppFileInput
    label="File input"
    density="compact"
  />
</template>
`},be={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <AppFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
    variant="outlined"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <AppFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
    variant="outlined"
  />
</template>
`},Ie={ts:`<template>
  <AppFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    multiple
    label="File input"
  />
</template>
`},ge={ts:`<template>
  <AppFileInput
    label="File input"
    prepend-icon="bx-camera"
  />
</template>
`,js:`<template>
  <AppFileInput
    label="File input"
    prepend-icon="bx-camera"
  />
</template>
`},Ve={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <AppFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-inner-icon="bx-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </AppFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <AppFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-inner-icon="bx-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </AppFileInput>
</template>
`},ve={ts:`<template>
  <AppFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    show-size
    label="File input"
  />
</template>
`},Ae={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <AppFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-inner-icon="bx-camera"
    variant="outlined"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <AppFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-inner-icon="bx-camera"
    variant="outlined"
  />
</template>
`},ye={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},Ce=l("p",null,[t("The "),l("code",null,"v-file-input"),t(" component is used to selecting files.")],-1),we=l("p",null,[t("You can reduces the file input height with "),l("code",null,"density"),t(" prop. Available options are: "),l("code",null,"default"),t(", "),l("code",null,"comfortable"),t(", and "),l("code",null,"compact"),t(".")],-1),xe=l("p",null,[t("use "),l("code",null,"solo"),t(", "),l("code",null,"filled"),t(", "),l("code",null,"outlined"),t(", "),l("code",null,"plain"),t(" and "),l("code",null,"underlined"),t(" option of "),l("code",null,"variant"),t(" prop to change the look of file input.")],-1),ze=l("p",null,[l("code",null,"v-file-input"),t(" component can accept only specific media formats/file types if you want.")],-1),$e=l("p",null,[t("Use "),l("code",null,"chip"),t(" prop to display the selected file as a chip.")],-1),De=l("p",null,[t("When using the "),l("code",null,"show-size"),t(" property along with "),l("code",null,"counter"),t(", the total number of files and size will be displayed under the input.")],-1),je=l("p",null,[t(" The "),l("code",null,"v-file-input"),t(" can contain multiple files at the same time when using the "),l("code",null,"multiple"),t(" prop. ")],-1),Se=l("p",null,[t(" The "),l("code",null,"v-file-input"),t(" has a default "),l("code",null,"prepend-icon"),t(" that can be set on the component or adjusted globally. ")],-1),Ne=l("p",null,[t("The displayed size of the selected file(s) can be configured with the "),l("code",null,"show-size"),t(" property.")],-1),Le=l("p",null,[t("You can use the "),l("code",null,"rules"),t(" prop to create your own custom validation parameters.")],-1),Ue=l("p",null,[t("Using the "),l("code",null,"selection"),t(" slot, you can customize the appearance of your input selections.")],-1),ke=l("p",null,[t("Use "),l("code",null,"loading"),t(" prop to displays linear progress bar.")],-1),ot={__name:"file-input",setup(u){return(i,o)=>{const _=me,p=k,d=se,f=pe,V=ne,v=ee,A=K,y=G,C=W,w=O,x=R,z=P,$=B;return c(),s(g,{class:"match-height"},{default:n(()=>[e(a,{cols:"12",md:"6"},{default:n(()=>[e(p,{title:"Basic",code:_e},{default:n(()=>[Ce,e(_)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(p,{title:"Density",code:Fe},{default:n(()=>[we,e(d)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:n(()=>[e(p,{title:"Variant",code:ye},{default:n(()=>[xe,e(f)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(p,{title:"Accept",code:de},{default:n(()=>[ze,e(V)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(p,{title:"Chips",code:fe},{default:n(()=>[$e,e(v)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(p,{title:"Counter",code:he},{default:n(()=>[De,e(A)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(p,{title:"Multiple",code:Ie},{default:n(()=>[je,e(y)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(p,{title:"Prepend icon",code:ge},{default:n(()=>[Se,e(C)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(p,{title:"Show size",code:ve},{default:n(()=>[Ne,e(w)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(p,{title:"Validation",code:Ae},{default:n(()=>[Le,e(x)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(p,{title:"Selection slot",code:Ve},{default:n(()=>[Ue,e(z)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(p,{title:"Loading",code:be},{default:n(()=>[ke,e($)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ot as default};
