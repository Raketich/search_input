<script setup lang="ts">
import { ref, watch } from 'vue'

const isDarkMode = ref(false)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark-mode', isDarkMode.value)
}

watch(
  isDarkMode,
  (newValue) => {
    document.documentElement.classList.toggle('dark-mode', newValue)
  },
  { immediate: true },
)
</script>

<template>
  <div class="theme-switcher">
    <button
      class="toggle"
      :class="{ active: isDarkMode }"
      @click="toggleTheme"
      aria-label="Toggle dark mode"
    >
      <div class="toggle-thumb"></div>
    </button>
  </div>
</template>

<style>
.theme-switcher {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.toggle {
  position: relative;
  width: 50px;
  height: 28px;
  border-radius: 14px;
  background-color: #e0e0e0;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0;
}

.toggle.active {
  background-color: #34c759;
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.toggle.active .toggle-thumb {
  transform: translateX(22px);
}
</style>
