<script setup>
import { useTheme } from 'vuetify'
import { VRow,VCol } from 'vuetify/components';
import { useStore } from 'vuex'

const logisticData = ref([
  {
    icon: 'bx-bxs-truck',
    color: 'primary',
    title: 'On route vehicles',
    value: 42,
    change: 18.2,
    isHover: false,
  },
  {
    icon: 'bx-error',
    color: 'warning',
    title: 'Vehicles with errors',
    value: 8,
    change: -8.7,
    isHover: false,
  },
  {
    icon: 'bx-git-repo-forked',
    color: 'error',
    title: 'Deviated from route',
    value: 27,
    change: 4.3,
    isHover: false,
  },
  {
    icon: 'bx-time-five',
    color: 'info',
    title: 'Late vehicles',
    value: 13,
    change: -2.5,
    isHover: false,
  },
])


const store = useStore();
const data = store.state.dashboard.orderStatus;

</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        md="12"
      >
        <VCardItem>
          <VCardTitle>Top Customers</VCardTitle>
        </VCardItem>
      </VCol>
      <VCol 
        cols="12"
        md="12"
      >
      <VRow>
            <VCol
            v-for="(data, index) in logisticData"
            :key="index"
            cols="12"
            md="6"
            sm="6"
            >
            <div>
                <VCard
                class="logistics-card-statistics cursor-pointer"
                :style="data.isHover ? `border-block-end-color: rgb(var(--v-theme-${data.color}))` : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.38)`"
                @mouseenter="data.isHover = true"
                @mouseleave="data.isHover = false"
                >
                <VCardText :style="'text-align: center'">
                    <div class="d-flex justify-center  gap-x-4 mb-2">
                        <VAvatar
                        size="70"
                        color="rgb(var(--v-theme-surface))"
                        variant="elevated"
                        >
                            <img
                            :src="data.avatarSrc"
                            :height="50"
                            :width="50"
                            />
                        </VAvatar>
                    </div>
                    <div class="text-body-1 mb-2">
                        {{ data.title }}
                    </div>
                    <VChip
                        label
                        size="small"
                        :color="data.value > 0 ? 'success' : 'error'"
                    >
                    <div class="d-flex align-center mx-auto">
                    <div class="text-body-1 mb-2 ml-2">
                        order:
                    </div>
                    <div class="v-spacer"></div>
                    <div class="text-body-1 mb-2">
                        {{ data.value }}
                    </div>
                    </div>
                  </VChip>
                </VCardText>
                </VCard>
            </div>
        </VCol>
        </VRow>
    </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
@use "@core-scss/base/mixins" as mixins;

.logistics-card-statistics {
  border-block-end-style: solid;
  border-block-end-width: 2px;

  &:hover {
    border-block-end-width: 3px;
    margin-block-end: -1px;

    @include mixins.elevation(8);

    transition: all 0.1s ease-out;
  }
}

.skin--bordered {
  .logistics-card-statistics {
    border-block-end-width: 2px;

    &:hover {
      border-block-end-width: 3px;
      margin-block-end: -2px;
      transition: all 0.1s ease-out;
    }
  }
}
</style>
