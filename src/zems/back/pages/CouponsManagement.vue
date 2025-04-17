<!-- Coupons Management Page (/coupons-management) -->
<template>
  <div class="coupons-management">
    <header class="page-header">
      <h1>
        <i class="fa-solid fa-list-check"></i>
        Coupons Management
      </h1>
      <RouterLink to="/add-coupon" class="add-button">
        <i class="fa-solid fa-plus"></i>
        Add Coupon
      </RouterLink>
    </header>

    <div class="controls">
      <div class="search-control">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search coupons...">
      </div>
      <select class="status-filter">
        <option value="all">All Statuses</option>
        <option value="active">Active</option>
        <option value="expired">Expired</option>
        <option value="scheduled">Scheduled</option>
      </select>
    </div>

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
        <tr>
          <td>SUMMER25</td>
          <td>25% OFF</td>
          <td>142/500</td>
          <td>2023-09-30</td>
          <td><span class="status active">Active</span></td>
          <td>
            <button class="action-btn">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="action-btn">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
        <!-- More coupon rows would go here -->
      </tbody>
    </table>

    <div class="pagination">
      <button disabled><i class="fa-solid fa-chevron-left"></i></button>
      <button class="active">1</button>
      <button>2</button>
      <button>3</button>
      <button><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  </div>
</template>

<!-- Add Coupon Page (/add-coupon) -->
 
