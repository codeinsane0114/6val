<!-- ❗Errors in the form are set on line 60 -->
<script setup>
import { API_URL, axiosapi} from '@/axios';
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue';
import authV2LoginIllustration from '@images/pages/auth-v2-login-illustration.png';
import { VNodeRenderer } from '@layouts/components/VNodeRenderer';
import { themeConfig } from '@themeConfig';
import { VForm } from 'vuetify/components/VForm';
definePage({
  meta: {
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const isPasswordVisible = ref(false)
const route = useRoute()
const router = useRouter()
const ability = useAbility()

const errors = ref({
  email: undefined,
  password: undefined,
})

const refVForm = ref()

let credentials = ref({
  email: 'kshs2023@outlook.com',
  password: '12345678',
  role:'admin',
  recaptcha:''
})

const rememberMe = ref(false)
const login = async () => {
  try {

    const res = await axiosapi.post('/login/vue', {
        email: credentials.value.email,
        password: credentials.value.password,
        role: credentials.value.role,
        default_captcha_value: credentials.value.recaptcha,
        })
        .then(response => {
        // 성공적으로 응답을 받은 경우
            console.log("response")
            console.log(response.data);
            const { accessToken, userData, userAbilityRules } = response.data
            console.log(accessToken,userData,userAbilityRules);
            useCookie('userAbilityRules').value = userAbilityRules
            ability.update(userAbilityRules)
            useCookie('userData').value = userData
            useCookie('accessToken').value = accessToken

        })
        .catch(error => {
            console.log("error")
        // 에러 발생 시
        if (error.response) {
            // 서버에서 반환한 에러 응답 처리
            errors.value = error.response.data.errors;
        } else {
            // 네트워크 에러 등의 처리
            console.error(error.message);
        }
        });
    console.log("4")
    nextTick(() => {
        router.replace(route.query.to ? String(route.query.to) : 'dashboards/crm')
    })
    console.log("5")
  } catch (err) {
    console.error(err)
  }
}
let captchaImage = ref('');
const loadCaptcha = async () => {
  const random = Math.floor(Math.random() * (100000 - 0 + 1)) + 0;
  captchaImage.value=API_URL+'/login/recaptcha/'+random+'?captcha_session_id=default_recaptcha_id_admin_login'
  console.log("메시지가 변경되었습니다:", captchaImage,random);
}

onMounted(async() => {
      loadCaptcha();
      const token = document.head.querySelector('meta[name="csrf-token"]')?.content;
        console.log('token : ',token);
        if (token) {
            axiosapi.defaults.headers.common['X-CSRF-TOKEN'] = token;
        } else {
            console.error('CSRF token not found');
        }

    });
const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      login()
  })
}

</script>

<template>
  <RouterLink to="/">
    <div class="auth-logo d-flex align-center gap-x-2">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="auth-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </RouterLink>

  <VRow
    no-gutters
    class="auth-wrapper bg-surface"
  >
    <VCol
      md="8"
      class="d-none d-md-flex"
    >
      <div class="position-relative bg-background w-100 pa-8">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg
            max-width="700"
            :src="authV2LoginIllustration"
            class="auth-illustration"
          />
        </div>
      </div>
    </VCol>

    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-6"
      >
        <VCardText>
          <h4 class="text-h4 mb-1">
            Welcome to <span class="text-capitalize"> {{ themeConfig.app.title }} </span>! 👋🏻
          </h4>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>
        <VCardText>
          <VAlert
            color="primary"
            variant="tonal"
          >
            <p class="text-sm mb-2">
              Admin Email: <strong>credentials.email</strong> / Pass: <strong>admin</strong>
            </p>
            <p class="text-sm mb-0">
              Client Email: <strong>client@demo.com</strong> / Pass: <strong>client</strong>
            </p>
          </VAlert>
        </VCardText>
        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.email"
                  label="Email"
                  placeholder="johndoe@email.com"
                  type="email"
                  autofocus
                  :rules="[requiredValidator, emailValidator]"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :error-messages="errors.password"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center flex-wrap justify-space-between my-6">
                  <VCheckbox
                    v-model="rememberMe"
                    label="Remember me"
                  />
                  <RouterLink
                    class="text-primary"
                    :to="{ name: '6val-adminpage-forgot-password' }"
                  >
                    Forgot Password?
                  </RouterLink>
                </div>
                <div class="d-flex align-center flex-wrap justify-space-between my-6">
                  <img :src="captchaImage" alt="Captcha Image" v-if="captchaImage" style="margin-right: 16px;"/>

                  <AppTextField
                  v-model="credentials.recaptcha"
                  type="text"
                  placeholder="Enter captcha value"
                  :append-inner-icon="'bx-refresh'"
                  @click:append-inner="loadCaptcha"
                  />
                </div>
                <VBtn
                  block
                  type="submit"
                >
                  Login
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol
                cols="12"
                class="text-body-1 text-center"
              >
                <span class="d-inline-block">
                  New on our platform?
                </span>
                <RouterLink
                  class="text-primary ms-1 d-inline-block text-body-1"
                  :to="{ name: '6val-adminpage-register' }"
                >
                  Create an account
                </RouterLink>
              </VCol>
              <VCol
                cols="12"
                class="d-flex align-center"
              >
                <VDivider />
                <span class="mx-4">or</span>
                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol
                cols="12"
                class="text-center"
              >
                <AuthProvider />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>
