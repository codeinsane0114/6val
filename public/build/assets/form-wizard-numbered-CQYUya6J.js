import{_ as O}from"./AppCardCode-vSvswVsM.js";import{_ as T}from"./AppSelect-crBF-FCt.js";import{_ as N}from"./AppTextField-CidaaHzM.js";import{_ as $}from"./AppStepper-6p-jwTXp.js";import{V as L}from"./VCardText-RhVa6W5U.js";import{V as D}from"./VForm-HbYQbjWg.js";import{V as B,a as h}from"./VWindowItem-COAbTIN-.js";import{V as C,a as r}from"./VRow-DcLldsAi.js";import{r as V,o as x,c as z,d as m,b as e,m as l,aZ as I,e as o,al as v,a3 as k,t as g,f as A,F as M,b2 as q,x as Q}from"./main-BpgBUGps.js";import{V as W}from"./VCard-DPA8ST1d.js";import{V as E}from"./VDivider-CPy3CxIk.js";import{r as F,e as X,p as Y,d as ee,u as R}from"./validators-DpYrMFzk.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./form-jV7EneQK.js";import"./VSelect-CvnWonW6.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VImg-MA4fhMLa.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-Bu48BGuL.js";import"./ssrBoot-Cao_hl35.js";import"./VAvatar-B9R7oHU8.js";import"./dialog-transition-Dw95iG-S.js";import"./VMenu-D0wOrHxC.js";import"./VOverlay-BSwVgU5G.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";import"./VChip-Gdsswa87.js";import"./VSlideGroup-qhrbewnN.js";/* empty css              */import"./helpers-DK5QwNv0.js";const j={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        class="stepper-icon-step-bg"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="bx-left-arrow-alt"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="bx-right-arrow-alt"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        class="stepper-icon-step-bg"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="bx-left-arrow-alt"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="bx-right-arrow-alt"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`},le={ts:`<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refSocialLinkForm = ref<VForm>()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true

      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    }
    else { isCurrentStepValid.value = false }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    disabled
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="bx-right-arrow-alt"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="bx-right-arrow-alt"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref()
const refPersonalForm = ref()
const refSocialLinkForm = ref()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true
      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    } else {
      isCurrentStepValid.value = false
    }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    disabled
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="bx-right-arrow-alt"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="bx-right-arrow-alt"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},K={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'bx-hide' : 'bx-show'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="bx-left-arrow-alt"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="bx-right-arrow-alt"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'bx-hide' : 'bx-show'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="bx-left-arrow-alt"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="bx-right-arrow-alt"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`},oe={class:"mb-6"},ae=m("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),te=m("p",{class:"mb-0"}," Enter your Account Details ",-1),se=m("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),re=m("p",{class:"mb-0"}," Setup Information ",-1),de=m("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),ne=m("p",{class:"mb-0"}," Add Social Links ",-1),ie={class:"d-flex flex-wrap gap-4 justify-space-between mt-8"},ue={__name:"DemoFormWizardNumberdModernBasic",setup(U){const S=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=V(0),p=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),P=()=>{console.log(s.value)};return(_,a)=>{const w=$,n=N,b=T;return x(),z(M,null,[m("div",oe,[e(w,{"current-step":l(d),"onUpdate:currentStep":a[0]||(a[0]=t=>I(d)?d.value=t:null),align:"start",items:S},null,8,["current-step"])]),e(W,null,{default:o(()=>[e(L,null,{default:o(()=>[e(D,null,{default:o(()=>[e(B,{modelValue:l(d),"onUpdate:modelValue":a[15]||(a[15]=t=>I(d)?d.value=t:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[ae,te]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).username,"onUpdate:modelValue":a[1]||(a[1]=t=>l(s).username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).email,"onUpdate:modelValue":a[2]||(a[2]=t=>l(s).email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).password,"onUpdate:modelValue":a[3]||(a[3]=t=>l(s).password=t),label:"Password",placeholder:"············",type:l(p)?"text":"password","append-inner-icon":l(p)?"bx-hide":"bx-show","onClick:appendInner":a[4]||(a[4]=t=>p.value=!l(p))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).cPassword,"onUpdate:modelValue":a[5]||(a[5]=t=>l(s).cPassword=t),label:"Confirm Password",placeholder:"············",type:l(f)?"text":"password","append-inner-icon":l(f)?"bx-hide":"bx-show","onClick:appendInner":a[6]||(a[6]=t=>f.value=!l(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[se,re]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).firstName,"onUpdate:modelValue":a[7]||(a[7]=t=>l(s).firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).lastName,"onUpdate:modelValue":a[8]||(a[8]=t=>l(s).lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:l(s).country,"onUpdate:modelValue":a[9]||(a[9]=t=>l(s).country=t),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:l(s).language,"onUpdate:modelValue":a[10]||(a[10]=t=>l(s).language=t),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[de,ne]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).twitter,"onUpdate:modelValue":a[11]||(a[11]=t=>l(s).twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).facebook,"onUpdate:modelValue":a[12]||(a[12]=t=>l(s).facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).googlePlus,"onUpdate:modelValue":a[13]||(a[13]=t=>l(s).googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).linkedIn,"onUpdate:modelValue":a[14]||(a[14]=t=>l(s).linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),m("div",ie,[e(v,{color:"secondary",variant:"tonal",disabled:l(d)===0,onClick:a[16]||(a[16]=t=>d.value--)},{default:o(()=>[e(k,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),g(" Previous ")]),_:1},8,["disabled"]),S.length-1===l(d)?(x(),A(v,{key:0,color:"success",onClick:P},{default:o(()=>[g(" submit ")]),_:1})):(x(),A(v,{key:1,onClick:a[17]||(a[17]=t=>d.value++)},{default:o(()=>[g(" Next "),e(k,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})],64)}}},me=m("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),ce=m("p",{class:"mb-0"}," Enter your Account Details ",-1),pe=m("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),Ve=m("p",{class:"mb-0"}," Setup Information ",-1),fe=m("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),be=m("p",{class:"mb-0"}," Add Social Links ",-1),we={class:"d-flex flex-wrap gap-4 justify-space-between mt-8"},Ce={__name:"DemoFormWizardNumberedBasic",setup(U){const S=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=V(0),p=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),P=()=>{console.log(s.value)};return(_,a)=>{const w=$,n=N,b=T;return x(),A(W,null,{default:o(()=>[e(L,null,{default:o(()=>[e(w,{"current-step":l(d),"onUpdate:currentStep":a[0]||(a[0]=t=>I(d)?d.value=t:null),items:S,class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1}),e(E),e(L,null,{default:o(()=>[e(D,null,{default:o(()=>[e(B,{modelValue:l(d),"onUpdate:modelValue":a[15]||(a[15]=t=>I(d)?d.value=t:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[me,ce]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).username,"onUpdate:modelValue":a[1]||(a[1]=t=>l(s).username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).email,"onUpdate:modelValue":a[2]||(a[2]=t=>l(s).email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).password,"onUpdate:modelValue":a[3]||(a[3]=t=>l(s).password=t),label:"Password",placeholder:"············",type:l(p)?"text":"password","append-inner-icon":l(p)?"bx-hide":"bx-show","onClick:appendInner":a[4]||(a[4]=t=>p.value=!l(p))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).cPassword,"onUpdate:modelValue":a[5]||(a[5]=t=>l(s).cPassword=t),label:"Confirm Password",placeholder:"············",type:l(f)?"text":"password","append-inner-icon":l(f)?"bx-hide":"bx-show","onClick:appendInner":a[6]||(a[6]=t=>f.value=!l(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[pe,Ve]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).firstName,"onUpdate:modelValue":a[7]||(a[7]=t=>l(s).firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).lastName,"onUpdate:modelValue":a[8]||(a[8]=t=>l(s).lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:l(s).country,"onUpdate:modelValue":a[9]||(a[9]=t=>l(s).country=t),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:l(s).language,"onUpdate:modelValue":a[10]||(a[10]=t=>l(s).language=t),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[fe,be]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).twitter,"onUpdate:modelValue":a[11]||(a[11]=t=>l(s).twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).facebook,"onUpdate:modelValue":a[12]||(a[12]=t=>l(s).facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).googlePlus,"onUpdate:modelValue":a[13]||(a[13]=t=>l(s).googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).linkedIn,"onUpdate:modelValue":a[14]||(a[14]=t=>l(s).linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),m("div",we,[e(v,{color:"secondary",variant:"tonal",disabled:l(d)===0,onClick:a[16]||(a[16]=t=>d.value--)},{default:o(()=>[e(k,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),g(" Previous ")]),_:1},8,["disabled"]),S.length-1===l(d)?(x(),A(v,{key:0,color:"success",onClick:P},{default:o(()=>[g(" submit ")]),_:1})):(x(),A(v,{key:1,onClick:a[17]||(a[17]=t=>d.value++)},{default:o(()=>[g(" Next "),e(k,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})}}},ve=m("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),ge=m("p",{class:"mb-0"}," Enter your Account Details ",-1),he=m("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),Se=m("p",{class:"mb-0"}," Setup Information ",-1),xe=m("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),ke=m("p",{class:"mb-0"}," Add Social Links ",-1),Fe={class:"d-flex flex-wrap gap-4 justify-space-between mt-8"},Ae={__name:"DemoFormWizardNumberedModernVertical",setup(U){const S=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=V(0),p=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),P=()=>{console.log(s.value)};return(_,a)=>{const w=$,n=N,b=T;return x(),A(C,null,{default:o(()=>[e(r,{cols:"12",md:"4"},{default:o(()=>[e(w,{"current-step":l(d),"onUpdate:currentStep":a[0]||(a[0]=t=>I(d)?d.value=t:null),direction:"vertical",items:S},null,8,["current-step"])]),_:1}),e(r,{cols:"12",md:"8"},{default:o(()=>[e(W,null,{default:o(()=>[e(L,null,{default:o(()=>[e(D,null,{default:o(()=>[e(B,{modelValue:l(d),"onUpdate:modelValue":a[15]||(a[15]=t=>I(d)?d.value=t:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[ve,ge]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).username,"onUpdate:modelValue":a[1]||(a[1]=t=>l(s).username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).email,"onUpdate:modelValue":a[2]||(a[2]=t=>l(s).email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).password,"onUpdate:modelValue":a[3]||(a[3]=t=>l(s).password=t),placeholder:"············",label:"Password",type:l(p)?"text":"password","append-inner-icon":l(p)?"bx-hide":"bx-show","onClick:appendInner":a[4]||(a[4]=t=>p.value=!l(p))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).cPassword,"onUpdate:modelValue":a[5]||(a[5]=t=>l(s).cPassword=t),placeholder:"············",label:"Confirm Password",type:l(f)?"text":"password","append-inner-icon":l(f)?"bx-hide":"bx-show","onClick:appendInner":a[6]||(a[6]=t=>f.value=!l(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[he,Se]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).firstName,"onUpdate:modelValue":a[7]||(a[7]=t=>l(s).firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).lastName,"onUpdate:modelValue":a[8]||(a[8]=t=>l(s).lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:l(s).country,"onUpdate:modelValue":a[9]||(a[9]=t=>l(s).country=t),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:l(s).language,"onUpdate:modelValue":a[10]||(a[10]=t=>l(s).language=t),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[xe,ke]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).twitter,"onUpdate:modelValue":a[11]||(a[11]=t=>l(s).twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).facebook,"onUpdate:modelValue":a[12]||(a[12]=t=>l(s).facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).googlePlus,"onUpdate:modelValue":a[13]||(a[13]=t=>l(s).googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).linkedIn,"onUpdate:modelValue":a[14]||(a[14]=t=>l(s).linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),m("div",Fe,[e(v,{color:"secondary",variant:"tonal",disabled:l(d)===0,onClick:a[16]||(a[16]=t=>d.value--)},{default:o(()=>[e(k,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),g(" Previous ")]),_:1},8,["disabled"]),S.length-1===l(d)?(x(),A(v,{key:0,color:"success",onClick:P},{default:o(()=>[g(" submit ")]),_:1})):(x(),A(v,{key:1,onClick:a[17]||(a[17]=t=>d.value++)},{default:o(()=>[g(" Next "),e(k,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},Pe=m("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),ye=m("p",{class:"mb-0"}," Enter your Account Details ",-1),Ie={class:"d-flex flex-wrap gap-4 justify-space-between mt-8"},Le=m("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),_e=m("p",{class:"mb-0"}," Setup Information ",-1),De={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Ue=m("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),Te=m("p",{class:"mb-0"}," Add Social Links ",-1),Ne={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},$e={__name:"DemoFormWizardNumberedValidation",setup(U){const S=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=V(0),p=V(!1),f=V(!1),s=V(!0),P=V(),_=V(),a=V(),w=V({username:"",email:"",password:"",cPassword:""}),n=V({firstName:"",lastName:"",country:void 0,language:void 0}),b=V({twitter:"",facebook:"",googlePlus:"",linkedIn:""}),t=()=>{var i;(i=P.value)==null||i.validate().then(u=>{u.valid?(d.value++,s.value=!0):s.value=!1})},Z=()=>{var i;(i=_.value)==null||i.validate().then(u=>{u.valid?(d.value++,s.value=!0):s.value=!1})},H=()=>{var i;(i=a.value)==null||i.validate().then(u=>{u.valid?(s.value=!0,console.log({...w.value,...n.value,...b.value})):s.value=!1})};return(i,u)=>{const J=$,y=N,G=T;return x(),A(W,null,{default:o(()=>[e(L,null,{default:o(()=>[e(J,{"current-step":l(d),"onUpdate:currentStep":u[0]||(u[0]=c=>I(d)?d.value=c:null),items:S,"is-active-step-valid":l(s)},null,8,["current-step","is-active-step-valid"])]),_:1}),e(E),e(L,null,{default:o(()=>[e(B,{modelValue:l(d),"onUpdate:modelValue":u[17]||(u[17]=c=>I(d)?d.value=c:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(l(D),{ref_key:"refAccountForm",ref:P,onSubmit:q(t,["prevent"])},{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[Pe,ye]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(y,{modelValue:l(w).username,"onUpdate:modelValue":u[1]||(u[1]=c=>l(w).username=c),placeholder:"CarterLeonardo",rules:["requiredValidator"in i?i.requiredValidator:l(F)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(y,{modelValue:l(w).email,"onUpdate:modelValue":u[2]||(u[2]=c=>l(w).email=c),placeholder:"carterleonardo@gmail.com",rules:["requiredValidator"in i?i.requiredValidator:l(F),"emailValidator"in i?i.emailValidator:l(X)],label:"Email"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(y,{modelValue:l(w).password,"onUpdate:modelValue":u[3]||(u[3]=c=>l(w).password=c),label:"Password",placeholder:"············",rules:["requiredValidator"in i?i.requiredValidator:l(F),"passwordValidator"in i?i.passwordValidator:l(Y)],type:l(p)?"text":"password","append-inner-icon":l(p)?"bx-hide":"bx-show","onClick:appendInner":u[4]||(u[4]=c=>p.value=!l(p))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(y,{modelValue:l(w).cPassword,"onUpdate:modelValue":u[5]||(u[5]=c=>l(w).cPassword=c),label:"Confirm Password",placeholder:"············",rules:["requiredValidator"in i?i.requiredValidator:l(F),("confirmedValidator"in i?i.confirmedValidator:l(ee))(l(w).cPassword,l(w).password)],type:l(f)?"text":"password","append-inner-icon":l(f)?"bx-hide":"bx-show","onClick:appendInner":u[6]||(u[6]=c=>f.value=!l(f))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[m("div",Ie,[e(v,{color:"secondary",variant:"tonal",disabled:""},{default:o(()=>[e(k,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),g(" Previous ")]),_:1}),e(v,{type:"submit"},{default:o(()=>[g(" Next "),e(k,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(h,null,{default:o(()=>[e(l(D),{ref_key:"refPersonalForm",ref:_,onSubmit:q(Z,["prevent"])},{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[Le,_e]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(y,{modelValue:l(n).firstName,"onUpdate:modelValue":u[7]||(u[7]=c=>l(n).firstName=c),label:"First Name",rules:["requiredValidator"in i?i.requiredValidator:l(F)],placeholder:"Leonard"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(y,{modelValue:l(n).lastName,"onUpdate:modelValue":u[8]||(u[8]=c=>l(n).lastName=c),label:"Last Name",rules:["requiredValidator"in i?i.requiredValidator:l(F)],placeholder:"Carter"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(G,{modelValue:l(n).country,"onUpdate:modelValue":u[9]||(u[9]=c=>l(n).country=c),label:"Country",rules:["requiredValidator"in i?i.requiredValidator:l(F)],placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(G,{modelValue:l(n).language,"onUpdate:modelValue":u[10]||(u[10]=c=>l(n).language=c),label:"Language",rules:["requiredValidator"in i?i.requiredValidator:l(F)],placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[m("div",De,[e(v,{color:"secondary",variant:"tonal",onClick:u[11]||(u[11]=c=>d.value--)},{default:o(()=>[e(k,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),g(" Previous ")]),_:1}),e(v,{type:"submit"},{default:o(()=>[g(" Next "),e(k,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(h,null,{default:o(()=>[e(l(D),{ref_key:"refSocialLinkForm",ref:a,onSubmit:q(H,["prevent"])},{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[Ue,Te]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(y,{modelValue:l(b).twitter,"onUpdate:modelValue":u[12]||(u[12]=c=>l(b).twitter=c),placeholder:"https://twitter.com/abc",rules:["requiredValidator"in i?i.requiredValidator:l(F),"urlValidator"in i?i.urlValidator:l(R)],label:"Twitter"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(y,{modelValue:l(b).facebook,"onUpdate:modelValue":u[13]||(u[13]=c=>l(b).facebook=c),placeholder:"https://facebook.com/abc",rules:["requiredValidator"in i?i.requiredValidator:l(F),"urlValidator"in i?i.urlValidator:l(R)],label:"Facebook"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(y,{modelValue:l(b).googlePlus,"onUpdate:modelValue":u[14]||(u[14]=c=>l(b).googlePlus=c),placeholder:"https://plus.google.com/abc",rules:["requiredValidator"in i?i.requiredValidator:l(F),"urlValidator"in i?i.urlValidator:l(R)],label:"Google+"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(y,{modelValue:l(b).linkedIn,"onUpdate:modelValue":u[15]||(u[15]=c=>l(b).linkedIn=c),placeholder:"https://likedin.com/abc",rules:["requiredValidator"in i?i.requiredValidator:l(F),"urlValidator"in i?i.urlValidator:l(R)],label:"LinkedIn"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[m("div",Ne,[e(v,{color:"secondary",variant:"tonal",onClick:u[16]||(u[16]=c=>d.value--)},{default:o(()=>[e(k,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),g(" Previous ")]),_:1}),e(v,{color:"success",type:"submit"},{default:o(()=>[g(" submit ")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},Be=m("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),We=m("p",{class:"mb-0"}," Enter your Account Details ",-1),Re=m("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),qe=m("p",{class:"mb-0"}," Setup Information ",-1),Ee=m("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),Ge=m("p",{class:"mb-0"}," Add Social Links ",-1),je={class:"d-flex flex-wrap gap-4 justify-space-between mt-8"},Ke={__name:"DemoFormWizardNumberedVertical",setup(U){const S=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=V(0),p=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),P=()=>{console.log(s.value)};return(_,a)=>{const w=$,n=N,b=T;return x(),A(W,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12",md:"4",class:Q(_.$vuetify.display.smAndDown?"border-b":"border-e")},{default:o(()=>[e(L,null,{default:o(()=>[e(w,{"current-step":l(d),"onUpdate:currentStep":a[0]||(a[0]=t=>I(d)?d.value=t:null),direction:"vertical",items:S},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(r,{cols:"12",md:"8"},{default:o(()=>[e(L,null,{default:o(()=>[e(D,null,{default:o(()=>[e(B,{modelValue:l(d),"onUpdate:modelValue":a[15]||(a[15]=t=>I(d)?d.value=t:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[Be,We]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).username,"onUpdate:modelValue":a[1]||(a[1]=t=>l(s).username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).email,"onUpdate:modelValue":a[2]||(a[2]=t=>l(s).email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).password,"onUpdate:modelValue":a[3]||(a[3]=t=>l(s).password=t),placeholder:"············",label:"Password",type:l(p)?"text":"password","append-inner-icon":l(p)?"bx-hide":"bx-show","onClick:appendInner":a[4]||(a[4]=t=>p.value=!l(p))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).cPassword,"onUpdate:modelValue":a[5]||(a[5]=t=>l(s).cPassword=t),placeholder:"············",label:"Confirm Password",type:l(f)?"text":"password","append-inner-icon":l(f)?"bx-hide":"bx-show","onClick:appendInner":a[6]||(a[6]=t=>f.value=!l(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[Re,qe]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).firstName,"onUpdate:modelValue":a[7]||(a[7]=t=>l(s).firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).lastName,"onUpdate:modelValue":a[8]||(a[8]=t=>l(s).lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:l(s).country,"onUpdate:modelValue":a[9]||(a[9]=t=>l(s).country=t),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:l(s).language,"onUpdate:modelValue":a[10]||(a[10]=t=>l(s).language=t),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[Ee,Ge]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).twitter,"onUpdate:modelValue":a[11]||(a[11]=t=>l(s).twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).facebook,"onUpdate:modelValue":a[12]||(a[12]=t=>l(s).facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).googlePlus,"onUpdate:modelValue":a[13]||(a[13]=t=>l(s).googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(s).linkedIn,"onUpdate:modelValue":a[14]||(a[14]=t=>l(s).linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),m("div",je,[e(v,{color:"secondary",variant:"tonal",disabled:l(d)===0,onClick:a[16]||(a[16]=t=>d.value--)},{default:o(()=>[e(k,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),g(" Previous ")]),_:1},8,["disabled"]),S.length-1===l(d)?(x(),A(v,{key:0,color:"success",onClick:P},{default:o(()=>[g(" submit ")]),_:1})):(x(),A(v,{key:1,onClick:a[17]||(a[17]=t=>d.value++)},{default:o(()=>[g(" Next "),e(k,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},ze=m("h3",{class:"text-h3 my-4"}," Modern ",-1),Ll={__name:"form-wizard-numbered",setup(U){return(S,d)=>{const p=O;return x(),z(M,null,[e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[e(p,{variant:"outlined",title:"Basic",code:j},{default:o(()=>[e(Ce)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(p,{variant:"outlined",title:"Validation",code:le},{default:o(()=>[e($e)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(p,{variant:"outlined",title:"Vertical",code:K},{default:o(()=>[e(Ke)]),_:1},8,["code"])]),_:1})]),_:1}),e(E,{class:"my-10 mx-n6"}),ze,e(C,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[e(p,{variant:"outlined",title:"Vertical",code:K},{default:o(()=>[e(Ae)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(p,{variant:"outlined",title:"Basic",code:j},{default:o(()=>[e(ue)]),_:1},8,["code"])]),_:1})]),_:1})],64)}}};export{Ll as default};
