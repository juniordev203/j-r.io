<template>
    <div class="fixed bottom-4 right-4 border-2 rounded-full">
        <!-- Dark Mode Toggle -->
        <button
          class="border-gray-300 dark:border-gray-600 rounded-full p-2 bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:border-transparent hover:text-white transform hover:scale-110 transition-all duration-300"
          @click="toggleDarkMode"
          aria-label="Toggle dark mode"
        >
          <Sun v-if="isDarkMode" class="w-5 h-5" />
          <MoonStar v-else class="w-5 h-5" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { MoonStar, Sun } from 'lucide-vue-next';
  const isDarkMode = ref(false);
  
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
</script>

<style scoped>

</style>