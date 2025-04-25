<template>
    <div class="mb-12 text-sm" data-aos="fade-down" data-aos-duration="800">
      <nav class="flex mx-auto max-w-[720px] items-center justify-center gap-6 py-8 px-4" aria-label="Global">
        <!-- Navigation Menu -->
        <div class="flex gap-2 font-medium leading-6">
          <NuxtLink
            v-for="(data) in navMenu"
            :key="data.router"
            :to="{ name: data.router }"
            active-class="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
            class="px-4 py-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>{{ data.text }}</span>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </template>
  
  <script lang="ts" setup>
  const navMenu = ref([
    {
      router: 'index',
      text: 'Home',
    },
    {
      router: 'cv',
      text: 'CV',
    },
    {
      router: 'blog',
      text: 'Blog',
    },
  ]);
  </script>
  
  <style scoped>
  /* Optional: Add custom gradient for active state if needed */
  </style>