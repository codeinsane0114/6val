import{r as u,b as j,i as M,a as O,c as Y,l as D,p as L,d as S,f as I,e as R,u as J}from"./validators-DpYrMFzk.js";import{r as t,o as g,f as P,e as o,b as l,m as e,aZ as V,al as N,t as y,b2 as U,d as $}from"./main-BpgBUGps.js";import{_ as B}from"./AppTextField-CidaaHzM.js";import{V as A,a as d}from"./VRow-DcLldsAi.js";import{V as E}from"./VForm-HbYQbjWg.js";import{_ as Z}from"./AppCardCode-vSvswVsM.js";import"./helpers-DK5QwNv0.js";import"./form-jV7EneQK.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VImg-MA4fhMLa.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VCard-DPA8ST1d.js";import"./VAvatar-B9R7oHU8.js";import"./VCardText-RhVa6W5U.js";import"./VDivider-CPy3CxIk.js";const z={__name:"DemoFormValidationValidationTypes",setup(T){const w=t(""),h=t(""),F=t(""),n=t(""),m=t(""),c=t(""),b=t(""),s=t(""),p=t(""),v=t(""),f=t(""),q=t(""),k=t();return(r,a)=>{const C=B;return g(),P(e(E),{ref_key:"refForm",ref:k,onSubmit:a[13]||(a[13]=U(()=>{},["prevent"]))},{default:o(()=>[l(A,null,{default:o(()=>[l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(w),"onUpdate:modelValue":a[0]||(a[0]=i=>V(w)?w.value=i:null),"persistent-placeholder":"",placeholder:"This field is required",rules:["requiredValidator"in r?r.requiredValidator:e(u)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(h),"onUpdate:modelValue":a[1]||(a[1]=i=>V(h)?h.value=i:null),"persistent-placeholder":"",placeholder:"Enter Number between 10 & 20",rules:["requiredValidator"in r?r.requiredValidator:e(u),("betweenValidator"in r?r.betweenValidator:e(j))(e(h),10,20)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(F),"onUpdate:modelValue":a[2]||(a[2]=i=>V(F)?F.value=i:null),"persistent-placeholder":"",placeholder:"Must only consist of numbers",rules:["requiredValidator"in r?r.requiredValidator:e(u),"integerValidator"in r?r.integerValidator:e(M)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(n),"onUpdate:modelValue":a[3]||(a[3]=i=>V(n)?n.value=i:null),"persistent-placeholder":"",placeholder:"Must match the specified regular expression : ^([0-9]+)$ - numbers only",rules:["requiredValidator"in r?r.requiredValidator:e(u),("regexValidator"in r?r.regexValidator:e(O))(e(n),"^([0-9]+)$")]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(m),"onUpdate:modelValue":a[4]||(a[4]=i=>V(m)?m.value=i:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters",rules:["requiredValidator"in r?r.requiredValidator:e(u),"alphaValidator"in r?r.alphaValidator:e(Y)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(c),"onUpdate:modelValue":a[5]||(a[5]=i=>V(c)?c.value=i:null),"persistent-placeholder":"",placeholder:"Length must be exactly 3 characters.",rules:["requiredValidator"in r?r.requiredValidator:e(u),("lengthValidator"in r?r.lengthValidator:e(D))(e(c),3)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(b),"onUpdate:modelValue":a[6]||(a[6]=i=>V(b)?b.value=i:null),"persistent-placeholder":"",placeholder:"Password Input Field",type:"password",rules:["requiredValidator"in r?r.requiredValidator:e(u),"passwordValidator"in r?r.passwordValidator:e(L)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(s),"onUpdate:modelValue":a[7]||(a[7]=i=>V(s)?s.value=i:null),"persistent-placeholder":"",placeholder:"The digits field must be numeric and exactly contain 3 digits",rules:["requiredValidator"in r?r.requiredValidator:e(u),("lengthValidator"in r?r.lengthValidator:e(D))(e(s),3),"integerValidator"in r?r.integerValidator:e(M)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(p),"onUpdate:modelValue":a[8]||(a[8]=i=>V(p)?p.value=i:null),"persistent-placeholder":"",placeholder:"Repeat password must match",type:"password",rules:["requiredValidator"in r?r.requiredValidator:e(u),("confirmedValidator"in r?r.confirmedValidator:e(S))(e(p),e(b))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(v),"onUpdate:modelValue":a[9]||(a[9]=i=>V(v)?v.value=i:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters, numbers, dashes or underscores",rules:["requiredValidator"in r?r.requiredValidator:e(u),"alphaDashValidator"in r?r.alphaDashValidator:e(I)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(f),"onUpdate:modelValue":a[10]||(a[10]=i=>V(f)?f.value=i:null),"persistent-placeholder":"",placeholder:"Must be a valid email",rules:["requiredValidator"in r?r.requiredValidator:e(u),"emailValidator"in r?r.emailValidator:e(R)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(q),"onUpdate:modelValue":a[11]||(a[11]=i=>V(q)?q.value=i:null),"persistent-placeholder":"",placeholder:"Must be a valid url",rules:["requiredValidator"in r?r.requiredValidator:e(u),"urlValidator"in r?r.urlValidator:e(J)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:a[12]||(a[12]=i=>{var x;return(x=e(k))==null?void 0:x.validate()})},{default:o(()=>[y(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},G={__name:"DemoFormValidationValidatingMultipleRules",setup(T){const w=t(),h=t(),F=t(),n=t(),m=t(),c=t(!1),b=t(!1);return(s,p)=>{const v=B;return g(),P(e(E),{ref_key:"refForm",ref:F,onSubmit:U(()=>{},["prevent"])},{default:o(()=>[l(A,null,{default:o(()=>[l(d,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(w),"onUpdate:modelValue":p[0]||(p[0]=f=>V(w)?w.value=f:null),label:"Name",placeholder:"Your Name",rules:["requiredValidator"in s?s.requiredValidator:e(u)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(h),"onUpdate:modelValue":p[1]||(p[1]=f=>V(h)?h.value=f:null),label:"Email",placeholder:"Your Email",rules:["requiredValidator"in s?s.requiredValidator:e(u),"emailValidator"in s?s.emailValidator:e(R)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(n),"onUpdate:modelValue":p[2]||(p[2]=f=>V(n)?n.value=f:null),label:"Password",type:e(c)?"text":"password","append-inner-icon":e(c)?"bx-hide":"bx-show",placeholder:"Enter Password",rules:["requiredValidator"in s?s.requiredValidator:e(u),"passwordValidator"in s?s.passwordValidator:e(L)],autocomplete:"on","onClick:appendInner":p[3]||(p[3]=f=>c.value=!e(c))},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(m),"onUpdate:modelValue":p[4]||(p[4]=f=>V(m)?m.value=f:null),label:"Confirm Password",type:e(b)?"text":"password",placeholder:"Confirm Password","append-inner-icon":e(m)?"bx-hide":"bx-show",rules:["requiredValidator"in s?s.requiredValidator:e(u),("confirmedValidator"in s?s.confirmedValidator:e(S))(e(m),e(n))],autocomplete:"on","onClick:appendInner":p[5]||(p[5]=f=>b.value=!e(b))},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),l(d,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:p[6]||(p[6]=f=>{var q;return(q=e(F))==null?void 0:q.validate()})},{default:o(()=>[y(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},H={__name:"DemoFormValidationSimpleFormValidation",setup(T){const w=t(""),h=t(""),F=t();return(n,m)=>{const c=B;return g(),P(e(E),{ref_key:"refForm",ref:F,onSubmit:U(()=>{},["prevent"])},{default:o(()=>[l(A,null,{default:o(()=>[l(d,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:e(w),"onUpdate:modelValue":m[0]||(m[0]=b=>V(w)?w.value=b:null),label:"First Name",placeholder:"John",rules:["requiredValidator"in n?n.requiredValidator:e(u)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:e(h),"onUpdate:modelValue":m[1]||(m[1]=b=>V(h)?h.value=b:null),label:"Email",placeholder:"john@email.com",rules:["requiredValidator"in n?n.requiredValidator:e(u),"emailValidator"in n?n.emailValidator:e(R)]},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:m[2]||(m[2]=b=>{var s;return(s=e(F))==null?void 0:s.validate()})},{default:o(()=>[y(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},K={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const firstName = ref('')
const email = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Q={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const name = ref()
const email = ref()
const refForm = ref<VForm>()
const password = ref()
const confirmPassword = ref()
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          label="Name"
          placeholder="Your Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Your Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          label="Confirm Password"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          :append-inner-icon="confirmPassword ? 'bx-hide' : 'bx-show'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const name = ref()
const email = ref()
const refForm = ref()
const password = ref()
const confirmPassword = ref()
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          label="Name"
          placeholder="Your Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Your Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          label="Confirm Password"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          :append-inner-icon="confirmPassword ? 'bx-hide' : 'bx-show'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},W={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length must be exactly 3 characters."
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length must be exactly 3 characters."
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},X=$("p",null,[y("Use "),$("code",null,"Rules"),y(" prop to validate the input.")],-1),ve={__name:"form-validation",setup(T){return(w,h)=>{const F=H,n=Z,m=G,c=z;return g(),P(A,null,{default:o(()=>[l(d,{cols:"12"},{default:o(()=>[l(n,{title:"Simple Form Validation",code:K},{default:o(()=>[X,l(F)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12"},{default:o(()=>[l(n,{title:"Validating Multiple Rules",code:Q},{default:o(()=>[l(m)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12"},{default:o(()=>[l(n,{title:"Validation Types",code:W},{default:o(()=>[l(c)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ve as default};
