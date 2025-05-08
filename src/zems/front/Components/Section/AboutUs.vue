<template>
  <section class="about-us">
    <div class="container large-2 align-center gap-2">
      <!-- image div  -->
      <div class="image">
        <img class="width-full height-full" src="/banner-bg.jpg" alt="image" />
      </div>
      <div>
        <div>
          <BaseTitle>
            The Leading Real Estate Rental Marketplace.
          </BaseTitle>
        </div>
        <!-- section header div ends -->
        <BaseParagraph>
          Over 39,000 people work for us in more than 70 countries all over
          the This breadth of global coverage, combined with specialist
          services
        </BaseParagraph>

        <!-- icon + title container  -->
        <div class="all-2 align-center gap-1">
          <div>
            <i class="fa-solid fa-user"></i>&nbsp;<span>Smart Home Design</span>
          </div>
          <div>
            <i class="fa-solid fa-user"></i>&nbsp;<span>Beautiful Scene Around</span>
          </div>
          <div>
            <i class="fa-solid fa-user"></i>&nbsp;<span>Exceptional Lifestyle</span>
          </div>
          <div>
            <i class="fa-solid fa-user"></i>&nbsp;<span>Complete 24/7 Security</span>
          </div>
        </div>


        <!-- icon + title container ends  -->
        <BaseParagraph class="about-quote">
          "Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem
          ipsum dolor sit amet"
        </BaseParagraph>
        <BaseButton class="bg-secondary text-white">OUR SERVICES</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  padding: 5rem .5rem;
}
.about-us .image {
  width: 100%;
  height: 100%;
}
.btn {
  padding: 1.25rem 2rem;
  font-size: 1.25rem;
}
</style>
