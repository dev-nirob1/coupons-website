<template>
  <div class="flex justify-end mb-2 pr-1">
        <div class="select">
          <select>
            <option value="sort" disabled>Sort By</option>
            <option value="sort">Newest</option>
            <option value="sort">Older</option>
            <option value="sort">Populer</option>
          </select>
        </div>
      </div>
</template>

<style scoped>
.select select {
  border-radius: 0.5rem;
  background-color: var(--white-color);
  border: var(--border-color);
  box-shadow: var(--box-shadow);
}
</style>
