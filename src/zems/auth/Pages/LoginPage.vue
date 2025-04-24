

<template>
  <section class="login-page height-full">
    <div class="container medium-2 align-center gap-2">
      <div class="left-div">
        <div class="text-white">
          <BaseTitle>Welcome to Coupon Craze</BaseTitle>
          <SubTitle>We missed you! Sign in to continue</SubTitle>
        </div>
        <div class="curve"></div>
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
        <div class="all-2 gap-1 social-login">
          <BaseButton class="btn"><i class="fa-brands fa-google"></i> Google</BaseButton>
          <BaseButton class="btn"><i class="fa-brands fa-facebook-f"></i> Facebook</BaseButton>
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
.login-page {
  padding: 5rem 0;
}
.login-page h3{
  margin: 1rem 0;
}
.login-page .social-login .btn{
  background-color: var(--white-color);
  border: 3px solid var(--secondary-color);
}

.left-div {
  background-color: var(--secondary-color);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.curve {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: var(--white-color);
  top: 60%;
  left: 70%;
  rotate: 45deg;
}

.login-page .btn {
  padding: .75rem 1rem;
  margin: 1rem 0;
}

.login-page input,
.login-page button {
  border: 3px solid var(--border-color);
  border-radius: .5rem;
  font-size: 1.25rem;
}

.login-page .input-field {
  position: relative;
  margin: 1.5rem 0;
}

.login-page .input-field input {
  background-color: var(--white-color);
}

.login-page .input-field .label {
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

.login-page a {
  display: inline-block;
  text-decoration: none;
  margin-left: .5rem;
  color: var(--secondary-color);
}

.login-page a:hover {
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
