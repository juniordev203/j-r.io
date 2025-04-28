<template>
  <div class="max-w-3xl flex flex-col gap-12 mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="200">
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <Bookmark class="w-7 h-7 text-purple-500 fill-purple-500" />
          <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Blog
          </h1>
        </div>
        <p class="text-gray-600 dark:text-gray-400">Stay tuned for my posts!</p>
      </div>
      <div class="flex flex-col gap-2">
        <div v-for="post in Posts" :key="post.id"
          class="p-2 rounded-lg bg-slate-50 cursor-pointer dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transform hover:-translate-y-1 transition-all duration-300">
          <NuxtLink :to="`/blogs/${post.id}`" class="flex gap-2 justify-between items-end">
            <div class="flex flex-col justify-center gap-2">
              <p class="font-semibold text-gray-800  dark:text-gray-200">{{ post.title }}</p>
              <p class="text-xs text-gray-600 dark:text-gray-200">{{ post.date }}</p>
            </div>
            <SquarePen class="w-5 h-5 text-blue-600 dark:text-gray-300" />
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { SquarePen, Bookmark } from 'lucide-vue-next';

import { posts } from '~/data/contents'
const Posts = posts;
</script>

<style scoped></style>