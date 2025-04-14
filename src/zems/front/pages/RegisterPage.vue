<script setup>
import BaseTitle from '@/components/element/BaseTitle.vue';
import InputField from '@/components/element/InputField.vue';

</script>

<template>
  <section class="container">
    <BaseTitle>
      Create an Account
    </BaseTitle>
    <div class="medium-2 gap-2">
      <div>

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
        <div class="flex">
          <input type="checkbox" name="" id="">
          aggree
        </div>
        <button class="btn bg-secondary text-white width-full">Create Account</button>
      </form>
      <div>
        <hr>
      </div>
      <div class="all-2 gap-1">
        <button class="btn bg-primary text-white">Google</button><button class="btn bg-primary text-white">Apple</button>
      </div>
      </div>
    </div>
  </section>
</template>
