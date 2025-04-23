<script setup>

</script>

<template>
  <section class="form-container">

    <div class="container medium-2 align-center gap-2">
      <div class="bg-secondary height-full flex align-center justify-center">
        <div>
          <HeroTitle>Welcome back</HeroTitle>
          <BaseParagraph>Enter your email and password</BaseParagraph>
        </div>
      </div>
      <div>
        <form>
          <BaseTitle class="text-center">
            Sign In
          </BaseTitle>
          <div class="input-field">
            <InputField />
            <label class="label">Email</label>
          </div>
          <div class="input-field">
            <InputField />
            <label class="label">Password</label>
          </div>
          <BaseButton class="btn bg-secondary text-white width-full">Sign In</BaseButton>
        </form>
        <div class="divider">
          <div></div>or <div></div>
        </div>
        <div class="all-2 gap-1">
          <BaseButton class="btn bg-primary text-white">Google</BaseButton>
          <BaseButton class="btn bg-secondary text-white">Facebook</BaseButton>
        </div>
        <div>
          <BaseParagraph>Don't have an account? <RouterLink to="/register">Register Here</RouterLink>
          </BaseParagraph>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.form-container {
  margin: 2rem auto;
}

.form-container .btn {
  padding: .75rem 1rem;
  margin: 1rem 0;
}

.form-container input,
.form-container button {
  border: 1px solid var(--border-color);
  border-radius: .5rem;
  font-size: 1.25rem;
}

.form-container .input-field {
  position: relative;
  margin: 1.5rem 0;
}
.form-container .input-field input {
  background-color: var(--white-color);
}

.form-container .input-field .label {
  position: absolute;
  top: 1.75rem;
  left: 1rem;
  font-size: 1.25rem;
  color: var(--light-color);
  pointer-events: none;
  transition: .3s ease;
}

.input-field input:focus + .label{
  top: 0;
  left: 1rem;
  background-color: var(--white-color);
  padding: 0 .5rem;
  z-index: 10;
}











.form-container a {
  display: inline-block;
  text-decoration: none;
  margin-left: .5rem;
  color: var(--secondary-color);
}

.form-container a:hover {
  text-decoration: underline;

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
