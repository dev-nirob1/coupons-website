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
      <SectionTitle title="Browse Category" class="justify-center" />
      <!-- loading skeleton  -->
      <div class="medium-2 large-5 gap-1 medium-gap-2">
        <template v-if="isLoading">
          <LoadingSkeleton v-for="(load, i) in 5" :key="i" />
        </template>

        <template v-else>
          <CategoryCard v-for="(category, i) in categories" :i="i" :category="category" :key="category.id" />

          <!-- link button  -->
          <RouterLink class="link-card" to="/categories">
            <div class="flex flex-col justify-center align-center text-center">
              <div class="image">
                <BaseImage image="/categories.png" />
              </div>
              <div>
                <SubTitle>Explore All</SubTitle>
                <BaseParagraph>View our complete collection of products across all categories</BaseParagraph>
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
  transition: all 0.3s ease;
  padding: 5rem 0.5rem;
}

.categories .link-card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to bottom,
    var(--primary-color),
    var(--secondary-color)
  );
  box-shadow: var(--box-shadow);
  color: var(--white-color);
  padding: 1rem;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
}

.categories .link-card p {
  margin-top: 0.5rem;
}
.categories .link-card img {
  height: 80px;
  width: 80px;
  margin-bottom: 0.5rem;
}

.categories .link-card:hover {
  transform: scale(1.02);
}

</style>
