<template>
  <div class="text-gray-600 dark:bg-customDark dark:text-white background-main">
    <div class="mx-auto max-w-[700px] min-h-screen overflow-hidden font-mono">
      <Header />
      <main>
        <NuxtPage v-slot="{ Component, route }">
          <motion.div
            :key="route.fullPath"
            initial="{ opacity: 0, y: 20 }"
            animate="{ opacity: 1, y: 0 }"
            exit="{ opacity: 0, y: -20 }"
            transition="{ duration: 0.5, ease: 'easeOut' }"
          >
            <component :is="Component" />
          </motion.div>
        </NuxtPage>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
import { motion } from 'framer-motion';

</script>

<style></style>