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
          <div class="all-2 gap-2">
            <div>
              <label>Coupon Code *</label>
              <InputField type="text" placeholder="e.g. SUMMER25" required />
            </div>
            <div class="flex gap-1 align-center">
              <label>IsFeatured</label>
              <InputField type="checkbox"></InputField>
            </div>
          </div>
          <!-- Discount Section -->
          <div>
            <BaseTitle tag="h5">Discount</BaseTitle>
            <div class="medium-2 gap-1">
              <div>
                <label>Discount Type *</label>
                <div class="flex gap-1 mt-1">
                  <label class="flex align-center">
                    <InputField type="radio" name="discount-type" value="percentage" checked />
                    <span>Percentage Discount</span>
                  </label>
                  <label class="flex align-center">
                    <InputField type="radio" name="discount-type" value="fixed" />
                    <span>Fixed Amount</span>
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label>Discount Value *</label>
                <InputField type="number" placeholder="e.g. 25 for 25% or $25" required />
              </div>
            </div>
          </div>
          <!-- Validity Section -->
          <div>
            <BaseTitle tag="h5">Validity</BaseTitle>
            <div class="medium-2 gap-1">
              <div>
                <label>Start Date</label>
                <InputField type="date" />
              </div>
              <div>
                <label>End Date *</label>
                <InputField type="date" required />
              </div>
            </div>
          </div>
          <!-- Usage Limits Section -->
          <div>
            <BaseTitle tag="h5">Coupon Limits</BaseTitle>
            <div class="medium-2 gap-1">
              <div>
                <label>Coupon limit</label>
                <InputField type="number" placeholder="Leave empty for unlimited uses" />
              </div>

              <div>
                <label>Minimum Money Spend</label>
                <InputField type="number" placeholder="No minimum requirement" />
              </div>
            </div>
          </div>
          <!-- Form Actions -->
          <div class="mt-2">
            <BaseButton type="submit" class="btn bg-secondary text-white width-full">Create Coupon</BaseButton>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style scoped>
.add-coupon input {
  border-color: var(--border-color);
  border-radius: .5rem;
}

.add-coupon {
  padding: 1.5rem;
}

.add-coupon h5 {
  margin-bottom: 1rem;
}

.add-coupon input[type=radio],
.add-coupon input[type=checkbox] {
  width: fit-content;
}

.add-coupon fieldset {
  padding: 1rem;
}

.add-coupon fieldset legend {
  font-size: 1.5rem;
}
</style>
