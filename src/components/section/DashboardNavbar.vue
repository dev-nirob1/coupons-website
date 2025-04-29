<script setup>

</script>

<template>
  <div class="dashboard-navbar">
    <div class="container flex align-center justify-between">
      <div>
        <InputField placeholder="Search Here" />
      </div>
      <div>
        <img src="/author.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<style scoped>
.dashboard-navbar {
  padding: .75rem;
  background-color: var(--primary-color);
  color: var(--white-color);
  position: sticky;
  top: 0;
}

.dashboard-navbar img {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
}

@media (min-width: 992px) {
  .dashboard-navbar input {
    border: none;
    margin: 0;
    padding: 10px;
    width: 540px;
    border-radius: 5px;
    background-color: var(--white-color);
  }
}
</style>
