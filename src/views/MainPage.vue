<script setup lang="ts">
import SearchComponent from '../components/SearchComponent.vue'
import ThemeSwitcher from '../components/ThemeSwitcher.vue'
</script>

<template>
  <div class="main-container">
    <div class="header">
      <ThemeSwitcher />
      <SearchComponent />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  padding-top: 2rem;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
  }
}
</style>
