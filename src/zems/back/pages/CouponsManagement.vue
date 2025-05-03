<script setup>
import PopUp from '@/components/Widgets/PopUp.vue';
import { ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import PopView from '@zems/back/Components/Widgets/PopView.vue';
import PopEdit from '@zems/back/Components/Widgets/PopEdit.vue';
const popupValue = ref()
const popName = ref()

const isModalOpen = ref(false)
// const id = ref()
const myComponent = {
  popView: PopView,
  popEdit: PopEdit
}

const currentComponent = (name) => myComponent[name]

const handleCloseModal = () => {
  isModalOpen.value = false;
}

// single coupon with full data
const singleCouponDetails = async (id) => {
  try {
    const res = await axios.get(`https://coupon.zems.uk/api/coupon/${id}`)
    console.log(res?.data);
    return res?.data
  } catch (error) {
    console.log(error);
  }
}
const handleOpenModal = async (data, name) => {
  popName.value = name
  isModalOpen.value = true;
  const fullData = await singleCouponDetails(data?.id)
  // console.log("full data", fullData.value);
  if (fullData) {
    popupValue.value = fullData
  } else {
    popupValue.value = data
  }
}
// all coupon data fetching
const { data: coupons = [] } = useQuery({
  queryKey: ['coupon'],
  queryFn: async () => {
    const res = await axios.get('https://coupon.zems.uk/api/coupon')
    return res?.data
  }
})

</script>
<template>
  <div class="coupons-management">

    <PopUp :handleCloseModal="handleCloseModal" :isModalOpen="isModalOpen">
      <component :is="currentComponent(popName)" :data="popupValue">
      </component>
    </PopUp>

    <!-- Header Section -->
    <header class="flex align-center justify-between">
      <div>
        <BaseTitle>Coupons Management</BaseTitle>
      </div>
      <RouterLink to="/add-coupon" class="btn p-1 bg-secondary text-white">
        <i class="fa-solid fa-plus"></i>
        <span>Add Coupon</span>
      </RouterLink>
    </header>
    <!-- select dropdown Section -->
    <select class="bg-white mb-2">
      <option value="all">All Statuses</option>
      <option value="active">Active</option>
      <option value="expired">Expired</option>
      <option value="scheduled">Scheduled</option>
    </select>

    <BaseTable>
      <TableHeader>
        <div class="sl">SL</div>
        <div>Code</div>
        <div>Name</div>
        <div>Discount</div>
        <div>Expire Date</div>
        <div>Category</div>
        <div>Actions</div>
      </TableHeader>
      <TableRow v-for="(coupon, i) in coupons" :key="coupon.id">
        <div class="sl">
          <div class="medium-none">Sl</div>
          {{ i += 1 }}
          <!-- {{ data.id }} -->
        </div>
        <div>
          <div class="medium-none">Code</div>
          {{ coupon.code }}
        </div>
        <div>
          <div class="medium-none">Name</div>
          {{ coupon.name }}
        </div>
        <div>
          <div class="medium-none">Discount</div>
          {{ coupon.discount_percent }}$
        </div>
        <div>
          <div class="medium-none">Expire Date</div>
          {{ coupon.expire_date }}
        </div>
        <div>
          <div class="medium-none">Category</div>
          {{ coupon.cat_name }}
        </div>
        <div>
          <div class="medium-none">Actions</div>
          <div class="flex gap-1">
            <BaseButton @click="handleOpenModal(coupon, 'popView')" class="bg-secondary text-white"><i
                class="fa-solid fa-eye"></i>
            </BaseButton>
            <BaseButton @click="handleOpenModal(coupon, 'popEdit')" class="bg-primary text-white"><i
                class="fa-solid fa-pen"></i></BaseButton>
            <BaseButton class="bg-secondary text-white"><i class="fa-solid fa-trash"></i></BaseButton>
          </div>
        </div>
      </TableRow>
    </BaseTable>
  </div>
</template>

<style scoped>
.coupons-management {
  padding: 1.5rem;
}

.coupons-management select {
  border-radius: .5rem;
  border-color: var(--border-color);
}
</style>
