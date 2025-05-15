<template>
  <div class="company-banner">
    <div class="container banner-content">
      <div class="image">
        <img src="/public/company/amazon.png" alt="">
        <BaseTitle>Amazon</BaseTitle>
      </div>
      <div class="details">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae hic quas expedita magnam alias, in repellat dicta odio atque consequatur animi voluptatibus? Esse adipisci itaque qui perferendis et eaque debitis sunt excepturi fuga dolore, quae minima culpa, quo reprehenderit ratione obcaecati enim voluptates accusamus nam animi id delectus? Omnis, nostrum!
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-banner {
  margin-top: 5.6rem;
  min-height: 40vh;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, var(--primary-light-color), var(--primary-lighten-color));
}
.banner-content{
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.company-banner .image {
  flex: 1;
}
</style>
