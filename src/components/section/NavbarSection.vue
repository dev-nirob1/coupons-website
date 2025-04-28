<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>


<template>
  <header class="navbar">
    <nav class="container">
      <!-- logo  -->
       <RouterLink to="/" class="logo">
        <img src="/logo.png" alt="">
        <h3>CouponCraze</h3>
       </RouterLink>
    </nav>
  </header>
</template>
<style scoped>
.navbar .logo{
  text-decoration: none;
  display: flex;
  align-items: center;
}
.logo h3{
  margin: 0;
  display: none;
}
.logo img {
  width: 60px;
  height: 60px;
}
@media (min-width: 992px){
  .logo h3{display: block;}
}
</style>
