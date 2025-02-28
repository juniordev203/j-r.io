<template>
  <div class="min-h-screen">
    <div class="p-2 flex flex-col gap-12 mb-16">
      <!-- introduce -->
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-medium text-gray-900 dark:text-white">Hi, Juniordev here!</h1>
          <p class="">Fullstack Developer & Crypto Holding</p>
        </div>
        <p class="dark:text-customLightText">I am a software engineer who builds for the web with a
          design-oriented approach. In addition to coding, I make YouTube videos, where I focus on tech,
          and productivity. <span class="">I am a coder, holding crypto and a student of NEU!</span>
        </p>
        <div class="flex gap-6">
          <div class="" v-for="(data) in media" :key="index">
            <a :href="data.link"
              class="flex px-4 py-2 rounded-full bg-gray-100 text-gray-700 dark:bg-black dark:text-white hover:scale-110 hover:bg-gray-300 shadow">{{
                data.text }}
              <ArrowUpRight class="w-4 h-5 dark:text-white text-gray-500" />
            </a>
          </div>
        </div>
      </div>
      <!-- project -->
      <div class="">
        <div class="flex dark:text-white mb-3">
          <p>Project</p>
          <ArrowUpRight class="w-4 h-5 dark:text-white text-gray-500" />
        </div>
        <div class="grid grid-cols-2 gap-6">
          <div class="flex flex-col gap-2" v-for="(data) in project" :key="index">
            <a :href="data.link">
              <div class="p-2 w-full h-48 rounded-md overflow-hidden">
                <img class="w-full h-full object-cover" :src="data.image" alt="" />
              </div>
              <div class="flex flex-col gap-1">
                <p class="text-gray-900 dark:text-white font-medium">{{ data.title }}</p>
                <p class="text-gray-700 dark:text-gray-300">{{ data.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- blog -->
      <div class="">
        <div class="flex dark:text-white mb-2">
          <p>Blog</p>
          <ArrowUpRight class="w-4 h-5 dark:text-white text-gray-500" />
        </div>
        <p class="dark:text-customLightText">I occasionally write about programming, productivity, and more.
          Check me out and follow to stay up to date.</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ArrowUpRight } from "lucide-vue-next";

const media = [
  {
    link: 'https://github.com/juniordev203',
    text: 'Git'
  },
  {
    link: 'https://www.facebook.com/huyhoang203.phh/',
    text: 'Meta'
  },
  {
    link: 'https://www.instagram.com/huyhoang_p03/',
    text: 'IG'
  },
  {
    link: 'https://x.com/_junior203_',
    text: 'X'
  },
]
const project = [
  {
    link: 'https://www.testbank.vn/',
    title: 'Testbank.vn',
    description: 'Leading educational tech for training from grade 6 to grade 12',
    image: '/_nuxt/assets/images/testbank.vn.png'
  },
  {
    link: 'https://github.com/juniordev203/netflix-project.io',
    title: 'Netflix.com',
    description: 'Remake Netflix interface with HTML and CSS',
    image: '/_nuxt/assets/images/netflix.png'
  },
  {
    link: 'https://github.com/juniordev203/nike.io',
    title: 'Nike Website',
    description: 'Nike shoe sales system is developed by flask python',
    image: '/_nuxt/assets/images/nike.png'
  },
]

</script>