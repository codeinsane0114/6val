<script setup>

const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})

import UserInvoiceTable from './UserInvoiceTable.vue'
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'
import figma from '@images/icons/project-icons/figma.png'
import html5 from '@images/icons/project-icons/html5.png'
import pdf from '@images/icons/project-icons/pdf.png'
import python from '@images/icons/project-icons/python.png'
import react from '@images/icons/project-icons/react.png'
import sketch from '@images/icons/project-icons/sketch.png'
import vue from '@images/icons/project-icons/vue.png'
import xamarin from '@images/icons/project-icons/xamarin.png'

const projectTableHeaders = [
  {
    title: 'Type',
    key: 'project',
  },
  {
    title: 'Name',
    key: 'leader',
  },
  {
    title: 'Phone',
    key: 'team',
  },
  {
    title: 'Address',
    key: 'progress',
  },
  {
    title: 'Action',
    key: 'Action',
    sortable: false,
  },
]

const search = ref('')

const options = ref({
  itemsPerPage: 5,
  page: 1,
})

const projects = [
  {
    logo: react,
    name: 'BGC eCommerce App',
    project: 'React Project',
    leader: 'Eileen',
    progress: 78,
    hours: '18:42',
    team: [
      avatar1,
      avatar8,
      avatar6,
    ],
    extraMembers: 3,
  },
  {
    logo: figma,
    name: 'Falcon Logo Design',
    project: 'Figma Project',
    leader: 'Owen',
    progress: 25,
    hours: '20:42',
    team: [
      avatar5,
      avatar2,
    ],
  },
  {
    logo: vue,
    name: 'Dashboard Design',
    project: 'Vuejs Project',
    leader: 'Keith',
    progress: 62,
    hours: '120:87',
    team: [
      avatar8,
      avatar2,
      avatar1,
    ],
  },
  {
    logo: xamarin,
    name: 'Foodista mobile app',
    project: 'Xamarin Project',
    leader: 'Merline',
    progress: 8,
    hours: '120:87',
    team: [
      avatar3,
      avatar4,
      avatar7,
    ],
    extraMembers: 8,
  },
  {
    logo: python,
    name: 'Dojo Email App',
    project: 'Python Project',
    leader: 'Harmonia',
    progress: 51,
    hours: '230:10',
    team: [
      avatar4,
      avatar3,
      avatar1,
    ],
    extraMembers: 5,
  },
  {
    logo: sketch,
    name: 'Blockchain Website',
    project: 'Sketch Project',
    leader: 'Allyson',
    progress: 92,
    hours: '342:41',
    team: [
      avatar1,
      avatar8,
    ],
  },
  {
    logo: html5,
    name: 'Hoffman Website',
    project: 'HTML Project',
    leader: 'Georgie',
    progress: 80,
    hours: '12:45',
    team: [
      avatar1,
      avatar8,
      avatar6,
    ],
  },
]

const logisticData = ref([
  {
    icon: 'bx-bxs-truck',
    color: 'primary',
    title: 'total_roder',
    value: props.userData?.orderStatusArray ? props.userData.orderStatusArray.total_order : null,
    change: 18.2,
    isHover: false,
  },
  {
    icon: 'bx-error',
    color: 'warning',
    title: 'completed',
    value: props.userData?.orderStatusArray ? props.userData.orderStatusArray.completed : null,
    change: -8.7,
    isHover: false,
  },
  {
    icon: 'bx-git-repo-forked',
    color: 'error',
    title: 'ongoing',
    value: props.userData?.orderStatusArray ? props.userData.orderStatusArray.ongoing : null,
    change: 4.3,
    isHover: false,
  },
  {
    icon: 'bx-time-five',
    color: 'info',
    title: 'refunded',
    value: props.userData?.orderStatusArray ? props.userData.orderStatusArray.refunded : null,
    change: -2.5,
    isHover: false,
  },
  {
    icon: 'bx-time-five',
    color: 'info',
    title: 'returned',
    value: props.userData?.orderStatusArray ? props.userData.orderStatusArray.returned : null,
    change: -2.5,
    isHover: false,
  },
  {
    icon: 'bx-time-five',
    color: 'info',
    title: 'failed',
    value: props.userData?.orderStatusArray ? props.userData.orderStatusArray.failed : null,
    change: -2.5,
    isHover: false,
  },
  {
    icon: 'bx-time-five',
    color: 'info',
    title: 'canceled',
    value: props.userData?.orderStatusArray ? props.userData.orderStatusArray.canceled : null,
    change: -2.5,
    isHover: false,
  },
])

const moreList = [
  {
    title: 'Download',
    value: 'Download',
  },
  {
    title: 'Delete',
    value: 'Delete',
  },
  {
    title: 'View',
    value: 'View',
  },
]
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Saved Address list">
        <VDivider />
        <!-- 👉 User Project List Table -->

        <!-- SECTION Datatable -->

        <VDataTable
          v-model:page="options.page"
          :headers="projectTableHeaders"
          :items-per-page="options.itemsPerPage"
          :items="props.userData.customer?.addresses ? props.userData.customer.addresses : [{address_type : 'office',
                                                                                             country : 'ukraine',
                                                                                             contact_person_name : 'Alex morgan',
                                                                                             phone : '12345678',
                                                                                             address : 'kyib',
                                                                                             }]"
          item-value="name"
          hide-default-footer
          :search="search"
          class="text-no-wrap"
        >
          <!-- TYPE -->
          <template #item.project="{ item }">
            <div class="d-flex align-center gap-x-3">
              <div>
                <h6 class="text-h6 text-no-wrap">
                  {{ item.address_type }}
                </h6>
                <div class="text-body-2">
                  {{ item.country }}
                </div>
              </div>
            </div>
          </template>

          <template #item.leader="{ item }">
            <div class="text-base text-high-emphasis">
              {{ item.contact_person_name }}
            </div>
          </template>

          <!-- Team -->
          <template #item.team="{ item }">
              <div class="text-base text-high-emphasis">
                {{ item.phone }}
              </div>
          </template>

          <!-- Progress -->
          <template #item.progress="{ item }">
            <div class="text-base text-high-emphasis">
                {{ item.address }}
            </div>
          </template>

          <!-- Action -->
          <template #item.Action>
            <MoreBtn
              :menu-list="moreList"
              class="text-medium-emphasis"
            />
          </template>

          <!-- TODO Refactor this after vuetify provides proper solution for removing default footer -->
          <template #bottom>
            <TablePagination
              v-model:page="options.page"
              :items-per-page="options.itemsPerPage"
              :total-items="projects.length"
            />
          </template>
        </VDataTable>
        <!-- !SECTION -->
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 User Activity timeline -->
      <VCard title="Order Status">
        <VRow>
          <VCol
            v-for="(data, index) in logisticData"
            :key="index"
            cols="12"
            md="3"
            sm="6"
          >
            <div>
              <VCard
                class="logistics-card-statistics cursor-pointer"
                :style="data.isHover ? `border-block-end-color: rgb(var(--v-theme-${data.color}))` : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.38)`"
                @mouseenter="data.isHover = true"
                @mouseleave="data.isHover = false"
              >
                <VCardText>
                  <div class="d-flex align-center gap-x-4 mb-2">
                    <VAvatar
                      variant="tonal"
                      size="40"
                      :color="data.color"
                      rounded
                    >
                      <VIcon
                        :icon="data.icon"
                        size="24"
                      />
                    </VAvatar>
                    <h4 class="text-h4">
                      {{ data.value }}
                    </h4>
                  </div>
                  <div class="text-body-1 mb-2">
                    {{ data.title }}
                  </div>
                </VCardText>
              </VCard>
            </div>
          </VCol>
        </VRow>
      </VCard>
    </VCol>

    <VCol cols="12">
      <UserInvoiceTable :user-data="props.userData"/>
    </VCol>
  </VRow>
</template>
