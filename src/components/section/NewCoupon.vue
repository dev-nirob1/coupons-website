<script setup>
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
      <table>
        <thead>
            <th>Code</th>
            <th>Discount</th>
            <th>Uses</th>
            <th>Valid Until</th>
            <th>Status</th>
            <th>Actions</th>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.code }}</td>
            <td>{{ coupon.discount }}</td>
            <td>{{ coupon.uses }}/{{ coupon.maxUses || '∞' }}</td>
            <td>{{ coupon.validUntil }}</td>
            <td>
              <span :class="`status-badge ${coupon.status}`">
                {{ coupon.status }}
              </span>
            </td>
            <td class="flex align-center gap-1">
            <BaseButton class="bg-secondary text-white"><i class="fa-solid fa-eye"></i></BaseButton>
            <BaseButton class="bg-primary text-white"><i class="fa-solid fa-pen"></i></BaseButton>
            <BaseButton class="bg-secondary text-white"><i class="fa-solid fa-trash"></i></BaseButton>
          </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<style scoped>
.desktop-view{
  width: 100%;
}
.desktop-view  table {
  background-color: var(--white-color);
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow-x: scroll;
  width: 100%;
  border-collapse: collapse;
}
table th {
  text-align: left;
  padding: .8rem;
  background-color: #f8fafc;
  font-weight: 600;
  color: var(--dark-color);
  border-bottom: 1px solid var(--border-color);
}

.desktop-view table td {
  color: var(--light-color);
  padding: .5rem;
}

.desktop-view table tr:not(:last-child) {
  border-bottom: 1px solid var(--border-color);
}
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
</style>
