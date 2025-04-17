<script setup lang="ts">
import BaseButton from '@/components/element/BaseButton.vue';
import BaseTitle from '@/components/element/BaseTitle.vue';
import InputField from '@/components/element/InputField.vue';

</script>

<template>
  <div class="add-coupon">
    <!-- Header Section -->
      <div class="flex justify-between align-center">
        <div>
          <BaseTitle>Add New Coupon</BaseTitle>
        </div>
        <RouterLink to="/coupons-management" class="p-1 bg-white">
          <i class="fa-solid fa-arrow-left"></i>
          <span>Back to Coupons</span>
        </RouterLink>
      </div>

    <!-- Main Form Section -->
    <main class="form-container">
      <form class="coupon-form">
        <!-- Coupon Code Section -->
        <div>
          <div>
            <BaseTitle tag="h5">Coupon Information</BaseTitle>
          </div>

          <div>
            <label>Coupon Code *</label>
            <div>
              <InputField type="text" placeholder="e.g. SUMMER25" required />
            </div>
          </div>
        </div>

        <!-- Discount Section -->
        <div>
          <div>
            <BaseTitle tag="h5">Discount</BaseTitle>
          </div>

          <div class="all-2 gap-1">
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
          <div>
            <BaseTitle tag="h5">Validity</BaseTitle>
          </div>

          <div class="all-2 gap-1">
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
          <div>
            <BaseTitle tag="h5">Coupon Limits</BaseTitle>
          </div>

          <div class="all-2 gap-1">
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
          <BaseButton type="submit" class="btn bg-secondary width-full">Create Coupon</BaseButton>
        </div>
      </form>
    </main>
  </div>
</template>

<style scoped>
.add-coupon{
  padding: 2rem 3rem;
}
.add-coupon h5 {
  margin-bottom: 1rem;
}
.add-coupon input[type=radio] {
  width: fit-content;
}
</style>
