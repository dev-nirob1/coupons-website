<script setup>
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
        <div class="card-actions">
          <button class="action-btn edit">
            <i class="fa-solid fa-pen-to-square"></i>
            <span>Edit</span>
          </button>
          <button class="action-btn delete">
            <i class="fa-solid fa-trash"></i>
            <span>Delete</span>
          </button>
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
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow-x: scroll;
  width: 100%;
  border-collapse: collapse;
}
table th {
  text-align: left;
  padding: 1rem;
  background-color: #f8fafc;
  font-weight: 600;
  color: #475569;
  border-bottom: 1px solid #e2e8f0;
}
table td {
  padding: 1rem;
  border-bottom: 1px solid #f1f5f9;
  color: #334155;
}

.status-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}
.status-badge.active {
  background-color: #dcfce7;
  color: #166534;
}
.status-badge.expired {
  background-color: #fee2e2;
  color: #991b1b;
}
.status-badge.scheduled {
  background-color: #e0f2fe;
  color: #075985;
}
.actions {
  display: flex;
  gap: 0.5rem;
}
.action-btn {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;
}

/* Mobile Cards View */
.mobile-view {
  display: block;
}
.coupon-card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
}
.card-actions .action-btn {
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.card-actions .action-btn.edit {
  background-color: #eef2ff;
  color: #4f46e5;
}
.card-actions .action-btn.delete {
  background-color: #fee2e2;
  color: #ef4444;
}
/* Responsive Breakpoints */
@media (min-width: 768px) {
  .desktop-view {
    display: block;
  }
  .mobile-view {
    display: block;
  }

}
</style>
