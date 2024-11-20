<script setup>
const deliveryData = [
  {
    title: 'Packages in transit',
    value: '10k',
    change: 25.8,
    icon: 'bx-cube',
    color: 'primary',
  },
  {
    title: 'Packages out for delivery',
    value: '5k',
    change: 4.3,
    icon: 'bx-bxs-truck',
    color: 'info',
  },
  {
    title: 'Packages delivered',
    value: '15k',
    change: -12.5,
    icon: 'bx-check-circle',
    color: 'success',
  },
  {
    title: 'Delivery success rate',
    value: '95%',
    change: 35.6,
    icon: 'bx-bxs-offer',
    color: 'warning',
  },
  {
    title: 'Average delivery time',
    value: '2.5 Days',
    change: -2.15,
    icon: 'bx-time-five',
    color: 'secondary',
  },
  {
    title: 'Customer satisfaction',
    value: '4.5/5',
    change: 5.7,
    icon: 'bx-group',
    color: 'error',
  },
]
</script>

<template>
  <VCard>
    <VCardItem title="Most Popular Stores">
    </VCardItem>
    <VDivider />
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="(data, index) in deliveryData"
          :key="index"
        >
          <div class="d-flex gap-x-4 align-center">
            <VAvatar
              :color="data.color"
              variant="tonal"
              rounded
              size="38"
              :image="data.src"
            >
            </VAvatar>

            <div>
              <VListItemTitle class="text-body-1 text-high-emphasis">
                {{ data.title }}
              </VListItemTitle>
              <!-- <VListItemSubtitle>
                <div
                  :class="data.change > 0 ? 'text-success' : 'text-error'"
                  class="d-flex align-center"
                >
                  <VIcon
                    :icon="data.change > 0 ? 'bx-chevron-up' : 'bx-chevron-down'"
                    class="me-1"
                    size="24"
                  />
                  <span class="text-base">{{ data.change }}%</span>
                </div>
              </VListItemSubtitle> -->
            </div>
          </div>
          <template #append>
            <span class="text-body-1 text-high-emphasis text-error font-weight-medium">
              {{ data.value }}
            </span>
            <VIcon
                icon="bx-heart"
                class="me-1 text-error"
                size="24"
            />
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1.5rem;
}
</style>
