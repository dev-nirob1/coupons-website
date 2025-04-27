<script setup>
import BaseButton from '@/components/element/BaseButton.vue';
import BaseTitle from '@/components/element/BaseTitle.vue';
import { ref } from 'vue';
import BaseTable from '../Components/Element/BaseTable.vue';
import TableHeader from '../Components/Element/TableHeader.vue';
import TableRow from '../Components/Element/TableRow.vue';

const coupons = ref([
  {
    id: 1,
    code: 'SUMMER25',
    discount: '25% OFF',
    uses: 142,
    maxUses: 500,
    validUntil: '2023-09-30',
    status: 'active'
  },
  {
    id: 2,
    code: 'WELCOME10',
    discount: '$10 OFF',
    uses: 89,
    maxUses: null,
    validUntil: '2024-01-01',
    status: 'active'
  },
  {
    id: 3,
    code: 'BLACKFRIDAY',
    discount: '40% OFF',
    uses: 320,
    maxUses: 1000,
    validUntil: '2022-11-25',
    status: 'expired'
  }
])
</script>
<template>
  <div class="coupons-management">
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
        <div>Code</div>
        <div>Discount</div>
        <div>Uses</div>
        <div>Valid Until</div>
        <div>Status</div>
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
          <div class="medium-none">Discount</div>
          {{ coupon.discount }}
        </div>
        <div>
          <div class="medium-none">Uses</div>
          {{ coupon.uses }}/{{ coupon.maxUses }}
        </div>
        <div>
          <div class="medium-none">Valid Until</div>
          {{ coupon.validUntil }}
        </div>
        <div>
          <div class="medium-none">Status</div>
          {{ coupon.status }}
        </div>
        <div>
          <div class="medium-none">Actions</div>
          <div class="flex gap-1">
            <BaseButton class="bg-secondary text-white"><i class="fa-solid fa-eye"></i></BaseButton>
            <BaseButton class="bg-primary text-white"><i class="fa-solid fa-pen"></i></BaseButton>
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
/* Responsive Breakpoints */
@media (min-width: 768px) {
  .medium-none {
    display: none;
  }
}
</style>
