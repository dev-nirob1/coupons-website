<script setup>
import BaseTitle from '@/components/element/BaseTitle.vue';
import InputField from '@/components/element/InputField.vue';

</script>

<template>
  <section class="form-container">

    <div class="medium-2 align-center gap-2">
      <div class="width-full height-full">
        <img class="width-full height-full"
          src="https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="">
      </div>
      <div>
        <form>
          <BaseTitle class="text-center">
            Sign In
          </BaseTitle>
          <div>
            <InputField placeholder="Enter Your Email" />
          </div>
          <div>
            <InputField placeholder="Enter Your Password" />
          </div>
          <button class="btn bg-secondary text-white width-full">Sign In</button>
        </form>
        <div class="divider">
          <div></div>or <div></div>
        </div>
        <div class="all-2 gap-1">
          <button class="btn bg-primary text-white">Google</button><button
            class="btn bg-primary text-white">Apple</button>
        </div>
        <div>
          <p>Don't have an account? <RouterLink to="/register">Register Here</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.form-container {
  max-width: 992px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

form a {
  margin-left: .5rem;
}

.divider {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.divider div {
  height: 2px;
  width: 100%;
  background-color: var(--light-color);
}
</style>
