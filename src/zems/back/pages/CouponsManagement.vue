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
    <header class="page-header">
      <div class="header-content">
        <div class="title-group">
          <BaseTitle>Coupons Management</BaseTitle>
        </div>
        <RouterLink to="/add-coupon" class="add-button">
          <i class="fa-solid fa-plus"></i>
          <span>Add Coupon</span>
        </RouterLink>
      </div>
    </header>

    <!-- Controls Section -->
    <div class="controls">
      <!-- <div class="search-control">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search coupons..." class="search-input">
      </div> -->
      <select class="status-filter">
        <option value="all">All Statuses</option>
        <option value="active">Active</option>
        <option value="expired">Expired</option>
        <option value="scheduled">Scheduled</option>
      </select>
    </div>

    <!-- Desktop Table View (shows on larger screens) -->
    <div class="table-container desktop-view">
      <table class="coupons-table">
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
              <button class="action-btn edit">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="action-btn delete">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile Cards View (shows on smaller screens) -->
    <div class="cards-container mobile-view">
      <div class="coupon-card" v-for="coupon in coupons" :key="coupon.id">
        <div class="card-header">
          <span class="code">{{ coupon.code }}</span>
          <span :class="`status-badge ${coupon.status}`">
            {{ coupon.status }}
          </span>
        </div>
        <div class="card-body">
          <div class="card-row">
            <span class="label">Discount:</span>
            <span class="value">{{ coupon.discount }}</span>
          </div>
          <div class="card-row">
            <span class="label">Uses:</span>
            <span class="value">{{ coupon.uses }}/{{ coupon.maxUses || '∞' }}</span>
          </div>
          <div class="card-row">
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

    <!-- Pagination -->
    <div class="pagination">
      <button class="page-btn" :disabled="currentPage === 1">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        class="page-btn"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
      <button class="page-btn" :disabled="currentPage === totalPages">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>



<style scoped>
.coupons-management-page {
  padding: 1.5rem;
  background-color: #f8fafc;
  min-height: 100vh;
}

/* Header Styles */
.page-header {
  margin-bottom: 2rem;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.title-group i {
  font-size: 1.25rem;
  color: #4f46e5;
}
.title-group h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
}
.add-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #4f46e5;
  color: white;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
}
.add-button:hover {
  background-color: #4338ca;
}

/* Controls Section */
.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.search-control {
  flex: 1;
  min-width: 250px;
  position: relative;
}
.search-control i {
  position: absolute;
  left: 0.875rem;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}
.search-input {
  width: 100%;
  padding: 0.625rem 0.875rem 0.625rem 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: #fff;
}
.status-filter {
  padding: 0.625rem 0.875rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: #fff;
  min-width: 150px;
}

/* Desktop Table View */
.desktop-view {
  display: block;
}
.table-container {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.coupons-table {
  width: 100%;
  border-collapse: collapse;
}
.coupons-table th {
  text-align: left;
  padding: 1rem;
  background-color: #f8fafc;
  font-weight: 600;
  color: #475569;
  border-bottom: 1px solid #e2e8f0;
}
.coupons-table td {
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
.action-btn.edit {
  color: #4f46e5;
}
.action-btn.edit:hover {
  background-color: #eef2ff;
}
.action-btn.delete {
  color: #ef4444;
}
.action-btn.delete:hover {
  background-color: #fee2e2;
}

/* Mobile Cards View */
.mobile-view {
  display: none;
}
.cards-container {
  display: grid;
  gap: 1rem;
}
.coupon-card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.card-header .code {
  font-weight: 600;
  color: #1e293b;
}
.card-body {
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.card-row {
  display: flex;
  justify-content: space-between;
}
.card-row .label {
  color: #64748b;
  font-size: 0.875rem;
}
.card-row .value {
  color: #334155;
  font-weight: 500;
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

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}
.page-btn {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  background-color: white;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}
.page-btn:hover:not(:disabled) {
  background-color: #f1f5f9;
  color: #4f46e5;
}
.page-btn.active {
  background-color: #4f46e5;
  color: white;
  border-color: #4f46e5;
}
.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Responsive Breakpoints */
@media (max-width: 768px) {
  .desktop-view {
    display: none;
  }
  .mobile-view {
    display: block;
  }
  .controls {
    flex-direction: column;
    gap: 0.75rem;
  }
  .search-control {
    min-width: 100%;
  }
}
</style>
