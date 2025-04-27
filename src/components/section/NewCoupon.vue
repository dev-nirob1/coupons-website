<script setup>
import BaseTable from '@/zems/back/Components/Element/BaseTable.vue';
import TableHeader from '@/zems/back/Components/Element/TableHeader.vue';
import TableRow from '@/zems/back/Components/Element/TableRow.vue';
import { ref } from 'vue';

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
  <div class="desktop-view">
    <BaseTitle>New Coupon</BaseTitle>

    <BaseTable>
      <TableHeader>
        <div>SL</div>
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
          <div class="medium-none">Uses</div>
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
.status-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-badge.active {
  background-color: var(--secondary-color);
  color: var(--white-color);
}

.status-badge.expired {
  background-color: var(--alternative-color);
  color: var(--white-color);
}

@media (min-width: 768px) {
  .medium-none {
    display: none;
  }
}
</style>
