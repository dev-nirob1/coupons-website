<script setup>
import DashboardHeader from '@/zems/back/Components/Widgets/DashboardHeader.vue'
</script>

<template>
  <div class="add-coupon">
    <!-- Header Section -->
    <DashboardHeader to="/coupons-management" linkName="Back to Coupons" title="Add New Coupon"></DashboardHeader>

    <!-- Main Form Section -->
    <div class="form-container">
      <form class="coupon-form">
        <!-- Coupon Code Section -->
        <fieldset>
          <legend>Coupon Information</legend>
          <div class="medium-2 gap-1">
            <div>
              <label for="code">Coupon Code</label>
              <InputField type="text" id="code" />
            </div>
            <div>
              <label for="name">Offer Name</label>
              <InputField type="text" id="name" />
            </div>
          </div>
          <div>
            <label for="title">Title</label>
            <InputField type="text" id="title" />
          </div>

          <div class="medium-2 gap-1">
            <div>
              <label for="discount_percent">Discount Percentage</label>
              <InputField type="number" id="discount_percent" />
            </div>
            <div>
              <label for="discount">Fixed Discount (if any)</label>
              <InputField type="number" id="discount" placeholder="Not set" />
            </div>
          </div>
          <div class="medium-2 gap-1">
            <div>
              <label for="expire_date">Expiry Date</label>
              <InputField type="date" id="expire_date" />
            </div>
            <!-- select dropdown  -->
            <div>
              <label for="cat_name">Category</label>
              <select id="cat_name">
                <option value="Ramadan" selected>Ramadan</option>
                <option value="Eid">Eid</option>
                <option value="Seasonal">Seasonal</option>
                <option value="Special">Special</option>
              </select>
            </div>
          </div>
          <div>
            <label for="details">Details</label>
            <BaseTextArea id="details" />
          </div>
          <div class="flex align-center">
            <InputField type="checkbox" id="exclusive" />
            <label for="exclusive">Exclusive</label>
          </div>
          <BaseButton class="bg-secondary text-white width-full">Add Coupon</BaseButton>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style scoped>
.add-coupon {
  padding: 1.5rem;
}

.coupon-form label {
  display: block;
  margin: .5rem 0;
  font-weight: 500;
  color: var(--light-color);
}

input[type="text"],
input[type="number"],
input[type="date"],
textarea,
select {
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: .5rem;
  transition: border-color 0.3s;
}

.coupon-form input[type="checkbox"] {
  width: fit-content;
  margin-right: .25rem;
}

.add-coupon input[type=radio],
.add-coupon input[type=checkbox] {
  width: fit-content;
}

.add-coupon fieldset {
  padding: 1rem;
  background-color: var(--white-color);
}

.add-coupon fieldset legend {
  font-size: 1.5rem;
}
</style>
