<script setup>
import BaseButton from '@/components/element/BaseButton.vue';
import BaseTitle from '@/components/element/BaseTitle.vue';
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
  <div class="coupons-management-page">
    <!-- Header Section -->
    <header class="flex align-center justify-between">
        <div>
          <BaseTitle>Coupons Management</BaseTitle>
        </div>
        <RouterLink to="/add-coupon" class="btn bg-secondary">
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

    <!-- Desktop Table View (shows on larger screens) -->
    <div class="desktop-view">
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Discount</th>
            <th>Uses</th>
            <th>Valid Until</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
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
            <td class="actions">
              <select>
                <option value="Action">Delete</option>
                <option value="Action">Update</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile Cards View (shows on smaller screens) -->
    <div class="mobile-view">
      <div class="coupon-card" v-for="coupon in coupons" :key="coupon.id">
        <div class="flex align-center justify-between">
          <BaseTitle tag="h5">{{ coupon.code }}</BaseTitle>
          <span :class="`status-badge ${coupon.status}`">
            {{ coupon.status }}
          </span>
        </div>
        <div>
          <div class="flex justify-between">
            <span class="label">Discount:</span>
            <span class="value">{{ coupon.discount }}</span>
          </div>
          <div class="flex justify-between">
            <span class="label">Uses:</span>
            <span class="value">{{ coupon.uses }}/{{ coupon.maxUses || '∞' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="label">Valid Until:</span>
            <span class="value">{{ coupon.validUntil }}</span>
          </div>
        </div>
        <div class="flex gap-1 align-center">
          <BaseButton class="btn width-full bg-primary text-white">
            <i class="fa-solid fa-pen-to-square"></i>
            <span>Edit</span>
          </BaseButton>
          <BaseButton class="btn width-full bg-secondary text-white">
            <i class="fa-solid fa-trash"></i>
            <span>Delete</span>
          </BaseButton>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.coupons-management-page {
  padding: 1.5rem;
  background-color: #f8fafc;
  min-height: 100vh;
}
/* Desktop Table View */
.desktop-view {
  display: none;
}
table {
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
  border-bottom: 1px solid #e2e8f0;
}
table td {
  padding: .5rem;
  border-bottom: 1px solid #f1f5f9;
  color: var(--light-color);
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
.status-badge.scheduled {
  background-color: #e0f2fe;
  color: #075985;
}

/* Mobile Cards View */
.mobile-view {
  display: block;
}
.coupon-card {
  background-color: var(--white-color);
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
}

/* Responsive Breakpoints */
@media (min-width: 768px) {
  .desktop-view {
    display: block;
  }
  .mobile-view {
    display: none;
  }

}
</style>
