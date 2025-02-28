<template>
  <div class="text-gray-600 dark:bg-customDark dark:text-white background-main text-sm font-light">
    <div class="mx-auto max-w-[700px] min-h-screen overflow-hidden">
      <Header />
      <main>
        <NuxtPage v-slot="{ Component, route }">
        </NuxtPage>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';

</script>

<style></style>