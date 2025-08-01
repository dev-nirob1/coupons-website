<script setup>
import BaseTitle from '@/components/element/BaseTitle.vue';
import InputField from '@/components/element/InputField.vue';

</script>

<template>
  <section class="register-page">

    <div class="container medium-2 align-center gap-2">
      <div class="left-div">
        <div class="text-white">
          <BaseTitle>Welcome to Coupon Craze</BaseTitle>
          <SubTitle>Join now and save big on your favorite brands!</SubTitle>
        </div>
        <div class="curve"></div>
      </div>
      <div>
        <form>
          <BaseTitle class="text-center">
            Create an Account
          </BaseTitle>
          <div class="all-2 gap-1">
            <div class="input-field">
              <InputField />
              <label class="label">First Name</label>
            </div>
            <div class="input-field">
              <InputField />
              <label class="label">Last Name</label>
            </div>
          </div>
          <div class="input-field">
            <InputField />
            <label class="label">Email</label>
          </div>
          <div class="input-field">
            <InputField />
            <label class="label">Password</label>
          </div>
          <div class="flex align-center">
            <InputField type="checkbox" />
            I aggree to the <RouterLink to="/">terms & conditions</RouterLink>
          </div>
          <BaseButton class="bg-secondary text-white width-full">Create Account</BaseButton>
        </form>
        <div class="divider">
          <div></div>or <div></div>
        </div>
        <div class="social-login all-2 gap-1">
          <BaseButton class="btn"><i class="fa-brands fa-google"></i> Google</BaseButton>
          <BaseButton class="btn"><i class="fa-brands fa-facebook-f"></i> Facebook</BaseButton>
        </div>
        <div>
          <BaseParagraph>Already have an account? <RouterLink to="/login">Login Here</RouterLink>
          </BaseParagraph>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.register-page {
  padding: 5rem 0;
}
.register-page h3{
  margin: 1rem 0;
}
.register-page .left-div {
  background-color: var(--secondary-color);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.register-page .curve {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: var(--white-color);
  top: 60%;
  left: 70%;
  rotate: 45deg;
}

.register-page .social-login .btn {
  background-color: var(--white-color);
  border: 3px solid var(--secondary-color);
}

.register-page .btn {
  padding: .75rem 1rem;
  margin: 1rem 0;
}

.register-page input,
.register-page button {
  border: 3px solid var(--border-color);
  border-radius: .5rem;
  font-size: 1.25rem;
}

.register-page .input-field {
  position: relative;
  margin: 1.5rem 0;
}

.register-page .input-field input {
  background-color: var(--white-color);
}

.register-page .input-field .label {
  position: absolute;
  top: 1.75rem;
  left: 1rem;
  font-size: 1.25rem;
  color: var(--light-color);
  pointer-events: none;
  transition: .3s ease;
}

.input-field input:focus+.label {
  top: 0;
  left: 1rem;
  background-color: var(--white-color);
  padding: 0 .5rem;
  z-index: 10;
}

.register-page a {
  display: inline-block;
  text-decoration: none;
  color: var(--secondary-color);
}

.register-page a:hover {
  text-decoration: underline;
}


.register-page form input[type=checkbox] {
  width: fit-content;
  margin-right: .5rem;
}

.register-page a {
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
  background-color: var(--border-color);
}
</style>
