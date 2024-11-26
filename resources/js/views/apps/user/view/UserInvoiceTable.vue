<script setup>
const props = defineProps({
  userData: {
    type: Object,
    required: true,
  }
})
const searchQuery = ref('')
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const isLoading = ref(false)

// 👉 headers
const headers = [
  {
    title: 'Order ID',
    key: 'id',
  },
  {
    title: 'Order Status',
    key: 'trending',
    sortable: false,
  },
  {
    title: 'Total',
    key: 'total',
  },
  {
    title: 'Issued Date',
    key: 'date',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const {
  data: invoiceData,
  execute: fetchInvoices,
} = await useApi(createUrl('/apps/invoice', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const invoices = computed(() => invoiceData.value?.invoices)
const totalInvoices = computed(() => invoiceData.value?.totalInvoices)

const resolveInvoiceStatusVariantAndIcon = status => {
  if (status === 'Confirmed')
    return {
      variant: 'success',
      icon: 'bx-check',
    }
  if (status === 'Returned')
    return {
      variant: 'warning',
      icon: 'bx-pie-chart-alt',
    }
  if (status === 'Out for delivery')
    return {
      variant: 'info',
      icon: 'bx-down-arrow-alt',
    }
  if (status === 'Pending')
    return {
      variant: 'primary',
      icon: 'bx-folder',
    }
  if (status === 'Deliverd')
    return {
      variant: 'secondary',
      icon: 'bx-envelope',
    }

  return {
    variant: 'secondary',
    icon: 'bx-x',
  }
}

const computedMoreList = computed(() => {
  return paramId => [
    {
      title: 'Download',
      value: 'download',
      prependIcon: 'bx-download',
    },
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'bx-pencil',
      to: {
        name: '6val-adminpage-apps-invoice-edit-id',
        params: { id: paramId },
      },
    },
    {
      title: 'Duplicate',
      value: 'duplicate',
      prependIcon: 'bx-duplicate',
    },
  ]
})

const deleteInvoice = async id => {
  await $api(`/apps/invoice/${ id }`, { method: 'DELETE' })
  fetchInvoices()
}
</script>

<template>
  <section v-if="invoices">
    <VCard id="invoice-list">
      <VCardText>
        <div class="d-flex align-center justify-space-between flex-wrap gap-4">
          <div class="text-h5">
            Orders
          </div>
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :loading="isLoading"
        :items-length="props.userData.orders?.total ? props.userData.orders.total : null"
        :headers="headers"
        :items="props.userData.orders?.data ? props.userData.orders.data : [{id : 1,
                                                                             order_status : 'Pending',
                                                                             payment_note : 'paid',
                                                                             created_at : '',
                                                                             order_amount : 100,
                                                                             updated_at : ''
                                                                            }]"
        item-value="total"
        class="text-no-wrap text-sm rounded-0"
        @update:options="updateOptions"
      >
        <!-- id -->
        <template #item.id="{ item }">
          <RouterLink :to="{ name: '6val-adminpage-apps-invoice-preview-id', params: { id: item.id } }">
            #{{ item.id }}
          </RouterLink>
        </template>

        <!-- trending -->
        <template #item.trending="{ item }">
          <VTooltip>
            <template #activator="{ props }">
              <VAvatar
                :size="28"
                v-bind="props"
                :color="resolveInvoiceStatusVariantAndIcon(item.order_status).variant"
                variant="tonal"
              >
                <VIcon
                  :size="16"
                  :icon="resolveInvoiceStatusVariantAndIcon(item.order_status).icon"
                />
              </VAvatar>
            </template>
            <p class="mb-0">
              {{ item.payment_note }}
            </p>
            <p class="mb-0">
              Created date: {{ item.created_at }}
            </p>
          </VTooltip>
        </template>

        <!-- Total -->
        <template #item.total="{ item }">
          ${{ item.order_amount }}
        </template>

        <!-- issued Date -->
        <template #item.date="{ item }">
          {{ item.updated_at }}
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn @click="deleteInvoice(item.id)">
            <VIcon icon="bx-trash" />
          </IconBtn>

          <IconBtn :to="{ name: '6val-adminpage-apps-invoice-preview-id', params: { id: item.id } }">
            <VIcon icon="bx-show" />
          </IconBtn>

          <MoreBtn
            :menu-list="computedMoreList(item.id)"
            item-props
            class="text-medium-emphasis"
          />
        </template>
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalInvoices"
          />
        </template>
      </VDataTableServer>
      <!-- !SECTION -->
    </VCard>
  </section>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-actions {
    inline-size: 8rem;
  }

  .invoice-list-search {
    inline-size: 12rem;
  }
}
</style>
