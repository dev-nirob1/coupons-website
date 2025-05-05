<template>
  <div class="update-coupon-form">
    <BaseTitle>Update Coupon</BaseTitle>

    <form class="coupon-form">
      <div>
        <label for="code">Coupon Code</label>
        <InputField type="text" id="code" value="Ramadan301" />
      </div>
      <div>
        <label for="name">Offer Name</label>
        <InputField type="text" id="name" value="Ramadan Offer 1 2025" />
      </div>
      <div>
        <label for="title">Title</label>
        <InputField type="text" id="title" value="Zannat" />
      </div>

      <div class="medium-2 gap-1">
        <div>
          <label for="discount_percent">Discount Percentage</label>
          <InputField type="number" id="discount_percent" value="20" />
        </div>
        <div>
          <label for="discount">Fixed Discount (if any)</label>
          <InputField type="number" id="discount" placeholder="Not set" />
        </div>
      </div>
      <div class="medium-2 gap-1">
        <div>
          <label for="expire_date">Expiry Date</label>
          <InputField type="date" id="expire_date" value="2025-04-28" />
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
        <BaseTextArea id="details" value="hello world" />
      </div>
      <div class="flex align-center">
        <InputField type="checkbox" id="exclusive" />
        <label for="exclusive">Exclusive</label>
      </div>
      <!-- Form buttons -->
      <div class="flex gap-1">
        <BaseButton type="button" class="btn bg-danger text-white">Cancel</BaseButton>
        <BaseButton type="submit" class="btn bg-secondary text-white">Save Changes</BaseButton>
      </div>
    </form>
  </div>
</template>

<style scoped>
.update-coupon-form {
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
  padding: .75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: .5rem;
  transition: border-color 0.3s;
}

.coupon-form input[type="checkbox"] {
  width: fit-content;
  margin-right: .25rem;
}
</style>
