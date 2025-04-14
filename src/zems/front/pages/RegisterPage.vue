<script setup>
import BaseTitle from '@/components/element/BaseTitle.vue';
import InputField from '@/components/element/InputField.vue';

</script>

<template>
  <section class="container">
    <BaseTitle class="text-center">
      Create an Account
    </BaseTitle>
    <div class="medium-2 align-center gap-2">
      <div>
        <img class="width-full height-full"
          src="https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="">
      </div>
      <div>
        <form>
          <div class="all-2 gap-1">
            <InputField placeholder="First Name" />
            <InputField placeholder="Last Name" />
          </div>
          <div>
            <InputField placeholder="Enter Your Email" />
          </div>
          <div>
            <InputField placeholder="Enter Your Password" />
          </div>
          <div class="flex align-center">
            <InputField type="checkbox" />
            I aggree to the <RouterLink to="/">terms & conditions</RouterLink>
          </div>
          <button class="btn bg-secondary text-white width-full">Create Account</button>
        </form>
        <div>
          <hr>
        </div>
        <div class="all-2 gap-1">
          <button class="btn bg-primary text-white">Google</button><button
            class="btn bg-primary text-white">Apple</button>
        </div>
        <div>
          <p>Already have an account? <RouterLink to="/login">Login Here</RouterLink></p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
form input[type=checkbox] {
  width: fit-content;
  margin-right: .5rem;
}

form a {
  margin-left: .5rem;
}
</style>
