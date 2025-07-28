<template>
    <section class="company-banner">
      <!-- company logo  -->
      <div class="container banner-content">
        <img
          src="./public/images/company/amazon.png"
          alt="Company Logo"
          class="company-logo"
        />
        <!-- company name and details-->
        <div class="banner-text">
          <h3 class="title">Amazon</h3>
          <p>
            We are a modern tech company focused on building high-quality
            software solutions for businesses around the world.
          </p>
        </div>
      </div>
    </section>
</template>

<style scoped>
.company-banner {
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
  color: var(--white-color);
  padding: 8.75rem 1rem 3.75rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.company-banner .banner-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
}
.company-banner .banner-text {
  flex: 1;
  min-width: 280px;
}
.company-banner .company-logo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--white-color);
  border: 4px solid var(--white-color);
}
</style>
