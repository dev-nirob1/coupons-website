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
    <div class="container">
      <SectionTitle>Browse Category</SectionTitle>
      <div class="medium-2 large-5 gap-1 medium-gap-2">
        <template v-if="isLoading">
          <LoadingSkeleton v-for="(load, i) in 5" :key="i" />
        </template>

        <template v-else>
          <CategoryCard v-for="category in categories" :key="category.id" :category="category"></CategoryCard>
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
</style>
