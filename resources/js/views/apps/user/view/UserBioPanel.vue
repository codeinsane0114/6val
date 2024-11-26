<script setup>
const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})

const standardPlan = {
  plan: 'Standard',
  price: 99,
  benefits: [
    '10 Users',
    'Up to 10GB storage',
    'Basic Support',
  ],
}

const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)

const resolveUserRoleVariant = role => {
  if (role === 'subscriber')
    return {
      color: 'warning',
      icon: 'bx-user',
    }
  if (role === 'author')
    return {
      color: 'success',
      icon: 'bx-check-circle',
    }
  if (role === 'maintainer')
    return {
      color: 'primary',
      icon: 'bx-pie-chart-alt',
    }
  if (role === 'editor')
    return {
      color: 'info',
      icon: 'bx-pencil',
    }
  if (role === 'admin')
    return {
      color: 'secondary',
      icon: 'bx-server',
    }
  
  return {
    color: 'primary',
    icon: 'bx-user',
  }
}
</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData">
        <VCardText class="text-center pt-12">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            :color="props.userData?.customer ? 'primary' : undefined"
            :variant="props.userData?.cus ? 'tonal' : undefined"
          >
            <!-- <VImg
              v-if="props.userData.customer.image_full_url.path"
              :src="props.userData.customer.image_full_url.path"
            /> -->
            <VImg
              :src="props.userData.customer?.image_full_url ? props.userData.customer.image_full_url.path : null "
            />
            <!-- <span
              v-else
              class="text-5xl font-weight-medium"
            >
              {{ avatarText(props.userData.customer.name) }}
            </span> -->
          </VAvatar>

          <!-- 👉 User fullName -->
          <h5 class="text-h5 mt-4">
            {{ props.userData.customer?.name ? props.userData.customer.name : null }}
          </h5>

          <!-- 👉 Role chip -->
          <!-- <VChip
            label
            :color="resolveUserRoleVariant(props.userData.role).color"
            size="small"
            class="text-capitalize mt-4"
          >
            {{ props.userData.role }}
          </VChip> -->
        </VCardText>

        <VCardText>
          <!-- 👉 Details -->
          <h5 class="text-h5">
            Details
          </h5>

          <VDivider class="my-4" />

          <!-- 👉 User Details list -->
          <VList class="card-list mt-2">
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Username:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.name ? props.userData.customer.name : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  User Email:
                  <span class="text-body-1 d-inline-block">
                    {{ props.userData.customer?.email ? props.userData.customer.email : null }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Member ID:
                  <div class="d-inline-block text-body-1 text-capitalize">
                    {{ props.userData.customer?.member_id ? props.userData.customer.member_id : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Member Name:
                  <div class="d-inline-block text-capitalize text-body-1">
                    {{ props.userData.customer?.member_name ? props.userData.customer.member_name : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Cell phone:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.phone ? props.userData.customer.phone : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Rank:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.rank ? props.userData.customer.rank : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Registration Date:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.created_at ? props.userData.customer.created_at : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Concierge:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.concierge ? props.userData.customer.concierge : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Recommender:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.recomender ? props.userData.customer.recomender : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Branch:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.branch ? props.userData.customer.branch : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Suggestion:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.suggestion ? props.userData.customer.suggestion : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Recommender:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.recomender ? props.userData.customer.recomender : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Mountain and rivers:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.mountains_rivers ? props.userData.customer.mountains_rivers : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Circulation Rate:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.circulation_rate ? props.userData.customer.circulation_rate : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Cumulative PV:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.cumulative_pv ? props.userData.customer.cumulative_pv : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Payment amount:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.wallet_balance ? props.userData.customer.wallet_balance : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Circulation Rate:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.circulation_rate ? props.userData.customer.circulation_rate : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Recognition account:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.recognition_account ? props.userData.customer.recognition_account : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Suspension of benefits:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.suspension_of_benefits ? props.userData.customer.suspension_of_benefits : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Zip code:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.customer?.zip ? props.userData.customer.zip : null }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>


          </VList>
        </VCardText>

        <!-- 👉 Edit and Suspend button -->
        <VCardText class="d-flex justify-center gap-x-4">
          <VBtn
            variant="elevated"
            @click="isUserInfoEditDialogVisible = true"
          >
            Edit
          </VBtn>

          <VBtn
            variant="tonal"
            color="error"
          >
            Suspend
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION Current Plan -->
    <!-- !SECTION -->
  </VRow>

  <!-- 👉 Edit user info dialog -->
  <UserInfoEditDialog
    v-model:isDialogVisible="isUserInfoEditDialogVisible"
    :user-data="props.userData"
  />

  <!-- 👉 Upgrade plan dialog -->
  <UserUpgradePlanDialog v-model:isDialogVisible="isUpgradePlanDialogVisible" />
</template>

<style lang="scss" scoped>
@use "@core-scss/template/mixins" as templateMixins;

.card-list {
  --v-card-list-gap: 0.5rem;
}

.current-plan {
  border: 2px solid rgb(var(--v-theme-primary));

  @include templateMixins.custom-elevation(var(--v-theme-primary), "sm");
}

.text-capitalize {
  text-transform: capitalize !important;
}
</style>
