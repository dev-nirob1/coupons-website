<script setup>
import LoadingSkeleton from '@/components/widgets/LoadingSkeleton.vue';
import SectionTitle from '@/components/widgets/SectionTitle.vue';
import CategoryCard from '@/zems/front/Components/Widgets/CategoryCard.vue';

defineProps({
  categories: {
    type: Array
  },
  isLoading: {
    type: Boolean
  }
})
</script>

<template>
  <section class="categories">
    <!-- left side icons -->
    <div class="bg-icons left-icons">
      <img class="icon" src="https://icons.veryicon.com/png/o/commerce-shopping/o2o-business-platform/coupon-59.png">
      <img class="icon" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png">
    </div>

    <!-- right side icons -->
    <div class="bg-icons right-icons">
      <img class="icon" src="https://cdn-icons-png.flaticon.com/512/2965/2965300.png">
      <img class="icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAGJ56g30p7AXBl9BVmkDiqOnTURIlcXyRhHm1iij__nW_wcsU1F8TVdQSUK9rjUu8PY&usqp=CAU">
    </div>

    <div class="container">
      <SectionTitle>Browse Category</SectionTitle>
      <div class="medium-2 large-5 gap-1 medium-gap-2">
        <template v-if="isLoading">
          <LoadingSkeleton v-for="(load, i) in 5" :key="i" />
        </template>

        <template v-else>
          <CategoryCard v-for="(category, i) in categories" :i="i" :category="category" :key="category.id" />
          <RouterLink class="link-card" to="/categories">
            <div class="flex flex-col justify-center align-center">
              <div>
                <BaseImage image="/categories.png" />
              </div>
              <div>
                <SubTitle>Explore All</SubTitle>
                <BaseParagraph>See all products in every category</BaseParagraph>
              </div>
            </div>
          </RouterLink>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories {
  padding: 3.5rem 1rem;
  position: relative;
  overflow: hidden;
}

.bg-icons {
  position: absolute;
  top: 0;
  height: 100%;
  pointer-events: none;
  opacity: .5;
  z-index: 0;
}

.left-icons {
  left: 0;
}

.right-icons {
  right: 0;
}

.icon {
  position: absolute;
  width: 100px;
  height: 100px;
}

.left-icons .icon:nth-child(1) {
  top: 10%;
  left: -50px;
}

.left-icons .icon:nth-child(2) {
  bottom: 15%;
  left: -50px;
}

.right-icons .icon:nth-child(1) {
  top: 10%;
  right: -50px;
}

.right-icons .icon:nth-child(2) {
  bottom: 15%;
  right: -50px;
}

/* Link card */
.link-card {
  text-align: center;
  text-decoration: none;
  background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
  box-shadow: var(--box-shadow);
  color: var(--white-color);
  padding: 1rem;
  border-radius: 1rem;
  transition: all .3s ease-in-out;
  z-index: 1;
}

.link-card p {
  margin-top: 0.5rem;
}

.link-card img {
  height: 80px;
  width: 80px;
  margin-bottom: 0.5rem;
}

.link-card:hover {
  transform: scale(1.02);
}

@media (min-width: 768px) {
  /* .left-icons .icon:nth-child(1) {
    left: -50px;
  }

  .left-icons .icon:nth-child(2) {
    left: -50px;
  }

  .right-icons .icon:nth-child(1) {
    right: -50px;
  }

  .right-icons .icon:nth-child(2) {
    right: -50px;
  } */
}

@media (min-width: 992px) {

  /* .left-icons .icon:nth-child(1) {
    left: -80px;
  }

  .left-icons .icon:nth-child(2) {
    left: -80px;
  }

  .right-icons .icon:nth-child(1) {
    right: -80px;
  }

  .right-icons .icon:nth-child(2) {
    right: -80px;
  } */
}

/* @media (min-width: 1200px) {

  .left-icons .icon:nth-child(1) {
    left: -150px;
  }

  .left-icons .icon:nth-child(2) {
    left: -170px;
  }

  .right-icons .icon:nth-child(1) {
    right: -170px;
  }

  .right-icons .icon:nth-child(2) {
   right:-170px;
  }
} */
</style>
